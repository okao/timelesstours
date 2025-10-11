# Timeless Tours - Deployment Documentation

## Overview
This document outlines the complete deployment process for the Timeless Tours application, including both the frontend React app and the backend API server.

## Architecture
- **Frontend**: React + TypeScript + Vite (Port 3000)
- **Backend**: Node.js + Express + TypeScript + SQLite (Port 3001)
- **Database**: SQLite with internationalization support
- **Deployment**: Systemd services on Ubuntu server

## Prerequisites

### Server Requirements
- Ubuntu 20.04+ or similar Linux distribution
- Node.js 18+ (we use v22.20.0)
- NPM or Yarn package manager
- Git for code deployment
- Systemd for service management

### Domain & SSL
- Domain name pointing to server IP
- SSL certificate (Let's Encrypt recommended)
- Nginx for reverse proxy (optional but recommended)

## Deployment Process

### 1. Server Setup

#### Install Node.js via NVM
```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc

# Install Node.js
nvm install 22.20.0
nvm use 22.20.0
nvm alias default 22.20.0
```

#### Create Application User
```bash
# Create user for the application
sudo useradd -m -s /bin/bash okao
sudo usermod -aG sudo okao
```

### 2. Application Deployment

#### Clone Repository
```bash
# Switch to application user
sudo su - okao

# Clone the repository
git clone <repository-url> /opt/timelesstours
cd /opt/timelesstours
```

#### Install Dependencies
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd api
npm install
```

#### Build Frontend
```bash
# Build the React application
npm run build
```

### 3. Database Setup

#### Initialize Database
```bash
cd /opt/timelesstours/api

# Run database migrations and seed data
npm run seed
npm run seed-translations
```

### 4. Systemd Services Configuration

#### Frontend Service
Create `/etc/systemd/system/timelesstours-frontend.service`:
```ini
[Unit]
Description=Timeless Tours Frontend
After=network.target

[Service]
Type=simple
User=okao
Group=okao
WorkingDirectory=/opt/timelesstours
ExecStart=/home/okao/.nvm/versions/node/v22.20.0/bin/node node_modules/.bin/vite preview --host 0.0.0.0 --port 3000
Restart=always
RestartSec=10
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

#### Backend Service
Create `/etc/systemd/system/timelesstours-api.service`:
```ini
[Unit]
Description=Timeless Tours API
After=network.target

[Service]
Type=simple
User=okao
Group=okao
WorkingDirectory=/opt/timelesstours/api
ExecStart=/home/okao/.nvm/versions/node/v22.20.0/bin/node node_modules/.bin/tsx server/index.ts
Restart=always
RestartSec=10
Environment=NODE_ENV=production
Environment=API_PORT=3001
Environment=CORS_ORIGINS=http://localhost:3000,https://yourdomain.com

[Install]
WantedBy=multi-user.target
```

#### Enable and Start Services
```bash
# Reload systemd configuration
sudo systemctl daemon-reload

# Enable services to start on boot
sudo systemctl enable timelesstours-frontend
sudo systemctl enable timelesstours-api

# Start services
sudo systemctl start timelesstours-frontend
sudo systemctl start timelesstours-api

# Check status
sudo systemctl status timelesstours-frontend
sudo systemctl status timelesstours-api
```

### 5. Nginx Configuration (Optional but Recommended)

#### Install Nginx
```bash
sudo apt update
sudo apt install nginx
```

#### Create Nginx Configuration
Create `/etc/nginx/sites-available/timelesstours`:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    # Frontend
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # API
    location /api/ {
        proxy_pass http://localhost:3001/api/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### Enable Site
```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/timelesstours /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 6. SSL Certificate (Let's Encrypt)

#### Install Certbot
```bash
sudo apt install certbot python3-certbot-nginx
```

#### Obtain SSL Certificate
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Environment Variables

### Backend (.env file in /opt/timelesstours/api/)
```env
NODE_ENV=production
API_PORT=3001
CORS_ORIGINS=http://localhost:3000,https://yourdomain.com
```

### Frontend (Vite environment)
```env
VITE_API_URL=http://localhost:3001
VITE_APP_TITLE=Timeless Tours Maldives
```

## Database Schema

The application uses SQLite with the following main tables:
- `languages` - Supported languages (en, zh, it, es)
- `texts` - Text keys for internationalization
- `translations` - Translated text values
- `tours` - Tour information
- `tour_i18n` - Tour translations
- `navigation` - Navigation menu items
- `navigation_i18n` - Navigation translations
- `hero_slides` - Homepage carousel images
- `team_members` - Team member information
- `company_values` - Company values
- `faq` - FAQ questions and answers
- `faq_topics` - FAQ topic categories

## Monitoring and Maintenance

### Service Management
```bash
# Check service status
sudo systemctl status timelesstours-frontend
sudo systemctl status timelesstours-api

# View logs
sudo journalctl -u timelesstours-frontend -f
sudo journalctl -u timelesstours-api -f

# Restart services
sudo systemctl restart timelesstours-frontend
sudo systemctl restart timelesstours-api

# Stop services
sudo systemctl stop timelesstours-frontend
sudo systemctl stop timelesstours-api
```

### Database Backup
```bash
# Create backup
cp /opt/timelesstours/api/data/app.db /opt/timelesstours/api/data/app.db.backup.$(date +%Y%m%d_%H%M%S)

# Restore from backup
cp /opt/timelesstours/api/data/app.db.backup.YYYYMMDD_HHMMSS /opt/timelesstours/api/data/app.db
```

### Log Rotation
Create `/etc/logrotate.d/timelesstours`:
```
/var/log/timelesstours/*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 okao okao
    postrotate
        systemctl reload timelesstours-frontend
        systemctl reload timelesstours-api
    endscript
}
```

## Deployment Updates

### Code Updates
```bash
# Switch to application user
sudo su - okao

# Navigate to application directory
cd /opt/timelesstours

# Pull latest changes
git pull origin main

# Install new dependencies (if any)
npm install
cd api && npm install && cd ..

# Build frontend
npm run build

# Restart services
sudo systemctl restart timelesstours-frontend
sudo systemctl restart timelesstours-api
```

### Database Migrations
```bash
# Run database migrations (if any)
cd /opt/timelesstours/api
npm run seed
npm run seed-translations
```

## Troubleshooting

### Common Issues

#### Service Won't Start
```bash
# Check service status
sudo systemctl status timelesstours-api

# Check logs
sudo journalctl -u timelesstours-api -f

# Test manually
cd /opt/timelesstours/api
/home/okao/.nvm/versions/node/v22.20.0/bin/node node_modules/.bin/tsx server/index.ts
```

#### Database Issues
```bash
# Check database file permissions
ls -la /opt/timelesstours/api/data/

# Fix permissions if needed
sudo chown -R okao:okao /opt/timelesstours/api/data/
```

#### Port Conflicts
```bash
# Check what's using the ports
sudo netstat -tlnp | grep :3000
sudo netstat -tlnp | grep :3001

# Kill processes if needed
sudo kill -9 <PID>
```

### Performance Optimization

#### Enable Gzip Compression
Add to Nginx configuration:
```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
```

#### Database Optimization
```sql
-- Analyze database for better performance
ANALYZE;

-- Create indexes for frequently queried columns
CREATE INDEX IF NOT EXISTS idx_translations_text_id_lang ON translations(text_id, lang_code);
CREATE INDEX IF NOT EXISTS idx_tour_i18n_tour_id_lang ON tour_i18n(tour_id, lang_code);
```

## Security Considerations

### Firewall Configuration
```bash
# Allow only necessary ports
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw enable
```

### File Permissions
```bash
# Set proper permissions
sudo chown -R okao:okao /opt/timelesstours
sudo chmod -R 755 /opt/timelesstours
sudo chmod 600 /opt/timelesstours/api/.env
```

### Regular Updates
```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Update Node.js dependencies
cd /opt/timelesstours
npm audit fix
cd api && npm audit fix
```

## Backup Strategy

### Automated Backup Script
Create `/opt/timelesstours/backup.sh`:
```bash
#!/bin/bash
BACKUP_DIR="/opt/timelesstours/backups"
DATE=$(date +%Y%m%d_%H%M%S)

# Create backup directory
mkdir -p $BACKUP_DIR

# Backup database
cp /opt/timelesstours/api/data/app.db $BACKUP_DIR/app.db.$DATE

# Backup application files
tar -czf $BACKUP_DIR/app_files.$DATE.tar.gz /opt/timelesstours --exclude=node_modules --exclude=backups

# Keep only last 7 days of backups
find $BACKUP_DIR -name "*.db.*" -mtime +7 -delete
find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete
```

### Cron Job for Backups
```bash
# Add to crontab
crontab -e

# Add this line for daily backups at 2 AM
0 2 * * * /opt/timelesstours/backup.sh
```

This deployment documentation provides a comprehensive guide for setting up and maintaining the Timeless Tours application in a production environment.

# Complete Ubuntu Server Setup Guide for thetimelesstours.com

This guide provides step-by-step instructions to set up and deploy the Timeless Tours website on an Ubuntu server.

## Prerequisites

- Ubuntu 20.04 LTS or later (22.04 LTS recommended)
- Root or sudo access to the server
- Domain name `thetimelesstours.com` pointing to your server IP
- Minimum server specs:
  - 1 CPU core
  - 1GB RAM (2GB recommended)
  - 20GB storage

## Step 1: Initial Server Setup

### 1.1 Connect to Your Server

```bash
ssh root@your-server-ip
```

### 1.2 Run the Setup Script

```bash
# Make scripts executable
chmod +x deployment/server-setup.sh
chmod +x deployment/configure-nginx.sh
chmod +x deployment/setup-ssl.sh
chmod +x deployment/deploy.sh

# Run initial setup
sudo ./deployment/server-setup.sh
```

This script will:
- Update system packages
- Install Node.js 20.x
- Install PM2 process manager
- Install Nginx web server
- Install Certbot for SSL certificates
- Configure firewall (UFW)

## Step 2: DNS Configuration

Before proceeding, ensure your domain DNS is configured:

### DNS Records Required

```
Type    Name    Value           TTL
A       @       your-server-ip  3600
A       www     your-server-ip  3600
```

### Verify DNS Propagation

```bash
# Check if DNS is pointing to your server
dig thetimelesstours.com +short
dig www.thetimelesstours.com +short
```

Wait for DNS to propagate (can take up to 48 hours, usually much faster).

## Step 3: Deploy Application

### 3.1 Transfer Files to Server

From your local machine:

```bash
# Update deploy.sh with your server credentials
# Edit SERVER_USER and SERVER_HOST in deployment/deploy.sh

# Run deployment
./deployment/deploy.sh
```

### 3.2 Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# On your local machine
npm install
npm run build

# Transfer to server
scp -r dist/* your-username@your-server-ip:/var/www/thetimelesstours/dist/
scp package.json your-username@your-server-ip:/var/www/thetimelesstours/
scp package-lock.json your-username@your-server-ip:/var/www/thetimelesstours/
scp deployment/ecosystem.config.js your-username@your-server-ip:/var/www/thetimelesstours/

# SSH into server
ssh your-username@your-server-ip

# Install dependencies and start with PM2
cd /var/www/thetimelesstours
npm install --production
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## Step 4: Configure Nginx

### 4.1 Run Nginx Configuration Script

```bash
sudo ./deployment/configure-nginx.sh
```

This creates a temporary HTTP configuration for SSL certificate setup.

### 4.2 Verify Nginx Configuration

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## Step 5: Set Up SSL Certificate

### 5.1 Obtain SSL Certificate

```bash
sudo ./deployment/setup-ssl.sh
```

This will:
- Obtain SSL certificate from Let's Encrypt
- Configure auto-renewal
- Switch Nginx to HTTPS configuration

### 5.2 Verify SSL

Visit `https://thetimelesstours.com` in your browser. You should see a secure connection.

## Step 6: Final Configuration

### 6.1 Set Up PM2 to Start on Boot

```bash
pm2 startup
# Follow the instructions provided
pm2 save
```

### 6.2 Verify Everything is Running

```bash
# Check PM2 status
pm2 status

# Check Nginx status
sudo systemctl status nginx

# Check firewall
sudo ufw status
```

## Step 7: Monitoring and Maintenance

### 7.1 PM2 Commands

```bash
# View logs
pm2 logs thetimelesstours

# Restart application
pm2 restart thetimelesstours

# Stop application
pm2 stop thetimelesstours

# Monitor resources
pm2 monit
```

### 7.2 Nginx Commands

```bash
# Test configuration
sudo nginx -t

# Reload configuration
sudo systemctl reload nginx

# Restart Nginx
sudo systemctl restart nginx

# View logs
sudo tail -f /var/log/nginx/thetimelesstours-access.log
sudo tail -f /var/log/nginx/thetimelesstours-error.log
```

### 7.3 SSL Certificate Renewal

SSL certificates auto-renew, but you can manually renew:

```bash
sudo certbot renew --dry-run  # Test renewal
sudo certbot renew            # Actual renewal
```

## Security Best Practices

### 1. Keep System Updated

```bash
sudo apt update && sudo apt upgrade -y
```

### 2. Configure SSH Key Authentication

```bash
# On local machine
ssh-copy-id your-username@your-server-ip

# Disable password authentication (edit /etc/ssh/sshd_config)
# PasswordAuthentication no
sudo systemctl restart sshd
```

### 3. Set Up Fail2Ban

```bash
sudo apt install fail2ban -y
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

### 4. Regular Backups

Set up automated backups of:
- Application files: `/var/www/thetimelesstours`
- Nginx configuration: `/etc/nginx/sites-available/thetimelesstours.com`
- SSL certificates: `/etc/letsencrypt/live/thetimelesstours.com/`

## Troubleshooting

### Application Not Loading

1. Check PM2 status: `pm2 status`
2. Check PM2 logs: `pm2 logs thetimelesstours`
3. Verify port 3000 is accessible: `netstat -tulpn | grep 3000`

### Nginx Errors

1. Test configuration: `sudo nginx -t`
2. Check error logs: `sudo tail -f /var/log/nginx/thetimelesstours-error.log`
3. Verify Nginx is running: `sudo systemctl status nginx`

### SSL Certificate Issues

1. Check certificate: `sudo certbot certificates`
2. Test renewal: `sudo certbot renew --dry-run`
3. Verify DNS: `dig thetimelesstours.com`

### Firewall Issues

```bash
# Check firewall status
sudo ufw status

# Allow specific ports if needed
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

## Performance Optimization

### 1. Enable Nginx Caching

Add to Nginx config:

```nginx
# Cache zone
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=10g inactive=60m;

# In server block
location / {
    proxy_cache my_cache;
    proxy_cache_valid 200 60m;
    try_files $uri $uri/ /index.html;
}
```

### 2. Enable Gzip (Already in config)

Gzip compression is already enabled in the Nginx configuration.

### 3. CDN Setup (Optional)

Consider using Cloudflare or similar CDN for:
- DDoS protection
- Global content delivery
- Additional SSL options

## Backup Script

Create a backup script:

```bash
#!/bin/bash
BACKUP_DIR="/backups/thetimelesstours"
DATE=$(date +%Y%m%d-%H%M%S)

mkdir -p $BACKUP_DIR

# Backup application
tar -czf $BACKUP_DIR/app-$DATE.tar.gz /var/www/thetimelesstours

# Backup Nginx config
tar -czf $BACKUP_DIR/nginx-$DATE.tar.gz /etc/nginx/sites-available/thetimelesstours.com

# Backup SSL certificates
tar -czf $BACKUP_DIR/ssl-$DATE.tar.gz /etc/letsencrypt/live/thetimelesstours.com

# Keep only last 7 days of backups
find $BACKUP_DIR -type f -mtime +7 -delete
```

## Support

For issues or questions:
- Check application logs: `pm2 logs thetimelesstours`
- Check Nginx logs: `/var/log/nginx/thetimelesstours-*.log`
- Check system logs: `journalctl -u nginx`

## Quick Reference

```bash
# Deploy new version
./deployment/deploy.sh

# Restart application
pm2 restart thetimelesstours

# Reload Nginx
sudo systemctl reload nginx

# View application logs
pm2 logs thetimelesstours

# Check SSL certificate
sudo certbot certificates

# Test Nginx config
sudo nginx -t
```


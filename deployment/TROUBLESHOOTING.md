# Troubleshooting Guide

## Common Issues and Solutions

### Nginx Permission Errors

#### Error: `open() "/run/nginx.pid" failed (13: Permission denied)`

**Solution:** Run Nginx commands with `sudo`:

```bash
# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx

# Restart Nginx
sudo systemctl restart nginx

# Check status
sudo systemctl status nginx
```

#### Error: `the "user" directive makes sense only if the master process runs with super-user privileges`

**Solution:** This is just a warning when running `nginx -t` without sudo. It's safe to ignore, but always use `sudo` for Nginx commands:

```bash
sudo nginx -t
```

### Nginx Configuration Issues

#### Test Configuration

```bash
sudo nginx -t
```

#### View Error Logs

```bash
sudo tail -f /var/log/nginx/thetimelesstours-error.log
```

#### View Access Logs

```bash
sudo tail -f /var/log/nginx/thetimelesstours-access.log
```

### Application Not Loading

#### Check PM2 Status

```bash
pm2 status
pm2 logs thetimelesstours
```

#### Restart Application

```bash
pm2 restart thetimelesstours
```

#### Check if Port is in Use

```bash
sudo netstat -tulpn | grep 3000
# or
sudo ss -tulpn | grep 3000
```

### File Permission Issues

#### Fix Application Directory Permissions

```bash
sudo chown -R $USER:$USER /var/www/thetimelesstours
sudo chmod -R 755 /var/www/thetimelesstours
```

#### Fix Nginx Log Directory

```bash
sudo chown -R www-data:www-data /var/log/nginx
```

### Cloudflare Issues

#### Real IP Not Showing Correctly

1. Get latest Cloudflare IPs: https://www.cloudflare.com/ips/
2. Update `set_real_ip_from` directives in Nginx config
3. Reload Nginx: `sudo systemctl reload nginx`

#### SSL/TLS Errors

1. Check Cloudflare SSL/TLS mode is set to "Full"
2. Verify DNS is proxied (orange cloud) in Cloudflare
3. Wait a few minutes for DNS/SSL propagation

### Firewall Issues

#### Check Firewall Status

```bash
sudo ufw status
```

#### Allow Required Ports

```bash
sudo ufw allow 80/tcp
sudo ufw allow 22/tcp  # SSH
sudo ufw enable
```

### Build Issues

#### Clear Node Modules and Rebuild

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Check Node.js Version

```bash
node --version  # Should be 20.x or later
npm --version
```

### Deployment Issues

#### Check Application Directory Exists

```bash
ls -la /var/www/thetimelesstours/dist
```

#### Verify Build Output

```bash
ls -la /var/www/thetimelesstours/dist/index.html
```

### Quick Diagnostic Commands

```bash
# Check all services
sudo systemctl status nginx
pm2 status
sudo ufw status

# Check logs
sudo tail -20 /var/log/nginx/thetimelesstours-error.log
pm2 logs thetimelesstours --lines 20

# Test configuration
sudo nginx -t

# Check disk space
df -h

# Check memory
free -h
```


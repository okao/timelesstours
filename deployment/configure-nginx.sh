#!/bin/bash

# Nginx Configuration Script for thetimelesstours.com
# Configured for Cloudflare Proxy (SSL handled by Cloudflare)
# Run this script as root or with sudo

set -e

# Check if running with sudo/root
if [ "$EUID" -ne 0 ]; then
    echo "ERROR: This script must be run with sudo"
    echo "Usage: sudo ./configure-nginx.sh"
    exit 1
fi

DOMAIN="thetimelesstours.com"
APP_DIR="/var/www/thetimelesstours"
NGINX_SITES="/etc/nginx/sites-available"

echo "Configuring Nginx for $DOMAIN (Cloudflare Proxy)..."

# Cloudflare IP ranges (IPv4 and IPv6)
# These are the main Cloudflare IP ranges - you can get the latest from:
# https://www.cloudflare.com/ips/

# Create Nginx configuration for Cloudflare proxy
cat > $NGINX_SITES/$DOMAIN <<EOF
# HTTP Configuration (Cloudflare handles SSL/TLS)
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN www.$DOMAIN;

    # Real IP from Cloudflare
    # Get latest IPs from: https://www.cloudflare.com/ips/
    set_real_ip_from 173.245.48.0/20;
    set_real_ip_from 103.21.244.0/22;
    set_real_ip_from 103.22.200.0/22;
    set_real_ip_from 103.31.4.0/22;
    set_real_ip_from 141.101.64.0/18;
    set_real_ip_from 108.162.192.0/18;
    set_real_ip_from 190.93.240.0/20;
    set_real_ip_from 188.114.96.0/20;
    set_real_ip_from 197.234.240.0/22;
    set_real_ip_from 198.41.128.0/17;
    set_real_ip_from 162.158.0.0/15;
    set_real_ip_from 104.16.0.0/13;
    set_real_ip_from 104.24.0.0/14;
    set_real_ip_from 172.64.0.0/13;
    set_real_ip_from 131.0.72.0/22;
    set_real_ip_from 2400:cb00::/32;
    set_real_ip_from 2606:4700::/32;
    set_real_ip_from 2803:f800::/32;
    set_real_ip_from 2405:b500::/32;
    set_real_ip_from 2405:8100::/32;
    set_real_ip_from 2a06:98c0::/29;
    set_real_ip_from 2c0f:f248::/32;
    real_ip_header CF-Connecting-IP;

    # Security Headers (Cloudflare will add additional headers)
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json application/javascript application/xml;
    gzip_disable "msie6";

    # Root directory
    root $APP_DIR/out;
    index index.html;

    # Logging
    access_log /var/log/nginx/$DOMAIN-access.log;
    error_log /var/log/nginx/$DOMAIN-error.log;

    # Main location block
    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot|webp|avif)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Deny access to hidden files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }

    # Health check endpoint (optional)
    location /health {
        access_log off;
        return 200 "healthy\n";
        add_header Content-Type text/plain;
    }
}
EOF

# Enable site
ln -sf $NGINX_SITES/$DOMAIN /etc/nginx/sites-enabled/$DOMAIN

# Remove default site if it exists
rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
if ! nginx -t; then
    echo "ERROR: Nginx configuration test failed!"
    echo "Please run this script with sudo: sudo ./configure-nginx.sh"
    exit 1
fi

# Reload Nginx
systemctl reload nginx

echo "========================================="
echo "Nginx configured successfully!"
echo "========================================="
echo "Configuration:"
echo "- Listening on port 80 (HTTP)"
echo "- Cloudflare Real IP configured"
echo "- Static asset caching enabled"
echo "- Gzip compression enabled"
echo "- Security headers configured"
echo ""
echo "Note: SSL/TLS is handled by Cloudflare"
echo "Make sure Cloudflare SSL/TLS mode is set to 'Full' or 'Full (strict)'"


#!/bin/bash

# SSL Certificate Setup Script using Let's Encrypt
# Run this script as root or with sudo

set -e

DOMAIN="thetimelesstours.com"

echo "Setting up SSL certificate for $DOMAIN..."

# Obtain SSL certificate
certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN --redirect

# Set up auto-renewal
echo "Setting up SSL certificate auto-renewal..."
systemctl enable certbot.timer
systemctl start certbot.timer

# Switch to HTTPS configuration
rm -f /etc/nginx/sites-enabled/$DOMAIN
ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/$DOMAIN

# Test and reload Nginx
nginx -t
systemctl reload nginx

echo "SSL certificate installed successfully!"
echo "Certificate will auto-renew before expiration."


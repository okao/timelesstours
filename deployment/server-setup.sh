#!/bin/bash

# Ubuntu Server Setup Script for thetimelesstours.com
# Run this script as root or with sudo

set -e

echo "========================================="
echo "Timeless Tours Server Setup"
echo "========================================="

# Update system
echo "Updating system packages..."
apt-get update
apt-get upgrade -y

# Install essential packages
echo "Installing essential packages..."
apt-get install -y curl wget git build-essential software-properties-common

# Install Node.js 20.x (LTS)
echo "Installing Node.js 20.x..."
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# Verify Node.js installation
node --version
npm --version

# Install PM2 globally
echo "Installing PM2 process manager..."
npm install -g pm2

# Install Nginx
echo "Installing Nginx..."
apt-get install -y nginx

# Install Certbot for SSL
echo "Installing Certbot..."
apt-get install -y certbot python3-certbot-nginx

# Configure firewall
echo "Configuring UFW firewall..."
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

# Create application directory
echo "Creating application directory..."
APP_DIR="/var/www/thetimelesstours"
mkdir -p $APP_DIR
chown -R $SUDO_USER:$SUDO_USER $APP_DIR

echo "========================================="
echo "Server setup complete!"
echo "========================================="
echo "Next steps:"
echo "1. Configure DNS for thetimelesstours.com"
echo "2. Run deployment/deploy.sh to deploy the application"
echo "3. Run deployment/configure-nginx.sh to configure Nginx"
echo "4. Run deployment/setup-ssl.sh to set up SSL certificate"


#!/bin/bash

# Quick Deployment Script (Alternative - Direct Build on Server)
# This script builds the app directly on the server
# Useful if you have Git set up on the server

set -e

DOMAIN="thetimelesstours.com"
APP_DIR="/var/www/thetimelesstours"
REPO_URL="your-git-repo-url"  # Update with your Git repository URL

echo "========================================="
echo "Quick Deploy - thetimelesstours.com"
echo "========================================="

cd $APP_DIR

# Pull latest code
echo "Pulling latest code..."
git pull origin main  # or master, depending on your branch

# Install dependencies
echo "Installing dependencies..."
npm install

# Build application
echo "Building application..."
npm run build

# Restart PM2
echo "Restarting application..."
pm2 restart thetimelesstours

echo "========================================="
echo "Deployment complete!"
echo "========================================="


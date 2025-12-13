#!/bin/bash

# Deployment Script for thetimelesstours.com
# Run this script from your local machine or CI/CD pipeline

set -e

# Configuration
SERVER_USER="your-username"  # Change this to your server username
SERVER_HOST="your-server-ip"  # Change this to your server IP or domain
APP_DIR="/var/www/thetimelesstours"
DOMAIN="thetimelesstours.com"

echo "========================================="
echo "Deploying thetimelesstours.com"
echo "========================================="

# Build the application locally
echo "Building application..."
npm install
npm run build

# Create deployment package
echo "Creating deployment package..."
DEPLOY_DIR="deploy-$(date +%Y%m%d-%H%M%S)"
mkdir -p $DEPLOY_DIR
cp -r dist $DEPLOY_DIR/
cp package.json $DEPLOY_DIR/
cp package-lock.json $DEPLOY_DIR/

# Create PM2 ecosystem file
cat > $DEPLOY_DIR/ecosystem.config.js <<EOF
module.exports = {
  apps: [{
    name: 'thetimelesstours',
    script: 'npx',
    args: 'serve -s dist -l 3000',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
EOF

# Transfer files to server
echo "Transferring files to server..."
rsync -avz --delete $DEPLOY_DIR/ $SERVER_USER@$SERVER_HOST:$APP_DIR/

# Run deployment commands on server
echo "Running deployment commands on server..."
ssh $SERVER_USER@$SERVER_HOST << 'ENDSSH'
cd /var/www/thetimelesstours
npm install --production
npm install -g serve
pm2 delete thetimelesstours || true
pm2 start ecosystem.config.js
pm2 save
pm2 startup
ENDSSH

# Cleanup
rm -rf $DEPLOY_DIR

echo "========================================="
echo "Deployment complete!"
echo "========================================="
echo "Application is live at: https://$DOMAIN"


#!/bin/bash

# Rebuild script after git pull
# Usage: ./rebuild.sh

set -e

echo "========================================="
echo "Rebuilding Timeless Tours"
echo "========================================="

# Step 1: Pull latest changes
echo "📥 Pulling latest changes from git..."
git pull

# Step 2: Install/update dependencies
echo "📦 Installing dependencies..."
npm install

# Step 3: Build the application
echo "🔨 Building application..."
npm run build

echo "========================================="
echo "✅ Rebuild complete!"
echo "========================================="
echo "Build output is in: ./out"
echo ""
echo "To preview locally, run: npm run preview"
echo "To deploy, run: ./deployment/deploy.sh"


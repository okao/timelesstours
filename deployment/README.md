# Deployment Guide for thetimelesstours.com

This directory contains all the scripts and configuration files needed to deploy the Timeless Tours website to an Ubuntu server.

## Files Overview

- `server-setup.sh` - Initial server setup (Node.js, PM2, Nginx, Certbot)
- `configure-nginx.sh` - Nginx configuration for the domain
- `setup-ssl.sh` - SSL certificate setup with Let's Encrypt
- `deploy.sh` - Application deployment script
- `ecosystem.config.js` - PM2 process manager configuration
- `SERVER_SETUP.md` - Complete step-by-step setup guide

## Quick Start

1. **Read the complete guide**: See `SERVER_SETUP.md` for detailed instructions

2. **On your server**, run:
   ```bash
   sudo ./server-setup.sh
   ```

3. **Configure DNS** to point to your server IP

4. **Deploy the application**:
   ```bash
   ./deploy.sh
   ```

5. **Configure Nginx**:
   ```bash
   sudo ./configure-nginx.sh
   ```

6. **Set up SSL**:
   ```bash
   sudo ./setup-ssl.sh
   ```

## Prerequisites

- Ubuntu 20.04+ server
- Domain name configured
- SSH access to server
- Root or sudo privileges

## Important Notes

- Update `SERVER_USER` and `SERVER_HOST` in `deploy.sh` before running
- Ensure DNS is configured before setting up SSL
- All scripts should be run with appropriate permissions (sudo for system changes)


# Cloudflare Proxy Setup for thetimelesstours.com

This guide explains how to configure your server with Cloudflare as a proxy.

## Overview

With Cloudflare proxy:
- **Cloudflare handles SSL/TLS** - No need for Let's Encrypt on the server
- **DDoS Protection** - Cloudflare protects your origin server
- **CDN** - Content is cached at Cloudflare's edge locations
- **Server only needs HTTP** - Nginx listens on port 80 only

## Cloudflare Configuration

### 1. DNS Settings

In Cloudflare dashboard:

1. Add your domain `thetimelesstours.com`
2. Add DNS records:
   ```
   Type: A
   Name: @
   Content: your-server-ip
   Proxy: ✅ Proxied (orange cloud)

   Type: A
   Name: www
   Content: your-server-ip
   Proxy: ✅ Proxied (orange cloud)
   ```

### 2. SSL/TLS Settings

1. Go to **SSL/TLS** in Cloudflare dashboard
2. Set encryption mode to **Full** or **Full (strict)**
   - **Full**: Cloudflare to origin can be HTTP or HTTPS
   - **Full (strict)**: Requires valid SSL on origin (not needed for HTTP)

Since we're using HTTP only, **Full** mode is sufficient.

### 3. Recommended Cloudflare Settings

- **Always Use HTTPS**: ON
- **Automatic HTTPS Rewrites**: ON
- **Minimum TLS Version**: 1.2
- **Opportunistic Encryption**: ON
- **TLS 1.3**: ON
- **Automatic Signed Exchanges**: OFF (optional)

## Server Configuration

### 1. Run Server Setup

```bash
sudo ./deployment/server-setup.sh
```

### 2. Configure Nginx

```bash
sudo ./deployment/configure-nginx.sh
```

This creates an HTTP-only configuration that:
- Listens on port 80
- Accepts traffic from Cloudflare IPs
- Properly logs real client IPs (not Cloudflare IPs)
- Serves your React app from `/var/www/thetimelesstours/dist`

### 3. Deploy Application

```bash
./deployment/deploy.sh
```

## Manual Nginx Configuration

If you prefer to configure manually:

1. Copy the configuration file:
   ```bash
   sudo cp deployment/nginx-cloudflare.conf /etc/nginx/sites-available/thetimelesstours.com
   ```

2. Enable the site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/thetimelesstours.com /etc/nginx/sites-enabled/
   sudo rm -f /etc/nginx/sites-enabled/default
   ```

3. Test and reload:
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

## Firewall Configuration

Since Cloudflare handles SSL, you only need to open port 80:

```bash
sudo ufw allow 80/tcp
sudo ufw allow 22/tcp  # SSH
sudo ufw enable
```

## Verifying Configuration

### 1. Check Real IP Logging

Visit your site and check Nginx logs:

```bash
sudo tail -f /var/log/nginx/thetimelesstours-access.log
```

You should see real client IPs, not Cloudflare IPs.

### 2. Test from Browser

Visit `https://thetimelesstours.com` - you should see:
- ✅ HTTPS connection (handled by Cloudflare)
- ✅ Site loads correctly
- ✅ No SSL errors

### 3. Check Cloudflare Analytics

In Cloudflare dashboard, check:
- **Analytics** → **Traffic** - Should show requests
- **Security** → **Events** - Should show blocked threats (if any)

## Benefits of Cloudflare Proxy

1. **DDoS Protection** - Automatic mitigation
2. **CDN** - Faster global delivery
3. **SSL/TLS** - Free SSL certificates
4. **Security** - WAF (Web Application Firewall) available
5. **Analytics** - Detailed traffic and security metrics
6. **Caching** - Reduced server load

## Troubleshooting

### Issue: Real IP not showing correctly

Update Cloudflare IP ranges in Nginx config:
1. Get latest IPs: https://www.cloudflare.com/ips/
2. Update `set_real_ip_from` directives in Nginx config
3. Reload Nginx: `sudo systemctl reload nginx`

### Issue: Site not loading

1. Check Cloudflare DNS is pointing to correct IP
2. Verify Nginx is running: `sudo systemctl status nginx`
3. Check Nginx logs: `sudo tail -f /var/log/nginx/thetimelesstours-error.log`
4. Verify app is running: `pm2 status`

### Issue: SSL errors

1. Check Cloudflare SSL/TLS mode is set to "Full"
2. Verify DNS is proxied (orange cloud) in Cloudflare
3. Wait a few minutes for DNS/SSL propagation

## Security Considerations

### 1. Restrict Direct Access (Optional)

You can configure Nginx to only accept traffic from Cloudflare IPs:

```nginx
# Allow only Cloudflare IPs
allow 173.245.48.0/20;
allow 103.21.244.0/22;
# ... (add all Cloudflare IP ranges)
deny all;
```

### 2. Rate Limiting

Add rate limiting in Nginx:

```nginx
limit_req_zone $binary_remote_addr zone=api_limit:10m rate=10r/s;

location / {
    limit_req zone=api_limit burst=20;
    try_files $uri $uri/ /index.html;
}
```

### 3. Cloudflare WAF Rules

Configure WAF rules in Cloudflare dashboard for additional protection.

## Monitoring

### Server Monitoring

```bash
# PM2 monitoring
pm2 monit

# Nginx access logs
sudo tail -f /var/log/nginx/thetimelesstours-access.log

# System resources
htop
```

### Cloudflare Monitoring

- **Analytics** - Traffic patterns
- **Security** - Threat events
- **Performance** - Speed insights
- **Caching** - Cache hit rates

## Summary

With Cloudflare proxy:
- ✅ No SSL certificate needed on server
- ✅ Simple HTTP-only Nginx configuration
- ✅ Better security and performance
- ✅ Global CDN and DDoS protection
- ✅ Free SSL/TLS from Cloudflare

Your server setup is now optimized for Cloudflare proxy!


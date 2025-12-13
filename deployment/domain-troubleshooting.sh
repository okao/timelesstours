#!/bin/bash

# Domain Troubleshooting Script
# Run this script to diagnose domain connectivity issues

DOMAIN="thetimelesstours.com"
SERVER_IP=$(curl -s ifconfig.me || curl -s icanhazip.com)

echo "========================================="
echo "Domain Troubleshooting for $DOMAIN"
echo "========================================="
echo ""

# 1. Check DNS Resolution
echo "1. Checking DNS Resolution..."
echo "----------------------------------------"
DOMAIN_IP=$(dig +short $DOMAIN | tail -1)
WWW_IP=$(dig +short www.$DOMAIN | tail -1)

echo "Domain ($DOMAIN) resolves to: $DOMAIN_IP"
echo "WWW (www.$DOMAIN) resolves to: $WWW_IP"
echo "Server IP: $SERVER_IP"
echo ""

if [ "$DOMAIN_IP" != "$SERVER_IP" ] && [ "$WWW_IP" != "$SERVER_IP" ]; then
    echo "⚠️  WARNING: Domain IP doesn't match server IP!"
    echo "   DNS may not be configured correctly or not propagated yet."
else
    echo "✅ DNS is pointing to the correct IP"
fi
echo ""

# 2. Check if domain is proxied through Cloudflare
echo "2. Checking Cloudflare Proxy Status..."
echo "----------------------------------------"
CF_CHECK=$(dig +short $DOMAIN | grep -E "^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$" | head -1)
if [ -z "$CF_CHECK" ] || [ "$CF_CHECK" != "$SERVER_IP" ]; then
    echo "✅ Domain appears to be proxied through Cloudflare"
    echo "   (This is expected - Cloudflare IPs are different from your server IP)"
else
    echo "⚠️  Domain may not be proxied - check Cloudflare DNS settings"
fi
echo ""

# 3. Test HTTP connection
echo "3. Testing HTTP Connection..."
echo "----------------------------------------"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://$DOMAIN --max-time 10)
if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ HTTP connection successful (Status: $HTTP_CODE)"
elif [ "$HTTP_CODE" = "000" ]; then
    echo "❌ Connection failed - Domain may not be reachable"
elif [ "$HTTP_CODE" = "301" ] || [ "$HTTP_CODE" = "302" ]; then
    echo "⚠️  Redirect detected (Status: $HTTP_CODE) - May be redirecting to HTTPS"
else
    echo "⚠️  Unexpected status code: $HTTP_CODE"
fi
echo ""

# 4. Test HTTPS connection
echo "4. Testing HTTPS Connection..."
echo "----------------------------------------"
HTTPS_CODE=$(curl -s -o /dev/null -w "%{http_code}" https://$DOMAIN --max-time 10)
if [ "$HTTPS_CODE" = "200" ]; then
    echo "✅ HTTPS connection successful (Status: $HTTPS_CODE)"
elif [ "$HTTPS_CODE" = "000" ]; then
    echo "❌ HTTPS connection failed"
else
    echo "⚠️  HTTPS status code: $HTTPS_CODE"
fi
echo ""

# 5. Check Nginx configuration
echo "5. Checking Nginx Configuration..."
echo "----------------------------------------"
if sudo nginx -t 2>&1 | grep -q "syntax is ok"; then
    echo "✅ Nginx configuration is valid"
else
    echo "❌ Nginx configuration has errors:"
    sudo nginx -t
fi
echo ""

# 6. Check if Nginx is listening
echo "6. Checking Nginx Status..."
echo "----------------------------------------"
if sudo systemctl is-active --quiet nginx; then
    echo "✅ Nginx is running"
else
    echo "❌ Nginx is not running"
    echo "   Start it with: sudo systemctl start nginx"
fi
echo ""

# 7. Check server_name in Nginx config
echo "7. Checking Nginx server_name..."
echo "----------------------------------------"
if [ -f /etc/nginx/sites-available/$DOMAIN ]; then
    SERVER_NAMES=$(grep -E "server_name" /etc/nginx/sites-available/$DOMAIN | head -1)
    echo "Current server_name: $SERVER_NAMES"
    if echo "$SERVER_NAMES" | grep -q "$DOMAIN"; then
        echo "✅ Domain is configured in Nginx"
    else
        echo "⚠️  Domain may not be in server_name directive"
    fi
else
    echo "❌ Nginx config file not found: /etc/nginx/sites-available/$DOMAIN"
fi
echo ""

# 8. Check Cloudflare SSL/TLS mode
echo "8. Cloudflare Configuration Checklist..."
echo "----------------------------------------"
echo "Please verify in Cloudflare dashboard:"
echo "  [ ] DNS records are set to 'Proxied' (orange cloud)"
echo "  [ ] SSL/TLS encryption mode is set to 'Full' or 'Full (strict)'"
echo "  [ ] 'Always Use HTTPS' is enabled"
echo "  [ ] DNS has propagated (can take up to 48 hours, usually much faster)"
echo ""

# Summary
echo "========================================="
echo "Summary & Next Steps"
echo "========================================="
echo ""
echo "If domain is not working:"
echo "1. Verify DNS is configured in Cloudflare"
echo "2. Ensure DNS records are 'Proxied' (orange cloud)"
echo "3. Check Cloudflare SSL/TLS mode is 'Full'"
echo "4. Wait for DNS propagation (check with: dig $DOMAIN)"
echo "5. Verify Nginx server_name includes $DOMAIN"
echo "6. Check Nginx error logs: sudo tail -f /var/log/nginx/thetimelesstours-error.log"
echo ""


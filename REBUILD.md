# Rebuild Instructions

## After Git Pull

When you pull changes from git, follow these steps to rebuild the application:

### Quick Rebuild (Local Development)

```bash
# 1. Pull latest changes
git pull

# 2. Install dependencies (if package.json changed)
npm install

# 3. Build the application
npm run build
```

### Using the Rebuild Script

We've provided a convenient script that does all of this:

```bash
# Make it executable (first time only)
chmod +x rebuild.sh

# Run the rebuild script
./rebuild.sh
```

### On Production Server

If you're rebuilding on your production server:

```bash
# 1. Navigate to project directory
cd /var/www/thetimelesstours

# 2. Pull latest changes
git pull

# 3. Install dependencies
npm install

# 4. Build the application
npm run build

# 5. Restart PM2 (if using PM2)
pm2 restart thetimelesstours

# Or if using serve directly:
pm2 delete thetimelesstours
pm2 start ecosystem.config.js
pm2 save
```

### Build Output

- Build output directory: `./out`
- The build process uses Vite and outputs optimized production files

### Troubleshooting

**If you get dependency errors:**
```bash
# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**If build fails:**
```bash
# Check for TypeScript errors
npm run build 2>&1 | tee build.log

# Check the build log
cat build.log
```

### Development vs Production

- **Development**: `npm run dev` (runs Vite dev server)
- **Production Build**: `npm run build` (creates optimized build in `./out`)
- **Preview Build**: `npm run preview` (preview the production build locally)


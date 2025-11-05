# Deployment Guide

Complete guide for deploying PaymentScope Analytics to various hosting platforms.

## 📋 Pre-Deployment Checklist

- [ ] All images added to `public/images/`
- [ ] Company information updated throughout the site
- [ ] Contact email and phone updated in all locations
- [ ] Policy pages reviewed and customized
- [ ] Forms tested (note: currently front-end only)
- [ ] SEO metadata updated for all pages
- [ ] Google Analytics ID added (if using)
- [ ] All internal links tested
- [ ] Mobile responsiveness verified
- [ ] Build successful locally (`npm run build`)

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free, Recommended for Static Sites)

#### Step 1: Prepare Repository

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - PaymentScope Analytics website"

# Create main branch
git branch -M main
```

#### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it (e.g., `paymentscope-analytics`)
3. Don't initialize with README (we already have one)

#### Step 3: Push to GitHub

```bash
# Add remote origin (replace with your repo URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push to GitHub
git push -u origin main
```

#### Step 4: Configure GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

#### Step 5: Enable GitHub Pages

1. Go to repository Settings
2. Click "Pages" in sidebar
3. Under "Source", select "GitHub Actions"
4. Save

#### Step 6: Deploy

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deployment"
git push
```

Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`

#### Custom Domain (Optional)

1. Add a `CNAME` file to `public/` with your domain:
   ```
   www.yoursite.com
   ```

2. In GitHub Settings > Pages, add your custom domain

3. Configure DNS:
   - Add CNAME record: `www` → `YOUR-USERNAME.github.io`
   - Add A records for apex domain:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

---

### Option 2: Vercel (Recommended for Next.js)

#### Method A: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: paymentscope-analytics
# - Directory: ./
# - Override settings? No
```

#### Method B: Using GitHub Integration

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `out` (auto-detected)
6. Click "Deploy"

#### Custom Domain on Vercel

1. Go to Project Settings > Domains
2. Add your domain
3. Configure DNS as instructed by Vercel

---

### Option 3: Netlify

#### Method A: Drag and Drop

```bash
# Build locally
npm run build

# Drag the 'out' folder to Netlify's web interface
```

#### Method B: GitHub Integration

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Click "New site from Git"
4. Choose your repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Click "Deploy site"

#### Custom Domain on Netlify

1. Go to Site Settings > Domain Management
2. Add custom domain
3. Follow DNS configuration instructions

---

### Option 4: AWS S3 + CloudFront

#### Step 1: Build

```bash
npm run build
```

#### Step 2: Create S3 Bucket

1. Go to AWS S3 Console
2. Create bucket (e.g., `paymentscope-analytics`)
3. Enable static website hosting
4. Upload contents of `out/` folder

#### Step 3: Configure CloudFront

1. Create CloudFront distribution
2. Set origin to S3 bucket
3. Configure SSL certificate
4. Set default root object to `index.html`

#### Step 4: Update DNS

Point your domain to CloudFront distribution

---

## 🔧 Environment Configuration

### Production Environment Variables

Create `.env.production`:

```env
NEXT_PUBLIC_SITE_URL=https://www.yoursite.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

Add these in your deployment platform's environment settings.

---

## 📊 Post-Deployment Steps

### 1. Google Analytics Setup

Add to `app/layout.tsx` before closing `</head>`:

```tsx
{process.env.NEXT_PUBLIC_GA_ID && (
  <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `,
      }}
    />
  </>
)}
```

### 2. Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property with your domain
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://yoursite.com/sitemap.xml`

### 3. Create Sitemap

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yoursite.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yoursite.com/services</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yoursite.com/insights</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://yoursite.com/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

### 4. Robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://yoursite.com/sitemap.xml
```

### 5. Google Ads Setup

1. Create Google Ads account
2. Verify domain ownership
3. Add conversion tracking code
4. Create ad campaigns
5. Set up conversion goals

### 6. Performance Monitoring

- Use Google PageSpeed Insights
- Monitor Core Web Vitals
- Set up uptime monitoring (e.g., UptimeRobot)
- Enable error tracking (e.g., Sentry)

---

## 🔒 Security Headers

Add these headers in your hosting configuration:

### Vercel (`vercel.json`)

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

### Netlify (`netlify.toml`)

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Pages Not Found After Deployment

- Ensure `trailingSlash: true` in `next.config.js`
- Check that all routes are correctly built in `out/` folder
- Verify hosting platform serves 404 page correctly

### Images Not Loading

- Check image paths (should start with `/images/`)
- Ensure images are in `public/images/`
- Verify image files are included in deployment

---

## 📞 Support

If you encounter issues:
1. Check the [Next.js deployment documentation](https://nextjs.org/docs/deployment)
2. Review hosting platform documentation
3. Check build logs for errors
4. Verify all files are committed to Git

---

**Ready to launch your payment intelligence website!** 🚀


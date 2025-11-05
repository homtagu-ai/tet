# Getting Started Guide

Welcome to your new PaymentScope Analytics website! This guide will walk you through everything you need to know to get your site up and running.

## 📋 Table of Contents

1. [First Steps](#first-steps)
2. [Local Development](#local-development)
3. [Essential Customizations](#essential-customizations)
4. [Adding Content](#adding-content)
5. [Deployment](#deployment)
6. [Google Ads Setup](#google-ads-setup)

---

## 🚀 First Steps

### What You Have

✅ **Complete Next.js Website** with:
- Professional homepage
- About, Services, Contact pages
- Blog/Insights section with sample articles
- All Google Ads required policy pages
- Responsive design (mobile, tablet, desktop)
- SEO optimization
- Modern UI with shadcn/ui components

### What You Need

Before starting, make sure you have:
- [ ] Node.js 18.x or higher installed ([Download](https://nodejs.org))
- [ ] Code editor (VS Code recommended)
- [ ] Git installed (for version control)
- [ ] GitHub account (for deployment)
- [ ] Your company logo and brand assets
- [ ] Your company contact information

---

## 💻 Local Development

### Step 1: Install Dependencies

Open terminal in the project folder and run:

```bash
npm install
```

This installs all required packages. It may take 2-3 minutes.

### Step 2: Start Development Server

```bash
npm run dev
```

Open your browser to [http://localhost:3000](http://localhost:3000)

You should see the homepage! 🎉

### Step 3: Make Changes

The site will automatically refresh when you save files. Try editing:
- `app/page.tsx` - Homepage
- `components/Header.tsx` - Navigation
- `components/Footer.tsx` - Footer

---

## ✏️ Essential Customizations

### Priority 1: Contact Information

**Search and replace throughout the project:**

Old: `info@paymentscope.com`
New: `your-email@yourcompany.com`

Old: `+1 (555) 123-4567`
New: `your-phone-number`

**Files to check:**
- `components/Footer.tsx`
- `app/contact/page.tsx`
- All policy pages (`app/privacy-policy/`, etc.)

### Priority 2: Company Name

**Search and replace:**

Old: `PaymentScope Analytics`
New: `Your Company Name`

**Files to check:**
- `components/Header.tsx`
- `components/Footer.tsx`
- `app/layout.tsx`
- All policy pages

### Priority 3: Logo

1. **Prepare your logo:**
   - SVG format (preferred) or PNG
   - Transparent background
   - Approximately 40x40px to 200x200px

2. **Add to project:**
   - Save as `public/logo.svg` or `public/logo.png`

3. **Update Header:**

Edit `components/Header.tsx`:

```tsx
// Change from:
<div className="h-8 w-8 rounded-lg bg-primary">
  <span className="text-white font-bold text-lg">PS</span>
</div>

// To:
<Image 
  src="/logo.svg" 
  alt="Your Company" 
  width={40} 
  height={40} 
/>
```

### Priority 4: Favicon

1. **Create favicons:**
   - Use [Favicon Generator](https://favicon.io/)
   - Upload your logo
   - Download the package

2. **Add to project:**
   - Place all favicon files in `public/` folder

3. **Update layout:**

Add to `app/layout.tsx` in the `<head>` section:

```tsx
<link rel="icon" href="/favicon.ico" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

### Priority 5: Colors

Edit `tailwind.config.ts`:

```typescript
primary: {
  DEFAULT: "hsl(221, 83%, 53%)", // Change this HSL value
  foreground: "hsl(210, 40%, 98%)",
},
```

**Popular color schemes:**
- Blue (Current): `hsl(221, 83%, 53%)`
- Green: `hsl(142, 71%, 45%)`
- Purple: `hsl(262, 83%, 58%)`
- Orange: `hsl(25, 95%, 53%)`
- Red: `hsl(0, 84%, 60%)`

---

## 📝 Adding Content

### Update Homepage

Edit `app/page.tsx`:

1. **Hero headline** (line ~15):
```tsx
<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
  Your Custom Headline Here
</h1>
```

2. **Hero description** (line ~18):
```tsx
<p className="text-xl text-muted-foreground">
  Your company description here
</p>
```

3. **Statistics** (line ~34-48):
```tsx
<div className="text-4xl font-bold text-primary mb-2">150+</div>
<div className="text-sm text-muted-foreground">Your Metric</div>
```

### Update About Page

Edit `app/about/page.tsx`:

1. Update mission statement (line ~30-40)
2. Update vision statement (line ~45-55)
3. Replace company story (line ~70-85)
4. Update expertise areas (line ~135-150)

### Update Services

Edit `app/services/page.tsx`:

1. Modify service cards (line ~35-130)
2. Update service descriptions
3. Adjust pricing or features

### Add Blog Articles

1. **Add article data** to `app/insights/page.tsx`:

```tsx
const insights = [
  {
    slug: 'your-article-url',
    title: 'Your Article Title',
    date: 'November 10, 2024',
    category: 'Category',
    excerpt: 'Brief description...',
    readTime: '8 min read',
    tags: ['Tag1', 'Tag2']
  },
  // ... existing articles
]
```

2. **Create article page:**
   - Duplicate `app/insights/[slug]/page.tsx`
   - Update content, metadata, and text

### Add Images

1. **Add images to appropriate folders:**

```
public/images/
├── hero/              # Homepage hero images
│   └── main-hero.jpg
├── services/          # Service page images
│   ├── consulting.jpg
│   └── research.jpg
├── insights/          # Blog post featured images
│   ├── article-1.jpg
│   └── article-2.jpg
└── about/            # About page images
    └── office.jpg
```

2. **Use in components:**

```tsx
import Image from 'next/image'

<Image 
  src="/images/hero/main-hero.jpg"
  alt="Description"
  width={1920}
  height={1080}
  priority
/>
```

3. **Optimize images before adding:**
   - Use [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)
   - Target: < 200KB per image
   - Use WebP format when possible

---

## 🚀 Deployment

### Test Build Locally

Before deploying, test that everything builds correctly:

```bash
npm run build
```

If successful, you'll see:
```
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization
```

### Deploy to GitHub Pages

1. **Create GitHub repository:**
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it (e.g., `paymentscope-website`)

2. **Push your code:**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

3. **Enable GitHub Pages:**
   - Go to repository Settings
   - Click "Pages" in sidebar
   - Source: Select "GitHub Actions"
   - GitHub Actions workflow (already included) will automatically deploy

4. **Your site will be live at:**
   ```
   https://YOUR-USERNAME.github.io/YOUR-REPO/
   ```

### Custom Domain (Optional)

1. **Add CNAME file:**
   - Create `public/CNAME`
   - Add your domain: `www.yoursite.com`

2. **Configure DNS:**
   - Add CNAME record: `www` → `your-username.github.io`
   - Or A records for apex domain (see DEPLOYMENT.md)

3. **Enable in GitHub:**
   - Settings > Pages > Custom domain
   - Enter your domain
   - Enable "Enforce HTTPS"

---

## 📊 Google Ads Setup

### Prerequisites Checklist

Your site already has all required pages:

- ✅ Privacy Policy (`/privacy-policy`)
- ✅ Terms of Service (`/terms-of-service`)
- ✅ Cookie Policy (`/cookie-policy`)
- ✅ Disclaimer (`/disclaimer`)
- ✅ Contact page with form
- ✅ Professional content
- ✅ Mobile responsive

### Before Running Ads:

1. **Verify all policy pages** have your correct contact information
2. **Test contact form** (note: currently front-end only, needs backend)
3. **Add Google Analytics:**

Edit `app/layout.tsx`, add before `</head>`:

```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `,
  }}
/>
```

4. **Add conversion tracking** (from Google Ads dashboard)

### Domain Verification

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property
3. Verify domain ownership
4. Submit sitemap: `https://yoursite.com/sitemap.xml`

---

## 🐛 Common Issues & Solutions

### Port 3000 Already in Use

```bash
# Kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill
```

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

### Images Not Showing

- Ensure images are in `public/images/`
- Check file path starts with `/images/`
- Verify file extension matches (`.jpg` vs `.jpeg`)

### Styles Not Updating

- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear `.next` folder: `rm -rf .next`
- Restart dev server

---

## 📚 Next Steps

1. ✅ **Customize content** (company info, services, about)
2. ✅ **Add images** (logo, hero, services, blog)
3. ✅ **Test locally** (all pages, links, forms)
4. ✅ **Deploy to GitHub Pages**
5. ✅ **Set up custom domain** (optional)
6. ✅ **Add Google Analytics**
7. ✅ **Configure Google Ads**
8. ✅ **Submit to Search Console**
9. ✅ **Start promoting!**

---

## 🎯 Quick Reference

### Useful Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Check for code issues
```

### Important Files

- `app/page.tsx` - Homepage
- `app/layout.tsx` - Site-wide layout & metadata
- `components/Header.tsx` - Navigation
- `components/Footer.tsx` - Footer
- `tailwind.config.ts` - Design system config
- `app/globals.css` - Global styles

### Documentation Files

- `README.md` - Project overview
- `DEPLOYMENT.md` - Detailed deployment guide
- `CUSTOMIZATION.md` - Design customization guide
- `public/images/README.md` - Image guidelines

---

## 💬 Need Help?

If you get stuck:

1. Check the error message carefully
2. Review relevant documentation file
3. Search the issue on Google or Stack Overflow
4. Check [Next.js documentation](https://nextjs.org/docs)
5. Review [Tailwind CSS docs](https://tailwindcss.com/docs)

---

**Congratulations on your new website! 🎉**

You now have a professional, Google Ads-compliant website ready to generate leads for your payment intelligence business.

Start with the essential customizations, add your content, and deploy to make it live!


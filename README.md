# PaymentScope Analytics

A professional lead generation website for payment methods intelligence and market research consulting services.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)

## 🚀 Overview

PaymentScope Analytics is a modern, SEO-optimized website built with Next.js 14 and shadcn/ui components. The site provides comprehensive information about payment methods intelligence, market research services, and industry insights across global markets.

### Key Features

- ✅ **Fully Responsive Design** - Mobile-first approach with beautiful UI
- ✅ **SEO Optimized** - Meta tags, semantic HTML, and structured data
- ✅ **Google Ads Compliant** - Complete policy pages (Privacy, Terms, Cookies, Disclaimer)
- ✅ **Rich Content** - Comprehensive pages about services, insights, and company information
- ✅ **Fast Performance** - Static site generation for optimal loading speeds
- ✅ **Modern Stack** - Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- ✅ **Accessible** - WCAG compliant with proper semantic HTML

## 📁 Project Structure

```
paymentscope-analytics/
├── app/                          # Next.js 14 App Router
│   ├── about/                    # About page
│   ├── contact/                  # Contact page
│   ├── cookie-policy/            # Cookie policy (Google Ads required)
│   ├── disclaimer/               # Disclaimer page
│   ├── insights/                 # Blog/insights section
│   │   └── [slug]/               # Dynamic article pages
│   ├── privacy-policy/           # Privacy policy (Google Ads required)
│   ├── services/                 # Services page
│   ├── terms-of-service/         # Terms of service (Google Ads required)
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/                   # React components
│   ├── ui/                       # shadcn/ui components
│   ├── Footer.tsx                # Site footer
│   └── Header.tsx                # Site header
├── lib/                          # Utility functions
│   └── utils.ts                  # Tailwind merge utility
├── public/                       # Static assets
│   └── images/                   # Image assets directory
├── .gitignore                    # Git ignore rules
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # This file
```

## 🛠️ Installation

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Setup Steps

1. **Clone or download this project**

```bash
cd white-m1
```

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**

```bash
npm run dev
```

4. **Open browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

### Deploy to GitHub Pages

1. **Create a new GitHub repository**

2. **Initialize git and push**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Set Source to "GitHub Actions" or deploy the `out/` folder

4. **GitHub Actions deployment (recommended)**

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

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v2
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v2
        id: deployment
```

### Deploy to Vercel (Alternative)

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy.

### Deploy to Netlify (Alternative)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Deploy!

## 🖼️ Adding Images

1. Add your images to `public/images/` following the structure in `public/images/README.md`

2. Recommended images to add:
   - Hero images for homepage
   - Service illustrations
   - Article/insight images
   - Company logo and favicon
   - Regional market imagery

3. Update image paths in components as needed

## ✏️ Content Customization

### Update Company Information

1. **Contact Details** - Update in:
   - `components/Footer.tsx`
   - `app/contact/page.tsx`
   - All policy pages

2. **Company Name** - Search and replace "PaymentScope Analytics" with your company name

3. **SEO Metadata** - Update in:
   - `app/layout.tsx` (site-wide metadata)
   - Individual page files for page-specific metadata

### Add Blog Articles

1. Add article data to `app/insights/page.tsx` in the `insights` array
2. Create new article pages in `app/insights/[slug]/page.tsx`
3. Follow the existing pattern for consistent styling

### Customize Styling

- **Colors**: Edit `tailwind.config.ts` to change the color scheme
- **Fonts**: Update font imports in `app/layout.tsx`
- **Components**: Modify components in `components/ui/` as needed

## 🔧 Configuration

### Environment Variables

Create `.env.local` for environment-specific configuration:

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Google Analytics

Add Google Analytics by updating `app/layout.tsx` with the tracking script.

### Google Ads Setup

1. Ensure all policy pages are accessible
2. Add Google Ads conversion tracking script
3. Set up conversion goals in Google Ads dashboard

## 📝 Google Ads Requirements Checklist

- ✅ Privacy Policy page (`/privacy-policy`)
- ✅ Terms of Service page (`/terms-of-service`)
- ✅ Cookie Policy page (`/cookie-policy`)
- ✅ Disclaimer page (`/disclaimer`)
- ✅ Contact information clearly visible
- ✅ Professional, high-quality content
- ✅ No prohibited content (cryptocurrency terms removed as requested)
- ✅ Fast loading times
- ✅ Mobile responsive design

## 🎨 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **Deployment**: Static export (compatible with GitHub Pages, Vercel, Netlify)

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Support

For questions or customization requests:
- Email: info@paymentscope.com
- Update contact details to match your business

## 📜 License

This project is ready for commercial use. Update license terms as needed for your business.

## 🚀 Next Steps

1. **Add Images**: Populate `public/images/` with your brand assets
2. **Customize Content**: Update company information and contact details
3. **Set Up Analytics**: Add Google Analytics tracking
4. **Configure Google Ads**: Set up ad campaigns with conversion tracking
5. **Domain Setup**: Point your custom domain to the deployment
6. **SEO**: Submit sitemap to Google Search Console
7. **Testing**: Test all forms and links thoroughly

## 📊 Performance Tips

- Optimize all images before uploading (use WebP format when possible)
- Enable caching headers on your hosting platform
- Consider adding a CDN for global content delivery
- Monitor Core Web Vitals using Google PageSpeed Insights
- Keep dependencies updated regularly

## 🔒 Security Notes

- All policy pages are included and legally compliant
- Forms should be connected to a backend service (currently front-end only)
- Add CSRF protection when implementing form submissions
- Use environment variables for sensitive configuration
- Enable HTTPS on your domain

---

**Built with ❤️ for payment intelligence professionals**

Last Updated: November 5, 2024


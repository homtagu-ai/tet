# Customization Guide

Step-by-step guide to customize the PaymentScope Analytics website for your business.

## 🎯 Quick Start Customization

### 1. Company Branding

#### Update Company Name

Search and replace "PaymentScope Analytics" with your company name in:
- `components/Header.tsx`
- `components/Footer.tsx`
- `app/layout.tsx`
- All policy pages
- README.md

#### Update Logo

1. Create your logo files:
   - `public/logo.svg` or `public/logo.png`
   - Multiple sizes for favicon:
     - `public/favicon.ico`
     - `public/favicon-16x16.png`
     - `public/favicon-32x32.png`
     - `public/apple-touch-icon.png` (180x180)

2. Update logo in `components/Header.tsx`:
```tsx
<Image 
  src="/logo.svg" 
  alt="Your Company" 
  width={40} 
  height={40} 
/>
```

3. Add favicon references to `app/layout.tsx`:
```tsx
<link rel="icon" href="/favicon.ico" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

### 2. Contact Information

#### Update Contact Details

Replace all instances of contact information:
- Email: `info@paymentscope.com` → Your email
- Phone: `+1 (555) 123-4567` → Your phone
- Address: Update in all policy pages and contact page

Files to update:
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `app/privacy-policy/page.tsx`
- `app/terms-of-service/page.tsx`
- `app/cookie-policy/page.tsx`
- `app/disclaimer/page.tsx`

### 3. Color Scheme

Edit `tailwind.config.ts` to change colors:

```typescript
colors: {
  primary: {
    DEFAULT: "hsl(221, 83%, 53%)", // Change this
    foreground: "hsl(210, 40%, 98%)",
  },
  // ... other colors
}
```

Common color schemes:
- **Blue (Current)**: Professional, trustworthy
- **Green**: Growth, financial services (`hsl(142, 71%, 45%)`)
- **Purple**: Creative, innovative (`hsl(262, 83%, 58%)`)
- **Red**: Bold, energetic (`hsl(0, 84%, 60%)`)

### 4. Typography

Change fonts in `app/layout.tsx`:

```tsx
import { Inter, Poppins, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// or
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"] 
});
```

---

## 📝 Content Customization

### Homepage (`app/page.tsx`)

#### Update Hero Section
```tsx
<h1>Your Custom Headline</h1>
<p>Your custom description</p>
```

#### Update Statistics
```tsx
<div className="text-4xl font-bold text-primary">150+</div>
<div className="text-sm text-muted-foreground">Your Metric</div>
```

#### Update Service Cards
Modify the service cards in the Services Overview section with your offerings.

### About Page (`app/about/page.tsx`)

1. **Mission & Vision**: Update company mission and vision statements
2. **Story**: Replace with your company's story
3. **Expertise Areas**: Update the expertise list to match your services
4. **Global Presence**: Update regions where you operate

### Services Page (`app/services/page.tsx`)

1. **Core Services**: Modify the 6 main service cards
2. **Service Details**: Update descriptions and features
3. **Approach**: Customize your methodology steps

### Insights Page (`app/insights/page.tsx`)

#### Add New Articles

```tsx
const insights = [
  {
    slug: 'your-article-slug',
    title: 'Your Article Title',
    date: 'Month Day, Year',
    category: 'Category Name',
    excerpt: 'Brief description...',
    readTime: '8 min read',
    tags: ['Tag1', 'Tag2', 'Tag3']
  },
  // ... more articles
]
```

#### Create Article Pages

1. Duplicate `app/insights/[slug]/page.tsx`
2. Update metadata and content
3. Add article to insights array

---

## 🎨 Design Customization

### Layout Changes

#### Adjust Container Width

In `tailwind.config.ts`:
```typescript
container: {
  center: true,
  padding: "2rem",
  screens: {
    "2xl": "1400px", // Change this
  },
},
```

#### Modify Spacing

Change section padding in component files:
```tsx
// Current
<section className="py-20">

// Options
<section className="py-12">  // Smaller
<section className="py-32">  // Larger
```

#### Update Border Radius

In `tailwind.config.ts`:
```typescript
borderRadius: {
  lg: "var(--radius)",    // Default: 0.5rem
  md: "calc(var(--radius) - 2px)",
  sm: "calc(var(--radius) - 4px)",
}
```

Change `--radius` in `app/globals.css`:
```css
:root {
  --radius: 0.5rem; /* Change this */
}
```

### Button Styles

Modify `components/ui/button.tsx` or use variants:

```tsx
<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

### Card Styles

Customize cards in `components/ui/card.tsx` or add classes:

```tsx
<Card className="hover:shadow-xl border-2">
  {/* content */}
</Card>
```

---

## 📱 Navigation Customization

### Add/Remove Menu Items

Edit `components/Header.tsx`:

```tsx
<nav className="hidden md:flex items-center space-x-6">
  <Link href="/">Home</Link>
  <Link href="/about">About</Link>
  <Link href="/services">Services</Link>
  <Link href="/insights">Insights</Link>
  <Link href="/your-new-page">New Page</Link> {/* Add */}
  <Link href="/contact">Contact</Link>
</nav>
```

Update `components/Footer.tsx` similarly.

### Mobile Menu

To add mobile menu functionality:

1. Install sheet component:
```bash
npx shadcn-ui@latest add sheet
```

2. Update `components/Header.tsx` with mobile sheet

---

## 🖼️ Image Customization

### Add Images

1. Place images in appropriate folders:
```
public/images/
├── hero/
├── services/
├── insights/
└── about/
```

2. Use Next.js Image component:
```tsx
import Image from 'next/image'

<Image 
  src="/images/hero/your-image.jpg"
  alt="Description"
  width={1920}
  height={1080}
  priority
/>
```

### Background Images

Add background images using Tailwind:

```tsx
<section 
  className="py-20 bg-cover bg-center"
  style={{ backgroundImage: 'url(/images/backgrounds/hero-bg.jpg)' }}
>
  {/* content */}
</section>
```

---

## 🔧 Advanced Customization

### Add New Pages

1. Create new directory in `app/`:
```bash
mkdir app/your-page
```

2. Create `page.tsx`:
```tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Page | Company Name',
  description: 'Page description',
}

export default function YourPage() {
  return (
    <div>
      {/* Your content */}
    </div>
  )
}
```

3. Add to navigation

### Add Contact Form Backend

#### Option 1: Formspree

```tsx
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
  {/* form fields */}
</form>
```

#### Option 2: Netlify Forms

```tsx
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  {/* form fields */}
</form>
```

#### Option 3: Custom API Route

Create `app/api/contact/route.ts` (requires server runtime)

### Add Analytics

#### Google Analytics

In `app/layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

### Add Chat Widget

Many chat services provide embed code. Add to `app/layout.tsx` before `</body>`:

```tsx
<Script id="chat-widget">
  {/* Chat widget code */}
</Script>
```

---

## 📊 SEO Customization

### Update Meta Tags

In each page file:

```tsx
export const metadata: Metadata = {
  title: 'Page Title | Company Name',
  description: 'Page description (150-160 characters)',
  keywords: 'keyword1, keyword2, keyword3',
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title',
    description: 'Page description',
    images: ['/images/twitter-image.jpg'],
  },
}
```

### Structured Data

Add JSON-LD structured data:

```tsx
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company",
  "url": "https://yoursite.com",
  "logo": "https://yoursite.com/logo.png"
})}
</script>
```

---

## 🎯 Quick Wins Checklist

- [ ] Update company name everywhere
- [ ] Update contact information
- [ ] Add your logo and favicon
- [ ] Customize color scheme
- [ ] Add your images
- [ ] Update homepage headline and description
- [ ] Modify service offerings
- [ ] Update about page story
- [ ] Add your blog articles
- [ ] Update footer links
- [ ] Add Google Analytics
- [ ] Test all forms
- [ ] Update sitemap with your domain
- [ ] Review all policy pages

---

## 💡 Tips

1. **Test locally** before deploying: `npm run dev`
2. **Build to verify**: `npm run build`
3. **Use consistent branding** across all pages
4. **Optimize images** before uploading
5. **Keep backups** of original files
6. **Update incrementally** and test frequently

---

**Need help?** Refer to the main README.md for technical details or DEPLOYMENT.md for hosting instructions.


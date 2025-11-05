# Local Deployment Instructions

## Quick Start - Run Website Locally

### Step 1: Add Payment Chart Images

Before running the site, add your three payment chart images to:
```
public/images/charts/
```

Required image files (exact names):
1. `north-america-ecommerce-2023.png`
2. `global-forecast-2026.png`
3. `usa-payment-methods-2023.png`

**If you don't have the images yet**, the site will still run but show broken image placeholders where the charts should appear.

### Step 2: Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install all required packages (may take 2-3 minutes).

### Step 3: Start Development Server

```bash
npm run dev
```

### Step 4: View Your Website

Open your browser and navigate to:
```
http://localhost:3000
```

You should see your website running locally! 🎉

## What You'll See

The homepage now includes three data visualization sections:

1. **E-commerce Payment Intelligence Section**
   - Shows North America e-commerce payment methods chart
   - Digital wallet 37%, Credit card 33%, etc.

2. **Global Payment Forecast 2026**
   - World map with regional breakdowns
   - Summary cards for all 5 regions
   - Interactive regional data

3. **US Payment Methods Comparison**
   - Side-by-side comparison of e-commerce vs point-of-sale
   - Visual progress bars showing payment method percentages

## Adding Your Chart Images

### Option 1: Save from Your Source

1. Save/download your three chart images
2. Rename them to match the required filenames above
3. Place them in `public/images/charts/` folder

### Option 2: Create the Folder First

If the `charts` folder doesn't exist:

```bash
# Windows Command Prompt
mkdir public\images\charts

# Mac/Linux Terminal
mkdir -p public/images/charts
```

Then add your images to this folder.

### Image Specifications

- **Format**: PNG or JPG (PNG recommended for charts)
- **Size**: 1200-1600px width for best quality
- **File size**: Aim for < 500KB per image
- **Optimize**: Use TinyPNG or Squoosh before adding

## Troubleshooting

### Port Already in Use

If port 3000 is busy:

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### Images Not Showing

1. Check file names match exactly (case-sensitive)
2. Ensure images are in `public/images/charts/` folder
3. Try hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
4. Check browser console (F12) for errors

### Module Not Found Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Making Changes While Running

The development server has hot reload - just save your files and changes appear automatically in the browser!

## Testing Different Pages

Navigate to:
- http://localhost:3000 - Homepage (with charts)
- http://localhost:3000/about - About page
- http://localhost:3000/services - Services
- http://localhost:3000/insights - Blog/Insights
- http://localhost:3000/contact - Contact form

## Stopping the Server

Press `Ctrl+C` in the terminal to stop the development server.

## Next Steps

Once you're happy with how it looks locally:

1. **Add your images** if you haven't already
2. **Customize content** (company name, contact info)
3. **Build for production**: `npm run build`
4. **Deploy** to GitHub Pages, Vercel, or Netlify

See `DEPLOYMENT.md` for full deployment instructions.

## Quick Commands Reference

```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Check code quality
```

## Need Help?

- Check terminal for error messages
- Review `GETTING-STARTED.md` for detailed setup
- Check `README.md` for project overview
- Browser console (F12) shows frontend errors

---

**Your website is now running locally with interactive payment method visualizations!** 📊


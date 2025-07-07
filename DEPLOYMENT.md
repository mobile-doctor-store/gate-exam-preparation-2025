# Deployment Guide

## Quick GitHub + Vercel Deployment

### Step 1: Prepare for GitHub

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: GATE CSE Platform"
   ```

2. **Create GitHub Repository**:
   - Go to GitHub and create a new repository
   - Name it something like `gate-cse-platform`
   - Don't initialize with README (we already have one)

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/gate-cse-platform.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Configure Google Forms (Optional but Recommended)

1. **Create a Google Form**:
   - Go to forms.google.com
   - Create a new form with these fields:
     - "Full Name" (Short answer)
     - "Phone Number" (Short answer)

2. **Get Form Configuration**:
   - In edit mode, click three dots menu → "Get pre-filled link"
   - Fill in dummy data: Name = "Test", Phone = "1234567890"
   - Click "Get link"
   - Copy the generated URL

3. **Extract Field IDs**:
   From the URL like:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSdYOUR_FORM_ID/viewform?usp=pp_url&entry.123456789=Test&entry.987654321=1234567890
   ```
   
   Extract:
   - Form ID: `1FAIpQLSdYOUR_FORM_ID`
   - Name field: `entry.123456789`
   - Phone field: `entry.987654321`

### Step 3: Deploy to Vercel

1. **Connect to Vercel**:
   - Go to vercel.com and sign up/login
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Environment Variables**:
   In Vercel dashboard → Project Settings → Environment Variables, add:
   ```
   VITE_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
   VITE_GOOGLE_FORM_NAME_FIELD=entry.123456789
   VITE_GOOGLE_FORM_PHONE_FIELD=entry.987654321
   ```

3. **Deploy**:
   - Vercel will automatically build and deploy
   - Your app will be live at `https://your-project-name.vercel.app`

### Step 4: Test Deployment

1. **Visit your deployed site**
2. **Test user registration** - check if data appears in your Google Form
3. **Test navigation** between different sections
4. **Test mobile responsiveness**

## Alternative Deployment Options

### Netlify
1. Connect GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

### GitHub Pages (Static Only)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages
3. Note: Server features won't work with static hosting

## Security Checklist

✅ **Environment Variables**: All sensitive data in environment variables  
✅ **No Hardcoded URLs**: Google Form URLs not in source code  
✅ **User Data Encoding**: Phone numbers encoded in local storage  
✅ **CORS Configuration**: Proper API endpoint security  
✅ **Input Validation**: Form validation implemented  
✅ **Error Handling**: Graceful fallbacks when services are unavailable  

## Production Optimization

1. **Performance**:
   - Images optimized and properly sized
   - Code splitting implemented via Vite
   - CSS minification enabled

2. **SEO**:
   - Meta tags configured
   - Semantic HTML structure
   - Proper heading hierarchy

3. **Analytics** (Optional):
   - Add Google Analytics or similar
   - Track user engagement and popular features

## Troubleshooting

### Common Issues:

1. **Google Form not working**:
   - Check environment variables are set correctly
   - Verify form field IDs match your actual form
   - Test form manually to ensure it's accepting responses

2. **Build failures**:
   - Check Node.js version compatibility
   - Ensure all dependencies are properly installed
   - Review build logs for specific errors

3. **Mobile display issues**:
   - Test responsive breakpoints
   - Check touch interactions
   - Verify mobile navigation works

### Support:
- Check GitHub Issues for known problems
- Review Vercel deployment logs
- Test locally with `npm run build && npm run preview`
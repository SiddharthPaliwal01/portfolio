# Deployment Guide for siddharthpaliwal.me

## Quick Deployment Steps:

### 1. Deploy to Vercel
```bash
vercel login
vercel
```

### 2. Connect Your Custom Domain
1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to Settings > Domains
4. Add: siddharthpaliwal.me
5. Add: www.siddharthpaliwal.me

### 3. Configure DNS in Namecheap
1. Login to Namecheap
2. Go to Domain List > Manage
3. Advanced DNS tab
4. Add these records:

**A Record:**
- Host: @
- Value: 76.76.19.61
- TTL: 1 min

**CNAME Record:**
- Host: www
- Value: cname.vercel-dns.com
- TTL: 1 min

### 4. Verify Deployment
- Check: https://siddharthpaliwal.me
- Check: https://www.siddharthpaliwal.me

## Alternative Quick Deploy (If you prefer Netlify):

### Option 2: Netlify
1. Drag & drop the `dist` folder to https://app.netlify.com/drop
2. Go to Site Settings > Domain Management
3. Add custom domain: siddharthpaliwal.me
4. Update DNS in Namecheap with Netlify's nameservers

## Files Ready for Deployment:
- ✅ Build files in /dist
- ✅ Resume file in /public
- ✅ Vercel config file
- ✅ All optimizations complete

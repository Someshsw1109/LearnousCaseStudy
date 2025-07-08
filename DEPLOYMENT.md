# Deploying Morel Q to Vercel

## Prerequisites
- GitHub account
- Vercel account (free tier available)

## Steps to Deploy

### 1. Prepare Your Repository
1. Push all your code to GitHub
2. Make sure `vercel.json` is in your root directory

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Node.js project

### 3. Configure Build Settings
- **Build Command**: `vite build`
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`

### 4. Environment Variables (if needed)
If you plan to use a database later, add these in Vercel dashboard:
- `DATABASE_URL` - Your PostgreSQL connection string
- `NODE_ENV` - Set to "production"

### 5. Deploy
Click "Deploy" and Vercel will build and deploy your site!

## Important Notes

- **Current Setup**: Uses in-memory storage (data resets on each deployment)
- **For Production**: You'll want to connect a real database like PostgreSQL
- **Domain**: Vercel provides a free `.vercel.app` domain
- **SSL**: Automatic HTTPS certificate

## Troubleshooting

If deployment fails:
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify `vercel.json` configuration is correct

## Future Enhancements

For a production-ready deployment, consider:
- Setting up PostgreSQL database (Neon, Supabase, or Planetscale)
- Adding authentication
- Setting up proper error monitoring
- Adding analytics
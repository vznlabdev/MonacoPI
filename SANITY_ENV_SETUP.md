# Sanity CMS Environment Setup

## Step 1: Create a Sanity Account and Project

1. Go to [https://sanity.io](https://sanity.io) and sign up for a free account
2. Create a new project (or use `npx sanity init` in terminal)
3. Choose a name for your project (e.g., "Monaco PI")
4. Choose "production" as your dataset name
5. Note down your Project ID

## Step 2: Get Your API Credentials

1. Go to [https://sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to **API** section
4. Copy your **Project ID**
5. Go to **Tokens** and create a new token:
   - Name: "MonacoPI Development"
   - Permissions: "Editor" or "Admin"
   - Copy the token (you won't see it again!)

## Step 3: Create .env.local File

Create a `.env.local` file in your project root with these values:

```bash
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
NEXT_PUBLIC_SANITY_STUDIO_URL=http://localhost:3000/studio
```

Replace:
- `your_project_id_here` with your actual Project ID
- `your_api_token_here` with your actual API token

## Step 4: Deploy the Schema

Once you've set up your environment variables, run:

```bash
npm run dev
```

Then visit: `http://localhost:3000/studio`

This will open Sanity Studio where you can start adding content!

## Step 5: (Optional) Deploy Studio to Production

To deploy Sanity Studio separately (recommended for production):

```bash
npx sanity deploy
```

This will give you a URL like: `https://your-project.sanity.studio`

## Important Notes

- ✅ The `.env.local` file is already in `.gitignore` - never commit it!
- ✅ For production deployment (Vercel, Netlify, etc.), add these environment variables in your hosting platform's dashboard
- ✅ The `NEXT_PUBLIC_*` variables are exposed to the browser (safe for public reads)
- ✅ The `SANITY_API_TOKEN` should never be exposed to the browser (used only server-side)

## Testing Your Setup

To verify everything is working:

1. Start your dev server: `npm run dev`
2. Visit: `http://localhost:3000/studio`
3. You should see the Sanity Studio interface
4. Try creating a test blog post or case study


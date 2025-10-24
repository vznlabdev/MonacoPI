# MonacoPI

A Next.js project with Tailwind CSS, optimized for Vercel deployment.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment on Vercel

This project is configured and optimized for deployment on Vercel.

### Deploy with One Click

The easiest way to deploy is to connect your Git repository to Vercel:

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy" and your app will be live!

### Vercel Configuration

This project includes:
- ✅ **vercel.json** - Vercel-specific configuration
- ✅ **Node.js version specified** - Ensures consistent builds (`engines` in package.json)
- ✅ **Optimized build settings** - Standalone output mode for faster deployments
- ✅ **TypeScript & ESLint checks** - Enforced during builds to prevent errors
- ✅ **.nvmrc** - Node version manager configuration

### Build Requirements

The project is configured to:
- Use Node.js >= 18.17.0
- Run TypeScript type checking during builds
- Run ESLint checks during builds
- Use SWC for faster minification
- Output standalone builds for optimal performance

### Environment Variables

If you need environment variables:
1. Copy `.env.example` to `.env.local`
2. Add your environment variables
3. In Vercel dashboard, add the same variables under "Environment Variables"

## Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
npm run type-check  # Run TypeScript type checking
```

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **SWC** - Fast JavaScript/TypeScript compiler

## Project Structure

```
MonacoPI/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout
│       ├── page.tsx        # Home page
│       └── globals.css     # Global styles with Tailwind
├── public/                 # Static assets
├── .env.example            # Environment variables template
├── .nvmrc                  # Node version specification
├── vercel.json             # Vercel deployment config
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Deploy Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)


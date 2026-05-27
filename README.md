#!/bin/bash
# save as: create-portfolio.sh
# run with: bash create-portfolio.sh

mkdir -p Next.js-15-App-Router-portfolio/{app/"(site)"/{about,experience,skills,"case-studies"/[slug],services,blog,resume,contact,testimonials},app/api/contact,components/{primitives,layouts,motion,"route-components"/{home,"case-studies"},ui},lib/{actions,data},public/{images,resume}}

cd moe-kyaw-aung-portfolio

# package.json
cat > package.json << 'EOF'
{
  "name": "Next.js-15-App-Router-portfolio",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "framer-motion": "^11.11.9",
    "next": "15.2.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwindcss": "^4.0.0",
    "clsx": "^2.1.1",
    "lucide-react": "^0.454.0"
  },
  "devDependencies": {
    "@types/node": "^22.10.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "typescript": "^5.7.2"
  }
}
EOF

echo "✓ Created package.json"
echo ""
echo "Next steps:"
echo "1. cd Next.js-15-App-Router-portfolio"
echo "2. npm install"
echo "3. npm run dev"
echo ""
echo "Then open http://localhost:3000"


# 1. Create project directory
mkdir # 1. Create project directory
mkdir moe-kyaw-aung-portfolio
cd # 1. Create project directory
mkdir moe-kyaw-aung-portfolio
cd moe-kyaw-aung-portfolio

# 2. Initialize npm
npm init -y

# 3. Install dependencies
npm install next@15.2.3 react@19.0.0 react-dom@19.0.0 framer-motion@11.11.9 tailwindcss@4.0.0 clsx@2.1.1 lucide-react@0.454.0
npm install -D typescript@5.7.2 @types/node@22.10.0 @types/react@19.0.0 @types/react-dom@19.0.0 autoprefixer@10.4.20 postcss@8.4.49

# 4. Create Next.js config files (see above for full content)
# 5. Copy all the page.tsx, component, and config files from my previous responses

# 6. Run development server
npm run dev

# 2. Initialize npm
npm init -y

# 3. Install dependencies
npm install next@15.2.3 react@19.0.0 react-dom@19.0.0 framer-motion@11.11.9 tailwindcss@4.0.0 clsx@2.1.1 lucide-react@0.454.0
npm install -D typescript@5.7.2 @types/node@22.10.0 @types/react@19.0.0 @types/react-dom@19.0.0 autoprefixer@10.4.20 postcss@8.4.49

# 4. Create Next.js config files (see above for full content)
# 5. Copy all the page.tsx, component, and config files from my previous responses

# 6. Run development server
npm run dev
cd # 1. Create project directory
mkdir moe-kyaw-aung-portfolio
cd moe-kyaw-aung-portfolio

# 2. Initialize npm
npm init -y

# 3. Install dependencies
npm install next@15.2.3 react@19.0.0 react-dom@19.0.0 framer-motion@11.11.9 tailwindcss@4.0.0 clsx@2.1.1 lucide-react@0.454.0
npm install -D typescript@5.7.2 @types/node@22.10.0 @types/react@19.0.0 @types/react-dom@19.0.0 autoprefixer@10.4.20 postcss@8.4.49

# 4. Create Next.js config files (see above for full content)
# 5. Copy all the page.tsx, component, and config files from my previous responses

# 6. Run development server
npm run dev

# 2. Initialize npm
npm init -y

# 3. Install dependencies
npm install next@15.2.3 react@19.0.0 react-dom@19.0.0 framer-motion@11.11.9 tailwindcss@4.0.0 clsx@2.1.1 lucide-react@0.454.0
npm install -D typescript@5.7.2 @types/node@22.10.0 @types/react@19.0.0 @types/react-dom@19.0.0 autoprefixer@10.4.20 postcss@8.4.49

# 4. Create Next.js config files (see above for full content)
# 5. Copy all the page.tsx, component, and config files from my previous responses

# 6. Run development server
npm run dev

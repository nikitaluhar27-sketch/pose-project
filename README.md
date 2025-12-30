# Photo Poses Platform

A professional, data-driven photo poses discovery platform built with Next.js (App Router) and Tailwind CSS. This platform serves as an instructional tool for discovering and learning various photo poses with step-by-step guidance.

## Features

- 🎯 **Data-Driven Architecture**: Central JSON file powers all dynamic routes
- 📱 **Responsive Design**: Beautiful UI that works on all devices
- 🔍 **Real-Time Search**: Search poses by name, tags, or style
- 📐 **Pinterest-Style Masonry Grid**: Optimized image display with responsive columns
- 📚 **Detailed Pose Pages**: Step-by-step instructions and body language tips
- 🎨 **Dynamic Routes**: Categories (`/girls`, `/boys`, `/couples`) and niches (e.g., `/girls/saree-poses`)
- 🔗 **Deep Linking**: Direct links to specific poses and niches
- 🖼️ **Optimized Images**: Next.js Image component with proper sizing
- ♿ **Accessibility**: Descriptive alt-text for all images
- 🔎 **SEO Optimized**: Metadata, structured data (JSON-LD), and semantic HTML

## Project Structure

```
├── app/
│   ├── [category]/          # Dynamic category routes
│   │   ├── [niche]/         # Dynamic niche routes
│   │   │   └── [poseId]/    # Individual pose pages
│   ├── search/              # Search results page
│   ├── layout.tsx           # Root layout with navbar
│   ├── page.tsx             # Home page
│   └── not-found.tsx        # 404 page
├── components/
│   ├── CategoryCard.tsx     # Category display card
│   ├── MasonryGrid.tsx      # Pinterest-style grid
│   ├── Navbar.tsx           # Navigation bar
│   ├── SearchBar.tsx        # Search input component
│   └── StructuredData.tsx   # SEO structured data
├── data/
│   └── poses.json           # Central data file
└── lib/
    ├── data.ts              # Data access functions
    └── types.ts             # TypeScript types
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Data Structure

The platform is powered by `data/poses.json`, which follows this structure:

```json
{
  "categories": {
    "category-slug": {
      "title": "Category Name",
      "description": "Category description",
      "niches": {
        "niche-slug": {
          "title": "Niche Name",
          "description": "Niche description",
          "poses": [
            {
              "id": "pose-id",
              "title": "Pose Title",
              "image": "image-url",
              "alt": "Descriptive alt text",
              "difficulty": "Beginner|Intermediate|Advanced",
              "steps": ["Step 1", "Step 2", ...],
              "bodyLanguage": {
                "posture": "...",
                "hands": "...",
                "expression": "...",
                "angle": "..."
              },
              "tags": ["tag1", "tag2", ...]
            }
          ]
        }
      }
    }
  }
}
```

## Routes

- `/` - Home page with category overview
- `/[category]` - Category page showing niches (e.g., `/girls`)
- `/[category]/[niche]` - Niche page showing poses (e.g., `/girls/saree-poses`)
- `/[category]/[niche]/[poseId]` - Individual pose detail page
- `/search?q=query` - Search results page

## Adding New Poses

To add new poses, simply edit `data/poses.json`:

1. Navigate to the appropriate category and niche
2. Add a new pose object to the `poses` array
3. Ensure all required fields are present
4. The new pose will automatically be available on the site

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Masonry CSS** - Masonry grid layout
- **Next.js Image** - Optimized image loading

## SEO Features

- Dynamic metadata for all pages
- Structured data (JSON-LD) for HowTo schema
- Semantic HTML structure
- Descriptive alt-text for all images
- Open Graph tags for social sharing

## License

MIT

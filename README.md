# ð Undangan Digital Premium

Platform undangan pernikahan digital 3D dengan gaya cinematic, modern, dan interaktif.

## ð Tech Stack

- **Vue 3** - Progressive JavaScript framework with Composition API
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Three.js** - 3D graphics library
- **GSAP** - Professional animation library
- **VueUse** - Vue composition utilities
- **Pinia** - State management
- **Date-fns** - Date utilities

## â¨ Features

- ð¬ Cinematic 3D animations
- â¨ Gold particle effects
- ð± Fully responsive design
- ðµ Background music support
- â³ Countdown timer
- ð RSVP form
- ð· Photo gallery
- ðºï¸ Google Maps integration
- ð¨ Customizable themes

## ð� Project Structure

```
undangan-digital/
âââ src/
âââââ assets/          # Static assets
âââââ components/      # Vue components
âââââââ base/        # Reusable base components
âââââââ 3d/          # Three.js components
âââââââ sections/    # Page sections
âââââââ ui/          # UI components
âââââ composables/     # Composition functions
âââââ config/          # Configuration files
âââââ router/          # Vue Router
âââââ stores/          # Pinia stores
âââââ types/           # TypeScript types
âââââ utils/           # Utility functions
âââââ views/           # Page views
```

## ð ï¸ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check
```

## ð® Usage

### Development

```bash
npm run dev
```

Visit `http://localhost:5173`

### Build

```bash
npm run build
```

Output will be in `dist/` directory.

## ð¨ Customization

### Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  gold: {
    500: '#f9b31a', // Primary gold color
    // ... other shades
  }
}
```

### Content

Edit `src/views/InvitationView.vue` to customize:
- Couple names
- Event date
- Venue details
- Personal messages

## ð� Deployment

### GitHub Pages

1. Update `vite.config.ts`:
```ts
base: '/your-repo-name/'
```

2. Build and deploy:
```bash
npm run build
# Deploy dist/ folder to GitHub Pages
```

### Vercel/Netlify

Deploy automatically from Git repository.

## ð§ Configuration

### TypeScript

Type definitions are in `src/types/index.ts`

### Tailwind

Configuration in `tailwind.config.js`

### Vite

Configuration in `vite.config.ts`

## ð Performance

- Lighthouse score: >90
- First Contentful Paint: <2s
- Time to Interactive: <3s
- 60fps animations

## ð¤ Contributing

Contributions are welcome!

## ð¸ License

MIT

## ð¡ Credits

- Fonts: Google Fonts (Cormorant Garamond, Montserrat, Great Vibes)
- Icons: SVG
- Images: Unsplash (placeholders)

---

Made with â¤ï¸ using Vue 3, Three.js, and GSAP

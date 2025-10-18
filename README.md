# DPO Wealth Management

A modern React application built with Vite, Tailwind CSS, and shadcn/ui components.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Radix UI** - Headless UI primitives

## Getting Started

### Prerequisites

- Node.js 18.16.0 or higher (Note: Some packages may require Node 20+)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   └── ui/           # shadcn/ui components
├── lib/
│   └── utils.ts      # Utility functions
├── App.tsx           # Main app component
├── index.css         # Global styles with Tailwind
└── main.tsx          # App entry point
```

## Features

- ⚡ Fast development with Vite
- 🎨 Beautiful UI with Tailwind CSS
- 🧩 Reusable components with shadcn/ui
- 📱 Responsive design
- 🌙 Dark mode support
- ♿ Accessible components

## Adding New Components

To add new shadcn/ui components, you can manually copy them from the [shadcn/ui documentation](https://ui.shadcn.com/docs/components) or use the CLI (if Node version is compatible):

```bash
npx shadcn@latest add [component-name]
```

## Customization

- Modify `tailwind.config.js` for Tailwind customization
- Update CSS variables in `src/index.css` for theme customization
- Add new components in `src/components/ui/`

## License

MIT

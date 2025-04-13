# PDM GROUP Website

The official website for PDM GROUP, showcasing our work with artists and businesses.

## Features

- Dark mode by default
- Responsive design
- Smooth page transitions with persistent background
- Artist portfolio showcase
- Business services overview

## Technical Details

### Page Transitions

The site uses a fixed background layer to prevent white flashes during page transitions. This is implemented through:

- A fixed position background div with negative z-index
- Consistent dark theme enforcement
- Loading states that maintain visual consistency

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm build
```

## License

All rights reserved © PDM GROUP

## Tech Stack

- Next.js 15.2.4
- React 19
- TypeScript
- Tailwind CSS
- Radix UI Components
- Shadcn/ui

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/pdm-homepage.git
cd pdm-homepage
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env.local` file:

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
pnpm dev
```

The site will be available at `http://localhost:3000`

### Building for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/                # Next.js app directory
├── components/         # Reusable components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── public/            # Static assets
└── styles/            # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Contact

PDM GROUP - [contact@pdmgroup.com](mailto:contact@pdmgroup.com)

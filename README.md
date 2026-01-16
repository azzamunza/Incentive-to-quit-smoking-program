# Clean Air Rewards - Smoking Cessation Programme Proposal

A production-ready, high-fidelity proposal website for the Australian Government's "Clean Air Rewards" initiative - a data-driven, incentive-based smoking cessation programme.

## 🌟 Overview

Clean Air Rewards is an innovative smoking cessation programme that integrates with existing Australian health services including My Health Record and the pharmacy network. This website serves as a comprehensive proposal demonstration showcasing the programme's four-stage approach, economic viability, and participant benefits.

## 🚀 Features

### Design System
- **Australian Government Aesthetic**: Professional colour palette featuring Deep Teal (#00698f) and Eucalyptus Green (#2e7d32)
- **Accessibility**: WCAG 2.1 AA compliant with high contrast ratios and comprehensive aria-labels
- **Responsive Design**: Seamless experience from mobile to desktop with adaptive layouts

### Interactive Components

#### 1. Sticky Header
- Semi-transparent backdrop blur effect
- Responsive navigation menu
- Mobile hamburger menu with smooth transitions

#### 2. Hero Section
- Gradient background with Australian Government branding
- Animated feature cards highlighting key benefits
- Clear call-to-action buttons

#### 3. Interactive Timeline Infographic
Four scroll-triggered stages with custom animations:

- **Stage 1 - GP Gateway**: DNA biological verification animation showing integration with general practitioners
- **Stage 2 - Chemist Routine**: Test strip animation transitioning from orange (nicotine detected) to green (verified clean)
- **Stage 3 - Rewards Programme**: Three-tier gamification system (Reducer, Transitional, Platinum) with progressive rewards
- **Stage 4 - Official Recognition**: Animated Gold Shield badge representing official non-smoker certification

#### 4. Economic Analysis
- Dynamic chart visualising programme costs vs health savings over 10 years
- Breakeven point highlighted at 3 years
- Supporting statistics demonstrating long-term value

### Content Features
- Australian English spelling throughout (programme, optimise, colour)
- Integration with existing health infrastructure (My Health Record, pharmacy network)
- Clear participant journey from initiation to certification
- Economic justification with data-driven insights

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Next.js built-in compiler

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🌐 Development

The development server runs on `http://localhost:3000`. The application uses Next.js App Router with the following structure:

```
/
├── app/
│   ├── page.tsx          # Main page component
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles and Tailwind directives
├── components/
│   ├── StickyHeader.tsx       # Navigation header
│   ├── Hero.tsx               # Hero section
│   ├── TimelineStep.tsx       # Reusable timeline component
│   ├── Stage1GPGateway.tsx    # GP Gateway stage
│   ├── Stage2ChemistRoutine.tsx # Chemist testing stage
│   ├── Stage3Rewards.tsx      # Rewards programme stage
│   ├── Stage4Recognition.tsx  # Recognition stage
│   └── EconomicAnalysis.tsx   # Economic impact section
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Customisation

### Colours
The colour palette is defined in `tailwind.config.js`:
- Deep Teal: `#00698f`
- Eucalyptus Green: `#2e7d32`

### Typography
System fonts are used for optimal compatibility:
- Font stack: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, etc.

### Animations
Framer Motion provides scroll-triggered animations throughout the site. Key animation points:
- Scroll threshold: -100px margin for timeline steps
- Duration: 0.6s for most transitions
- Easing: Default ease-out for smooth motion

## 🔒 Security

All dependencies are regularly updated, and the codebase has been scanned for vulnerabilities:
- ✅ No security vulnerabilities detected
- ✅ No ESLint errors
- ✅ TypeScript strict mode enabled

## 📱 Browser Support

The website is tested and optimised for:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

This is a demonstration project. For questions or suggestions, please open an issue.

## 📧 Contact

This is a proposal demonstration website for illustrative purposes. All information represents a conceptual programme design.

---

© 2026 Australian Government Initiative (Proposal Demonstration)
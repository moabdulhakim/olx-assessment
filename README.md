# OLX Lebanon - Technical Assessment

A production-grade classifieds platform built with Next.js, TypeScript, and pure CSS modules, showcasing modern web development practices with server-side rendering, internationalization, and responsive design.

---

## 🚀 Key Features

### ✅ Implemented

- **Server-Side Rendering (SSR)**: Home screen is fully server-rendered for optimal performance and SEO, with categories fetched at request time using `getServerSideProps`.

- **Simulated Asynchronous Data Loading**: Featured Ads section implements JavaScript Promises to simulate realistic loading behavior (4-second delay), demonstrating proper async state management.

- **Multilingual Support**: Complete Arabic and English language support with seamless toggling and full RTL (Right-to-Left) layout implementation for Arabic content.

- **Responsive Design**: Mobile-first approach following OLX Lebanon's UI guidelines, ensuring optimal experience across all device sizes.

- **Zero Dependencies UI**: All components and styling built from scratch without external UI libraries (no Material-UI, Ant Design, etc.).

- **Custom CSS Modules**: Modular, scoped styling with pure CSS—no Tailwind or utility frameworks.

- **Type-Safe Development**: Full TypeScript implementation ensuring type safety across the entire codebase.

### 🚧 Work in Progress

**Post An Ad Screen**: Currently under development. Due to University Final Exams (ending January 20th, 2026), I prioritized delivering a high-quality architectural foundation with the Home Screen implementation. The dynamic form logic and category-specific field rendering for the Post An Ad feature will be completed by **January 14th, 2026**.

---

## 🏗️ Architectural Decisions

### Why Server-Side Rendering?

SSR was chosen for the Home Screen to:
- Improve initial page load performance
- Enhance SEO capabilities for category pages
- Provide better user experience with immediate content availability
- Demonstrate understanding of Next.js rendering strategies

### Why JavaScript Promises?

The Featured Ads section uses Promises to:
- Simulate real-world API behavior with loading states
- Demonstrate proper async/await patterns
- Show implementation of loading skeletons and error handling
- Provide a foundation for future API integration

### Technology Choices

- **Next.js Pages Router**: Chosen for its mature SSR capabilities and straightforward routing model
- **TypeScript**: Ensures type safety and better developer experience
- **Pure CSS Modules**: Provides scoped styling without build-time overhead of utility frameworks
- **No External UI Libraries**: Demonstrates ability to build production-quality UI components from scratch

---

## 📁 Folder Structure

```
olx-assessment/
├── public/
│   ├── assets/
│   │   ├── icons/          # SVG icons and graphics
│   │   ├── images/         # Static images
│   │   └── logo.svg        # OLX logo
│   ├── dummyData.ts        # Mock data for development
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/         # Shared components (Header, Navbar, AdCard)
│   │   ├── pages/          # Page-specific components
│   │   │   └── home/       # Home page sections (HeroBanner, FeaturedAds, AllCategories)
│   │   └── ui/             # Reusable UI primitives (Button, Input, OlxLink)
│   ├── hooks/
│   │   ├── useTranslation.ts   # i18n hook
│   │   └── useClickOutside.ts  # Click outside detection
│   ├── locales/
│   │   ├── ar.ts           # Arabic translations
│   │   └── en.ts           # English translations
│   ├── pages/
│   │   ├── _app.tsx        # Application wrapper
│   │   ├── _document.tsx   # Custom document with RTL support
│   │   ├── index.tsx       # Home page with SSR
│   │   └── ui.tsx          # UI component showcase
│   ├── services/
│   │   ├── adsService.ts       # Featured ads data fetching
│   │   └── categoryService.ts  # Category data fetching
│   ├── styles/
│   │   ├── components/     # Component-specific styles
│   │   ├── pages/          # Page-specific styles
│   │   └── globals.css     # Global styles and CSS variables
│   ├── types/
│   │   └── category.ts     # TypeScript type definitions
│   └── utils/
│       └── utils.ts        # Utility functions
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/moabdulhakim/olx-assessment.git
   cd olx-assessment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

---

## 🌐 Language Support

Switch between Arabic and English using the language toggle in the header. The application supports:
- Complete UI translation
- RTL/LTR layout switching
- Locale-specific formatting

---

## 📋 Development Notes

### Current Status

✅ **Completed**: Home Screen with SSR, multilingual support, responsive design, and simulated async data loading

🚧 **In Progress**: Post An Ad screen (dynamic form logic)

### Timeline Commitment

Due to university commitments (Final Exams ending January 20th), I focused on delivering a solid architectural foundation. I am committed to completing the Post An Ad feature with full dynamic form functionality by **January 14th, 2026**.

---

## 👨‍💻 Contact Information

**Developer**: Mohamad Abdulhakim

Feel free to reach out for any questions or clarifications regarding this assessment.

---

## 📄 License

This project was created as a technical assessment for OLX Lebanon.

---

**Built with ❤️ using Next.js, TypeScript, and Pure CSS**

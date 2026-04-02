# OLX Lebanon - Technical Assessment

A functional classifieds platform built with Next.js, TypeScript, and pure CSS modules. This project was developed to demonstrate core web development fundamentals, focusing on dynamic UI rendering, custom state management, and internationalization without relying on heavy external UI libraries.

---

## 🚀 Technical Highlights

### 1. Dynamic Form Engine (Metadata-Driven)
Instead of hardcoding form fields for specific categories (like Cars or Properties), the "Post An Ad" page uses a dynamic engine. It reads metadata from the OLX API (`valueType`, `filterType`, `isMandatory`) and maps it directly to reusable UI components. This allows the app to support any new category added to the backend automatically.

### 2. Custom State & Validation Management
To keep the bundle light and demonstrate React proficiency, I built a custom `useForm` hook rather than using libraries like Formik or React Hook Form. It handles:
- Centralized form state for dynamic fields.
- Runtime validation based on the API's `isMandatory` flags.
- Error tracking and submission logic.

### 3. Zero External UI Libraries & Pure CSS
All components (Modals, Selects, Buttons, Inputs) were built entirely from scratch. Styling is scoped using pure CSS Modules (no Tailwind or Material-UI). This constraint was intentionally chosen to showcase a solid understanding of CSS and component architecture.

### 4. Rendering & Async State
- **SSR (Server-Side Rendering):** The home page fetches category data at request time using `getServerSideProps` for better SEO and initial load speed.
- **Async UI Handling:** The Featured Ads section simulates real API delays, handling the loading state smoothly using custom Skeleton components.

### 5. Full Multilingual & RTL Support
Complete support for English and Arabic. The UI seamlessly toggles languages and shifts to a complete Right-to-Left (RTL) layout for Arabic content.

## 📁 Folder Structure

```
olx-assessment/
├── public/
│   ├── assets/
│   │   ├── icons/              # SVG icons and graphics
│   │   ├── images/             # Static images (category images)
│   │   └── logo.svg            # OLX logo
│   ├── dummyData.ts            # Mock data for development
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/             # Shared components
│   │   │   ├── AdCard.tsx      # Product card component
│   │   │   ├── AdCardSkeleton.tsx  # Loading skeleton for ads
│   │   │   ├── Header.tsx      # Main header
│   │   │   ├── LoginModal.tsx  # Authentication modal
│   │   │   ├── Navbar.tsx      # Navigation bar
│   │   │   └── ProfileAvatar.tsx
│   │   ├── pages/              # Page-specific components
│   │   │   ├── home/           # Home page sections
│   │   │   │   ├── AllCategories.tsx
│   │   │   │   ├── FeaturedAds.tsx
│   │   │   │   └── HeroBanner.tsx
│   │   │   └── post/           # Post Ad page components
│   │   │       ├── ChooseCategory.tsx
│   │   │       ├── Header.tsx
│   │   │       └── attributes/
│   │   │           ├── AttributesContainer.tsx  # Main form container with useForm integration
│   │   │           ├── AttributeField.tsx       # Field wrapper component
│   │   │           └── DynamicField.tsx         # Metadata-to-UI mapper component
│   │   └── ui/                 # Reusable UI primitives (zero external libraries)
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       ├── Modal.tsx
│   │       ├── MultipleSelect.tsx      # For filterType: "multiple_choice"
│   │       ├── OlxLink.tsx
│   │       └── SearchableSelect.tsx    # For filterType: "single_choice"
│   ├── hooks/
│   │   ├── useCategoryAttributes.ts    # Category metadata fetching hook
│   │   ├── useClickOutside.ts          # Click outside detection
│   │   ├── useForm.ts                  # Custom form state management hook
│   │   └── useTranslation.ts           # i18n hook
│   ├── locales/
│   │   ├── ar.ts               # Arabic translations
│   │   └── en.ts               # English translations
│   ├── pages/
│   │   ├── _app.tsx            # Application wrapper
│   │   ├── _document.tsx       # Custom document with RTL support
│   │   ├── index.tsx           # Home page with SSR
│   │   └── post/
│   │       ├── index.tsx       # Category selection page
│   │       └── attributes.tsx  # Dynamic form page
│   ├── services/
│   │   ├── adsService.ts           # Featured ads data fetching (with Promises)
│   │   └── categoryService.ts      # Category and field metadata API
│   ├── store/
│   │   ├── useAuthStore.tsx        # Zustand store for authentication
│   │   └── useCategoryStore.tsx    # Zustand store for category state
│   ├── styles/
│   │   ├── components/         # Component-specific CSS modules
│   │   │   ├── common/
│   │   │   └── ui/
│   │   ├── pages/              # Page-specific CSS modules
│   │   │   ├── Attributes.module.css
│   │   │   ├── Home.module.css
│   │   │   ├── Post.module.css
│   │   │   └── UI.module.css
│   │   └── globals.css         # Global styles and CSS variables
│   ├── types/
│   │   ├── category.ts         # TypeScript type definitions (CategoryField, FieldsResponse)
│   │   └── User.ts
│   └── utils/
│       └── utils.ts            # Utility functions
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher) and npm (or yarn/pnpm)

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
- Dynamic field name translation based on API metadata

---

## 🔍 The Form Engine Workflow

To understand how the dynamic form works under the hood:

1. **User Selects Category:** The app requests the specific fields for that category via `getCategoryFields(slug)`.
2. **API Returns Rules:** The response includes an array of `CategoryField` objects detailing what input type is needed.
3. **UI Mapper (`DynamicField.tsx`):** Reads the `filterType` and returns the matching custom component (e.g., `"single_choice"` renders the custom `SearchableSelect`).
4. **Validation Pipeline:** Before submission, the custom `useForm` hook cross-references the user's input against the `isMandatory` rule from step 2.

---

## 👨‍💻 Contact Information

**Engineer**: Mohammad Abdulhakim

Feel free to reach out for any questions or clarifications regarding this assessment.

---

## 📄 License

This project was created as a technical assessment for OLX Lebanon.

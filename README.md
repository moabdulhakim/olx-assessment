# OLX Lebanon - Technical Assessment

A production-grade classifieds platform built with Next.js, TypeScript, and pure CSS modules, showcasing modern web development practices with metadata-driven UI architecture, server-side rendering, and internationalization.

---

## 🚀 Key Features

### ✅ Implemented

- **Metadata-Driven Dynamic Form Engine**: The "Post An Ad" page implements a fully generic, scalable form engine that supports **ALL categories** provided by the OLX API. The engine dynamically maps API metadata (`valueType`, `filterType`, `isMandatory`) to reusable UI components, eliminating the need for category-specific hardcoded logic.

- **Custom Form State Management**: Built-in `useForm` hook provides centralized state management with support for dynamic validation, error handling, and form submission logic.

- **Dynamic Validation Engine**: Implements runtime validation based on the `isMandatory` constraint from API metadata. Required fields are automatically validated before form submission.

- **Server-Side Rendering (SSR)**: Home screen is fully server-rendered for optimal performance and SEO, with categories fetched at request time using `getServerSideProps`.

- **Simulated Asynchronous Data Loading**: Featured Ads section implements JavaScript Promises to simulate realistic loading behavior (4-second delay), demonstrating proper async state management.

- **Multilingual Support**: Complete Arabic and English language support with seamless toggling and full RTL (Right-to-Left) layout implementation for Arabic content.

- **Zero External UI Libraries**: All components and styling built from scratch without external UI libraries (no Material-UI, Ant Design, Chakra UI, etc.). This constraint demonstrates the ability to build production-quality UI from the ground up.

- **Custom CSS Modules**: Modular, scoped styling with pure CSS—no Tailwind, Bootstrap, or utility frameworks.

- **Type-Safe Development**: Full TypeScript implementation ensuring type safety across the entire codebase.

---

## 🏗️ Architectural Decisions

### Metadata-Driven UI Architecture

The core architectural principle of this project is **scalability through metadata-driven rendering**. Instead of hardcoding form fields for specific categories (e.g., Cars, Properties), the dynamic form engine:

1. **Fetches category metadata** from the OLX API (`/api/categoryFields`)
2. **Maps API field types** to generic UI components:
   - `filterType: "single_choice"` → `SearchableSelect`
   - `filterType: "multiple_choice"` → `MultipleSelect`
   - `filterType: "range"` with `valueType: "float"` → `Input type="number"`
3. **Applies runtime validation** based on `isMandatory` flags
4. **Supports all present and future categories** without code changes

This approach ensures the UI remains adaptable as the API evolves.

### Centralized Form State Management

A custom `useForm` hook (`src/hooks/useForm.ts`) provides:
- **Generic state management** for any form structure
- **Dynamic validation** with custom validation functions
- **Error tracking** per field
- **Submission state management** with loading indicators

This hook is reusable across the application and eliminates the need for external form libraries like React Hook Form or Formik.

### Server-Side Rendering Strategy

SSR was chosen for the Home Screen to:
- Improve initial page load performance
- Enhance SEO capabilities for category pages
- Provide better user experience with immediate content availability
- Demonstrate understanding of Next.js rendering strategies

### Asynchronous State Management

The Featured Ads section uses JavaScript Promises to:
- Simulate real-world API behavior with loading states
- Demonstrate proper async/await patterns
- Show implementation of loading skeletons and error handling
- Provide a foundation for future API integration

### Technology Constraints

- **Next.js Pages Router**: Chosen for its mature SSR capabilities and straightforward routing model
- **TypeScript**: Ensures type safety and better developer experience
- **Pure CSS Modules**: Provides scoped styling without build-time overhead of utility frameworks
- **Zero External UI Libraries**: Demonstrates ability to build production-quality UI components from scratch

---

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

## 🔍 Implementation Deep Dive

### Dynamic Form Engine Flow

1. **Category Selection** (`/post`): User selects a category from the hierarchical category tree
2. **Metadata Fetching** (`/post/attributes`): 
   - System calls `getCategoryFields(categorySlug)` to fetch field metadata
   - API returns `CategoryField[]` with `valueType`, `filterType`, `isMandatory`, and `choices`
3. **Dynamic Rendering** (`DynamicField.tsx`):
   - Maps `filterType` to appropriate component:
     - `"single_choice"` → `SearchableSelect` with `choices`
     - `"multiple_choice"` → `MultipleSelect` with `choices`
     - `"range"` → `Input type="number"`
4. **Validation** (`useForm` hook):
   - Iterates through all fields
   - Checks `isMandatory` flag
   - Displays field-specific error messages
5. **Form Submission**: Collected data is logged (ready for API integration)

### Key Files

- **`src/hooks/useForm.ts`**: Generic form state management with validation support
- **`src/components/pages/post/attributes/AttributesContainer.tsx`**: Integrates `useForm` with metadata-driven rendering
- **`src/components/pages/post/attributes/DynamicField.tsx`**: Maps API `filterType` to UI components
- **`src/services/categoryService.ts`**: Fetches category metadata from OLX API

---

<!--
## 🚀 Future Roadmap

The following features are planned for future releases to enhance the metadata-driven architecture:

### Planned Enhancements

- **Recursive Dependent Field Rendering**: Implement support for fields with dependencies (e.g., selecting "Cars" → shows "Make" → selecting a make shows "Model"). This requires parsing the `parentFieldLookup` from the API response and implementing conditional rendering logic.

- **Advanced Validation Rules**: Extend validation to support:
  - `minValue` and `maxValue` constraints for range fields
  - Pattern matching for string fields
  - Cross-field validation (e.g., "max price must be greater than min price")

- **Image Upload**: Integrate image upload functionality with preview and compression

- **Location Field**: Implement hierarchical location selector based on `locationDepthLimits`

- **API Integration**: Connect form submission to actual OLX posting endpoints

- **Field Templates**: Support for `templateConfigs` from category metadata for custom field layouts

### Technical Debt

- Add unit tests for form validation logic
- Add E2E tests for the complete post-ad flow
- Optimize bundle size with dynamic imports
- Implement error boundaries for production resilience

---

## 📋 Current Implementation Status

### ✅ Fully Implemented

- **Home Page**: Complete with SSR, Featured Ads (async loading), and category browsing
- **Post Ad - Category Selection**: Full category tree navigation
- **Post Ad - Dynamic Forms**: Metadata-driven form engine supporting all categories
- **Form Validation**: Dynamic validation based on `isMandatory` constraints
- **Internationalization**: Arabic/English with RTL support
- **UI Components**: Complete set of zero-dependency components

### 🎯 Production Ready

The current implementation is production-ready for the implemented features. The architecture is designed for scalability, and the codebase follows industry best practices for type safety, component reusability, and separation of concerns.

---

## 👨‍💻 Technical Assessment Notes

This project demonstrates:

- **Architectural Thinking**: Metadata-driven design that scales with API evolution
- **TypeScript Proficiency**: Comprehensive type definitions for API responses and component props
- **React Best Practices**: Custom hooks, component composition, and state management
- **CSS Mastery**: Complex layouts without utility frameworks (pure CSS modules)
- **Next.js Expertise**: Proper use of SSR, Pages Router, and image optimization
- **Problem Solving**: Building reusable form infrastructure without external libraries

---
-->
## 👨‍💻 Contact Information

**Engineer**: Mohammad Abdulhakim

Feel free to reach out for any questions or clarifications regarding this assessment.

---

## 📄 License

This project was created as a technical assessment for OLX Lebanon.

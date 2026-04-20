# 🤖 Sarah's AI Recruiter
**Intelligent Talent Acquisition Powered by AI**

[![Tested on Gemini](https://img.shields.io/badge/Tested_on-Gemini_CLI-8E44AD?style=for-the-badge&logo=google-gemini&logoColor=white)](https://github.com/google/gemini-cli)
[![Tech Stack: React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![UI: shadcn/ui](https://img.shields.io/badge/UI-shadcn--ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)

**Sarah's AI Recruiter** is a modern, AI-driven recruitment platform designed to streamline the hiring process. Built with React, TypeScript, and shadcn-ui, it provides a seamless interface for managing candidates, interviews, and feedback.

`✅ AI Talent Acquisition | ✅ React 18+ | ✅ MIT Licensed | ✅ Vite/Bun Optimized`

## 🎬 UI Preview
![UI Preview](showcase/ui_preview.svg)

## 🏗 Architecture
The application is built with a modern React component-based architecture, utilizing atomic design principles and custom hooks for business logic.

```mermaid
graph TD
    A[Vite/Bun] --> B[App / Layout]
    B --> C[Pages / Routes]
    C --> D[Dashboard]
    C --> E[Upload View]
    C --> F[Candidate View]
    D --> G[Shadcn UI Components]
    E --> G
    F --> G
    B --> H[Custom Hooks]
    H --> I[Toast / Mobile Detection]
```

### Core Components
- **Pages**: Top-level route components for Dashboard, Analysis, and Uploads.
- **Components**: Functional components including Sidebar, NavLinks, and specialized Modals.
- **UI Kit**: Reusable shadcn/ui primitives for consistent design.
- **Logic Layers**: Custom hooks for state management and interactive feedback.

## 🛠 Tech Stack
- **Framework**: React 18+ (TypeScript)
- **Styling**: Tailwind CSS & shadcn/ui
- **Build Tool**: Vite / Bun
- **Platform**: Lovable

## 🚀 Getting Started
```bash
npm install
npm run dev
```

## 📜 License
This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---
*Built with ❤️ for Modern Recruitment.*

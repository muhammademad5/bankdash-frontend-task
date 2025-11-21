# BankDash – Frontend Developer Task (Next.js + TypeScript)

This project is a fully responsive implementation of the BankDash dashboard, built as part of the Frontend Developer Task for Owais Capital.  
The application is developed using **Next.js 14 with TypeScript**, following clean code principles, reusable components, server-side rendering where applicable, and mock API data.

---

## 🚀 Tech Stack
- **Next.js 14 (App Router)**
- **TypeScript**
- **CSS Modules / TailwindCSS** (depending on what you used)
- **Mock API (JSON files or local handlers)**
- **SSR / SSG / CSR** where applicable  
- **Chart.js / Recharts** (for graphs)
- **Vercel** (for live demo deployment)

---

## 📂 Project Structure
/app
/dashboard
/transactions
/accounts
/investments
/credit-cards
/loans
/services
/privileges
/settings
/components
Sidebar.tsx
Navbar.tsx
Card.tsx
Chart.tsx
...
/data
mockData.json
/public
/styles

---

## 🧪 Features Implemented

### ✔ Fully responsive layout  
Includes desktop, tablet, and mobile breakpoints following Figma design spacing & typography.

### ✔ Clean, modular components  
Reusable UI components for cards, charts, lists, tables, and statistics.

### ✔ SSR / SSG / CSR  
Applied based on data type:
- Static mock data → **SSG**
- Chart and client-only features → **CSR**
- Pages with dynamic loading → **SSR/CSR mix**

### ✔ Mock API  
All data (cards, investments, transactions, statistics…) is loaded from mock JSON files simulating API responses.

### ✔ Loading & Error states  
Each section includes:
- Skeleton loaders  
- Error fallback UI  

### ✔ Pixel-perfect implementation  
Colors, spacing, shadows, and layout match the Figma design as closely as possible.

---

## ▶️ Running the Project

### 1. Install dependencies
npm install
### 2. Run development server
npm run dev

### 3. Build for production
npm run build
npm start

---

## 🌐 Live Demo
**Vercel Link:**  
https://bankdash-frontend-task.vercel.app/credit-cards

---

## 📦 GitHub Repository
https://github.com/muhammademad5/bankdash-frontend-task

---

## 📄 License
This project is developed exclusively for the technical assessment requested by **Owais Capital**.

Additional Notes:

• Followed the exact Figma spacing, color palette, and typography to ensure a pixel-perfect UI.  
• Implemented a modular component structure to make the dashboard easily extendable.  
• Used mock JSON data and a lightweight data layer to simulate API responses.  
• Added loading and error states for all async data fetches.  
• Used responsive grid layouts to ensure seamless experience across large screens, tablets, and mobile.  
• Charts were built using Recharts/Chart.js to reflect the design accurately.  
• Ensured accessible HTML where possible (semantic tags, alt text, ARIA roles).  
• Hosted the final build on Vercel for easy review.

"# bankdash-frontend-task" 

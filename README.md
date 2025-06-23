## YC Clone 🦄

A YC-style startup showcase platform built with **Next.js 15**, **Sanity CMS**, **Tailwind CSS**, and **GitHub authentication**. Users can explore startups, search in real-time, and post their own — all backed by a modern fullstack stack.

> ✅ Deployed at: [yc-app-bay.vercel.app](https://yc-app-bay.vercel.app)

---

## 🛠️ Stack Overview

| Layer       | Tech Used                           | Description |
|------------|--------------------------------------|-------------|
| Frontend   | Next.js 15 (App Router)              | SSR + partial pre-rendering |
| Styling    | Tailwind CSS + shadcn/ui             | Utility-first responsive styling |
| Auth       | NextAuth.js with GitHub Provider     | Secure OAuth-based login |
| CMS        | Sanity (Content Lake + GROQ)         | Stores startups & user data |
| Images     | next/image + remote pattern config   | Optimized image delivery |
| Hosting    | Vercel                               | CI/CD + global edge network |

---

## 🚀 Features

- ✅ **Browse All Startups** – Cards with logo, title, description, author, and views
- 🔍 **Real-Time Search** – Search bar updates results instantly via URL params
- 👤 **User Profiles** – Each startup shows the author with profile linking
- ✍️ **Submit Startups** – Authenticated users can publish new startups
- 🔐 **GitHub Auth** – Login and access control via GitHub OAuth
- 💨 **Fully Responsive** – Works beautifully on mobile and desktop

---

## 🧪 Getting Started

First, clone the repo and install dependencies:

```bash
git clone https://github.com/ompatel2019/yc-app.git
cd yc-app

npm install
# or: yarn / pnpm / bun install

Then, run the dev server:

npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app.

---

## 🧱 Project Structure

```txt
app/
├─ page.tsx                 // homepage listing
├─ startup/                 // startup details + create page
├─ user/                   // author profile

components/
├─ Navbar.tsx
├─ StartupCard.tsx
├─ StartupForm.tsx
├─ Skeleton.tsx

lib/
├─ actions.ts              // server actions
├─ client.ts               // Sanity client
├─ queries.ts              // GROQ queries
├─ utils.ts

sanity/
├─ schemas/                // author, startup, blockContent
```

---

## 📦 Scripts

* `npm run dev` – Start dev server
* `npm run build` – Create production build
* `npm run start` – Serve the production build
* `npm run lint` – Lint codebase
* `npm run typegen` – Generate Sanity types

---

## 📜 License

This project is licensed under the MIT License.

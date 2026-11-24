# mlsoftware-portfolio

Website of M&L Software, a software house focused on payments and reconciliation, document automation, WhatsApp Business with secure AI, and legacy system modernization. Built with a focus on performance, accessibility and internationalization.

### View Live:

Check it here: [https://mlsoftware.com.br](https://mlsoftware.com.br)

---

## Features

- ✅ **Next.js 16** with App Router (`/src/app`)
- 🎨 **TailwindCSS** for modern, responsive styling
- 🌐 **Internationalization (i18n)** with `next-intl` — has **pt-BR**, **en-US** and **es**
- 🌙 **Dark mode** via `next-themes`
- ⚙️ Location language redirection middleware
- 📬 Functional contact form with **Formspree** integration
- 🧩 Reusable and decoupled components
- 🔍 Optimized SEO and applied accessibility
- 🚀 Automated deployment via **Vercel**

---

## 📦 Core Technologies

| Tech                                                      | Version / Note                                |
| --------------------------------------------------------- | --------------------------------------------- |
| [Next.js](https://nextjs.org/)                            | v16 - App Router, SSR and optimizations       |
| [TailwindCSS](https://tailwindcss.com/)                   | Used with `@apply` and responsiveness         |
| [next-intl](https://next-intl-docs.vercel.app/)           | Support 3 languages with automatic fallback   |
| [Framer Motion](https://www.framer.com/motion/)           | Smooth animations in sections and transitions |
| [next-themes](https://github.com/pacocoursey/next-themes) | Light/Dark Theme Management                   |

---

## Folder Structure

```
src/
├── app/
│ └── [locale]/
│ ├── page.tsx
│ └── layout.tsx
├── components/
│ ├── home/
│ ├── shared/
├── i18n/
├── lib/
├── messages/
├── providers/
└── proxy.ts
```

---

## Run Locally

```
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Visit: http://localhost:3000
```

## Contact

Want to talk to our team? Reach out via the contact form at [mlsoftware.com.br](https://mlsoftware.com.br).

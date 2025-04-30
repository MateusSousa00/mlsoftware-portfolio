# mlsoftware-portfolio

Personal portfolio developed with a focus in performance, accessibility, internationalization and scability. It presents my career as Software Engineer, highlights my key projects, and integrates with external content such as Dev.to.

### View Live:

Check it here: [https://mlsoftware.tech](https://mlsoftware.tech)

---

## Features

- ✅ **Next.js 15** with App Router (`/src/app`)
- 🎨 **TailwindCSS** for modern, responsive styling
- 🌐 **Internationalization (i18n)** with `next-intl` — has **pt-BR**, **en-US** and **es**
- 🌙 **Dark mode** via `next-themes`
- 📝 **Integração with o Dev.to** for automatic article listing.
- ⚙️ Location language redirection middleware
- 📬 Functional contact form with **Formspree** integration
- 🧩 Reusable and decoupled components
- 🔍 Optimized SEO and applied accessibility
- 🚀 Automated deployment via **Vercel**

---

## 📦 Core Technologies

| Tech                                                      | Version / Note                                |
| --------------------------------------------------------- | --------------------------------------------- |
| [Next.js](https://nextjs.org/)                            | v15 - App Router, SSR and optimizations       |
| [TailwindCSS](https://tailwindcss.com/)                   | Used with `@apply` and responsiveness         |
| [next-intl](https://next-intl-docs.vercel.app/)           | Support 3 languages with automatic fallback   |
| [Dev.to API](https://developers.forem.com/api/)           | Dynamic loaded articles                       |
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
├── hooks/
├── i18n/
├── lib/
├── messages/
├── providers/
└── middleware.ts
```

---

## Run Locally

```
# Install dependencies
npm install

# Start development server
npm run dev

# Visit: http://localhost:3000
```

## Contact

Want to discuss the project or collaborate? Reach out via the contact form on the website or through my [Linkedin](https://linkedin.com/in/mateussousa00).

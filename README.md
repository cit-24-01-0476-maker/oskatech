# OSKATECH (GitHub Pages Ready)

Cyber-themed storefront template built with **Vite + React + Tailwind**.

✅ Works on GitHub Pages (uses HashRouter)  
✅ Store + Order modal (sends message to WhatsApp/Telegram)  
✅ Downloads page (official links only)  
✅ Easy edit products/prices in `src/data/products.js`  

---

## 1) Install

```bash
npm install
npm run dev
```

## 2) Edit your info

- `src/config.js` → WhatsApp number, Telegram username, groups, email
- `src/data/products.js` → products/prices/durations
- `src/data/downloads.js` → official download links

## 3) Deploy to GitHub Pages

### A) Create repo
Create a GitHub repo named **oskatech** (or any name).

### B) Set base path (only if repo name is not root domain)
If your repo is `https://github.com/<user>/oskatech` then set:

**Windows PowerShell**
```powershell
$env:GITHUB_PAGES_BASE="/oskatech/"
npm run deploy
```

**macOS/Linux**
```bash
GITHUB_PAGES_BASE="/oskatech/" npm run deploy
```

### C) Enable Pages
GitHub → Repo → Settings → Pages  
Source: `gh-pages` branch (root)

---

## Legal note
This template is intended for **official/authorized subscriptions** and **your own digital services**.  
Do not sell shared credentials, cracked software, or pirated downloads.

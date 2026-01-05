// src/data/offers.js

export const offers = [
  // 🔥 FEATURED (OfferBar එකේ show වෙන එක)
  {
    id: "perplexity-pro-12m",
    title: "Perplexity Pro",
    subtitle: "12 Months Premium Access ✨",
    price: "Rs 4,000",
    image: "/offers/perplexity-12months.png",
    badge: "Limited Time",
    featured: true,
    whatsapp:
      "Hi OSKATECH 👋 I want Perplexity Pro — 12 Months Premium Access ✨ | Price: Rs 4,000 (Limited-time offer). Please send payment details.",
  },

  // ✅ ChatGPT Offer (with photo)
  {
    id: "chatgpt-plus-1m",
    title: "ChatGPT Plus",
    subtitle: "1 Month Plan (Shared / Private)",
    price: "Shared: Rs 1,000 | Private: Rs 2,000",
    image: "/offers/chatgpt-plus.png",
    badge: "Hot Deal",
    featured: false,
    whatsapp:
      "Hi OSKATECH 👋 I want ChatGPT Plus (1 Month). Shared: Rs 1,000 / Private: Rs 2,000. Please send payment details.",
  },

  // ✅ (Optional) Gemini offer example (keep/remove as you want)
  {
    id: "gemini-ai",
    title: "Gemini AI",
    subtitle: "1 Month / 3 Months",
    price: "1 Month: Rs 1,000 | 3 Months: Rs 2,500",
    image: "/offers/gemini-3months.png",
    badge: "Popular",
    featured: false,
    whatsapp:
      "Hi OSKATECH 👋 I want Gemini AI. 1 Month: Rs 1,000 / 3 Months: Rs 2,500. Please send payment details.",
  },
]

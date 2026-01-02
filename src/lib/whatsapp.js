export function waLink(number, message) {
  const clean = (number || "").replace(/\D/g, "")
  const text = encodeURIComponent(message || "")
  return `https://wa.me/${clean}?text=${text}`
}

export function tgLink(username, message) {
  const clean = (username || "").replace(/^@/, "")
  const text = encodeURIComponent(message || "")
  return `https://t.me/${clean}?text=${text}`
}

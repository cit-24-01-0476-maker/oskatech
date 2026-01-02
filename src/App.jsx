import { HashRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import Store from "./pages/Store.jsx"
import Downloads from "./pages/Downloads.jsx"
import FAQ from "./pages/FAQ.jsx"
import Contact from "./pages/Contact.jsx"
import Policies from "./pages/Policies.jsx"

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policies" element={<Policies />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  )
}

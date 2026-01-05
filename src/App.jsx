import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { lazy, Suspense } from "react"
import Navbar from "./components/Navbar.jsx"

const Home = lazy(() => import("./pages/Home.jsx"))
const Store = lazy(() => import("./pages/Store.jsx"))
const Downloads = lazy(() => import("./pages/Downloads.jsx"))
const Offers = lazy(() => import("./pages/Offers.jsx"))
const FAQ = lazy(() => import("./pages/FAQ.jsx"))
const Contact = lazy(() => import("./pages/Contact.jsx"))

function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22 }}
    >
      {children}
    </motion.div>
  )
}

function Loading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-8 text-slate-300">
      Loading...
    </div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />

      <Suspense fallback={<Loading />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Page><Home /></Page>} />
            <Route path="/store" element={<Page><Store /></Page>} />
            <Route path="/downloads" element={<Page><Downloads /></Page>} />
            <Route path="/offers" element={<Page><Offers /></Page>} />
            <Route path="/faq" element={<Page><FAQ /></Page>} />
            <Route path="/contact" element={<Page><Contact /></Page>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  )
}

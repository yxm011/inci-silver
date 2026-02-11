import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import GiftGuide from './pages/GiftGuide'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const scrollToSection = (id) => {
    if (isHome) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setIsMenuOpen(false)
      }
    } else {
      window.location.href = `/#${id}`
    }
  }

  const navigateToCategory = (category) => {
    setIsMenuOpen(false)
    navigate(`/catalog?category=${category}`)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-serif text-xl">İ</span>
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-gray-900">İnci Silver</h1>
              <p className="text-xs text-gray-600">Orijinal Gümüşlər</p>
            </div>
          </Link>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('ana-sehife')} className="text-gray-700 hover:text-primary transition">Ana Səhifə</button>
            <button onClick={() => navigateToCategory('uzukler')} className="text-gray-700 hover:text-primary transition">Üzüklər</button>
            <button onClick={() => navigateToCategory('bilezikler')} className="text-gray-700 hover:text-primary transition">Biləziklər</button>
            <button onClick={() => navigateToCategory('boyunbagilar')} className="text-gray-700 hover:text-primary transition">Boyunbağılar</button>
            <button onClick={() => navigateToCategory('beyler')} className="text-gray-700 hover:text-primary transition">Bəylər üçün</button>
            <button onClick={() => scrollToSection('haqqimizda')} className="text-gray-700 hover:text-primary transition">Haqqımızda</button>
            <button onClick={() => scrollToSection('elaqe')} className="text-gray-700 hover:text-primary transition">Əlaqə</button>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('ana-sehife')} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition">Ana Səhifə</button>
            <button onClick={() => navigateToCategory('uzukler')} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition">Üzüklər</button>
            <button onClick={() => navigateToCategory('bilezikler')} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition">Biləziklər</button>
            <button onClick={() => navigateToCategory('boyunbagilar')} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition">Boyunbağılar</button>
            <button onClick={() => navigateToCategory('beyler')} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition">Bəylər üçün</button>
            <button onClick={() => scrollToSection('haqqimizda')} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition">Haqqımızda</button>
            <button onClick={() => scrollToSection('elaqe')} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition">Əlaqə</button>
          </div>
        </div>
      )}
    </nav>
  )
}

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-white">
          <Navigation />
          
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/gift-guide" element={<GiftGuide />} />
            </Routes>
          </main>

          <Footer scrollToSection={scrollToSection} />
          <WhatsAppButton />
          <Cart />
        </div>
      </CartProvider>
    </Router>
  )
}

export default App

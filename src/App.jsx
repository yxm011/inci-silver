import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { CartProvider } from './context/CartContext'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import GiftPackaging from './pages/GiftPackaging'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Cart from './components/Cart'

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
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  const navigateToCatalog = (category) => {
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
            <button onClick={() => scrollToSection('mehsullar')} className="text-gray-700 hover:text-primary transition">Məhsullar</button>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary transition flex items-center space-x-1">
                <span>Kateqoriyalar</span>
                <span className="text-xs">▼</span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <button 
                  onClick={() => navigateToCatalog('uzukler')}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition"
                >
                  💍 Üzüklər
                </button>
                <button 
                  onClick={() => navigateToCatalog('bilezikler')}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition"
                >
                  📿 Biləziklər
                </button>
                <button 
                  onClick={() => navigateToCatalog('boyunbagilar')}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition"
                >
                  📿 Boyunbağılar
                </button>
                <button 
                  onClick={() => navigateToCatalog('beyler')}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition"
                >
                  ⌚ Bəylər üçün
                </button>
              </div>
            </div>
            <button onClick={() => scrollToSection('haqqimizda')} className="text-gray-700 hover:text-primary transition">Haqqımızda</button>
            <button onClick={() => scrollToSection('elaqe')} className="text-gray-700 hover:text-primary transition">Ünvan</button>
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
            <button onClick={() => scrollToSection('mehsullar')} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition">Məhsullar</button>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-500 px-2">Kateqoriyalar:</div>
              <button onClick={() => navigateToCatalog('uzukler')} className="block w-full text-left py-2 pl-6 text-gray-700 hover:text-primary transition">
                💍 Üzüklər
              </button>
              <button onClick={() => navigateToCatalog('bilezikler')} className="block w-full text-left py-2 pl-6 text-gray-700 hover:text-primary transition">
                📿 Biləziklər
              </button>
              <button onClick={() => navigateToCatalog('boyunbagilar')} className="block w-full text-left py-2 pl-6 text-gray-700 hover:text-primary transition">
                📿 Boyunbağılar
              </button>
              <button onClick={() => navigateToCatalog('beyler')} className="block w-full text-left py-2 pl-6 text-gray-700 hover:text-primary transition">
                ⌚ Bəylər üçün
              </button>
            </div>
            <button onClick={() => scrollToSection('haqqimizda')} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition">Haqqımızda</button>
            <button onClick={() => scrollToSection('elaqe')} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition">Ünvan</button>
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
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navigation />
          <Cart />
          
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/gift-packaging" element={<GiftPackaging />} />
            </Routes>
          </main>

          <Footer scrollToSection={scrollToSection} />
          <WhatsAppButton />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App

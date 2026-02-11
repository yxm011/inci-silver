import React from 'react'
import { Instagram, Phone, MapPin, Clock } from 'lucide-react'

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-xl">İ</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">İnci Silver</h3>
                <p className="text-sm text-gray-400">Orijinal Gümüşlər</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Bakının ən yaxşı zərgərlik mağazası. 100% orijinal gümüş məhsullar, 
              müasir dizaynlar və peşəkar xidmət.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/silver.inci/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Keçidlər</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('ana-sehife')}
                  className="text-gray-400 hover:text-white transition"
                >
                  Ana Səhifə
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('mehsullar')}
                  className="text-gray-400 hover:text-white transition"
                >
                  Məhsullar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('haqqimizda')}
                  className="text-gray-400 hover:text-white transition"
                >
                  Haqqımızda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('elaqe')}
                  className="text-gray-400 hover:text-white transition"
                >
                  Əlaqə
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Məhsullar</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Üzüklər</li>
              <li>Biləziklər</li>
              <li>Boyunbağılar</li>
              <li>Bəylər üçün</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start space-x-3">
              <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Ünvan</div>
                <div className="text-sm text-gray-400">28 may, Nikola Tesla parkı, Bakı</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone size={20} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Telefon</div>
                <a href="tel:+994555550502" className="text-sm text-gray-400 hover:text-white transition">
                  055-555-05-02
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock size={20} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">İş Vaxtı</div>
                <div className="text-sm text-gray-400">Hər gün: 10:00 - 21:00</div>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2026 İnci Silver. Bütün hüquqlar qorunur.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

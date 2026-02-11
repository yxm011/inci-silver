import React from 'react'
import { MapPin, Phone, Clock, Instagram } from 'lucide-react'

const Contact = () => {
  return (
    <section id="elaqe" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary text-sm font-medium">Bizimlə Əlaqə</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Əlaqə Məlumatları
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mağazamıza gəlin və ya bizimlə əlaqə saxlayın
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-serif font-bold mb-6">İnci Silver</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Ünvan</div>
                    <div className="text-white/90">28 may, Nikola Tesla parkı</div>
                    <div className="text-white/90">Bakı, Azərbaycan</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Telefon</div>
                    <a href="tel:+994555550502" className="text-white/90 hover:text-white transition">
                      055-555-05-02
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">İş Vaxtı</div>
                    <div className="text-white/90">Hər gün: 10:00 - 21:00</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="font-semibold mb-4">Sosial Şəbəkə</div>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/silver.inci/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-xl font-serif font-bold text-gray-900 mb-4">
                Niyə İnci Silver?
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-gray-700">100% orijinal gümüş məhsullar</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Geniş çeşid və müasir dizaynlar</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Peşəkar və mehriban xidmət</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Keyfiyyət zəmanəti</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Rahat məkan və lokasiya</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps?q=40.381059,49.847863&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="İnci Silver Location"
              ></iframe>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/5 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">📍</div>
                <div className="font-semibold text-gray-900 mb-1">Məkan</div>
                <div className="text-sm text-gray-600">Nikola Tesla parkı</div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">🏪</div>
                <div className="font-semibold text-gray-900 mb-1">Mağaza</div>
                <div className="text-sm text-gray-600">İnci Silver</div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">⏰</div>
                <div className="font-semibold text-gray-900 mb-1">İş Vaxtı</div>
                <div className="text-sm text-gray-600">10:00 - 21:00</div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">📞</div>
                <div className="font-semibold text-gray-900 mb-1">Zəng Et</div>
                <div className="text-sm text-gray-600">055-555-05-02</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

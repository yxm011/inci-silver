import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Package, Gift, Heart, Star } from 'lucide-react'

const GiftPackaging = () => {
  const [selectedPackage, setSelectedPackage] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const packagingOptions = [
    {
      id: 1,
      name: 'Sadə Qutu',
      description: 'Klassik gümüş markalı qutu',
      image: '📦',
      price: 'Pulsuz',
      features: ['Gümüş marka', 'Sadə dizayn', 'Möhkəm material'],
      recommended: false
    },
    {
      id: 2,
      name: 'Zərif Qutu',
      description: 'Lüks hissli qutu',
      image: '🎁',
      price: '10 AZN',
      features: ['Hissli material', 'Zərif naxış', 'Lüks hiss'],
      recommended: true
    },
    {
      id: 3,
      name: 'Plastik Qutu',
      description: 'Şəffaf plastik qutu',
      image: '🔲',
      price: '5 AZN',
      features: ['Şəffaf material', 'Müasir görünüş', 'Yüngül'],
      recommended: false
    },
    {
      id: 4,
      name: 'Üzük Qutusu',
      description: 'Xüsusi üzük üçün',
      image: '💍',
      price: '8 AZN',
      features: ['Kiçik ölçü', 'Yumşaq daxili', 'Təhlükəsiz'],
      recommended: false
    },
    {
      id: 5,
      name: 'Böyük Qutu',
      description: 'Çoxlu məhsullar üçün',
      image: '📋',
      price: '15 AZN',
      features: ['Geniş daxili', 'Bölməli', 'Hədiyyə kərpic'],
      recommended: false
    },
    {
      id: 6,
      name: 'Hədiyyə Çantası',
      description: 'Zərif hədiyyə çantası',
      image: '👜',
      price: '12 AZN',
      features: ['Yumşaq tutacaq', 'Zərif toxuma', 'Rəngli seçimlər'],
      recommended: false
    },
    {
      id: 7,
      name: 'Qalın Qutu',
      description: 'Xüsusi qalın qutu',
      image: '📚',
      price: '18 AZN',
      features: ['Əlavə qoruma', 'Zərif örtük', 'Premium keyfiyyət'],
      recommended: false
    },
    {
      id: 8,
      name: 'Mini Qutu',
      description: 'Kiçik zərgərlik üçün',
      image: '📌',
      price: '3 AZN',
      features: ['Kompakt', 'Sadə', 'Praktik'],
      recommended: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition mb-6"
          >
            <ArrowLeft size={20} />
            <span>Geri</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="text-6xl">🎁</div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
                Hədiyyə Bələdçisi
              </h1>
              <p className="text-white/80">
                Sevdikləriniz üçün mükəmməl hədiyyə qablaşdırması
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Gift className="text-primary" size={20} />
            <span className="text-primary font-medium">Xüsusi Hədiyyə Qablaşdırması</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Qablaşdırma Seçimləri
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hər bir xüsusi an üçün uyğun qablaşdırma seçin
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {packagingOptions.map((option) => (
            <div
              key={option.id}
              onClick={() => setSelectedPackage(option)}
              className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                selectedPackage?.id === option.id ? 'ring-2 ring-primary' : ''
              }`}
            >
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative overflow-hidden">
                <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {option.image}
                </div>
                {option.recommended && (
                  <div className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star size={12} fill="currentColor" />
                    <span>Tövsiyə</span>
                  </div>
                )}
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                  {option.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {option.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {option.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    {option.price}
                  </span>
                  <div className={`w-5 h-5 rounded-full border-2 ${
                    selectedPackage?.id === option.id 
                      ? 'bg-primary border-primary' 
                      : 'border-gray-300'
                  }`}>
                    {selectedPackage?.id === option.id && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedPackage && (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">{selectedPackage.image}</span>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                  {selectedPackage.name} seçildi
                </h3>
                <p className="text-gray-600 mb-2">{selectedPackage.description}</p>
                <p className="text-xl font-bold text-primary">{selectedPackage.price}</p>
              </div>
            </div>

            <div className="border-t pt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Xüsusiyyətlər:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedPackage.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition">
                Bu qablaşdırma ilə sifariş et
              </button>
              <button 
                onClick={() => setSelectedPackage(null)}
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Seçimi dəyiş
              </button>
            </div>
          </div>
        )}

        <div className="mt-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <Heart size={32} fill="currentColor" />
              <h3 className="text-3xl font-serif font-bold">
                Hədiyyə Paketi Xidməti
              </h3>
            </div>
            
            <p className="text-lg text-white/90 leading-relaxed">
              Seçdiyiniz hər hansı bir zərgərlik məhsulunu xüsusi hədiyyə qablaşdırması ilə 
              sifariş edin. Biz hər bir detala diqqət edirik ki, hədiyyəniz daha xüsusi olsun.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">8+</div>
                <div className="text-sm text-white/80">Qablaşdırma növü</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Pulsuz</div>
                <div className="text-sm text-white/80">Əsas qablaşdırma</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm text-white/80">Xidmət</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GiftPackaging

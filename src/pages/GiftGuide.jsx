import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Heart, Star, Gift } from 'lucide-react'

const GiftGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const giftCategories = [
    {
      title: 'Ad Günü Hədiyyələri',
      description: 'Xüsusi günlər üçün unudulmaz hədiyyələr',
      emoji: '🎂',
      items: [
        { name: 'Zirkoniyalı Üzük', price: 'Əlaqə üçün', category: 'üzüklər' },
        { name: 'Charm Biləzik', price: 'Əlaqə üçün', category: 'biləziklər' },
        { name: 'Ürək Medalyon', price: 'Əlaqə üçün', category: 'boyunbağılar' }
      ]
    },
    {
      title: 'Nişan & Toy',
      description: 'Ən xüsusi anlar üçün mükəmməl seçimlər',
      emoji: '💍',
      items: [
        { name: 'Solitaire Üzük', price: 'Əlaqə üçün', category: 'üzüklər' },
        { name: 'Cütlük Üzükləri', price: 'Əlaqə üçün', category: 'üzüklər' },
        { name: 'Elegant Boyunbağı', price: 'Əlaqə üçün', category: 'boyunbağılar' }
      ]
    },
    {
      title: 'Sevgililər Günü',
      description: 'Sevgini ifadə edən zərgərliklər',
      emoji: '❤️',
      items: [
        { name: 'Ürək Formalı Üzük', price: 'Əlaqə üçün', category: 'üzüklər' },
        { name: 'Infinity Biləzik', price: 'Əlaqə üçün', category: 'biləziklər' },
        { name: 'Cüt Boyunbağı', price: 'Əlaqə üçün', category: 'boyunbağılar' }
      ]
    },
    {
      title: 'Özünüz üçün',
      description: 'Siz də layiqsiniz - özünüzə şəfqət göstərin',
      emoji: '✨',
      items: [
        { name: 'Minimalist Üzük', price: 'Əlaqə üçün', category: 'üzüklər' },
        { name: 'Tennis Biləzik', price: 'Əlaqə üçün', category: 'biləziklər' },
        { name: 'Şəxsi Boyunbağı', price: 'Əlaqə üçün', category: 'boyunbağılar' }
      ]
    }
  ]

  const occasions = [
    { icon: '🎓', title: 'Məzunyyət', description: 'Yeni həyata başlamaq' },
    { icon: '💼', title: 'Yeni İş', description: 'Karyera uğurları' },
    { icon: '🏆', title: 'Uğur', description: 'Xüsusi nailiyyətlər' },
    { icon: '🎄', title: 'Yeni İl', description: 'İlin ən xüsusi anı' },
    { icon: '🌸', title: 'Bahar Bayramı', description: 'Təzəlik və həyat' },
    { icon: '💝', title: 'Sürpriz', description: 'Heç bir səbəbsiz' }
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
            <div className="text-6xl">💎</div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
                Hədiyyə Bələdçisi
              </h1>
              <p className="text-white/80">
                Sevdikləriniz üçün mükəmməl hədiyyəni seçin
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Gift size={16} className="text-primary" />
            <span className="text-primary text-sm font-medium">Hədiyyə Məsləhətləri</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Hər Zövqə Uyğun Hədiyyələr
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Xüsusi günlər üçün seçilmiş ən gözəl zərgərlik məhsulları
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {giftCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative">
                <div className="text-7xl">{category.emoji}</div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-primary">Xüsusi</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                
                <div className="space-y-3">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-primary">{item.price}</p>
                        <Link 
                          to="/catalog"
                          className="text-xs text-primary hover:text-primary-dark transition"
                        >
                          Bax
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
            Digər Xüsusi Günlər
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {occasions.map((occasion, index) => (
              <div key={index} className="text-center p-4 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                <div className="text-3xl mb-2">{occasion.icon}</div>
                <h4 className="font-semibold text-gray-900 text-sm">{occasion.title}</h4>
                <p className="text-xs text-gray-600 mt-1">{occasion.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/10 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Hələ də qərarsızsınız?
            </h3>
            <p className="text-gray-600 mb-6">
              Peşəkar məsləhətçilərimiz sizə mükəmməl hədiyyə seçməkdə kömək edəcəklər.
            </p>
            <Link 
              to="/catalog"
              className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Kataloqa Keç</span>
              <Star size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GiftGuide

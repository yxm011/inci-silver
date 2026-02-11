import React, { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ArrowLeft, Filter, ShoppingCart, Grid, List } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Catalog = () => {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category') || 'uzukler'
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [gridView, setGridView] = useState('wide') // 'compact', 'wide'
  const { addToCart } = useCart()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categoryData = {
    uzukler: {
      title: 'Üzüklər',
      emoji: '💍',
      items: [
        { id: 1, name: 'Klassik Gümüş Üzük', description: 'Sadə və zərif dizayn', image: '💍' },
        { id: 2, name: 'Daşlı Nişan Üzüyü', description: 'Zirkonia daşlı', image: '💎' },
        { id: 3, name: 'Qızıl Örtüklü Üzük', description: 'Gümüş üzərində qızıl örtük', image: '✨' },
        { id: 4, name: 'Minimal Dizayn Üzük', description: 'Müasir və sadə', image: '⭕' },
        { id: 5, name: 'Geniş Band Üzük', description: 'Kişi və qadın üçün', image: '💍' },
        { id: 6, name: 'Firuze Daşlı Üzük', description: 'Təbii firuze daşı ilə', image: '🔷' },
        { id: 7, name: 'Vintage Üzük', description: 'Klassik dizayn', image: '👑' },
        { id: 8, name: 'Solitaire Üzük', description: 'Tək daşlı elegant üzük', image: '💎' },
        { id: 9, name: 'Çiçək Motivli Üzük', description: 'Təbiət ilhamlı dizayn', image: '🌸' },
        { id: 10, name: 'Geometrik Üzük', description: 'Müasir geometrik forma', image: '◇' },
        { id: 11, name: 'İkili Üzük Dəsti', description: 'Cütlər üçün', image: '💕' },
        { id: 12, name: 'Açıq Üzük', description: 'Tənzimlənən ölçü', image: '⚪' }
      ]
    },
    bilezikler: {
      title: 'Biləziklər',
      emoji: '📿',
      items: [
        { id: 1, name: 'Zəncir Biləzik', description: 'İncə gümüş zəncir', image: '🔗' },
        { id: 2, name: 'Charm Biləzik', description: 'Asma elementlərlə', image: '✨' },
        { id: 3, name: 'Qalın Qolbaq', description: 'Klassik qolbaq dizaynı', image: '⭕' },
        { id: 4, name: 'Daşlı Biləzik', description: 'Rəngli daşlarla bəzədilmiş', image: '💎' },
        { id: 5, name: 'Tennis Biləzik', description: 'Daşlarla sıralanmış', image: '✨' },
        { id: 6, name: 'Leather & Silver', description: 'Dəri və gümüş kombinasiyası', image: '🎨' },
        { id: 7, name: 'Bangle Set', description: '3 ədəd qolbaq dəsti', image: '⚪' },
        { id: 8, name: 'Filigran Biləzik', description: 'Əl işi naxış', image: '🌟' },
        { id: 9, name: 'Infinity Biləzik', description: 'Sonsuzluq simvolu', image: '∞' },
        { id: 10, name: 'Bead Biləzik', description: 'Muncuqlu dizayn', image: '📿' },
        { id: 11, name: 'Cuff Biləzik', description: 'Açıq tip qolbaq', image: '⭕' },
        { id: 12, name: 'Multilayer Biləzik', description: 'Çox qatlı zəncir', image: '🔗' }
      ]
    },
    boyunbagilar: {
      title: 'Boyunbağılar',
      emoji: '📿',
      items: [
        { id: 1, name: 'İncə Zəncir', description: 'Sadə gümüş zəncir', image: '🔗' },
        { id: 2, name: 'Ürək Medalyon', description: 'Açılan medalyon', image: '❤️' },
        { id: 3, name: 'Daşlı Pendant', description: 'Zirkonia daşlı asma', image: '💎' },
        { id: 4, name: 'İsim Boyunbağısı', description: 'Fərdi həkk olunmuş', image: '✍️' },
        { id: 5, name: 'Choker', description: 'Qısa boyunbağı', image: '⭕' },
        { id: 6, name: 'Lariat Zəncir', description: 'Uzun və zərif', image: '🔗' },
        { id: 7, name: 'Ay-Ulduz Pendant', description: 'Simvolik dizayn', image: '🌙' },
        { id: 8, name: 'Solitaire Pendant', description: 'Tək daşlı asma', image: '💎' },
        { id: 9, name: 'Çiçək Kolye', description: 'Təbiət motivli', image: '🌸' },
        { id: 10, name: 'Geometrik Pendant', description: 'Müasir forma', image: '◇' },
        { id: 11, name: 'Layered Zəncir', description: 'Qatlı zəncir dəsti', image: '🔗' },
        { id: 12, name: 'Vintage Medalyon', description: 'Klassik dizayn', image: '👑' }
      ]
    },
    beyler: {
      title: 'Bəylər üçün',
      emoji: '⌚',
      items: [
        { id: 1, name: 'Kişi Üzüyü', description: 'Qalın gümüş üzük', image: '💍' },
        { id: 2, name: 'Zəncir Biləzik', description: 'Kişi biləziyi', image: '🔗' },
        { id: 3, name: 'Signet Üzük', description: 'Möhür üzüyü', image: '👑' },
        { id: 4, name: 'Dəri Biləzik', description: 'Gümüş və dəri', image: '🎨' },
        { id: 5, name: 'Dog Tag', description: 'Hərbi stil asma', image: '🏷️' },
        { id: 6, name: 'Qalın Zəncir', description: 'Kişi boyunbağısı', image: '🔗' },
        { id: 7, name: 'Onyx Üzük', description: 'Qara daşlı üzük', image: '⚫' },
        { id: 8, name: 'Cuff Links', description: 'Qol düymələri', image: '💼' },
        { id: 9, name: 'Anchor Pendant', description: 'Lövbər asma', image: '⚓' },
        { id: 10, name: 'Skull Üzük', description: 'Kəllə dizaynı', image: '💀' },
        { id: 11, name: 'Band Üzük', description: 'Sadə band', image: '⭕' },
        { id: 12, name: 'ID Biləzik', description: 'Ad lövhəli biləzik', image: '🏷️' }
      ]
    }
  }

  const currentCategory = categoryData[category] || categoryData.uzukler
  
  const handleAddToCart = (item) => {
    addToCart({
      ...item,
      category: currentCategory.title
    })
  }

  const getGridClasses = () => {
    switch (gridView) {
      case 'compact':
        return 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
      case 'wide':
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'
      default:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'
    }
  }
  const filters = ['all', 'yeni', 'populyar', 'endirim']
  const filterLabels = {
    all: 'Hamısı',
    yeni: 'Yeni',
    populyar: 'Populyar',
    endirim: 'Endirimli'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-accent-gold rounded-full blur-3xl animate-float"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition mb-6"
          >
            <ArrowLeft size={20} />
            <span>Geri</span>
          </Link>
          
          <div className="flex items-center space-x-4 relative z-10">
            <div className="text-6xl animate-float">{currentCategory.emoji}</div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
                {currentCategory.title}
              </h1>
              <p className="text-white/80">
                {currentCategory.items.length} məhsul
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-600" />
            <span className="font-semibold text-gray-900">Filtr:</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white rounded-lg p-1 shadow-premium border border-gray-200">
              <button
                onClick={() => setGridView('compact')}
                className={`p-2 rounded transition ${
                  gridView === 'compact'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                title="Sıx baxış"
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setGridView('wide')}
                className={`p-2 rounded transition ${
                  gridView === 'wide'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                title="Geniş baxış (2 sütun)"
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedFilter === filter
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filterLabels[filter]}
            </button>
          ))}
        </div>

        <div className={`grid ${getGridClasses()} gap-6`}>
          {currentCategory.items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-500 transform hover:-translate-y-3 group border border-gray-100"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/5 via-accent-gold/5 to-primary/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-8xl group-hover:scale-110 transition-transform duration-500 relative z-10">
                  {item.image}
                </div>
                <div className="absolute top-3 right-3 bg-gradient-to-r from-accent-gold to-accent-silver text-white text-xs font-bold px-3 py-1 rounded-full shadow-gold">
                  Yeni
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {item.description}
                </p>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-primary to-primary-dark text-white py-2 rounded-lg font-semibold hover:shadow-premium transition-all duration-300 hover:scale-105">
                    Ətraflı
                  </button>
                  <button 
                    onClick={() => handleAddToCart(item)}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg font-semibold hover:shadow-premium transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-1"
                  >
                    <ShoppingCart size={16} />
                    <span>Səbətə</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap gap-3 bg-white rounded-xl p-4 shadow-md">
            <Link
              to="/catalog?category=uzukler"
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                category === 'uzukler'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              💍 Üzüklər
            </Link>
            <Link
              to="/catalog?category=bilezikler"
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                category === 'bilezikler'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              📿 Biləziklər
            </Link>
            <Link
              to="/catalog?category=boyunbagilar"
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                category === 'boyunbagilar'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              📿 Boyunbağılar
            </Link>
            <Link
              to="/catalog?category=beyler"
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                category === 'beyler'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              ⌚ Bəylər üçün
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalog

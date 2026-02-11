import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Products = () => {
  const categories = [
    {
      title: 'Üzüklər',
      description: 'Gözəl və zərif üzük kolleksiyamız',
      emoji: '💍',
      items: ['Nişan üzükləri', 'Gündəlik üzüklər', 'Daş üzüklər', 'Dizayn üzüklər'],
      slug: 'uzukler'
    },
    {
      title: 'Biləziklər',
      description: 'Əl bilərzikləri və qolbaqlar',
      emoji: '📿',
      items: ['Zəncir biləziklər', 'Charm biləziklər', 'Qolbaqlar', 'Dizayn biləziklər'],
      slug: 'bilezikler'
    },
    {
      title: 'Boyunbağılar',
      description: 'Şık və müasir boyunbağı kolleksiyası',
      emoji: '📿',
      items: ['Zəncir boyunbağılar', 'Medalyon', 'Daşlı boyunbağılar', 'Eksklyuziv dizaynlar'],
      slug: 'boyunbagilar'
    },
    {
      title: 'Bəylər üçün',
      description: 'Kişilər üçün xüsusi zərgərlik',
      emoji: '⌚',
      items: ['Kişi üzükləri', 'Qol saatları', 'Zəncir və biləziklər', 'Sancaqlar'],
      slug: 'beyler'
    }
  ]

  return (
    <section id="mehsullar" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 via-accent-gold/10 to-primary/10 px-6 py-2.5 rounded-full mb-4 border border-primary/20 shadow-premium">
            <span className="text-primary text-sm font-semibold tracking-wide">Əsil və Eksklyuziv</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Məhsullarımız
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hər zövqə uyğun geniş çeşidimizlə tanış olun
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
            >
              <div className="relative h-64 bg-gradient-to-br from-primary/5 via-accent-gold/5 to-primary/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="text-8xl transform group-hover:scale-110 transition-transform duration-500 relative z-10">{category.emoji}</div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-accent-gold to-accent-silver text-white px-4 py-2 rounded-full shadow-gold">
                  <span className="text-sm font-bold">Yeni</span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <div className="space-y-2 mb-6">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to={`/catalog?category=${category.slug}`}
                  className="group/btn inline-flex items-center space-x-2 text-primary font-semibold hover:text-primary-dark transition-all duration-300 hover:gap-3"
                >
                  <span>Ətraflı bax</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 shadow-premium-lg border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-accent-gold/10 to-primary/5 flex items-center justify-center relative overflow-hidden group/gift shadow-premium">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-transparent opacity-0 group-hover/gift:opacity-100 transition-opacity duration-500"></div>
                <div className="text-center relative z-10">
                  <div className="text-9xl mb-4 animate-float">💎</div>
                  <p className="text-xl font-serif text-gray-800 font-semibold">Hədiyyə Bələdçisi</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent-gold/10 px-5 py-2.5 rounded-full border border-primary/20 shadow-premium">
                <span className="text-primary text-sm font-semibold tracking-wide">Əsil və Eksklyuziv</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                Hədiyyə Bələdçisi
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Sevdikləriniz üçün mükəmməl hədiyyə seçməkdə sizə kömək edək. 
                Hər bir xüsusi an üçün uyğun zərgərlik məhsulları ilə tanış olun.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ad günləri və xüsusi günlər</h4>
                    <p className="text-sm text-gray-600">Unutulmaz hədiyyələr</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Nişan və toy</h4>
                    <p className="text-sm text-gray-600">Ən xüsusi anlar üçün</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Özünüzə hədiyyə</h4>
                    <p className="text-sm text-gray-600">Siz də layiqsiniz</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/gift-guide"
                className="group inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-xl font-semibold hover:shadow-premium-lg transition-all duration-300 shadow-premium hover:scale-105"
              >
                <span>İndi Baxın</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products

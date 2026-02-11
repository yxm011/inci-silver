import React from 'react'

const Materials = () => {
  const materials = [
    {
      name: 'Qərb Qızılı',
      description: 'Yüksək keyfiyyətli qızıl',
      icon: '🏆'
    },
    {
      name: 'Zümrüd Kəsim',
      description: 'Mükəmməl kəsim texnikası',
      icon: '💎'
    },
    {
      name: 'Son Qapaq',
      description: 'Davamlı və keyfiyyətli',
      icon: '✨'
    },
    {
      name: 'Zəncir Terminator',
      description: 'Güclü və etibarlı',
      icon: '🔗'
    },
    {
      name: 'Bükülmə Ucu',
      description: 'Rahat istifadə',
      icon: '⚡'
    }
  ]

  return (
    <section id="haqqimizda" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary text-sm font-medium">Əsil və Eksklyuziv</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Ən Yaxşı Material
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Yalnız ən yüksək keyfiyyətli materiallardan istifadə edirik
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
              <div className="relative text-center p-8">
                <div className="text-9xl mb-4">💍</div>
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-2 mx-auto">
                        <span className="text-2xl">🏆</span>
                      </div>
                      <p className="text-xs font-medium text-gray-700">Qərb Qızılı</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-2 mx-auto">
                        <span className="text-2xl">💎</span>
                      </div>
                      <p className="text-xs font-medium text-gray-700">Zümrüd Kəsim</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-2 mx-auto">
                        <span className="text-2xl">🔗</span>
                      </div>
                      <p className="text-xs font-medium text-gray-700">Zəncir</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-2 mx-auto">
                        <span className="text-2xl">✨</span>
                      </div>
                      <p className="text-xs font-medium text-gray-700">Son Qapaq</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {materials.map((material, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{material.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {material.name}
                  </h3>
                  <p className="text-gray-600">{material.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-sm font-medium">Keyfiyyət Zəmanəti</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-serif font-bold">
              Orijinal Gümüş Zəmanəti
            </h3>
            
            <p className="text-lg text-white/90 leading-relaxed">
              Bütün məhsullarımız 100% orijinal gümüşdən hazırlanır və keyfiyyət sertifikatı ilə təmin olunur. 
              Hər bir zərgərlik əşyası ustalarımız tərəfindən diqqətlə hazırlanır və yoxlanılır.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm text-white/80">Orijinal Gümüş</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-sm text-white/80">İl Təcrübə</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-sm text-white/80">Məmnun Müştəri</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Materials

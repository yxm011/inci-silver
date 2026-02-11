import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="ana-sehife" className="relative bg-primary min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-90"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary text-sm">✦</span>
              </div>
              <span className="text-sm font-medium">Əsil və Eksklyuziv</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
              Zərif Zərgərlik
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
              Hər bir zərgərlik əşyası incəlik və zövqün simvoludur. Biz sizə ən yüksək keyfiyyətli, 
              orijinal gümüş məhsullar təqdim edirik ki, hər anınız daha xüsusi olsun.
            </p>
            
            <button 
              onClick={() => document.getElementById('mehsullar').scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center space-x-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>İndi Baxın</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="relative">
            <div className="relative rounded-full overflow-hidden shadow-2xl border-8 border-white/20 backdrop-blur-sm">
              <img 
                src="/pictures/hero-image.png" 
                alt="Orijinal Gümüşlər" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-full p-4 shadow-xl">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                <span className="text-4xl">💎</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="ana-sehife" className="relative bg-gradient-to-br from-primary via-primary-dark to-primary min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary-dark/95"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-gold rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 shadow-premium">
              <div className="w-8 h-8 bg-gradient-to-br from-accent-gold to-accent-silver rounded-full flex items-center justify-center shadow-gold animate-glow">
                <span className="text-white text-sm font-bold">✦</span>
              </div>
              <span className="text-sm font-semibold tracking-wide">Əsil və Eksklyuziv</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
              <span className="inline-block hover:scale-105 transition-transform duration-300">Zərif</span>{' '}
              <span className="inline-block bg-gradient-to-r from-white via-accent-gold to-white bg-clip-text text-transparent">Zərgərlik</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
              Hər bir zərgərlik əşyası incəlik və zövqün simvoludur. Biz sizə ən yüksək keyfiyyətli, 
              orijinal gümüş məhsullar təqdim edirik ki, hər anınız daha xüsusi olsun.
            </p>
            
            <button 
              onClick={() => document.getElementById('mehsullar').scrollIntoView({ behavior: 'smooth' })}
              className="group relative inline-flex items-center space-x-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 shadow-premium-lg hover:shadow-premium-xl hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-shimmer"></div>
              <span className="relative">İndi Baxın</span>
              <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/30 to-accent-silver/30 rounded-full blur-2xl"></div>
            <div className="relative rounded-full overflow-hidden shadow-premium-xl border-8 border-white/30 backdrop-blur-sm hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <img 
                src="/hero-image.png" 
                alt="Orijinal Gümüşlər" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-white to-gray-50 rounded-full p-5 shadow-premium-lg hover:scale-110 transition-transform duration-300 border-4 border-white">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-accent-gold/20 to-accent-silver/20 flex items-center justify-center animate-glow">
                <span className="text-5xl">💎</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

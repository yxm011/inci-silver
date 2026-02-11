import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Aynur Məmmədova',
      role: 'Müştəri',
      text: 'İnci Silver-dən aldığım üzük həqiqətən möhtəşəmdir! Keyfiyyət əla, dizayn isə çox zərif və müasirdir. Hər kəsə tövsiyə edirəm.',
      rating: 5
    },
    {
      name: 'Elçin Həsənov',
      role: 'Müştəri',
      text: 'Həyat yoldaşıma buradan boyunbağı aldım, çox bəyəndi. Xidmət də çox yaxşıdır, mağazanın atmosferi isə çox rahatdır.',
      rating: 5
    },
    {
      name: 'Günel Əliyeva',
      role: 'Müştəri',
      text: 'Orijinal gümüş məhsullar, əla qiymətlər və peşəkar xidmət. İnci Silver Bakının ən yaxşı zərgərlik mağazalarından biridir.',
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary text-sm font-medium">Müştəri Rəyləri</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Müştərilərimiz Nə Deyir
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Minlərlə məmnun müştərimizin rəyləri
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 text-9xl text-white/5 font-serif leading-none">"</div>
            
            <div className="relative">
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={24} fill="currentColor" className="text-yellow-300" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl font-serif text-center mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="text-center">
                <div className="font-semibold text-lg mb-1">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-white/80 text-sm">
                  {testimonials[currentIndex].role}
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition"
                >
                  <ChevronLeft size={24} />
                </button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'bg-white w-8' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏆</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
            <p className="text-gray-600">Keyfiyyət Zəmanəti</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💎</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Orijinal</h3>
            <p className="text-gray-600">Gümüş Məhsullar</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⭐</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">5.0</h3>
            <p className="text-gray-600">Müştəri Reytinqi</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

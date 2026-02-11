import React from 'react'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const phoneNumber = '994555550502'
  const message = 'Salam! İnci Silver haqqında məlumat almaq istəyirəm.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
        <div className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110">
          <MessageCircle size={32} className="text-white" fill="white" />
        </div>
      </div>
    </a>
  )
}

export default WhatsAppButton

import React, { useState } from 'react'
import { ShoppingCart, X, Plus, Minus, Trash2, Send } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartCount, sendToWhatsApp } = useCart()

  const handleSendToWhatsApp = () => {
    sendToWhatsApp()
    setIsOpen(false)
  }

  const cartCount = getCartCount()

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-24 right-4 z-40 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 hover:scale-110"
      >
        <ShoppingCart size={24} />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)}></div>
          
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
            <div className="bg-primary text-white p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ShoppingCart size={28} />
                <div>
                  <h2 className="text-2xl font-serif font-bold">Səbət</h2>
                  <p className="text-sm text-white/80">{cartCount} məhsul</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingCart size={64} className="text-gray-300 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Səbət boşdur</h3>
                  <p className="text-gray-600">Məhsul əlavə etmək üçün kataloqa baxın</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-gray-50 rounded-lg p-4 flex items-start space-x-4"
                    >
                      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                        {item.image}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                        
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-2 bg-white rounded-lg p-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-gray-100 rounded transition"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-8 text-center font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-100 rounded transition"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="border-t p-6 space-y-3 bg-gray-50">
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full bg-green-500 text-white py-4 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Send size={20} />
                  <span>WhatsApp ilə Soruş</span>
                </button>
                
                <button
                  onClick={clearCart}
                  className="w-full bg-white text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-100 transition border border-gray-300"
                >
                  Səbəti Təmizlə
                </button>
                
                <p className="text-xs text-gray-600 text-center">
                  Qiymət və stok məlumatı üçün WhatsApp-dan soruşun
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Cart

import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('inciSilverCart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('inciSilverCart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const sendToWhatsApp = () => {
    if (cartItems.length === 0) return

    const phoneNumber = '994555550502'
    const baseUrl = window.location.origin
    let message = 'Salam! Aşağıdaki məhsullar haqqında məlumat almaq istəyirəm:\n\n'
    
    cartItems.forEach((item, index) => {
      const categorySlug = item.category === 'Üzüklər' ? 'uzukler' 
        : item.category === 'Biləziklər' ? 'bilezikler'
        : item.category === 'Boyunbağılar' ? 'boyunbagilar'
        : 'beyler'
      
      const productLink = `${baseUrl}/catalog?category=${categorySlug}`
      
      message += `${index + 1}. ${item.name}\n`
      message += `   Kateqoriya: ${item.category}\n`
      message += `   Miqdar: ${item.quantity}\n`
      message += `   Link: ${productLink}\n\n`
    })
    
    message += 'Bu məhsulların qiymətləri və stokda olub-olmadığı haqqında məlumat verə bilərsinizmi?'
    
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartCount,
        sendToWhatsApp
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

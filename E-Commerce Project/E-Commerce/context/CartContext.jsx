import React, { useState, createContext, useEffect } from 'react'

// Cookie helper functions
const setCookie = (name, value, days = 7) => {
  const expires = new Date()
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000))
  document.cookie = `${name}=${JSON.stringify(value)};expires=${expires.toUTCString()};path=/`
}

const getCookie = (name) => {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) {
      try {
        return JSON.parse(c.substring(nameEQ.length, c.length))
      } catch (e) {
        return []
      }
    }
  }
  return []
}

const CartContext = createContext()

export { CartContext }

export function CartProvider({ children }) {
  // Initialize cart from cookies
  const [items, setItems] = useState(() => {
    if (typeof window !== 'undefined') {
      return getCookie('cart') || []
    }
    return []
  })

  // Save cart to cookies whenever items change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCookie('cart', items, 30) // Save for 30 days
    }
  }, [items])

  const addToCart = (product, quantity = 1) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product && item.product.id === product.id
      )
      
      let newItems
      if (existingItem) {
        newItems = prevItems.map((item) =>
          item.product && item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        )
      } else {
        newItems = [
          ...prevItems,
          {
            product,
            quantity,
          },
        ]
      }
      
      return newItems
    })
  }

  const removeFromCart = (productId) => {
    setItems((prevItems) => {
      const newItems = prevItems.filter((item) => item.product && item.product.id !== productId)
      return newItems
    })
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setItems((prevItems) => {
      const newItems = prevItems.map((item) =>
        item.product && item.product.id === productId
          ? {
              ...item,
              quantity,
            }
          : item
      )
      return newItems
    })
  }

  const clearCart = () => {
    setItems([])
    // Also clear the cookie
    if (typeof window !== 'undefined') {
      setCookie('cart', [], 30)
    }
  }

  const getCartTotal = () => {
    return items.reduce(
      (total, item) => total + (item.product ? item.product.price * item.quantity : 0),
      0
    )
  }

  const getCartCount = () => {
    return items.reduce((count, item) => count + (item.quantity || 0), 0)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}


// Move useCart to a separate file (useCart.js) to avoid Fast Refresh warning.

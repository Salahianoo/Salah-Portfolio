import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart'
import { TrashIcon, MinusIcon, PlusIcon, ShoppingBagIcon } from 'lucide-react'
const CartPage = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal } = useCart()
  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="flex flex-col items-center justify-center py-12">
          <ShoppingBagIcon className="h-16 w-16 text-gray-400 mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link
            to="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    )
  }
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {items.map((item) => (
                  <li key={item.product.id} className="p-6">
                    <div className="flex flex-col sm:flex-row">
                      <div className="flex-shrink-0 w-full sm:w-24 h-24 bg-gray-100 rounded-md overflow-hidden mb-4 sm:mb-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 sm:ml-6">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-gray-800">
                              <Link
                                to={`/products/${item.product.id}`}
                                className="hover:text-blue-600"
                              >
                                {item.product.name}
                              </Link>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.product.category}
                            </p>
                          </div>
                          <p className="text-lg font-medium text-gray-900">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity - 1,
                                )
                              }
                              className="p-2 text-gray-600 hover:text-gray-800"
                              disabled={item.quantity <= 1}
                            >
                              <MinusIcon className="h-4 w-4" />
                            </button>
                            <span className="px-4 py-2 text-gray-900">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity + 1,
                                )
                              }
                              className="p-2 text-gray-600 hover:text-gray-800"
                            >
                              <PlusIcon className="h-4 w-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-red-500 hover:text-red-700 flex items-center"
                          >
                            <TrashIcon className="h-4 w-4 mr-1" />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-medium text-gray-900 mb-6">
                Order Summary
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="text-gray-600">Subtotal</p>
                  <p className="text-gray-900 font-medium">
                    ${getCartTotal().toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Shipping</p>
                  <p className="text-gray-900 font-medium">Free</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Tax</p>
                  <p className="text-gray-900 font-medium">
                    ${(getCartTotal() * 0.1).toFixed(2)}
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <p className="text-lg font-medium text-gray-900">Total</p>
                  <p className="text-lg font-bold text-gray-900">
                    ${(getCartTotal() * 1.1).toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to="/checkout"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md text-center transition-colors"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  to="/products"
                  className="block w-full text-blue-600 font-medium px-6 py-3 text-center mt-3"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartPage

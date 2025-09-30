import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart'
import { ShoppingCartIcon } from 'lucide-react'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <Link to={`/products/${product.id}`}>
        <div className="relative h-64 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-3 py-1.5 rounded-md font-medium text-xs shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            >
              <ShoppingCartIcon className="h-3 w-3 mr-1.5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default ProductCard

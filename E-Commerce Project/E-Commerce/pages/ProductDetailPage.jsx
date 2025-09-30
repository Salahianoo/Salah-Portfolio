import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductById, getFeaturedProducts } from '../data/products'
import { useCart } from '../context/useCart'
import ProductGrid from '../components/ProductGrid'
import { MinusIcon, PlusIcon, ShoppingCartIcon } from 'lucide-react'
const ProductDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const product = getProductById(parseInt(id || '0'))
  const relatedProducts = getFeaturedProducts()
    .filter((p) => p.id !== product?.id)
    .slice(0, 4)
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Product Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <button
          onClick={() => navigate('/products')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-colors"
        >
          Browse Products
        </button>
      </div>
    )
  }
  const handleAddToCart = () => {
    addToCart(product, quantity)
    navigate('/cart')
  }
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-gray-50 rounded-lg overflow-hidden p-8">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-contain"
              />
            </div>
          </div>
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
            </div>
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Category
              </h3>
              <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800">
                {product.category}
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Quantity
              </h3>
              <div className="flex items-center">
                <button
                  onClick={decrementQuantity}
                  className="border border-gray-300 rounded-l-md p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={quantity <= 1}
                >
                  <MinusIcon className="h-4 w-4" />
                </button>
                <input
                  type="number"
                  min="1"
                  max="99"
                  value={quantity}
                  onChange={(e) => {
                    const value = parseInt(e.target.value)
                    if (value >= 1 && value <= 99) {
                      setQuantity(value)
                    } else if (e.target.value === '') {
                      setQuantity(1)
                    }
                  }}
                  onBlur={(e) => {
                    if (!e.target.value || parseInt(e.target.value) < 1) {
                      setQuantity(1)
                    }
                  }}
                  className="border-t border-b border-gray-300 p-2 w-16 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={incrementQuantity}
                  className="border border-gray-300 rounded-r-md p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={quantity >= 99}
                >
                  <PlusIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-colors flex items-center justify-center"
            >
              <ShoppingCartIcon className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
            <div className="mt-6 border-t border-gray-200 pt-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Shipping
              </h3>
              <p className="text-gray-600 text-sm">
                Free shipping on orders over $50
              </p>
            </div>
            <div className="mt-4 border-t border-gray-200 pt-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Returns
              </h3>
              <p className="text-gray-600 text-sm">30-day return policy</p>
            </div>
          </div>
        </div>
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            You May Also Like
          </h2>
          <ProductGrid products={relatedProducts} />
        </div>
      </div>
    </div>
  )
}
export default ProductDetailPage

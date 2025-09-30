import React from 'react'
import { TruckIcon, ClockIcon, MapPinIcon, CreditCardIcon } from 'lucide-react'

const ShippingPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping Policy</h1>
            <p className="text-lg text-gray-600">
              Everything you need to know about our shipping and delivery services.
            </p>
          </div>

          {/* Shipping Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <TruckIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Standard Shipping</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• 5-7 business days</li>
                <li>• Free on orders over $50</li>
                <li>• $5.99 for orders under $50</li>
                <li>• Tracking included</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <ClockIcon className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Express Shipping</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• 2-3 business days</li>
                <li>• $12.99 flat rate</li>
                <li>• Priority handling</li>
                <li>• Real-time tracking</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <MapPinIcon className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Next Day Delivery</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• 1 business day</li>
                <li>• $24.99 flat rate</li>
                <li>• Available in select areas</li>
                <li>• Order by 2 PM cutoff</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <CreditCardIcon className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Free Shipping</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Orders over $50</li>
                <li>• Standard shipping only</li>
                <li>• Continental US only</li>
                <li>• No promo code needed</li>
              </ul>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Processing Time</h2>
              <div className="prose text-gray-700">
                <p>
                  All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays.
                  If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery.
                </p>
                <p className="mt-4">
                  If there will be a significant delay in shipment of your order, we will contact you via email or telephone.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Shipping Destinations</h2>
              <div className="prose text-gray-700">
                <p>
                  We currently ship to all 50 states within the United States. We do not currently offer international shipping.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Shipping Restrictions:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>We do not ship to P.O. boxes for certain items</li>
                    <li>Some items may have shipping restrictions to certain states</li>
                    <li>Oversized items may require special handling</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Order Tracking</h2>
              <div className="prose text-gray-700">
                <p>
                  You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s).
                  The tracking number will be active within 24 hours.
                </p>
                <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Track Your Order:</h4>
                  <p className="text-blue-800">
                    Visit our Order Tracking page or use the tracking number provided in your shipping confirmation email.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Shipping Costs</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Shipping Method
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Delivery Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Standard Shipping
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        5-7 business days
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $5.99 (Free over $50)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Express Shipping
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        2-3 business days
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $12.99
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Next Day Delivery
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        1 business day
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $24.99
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Damaged or Lost Packages</h2>
              <div className="prose text-gray-700">
                <p>
                  If your package arrives damaged or if you believe your package is lost, please contact us immediately at
                  <a href="mailto:support@salahmart.com" className="text-blue-600 hover:text-blue-800 mx-1">
                    support@salahmart.com
                  </a>
                  or call us at (555) 123-4567.
                </p>
                <p className="mt-4">
                  We will work with the shipping carrier to resolve the issue and ensure you receive your order.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShippingPolicyPage
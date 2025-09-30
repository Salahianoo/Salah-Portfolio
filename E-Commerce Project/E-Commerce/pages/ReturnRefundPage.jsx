import React from 'react'
import { RefreshCwIcon, ClockIcon, CreditCardIcon, CheckCircleIcon } from 'lucide-react'

const ReturnRefundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Returns & Refunds</h1>
            <p className="text-lg text-gray-600">
              We want you to be completely satisfied with your purchase. Here's our return and refund policy.
            </p>
          </div>

          {/* Policy Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <ClockIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">30-Day Returns</h3>
              <p className="text-gray-600 text-sm">Return items within 30 days of purchase</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <RefreshCwIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Returns</h3>
              <p className="text-gray-600 text-sm">Simple return process with prepaid labels</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <CreditCardIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Full Refunds</h3>
              <p className="text-gray-600 text-sm">Get your money back for eligible returns</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <CheckCircleIcon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600 text-sm">We stand behind our products</p>
            </div>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Return Policy</h2>
              <div className="prose text-gray-700">
                <p className="mb-4">
                  We accept returns within 30 days of the original purchase date. To be eligible for a return, items must be:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>In original condition and packaging</li>
                  <li>Unworn, unused, and undamaged</li>
                  <li>Include all original tags and accessories</li>
                  <li>Accompanied by original receipt or proof of purchase</li>
                </ul>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-yellow-800 mb-2">Non-Returnable Items:</h4>
                  <ul className="list-disc pl-6 text-yellow-700 space-y-1">
                    <li>Personalized or customized items</li>
                    <li>Digital products and software</li>
                    <li>Perishable goods</li>
                    <li>Intimate or hygiene-related products</li>
                    <li>Items damaged by misuse</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Return an Item</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-lg">1</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Request Return</h3>
                    <p className="text-gray-600 text-sm">
                      Contact our customer service team or use our online return portal to initiate your return.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-lg">2</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Pack & Ship</h3>
                    <p className="text-gray-600 text-sm">
                      Carefully package your item(s) and send them back using our prepaid return label.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-lg">3</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Get Refund</h3>
                    <p className="text-gray-600 text-sm">
                      Once we receive and inspect your return, we'll process your refund within 3-5 business days.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Information</h2>
              <div className="prose text-gray-700">
                <h4 className="font-semibold mb-3">Refund Processing:</h4>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Refunds are processed within 3-5 business days after we receive your return</li>
                  <li>Refunds are issued to the original payment method</li>
                  <li>Credit card refunds may take 1-2 additional billing cycles to appear</li>
                  <li>Original shipping costs are non-refundable (unless item was defective)</li>
                </ul>

                <h4 className="font-semibold mb-3">Partial Refunds:</h4>
                <p className="mb-4">
                  In some cases, partial refunds may be issued for items that are returned in less than perfect condition:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Items with obvious signs of use</li>
                  <li>Items missing original packaging or accessories</li>
                  <li>Items returned more than 30 days after delivery</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Exchanges</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-blue-800 mb-4">
                  We currently do not offer direct exchanges. If you need a different size, color, or item, please:
                </p>
                <ol className="list-decimal pl-6 text-blue-700 space-y-2">
                  <li>Return your original item following our return process</li>
                  <li>Place a new order for the item you want</li>
                  <li>Contact customer service if you need assistance with sizing or selection</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Defective or Damaged Items</h2>
              <div className="prose text-gray-700">
                <p className="mb-4">
                  If you receive a defective or damaged item, we will make it right at no cost to you:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Contact us within 7 days of receiving the item</li>
                  <li>Provide photos of the damage or defect</li>
                  <li>We'll provide a prepaid return label</li>
                  <li>Choose between a full refund or replacement item</li>
                  <li>Shipping costs will be fully refunded</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  If you have any questions about returns or refunds, please don't hesitate to contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> <a href="mailto:returns@salahmart.com" className="text-blue-600 hover:text-blue-800">returns@salahmart.com</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+15551234567" className="text-blue-600 hover:text-blue-800">(555) 123-4567</a></p>
                  <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReturnRefundPage
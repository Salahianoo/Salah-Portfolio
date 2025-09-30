import React, { useState } from 'react'
import { ChevronDownIcon, ChevronRightIcon } from 'lucide-react'

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null)

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqData = [
    {
      category: "Orders & Payments",
      questions: [
        {
          question: "How do I place an order?",
          answer: "To place an order, simply browse our products, add items to your cart, and proceed to checkout. You'll need to provide your shipping information and payment details to complete your purchase."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All payments are processed securely through our encrypted payment system."
        },
        {
          question: "Can I modify or cancel my order after placing it?",
          answer: "You can modify or cancel your order within 1 hour of placing it. After that, your order enters our fulfillment process and cannot be changed. Please contact customer service immediately if you need to make changes."
        },
        {
          question: "Why was my payment declined?",
          answer: "Payment declines can happen for various reasons: insufficient funds, incorrect billing information, security holds by your bank, or expired cards. Please verify your information and try again, or contact your bank if the issue persists."
        }
      ]
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          question: "How long does shipping take?",
          answer: "Standard shipping takes 5-7 business days, Express shipping takes 2-3 business days, and Next Day delivery is available in select areas. Processing time is 1-2 business days before shipping."
        },
        {
          question: "Do you offer free shipping?",
          answer: "Yes! We offer free standard shipping on all orders over $50 within the continental United States. Orders under $50 have a $5.99 shipping fee."
        },
        {
          question: "Can I track my order?",
          answer: "Absolutely! Once your order ships, you'll receive a tracking number via email. You can track your package using this number on our website or the carrier's website."
        },
        {
          question: "What if my package is lost or damaged?",
          answer: "If your package arrives damaged or appears to be lost, please contact us immediately. We'll work with the shipping carrier to resolve the issue and ensure you receive your order or a replacement."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          question: "What is your return policy?",
          answer: "We accept returns within 30 days of purchase. Items must be in original condition with tags attached. We provide prepaid return labels for your convenience."
        },
        {
          question: "How do I return an item?",
          answer: "Contact our customer service team or use our online return portal to initiate a return. We'll provide you with a prepaid return label and instructions on how to send your item back."
        },
        {
          question: "When will I receive my refund?",
          answer: "Refunds are processed within 3-5 business days after we receive your returned item. The refund will be issued to your original payment method and may take 1-2 billing cycles to appear on credit card statements."
        },
        {
          question: "Can I exchange an item instead of returning it?",
          answer: "We don't offer direct exchanges. Instead, please return the item for a refund and place a new order for the item you want. This ensures you get exactly what you need."
        }
      ]
    },
    {
      category: "Account & Technical",
      questions: [
        {
          question: "Do I need to create an account to shop?",
          answer: "While you can browse our products without an account, creating one allows you to track orders, save favorites, view order history, and checkout faster on future purchases."
        },
        {
          question: "How do I reset my password?",
          answer: "Click on the 'Sign In' link and then select 'Forgot Password.' Enter your email address, and we'll send you instructions to reset your password."
        },
        {
          question: "Is my personal information secure?",
          answer: "Yes, we take security seriously. We use SSL encryption to protect your data, never store credit card information, and comply with industry security standards to keep your information safe."
        },
        {
          question: "Why can't I log into my account?",
          answer: "This could be due to an incorrect email/password combination, a temporary account lock due to multiple failed attempts, or browser issues. Try resetting your password or clear your browser cache and cookies."
        }
      ]
    },
    {
      category: "Products & Inventory",
      questions: [
        {
          question: "Are your product photos accurate?",
          answer: "We strive to display accurate product photos and descriptions. However, colors may vary slightly due to monitor settings. If you're not satisfied with your purchase, our return policy has you covered."
        },
        {
          question: "What if an item is out of stock?",
          answer: "Out of stock items are clearly marked on our website. You can sign up for notifications to be alerted when the item is back in stock. We restock popular items regularly."
        },
        {
          question: "Do you offer product warranties?",
          answer: "Many of our products come with manufacturer warranties. Warranty information is listed on individual product pages. We also stand behind our products and will help resolve any quality issues."
        },
        {
          question: "Can I get product recommendations?",
          answer: "Our website features related products and customer reviews to help you make informed decisions. You can also contact our customer service team for personalized recommendations."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about shopping with SalahMart.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = `${categoryIndex}-${faqIndex}`
                    const isOpen = openFAQ === globalIndex
                    
                    return (
                      <div key={faqIndex} className="border border-gray-200 rounded-lg">
                        <button
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                          onClick={() => toggleFAQ(globalIndex)}
                        >
                          <span className="font-medium text-gray-900 pr-4">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <ChevronDownIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronRightIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <div className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-700 mb-6">
            Can't find the answer you're looking for? Our customer support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@salahmart.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Email Support
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-300 text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors"
            >
              Call (79) 200-6318
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Monday - Friday, 9:00 AM - 6:00 PM EST
          </p>
        </div>
      </div>
    </div>
  )
}

export default FAQPage
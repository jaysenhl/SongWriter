'use client';

import Navbar from '@/components/Navbar';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

export default function Pricing() {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-center mb-4">Free</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Create 1 song
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Basic word suggestions
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Save and edit your song
                </li>
              </ul>
            </div>
            <div className="px-6 py-4 bg-gray-50">
              <Link
                href="/api/auth/login"
                className="block text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-blue-500">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-center mb-4">Premium</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">$9.99</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Unlimited songs
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Advanced AI suggestions
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Genre analysis
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Export to multiple formats
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Priority support
                </li>
              </ul>
            </div>
            <div className="px-6 py-4 bg-gray-50">
              <Link
                href="/api/auth/login"
                className="block text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Get Premium
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

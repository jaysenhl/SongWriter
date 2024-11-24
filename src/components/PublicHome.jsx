'use client';

import Link from 'next/link';

export default function PublicHome() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Create Amazing Song Lyrics with AI
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Transform your ideas into beautiful lyrics with our AI-powered writing assistant
            </p>
            <Link 
              href="/pricing" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="✨"
              title="AI-Powered Suggestions"
              description="Get intelligent word suggestions and rhyming options as you write"
            />
            <FeatureCard 
              icon="📝"
              title="Easy Organization"
              description="Keep all your songs organized in one place with smart categorization"
            />
            <FeatureCard 
              icon="🎵"
              title="Genre Analysis"
              description="Get insights about your writing style and genre patterns"
            />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Writing?</h2>
          <p className="text-xl mb-8">Choose your plan and begin creating amazing lyrics today</p>
          <Link 
            href="/pricing" 
            className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

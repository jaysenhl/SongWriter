'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function AuthenticatedHome() {
  const { user } = useUser();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Image 
          src={user?.picture}
          alt={user?.name}
          width={80}
          height={80}
          className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-blue-500"
        />
        <h1 className="text-3xl font-bold">
          Welcome, {user?.name}!
        </h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Create Song Card */}
        <Link href="/crear-cancion">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
            <div className="text-4xl mb-4 text-center">✍️</div>
            <h2 className="text-xl font-semibold text-center mb-2">Create Song</h2>
            <p className="text-gray-600 text-center">
              Start writing your next masterpiece with AI assistance
            </p>
          </div>
        </Link>

        {/* Search Songs Card */}
        <Link href="/buscar-canciones">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
            <div className="text-4xl mb-4 text-center">🔍</div>
            <h2 className="text-xl font-semibold text-center mb-2">Search Songs</h2>
            <p className="text-gray-600 text-center">
              Find and explore your song collection
            </p>
          </div>
        </Link>

        {/* View Songs Card */}
        <Link href="/mis-canciones">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
            <div className="text-4xl mb-4 text-center">📚</div>
            <h2 className="text-xl font-semibold text-center mb-2">My Songs</h2>
            <p className="text-gray-600 text-center">
              Browse and manage your song library
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

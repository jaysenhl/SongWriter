'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

export default function Dashboard() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) return <div>Please log in</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center space-x-4">
            <img src={user.picture} alt={user.name} className="w-16 h-16 rounded-full" />
            <div>
              <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/crear-cancion">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
              <h2 className="text-xl font-semibold mb-2">Create New Song</h2>
              <p className="text-gray-600">Start writing your next masterpiece</p>
            </div>
          </Link>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Your Stats</h2>
            <ul className="space-y-2">
              <li>Total Songs: 0</li>
              <li>Last Song: N/A</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <a
            href="/api/auth/logout"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  );
}

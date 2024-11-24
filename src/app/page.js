'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import PublicHome from '@/components/PublicHome';
import AuthenticatedHome from '@/components/AuthenticatedHome';
import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Page() {
  const { user, isLoading } = useUser();

  if (isLoading) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        {user ? <AuthenticatedHome /> : <PublicHome />}
      </main>
    </div>
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

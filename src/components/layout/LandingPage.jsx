'use client';

import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function LandingPage() {
  const { user, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (user) return null; // No mostrar la landing page a usuarios autenticados

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Lyric Box
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Tu espacio creativo para componer y organizar letras de canciones
          </p>
          <Link
            href="/api/auth/login"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Comenzar Gratis
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Características</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-semibold mb-2">Organización Intuitiva</h3>
              <p className="text-gray-600">Mantén tus letras organizadas y accesibles en un solo lugar</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">Editor Inteligente</h3>
              <p className="text-gray-600">Herramientas de edición diseñadas específicamente para compositores</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-2">Sincronización</h3>
              <p className="text-gray-600">Accede a tus letras desde cualquier dispositivo</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Es gratis?</h3>
              <p className="text-gray-600">Sí, Lyric Box es completamente gratuito para uso personal.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Puedo acceder desde cualquier dispositivo?</h3>
              <p className="text-gray-600">Sí, tus letras se sincronizan automáticamente en todos tus dispositivos.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Mis letras están seguras?</h3>
              <p className="text-gray-600">Sí, utilizamos encriptación de última generación para proteger tus datos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white" id="contact">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-black flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-8 font-bold mb-2">Lyric Box</h1>
      <div className="space-y-4 w-full max-w-xs">
        <Link href="/crear-cancion" className="block">
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors button-blue">
            <i className="fas fa-plus mr-2"></i> Crear Canción
          </button>
        </Link>
        <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors button-green">
          <i className="fas fa-music mr-2"></i> Ver Canciones
        </button>
        <button className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors button-purple">
          <i className="fas fa-search mr-2"></i> Buscar Canciones
        </button>
      </div>
      <style jsx>{`
        .button-blue {
          box-shadow: 0 0 15px 5px rgba(59, 130, 246, 0.5);
          animation: pulse-blue 2s infinite;
        }
        .button-green {
          box-shadow: 0 0 15px 5px rgba(34, 197, 94, 0.5);
          animation: pulse-green 2s infinite;
        }
        .button-purple {
          box-shadow: 0 0 15px 5px rgba(147, 51, 234, 0.5);
          animation: pulse-purple 2s infinite;
        }
        @keyframes pulse-blue {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 15px 5px rgba(59, 130, 246, 0.5);
          }
        }
        @keyframes pulse-green {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5);
          }
          50% {
            box-shadow: 0 0 15px 5px rgba(34, 197, 94, 0.5);
          }
        }
        @keyframes pulse-purple {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(147, 51, 234, 0.5);
          }
          50% {
            box-shadow: 0 0 15px 5px rgba(147, 51, 234, 0.5);
          }
        }
      `}</style>
    </div>
  );
}

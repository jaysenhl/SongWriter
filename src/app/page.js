"use client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';
import withAuth from '../utils/withAuth';

export default withAuth(function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-black flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-2">Song Writer</h1>
      <h2 className="text-center font-light mt-2 mb-8 font-bold">Made By Ja1zen</h2>
      <div className="space-y-4 w-full max-w-xs">
        <Link href="/crear-cancion">
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 button-glow button-blue">
            <i className="fas fa-plus mr-2"></i> Crear Canción
          </button>
        </Link>
        <button className="w-full bg-green-500 text-white px-4 py-2 rounded shadow-md hover:bg-green-600 button-glow button-green">
          <i className="fas fa-search mr-2"></i> Buscar Canción
        </button>
        <button className="w-full bg-purple-500 text-white px-4 py-2 rounded shadow-md hover:bg-purple-600 button-glow button-purple">
          <i className="fas fa-music mr-2"></i> Ver Canciones
        </button>
      </div>
    </div>
  );
});
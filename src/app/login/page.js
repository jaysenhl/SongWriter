"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../supabaseClient';

export default function Login() {
  console.log('Login component rendered');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    console.log('Login button clicked');
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    console.log('Supabase response:', data, error);
    if (error) {
      alert('Error logging in');
    } else if (data.session) {
      await updateDisplayName(data.user.id, name);
      router.push('/');
    }
  };

  async function updateDisplayName(userId, displayName) {
    try {
      const response = await fetch('/functions/updateDisplayName', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.SUPABASE_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ user_id: userId, display_name: displayName }),
      });

      const result = await response.json();
      console.log('Response from Edge Function:', result);

      if (response.ok) {
        console.log('Display name updated successfully:', result.data);
      } else {
        console.error('Error updating display name:', result.error);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <h1 className="text-4xl font-bold text-center text-white">Welcome To Lyric Box</h1>
      <style jsx>{`
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 10px 5px white;
          }
          50% {
            box-shadow: 0 0 20px 10px white;
          }
        }
        .glow {
          animation: glow 2s infinite;
        }
      `}</style>
      <img src="/lyricbox.png" alt="Logo" className="w-24 h-24 mb-12 mt-6 rounded-full shadow-lg glow" style={{ width: '350px', height: '350px' }} />
      <div className="bg-white p-8 rounded shadow-md max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
      </div>
    </div>
  );
}

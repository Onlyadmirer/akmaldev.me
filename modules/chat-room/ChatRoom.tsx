"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

// Bungkus aplikasi kamu di layout.js dengan <SessionProvider> agar useSession() ini bekerja

export default function ChatRoom() {
  // Ambil data user saat ini
  // data dialiaskan menjadi 'session'
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (session) {
    return (
      <div className='flex items-center gap-4'>
        <Image
          src={session.user?.image || ""}
          alt='Avatar'
          width={300}
          height={300}
          className='w-8 h-8 rounded-full'
        />
        <p>Halo, {session.user?.name}</p>
        <button
          onClick={() => signOut()}
          className='bg-red-500 px-3 py-1 rounded text-white'
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className='flex gap-2'>
      <button
        onClick={() => signIn("github")}
        className='bg-gray-800 px-4 py-2 rounded text-white'
      >
        Login dengan GitHub
      </button>
      <button
        onClick={() => signIn("google")}
        className='bg-blue-600 px-4 py-2 rounded text-white'
      >
        Login dengan Google
      </button>
    </div>
  );
}

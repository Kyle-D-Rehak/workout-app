"use client";
import Image from 'next/image'
import React, { useEffect } from 'react';
import { useAuthContext } from './context/AuthContext';
import { useRouter } from "next/navigation";
import LogoutButton from '@/components/LogoutButton';




export default function Home() {
  const router = useRouter();

  const auth = useAuthContext();

  useEffect(() => {
    if (auth.user === null) {
      router.push("/signin");
    }
  }, [auth])

  
  return (
    <main className="">
      { auth.user ? <div>Hello, {auth.user.email}! <LogoutButton/></div> : <></> }
    </main>
  )
}

"use client";
import Image from 'next/image'
import React, { useEffect } from 'react';
import { useAuthContext } from './context/AuthContext';
import { useRouter } from "next/navigation";




export default function Home() {
  const router = useRouter();

  const auth = useAuthContext();
  console.log(auth);

  useEffect(() => {
    if (auth.user === null) {
      router.push("/signin");
    }
  }, [auth])

  
  return (
    <main className="">
      { auth.user ? <div>Hello, {auth.user.email}!</div> : <></> }
    </main>
  )
}

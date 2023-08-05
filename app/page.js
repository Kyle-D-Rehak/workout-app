"use client";
import React, { useEffect } from "react";
import { useAuthContext } from "./context/AuthContext";
import { useRouter } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";
import userExists from "./firebase/auth/userExists";

export default function Home() {
  const router = useRouter();
  const auth = useAuthContext();

  useEffect(() => {
    (async () => {
      if (auth.user === null) {
        console.log("pushed from home to signin");
        router.push("/signin");
      } else if (auth.user && !(await userExists(auth))) {
        console.log("pushed from home to setup");
        router.push("/setup");
      }
    })();
  }, [auth, router]);
  console.log(auth.user);

  return (
    <main className="">
      {userExists(auth) && auth.user ? (
        <div>
          Hello, {auth.user.email}! <LogoutButton />
        </div>
      ) : (
        <></>
      )}
    </main>
  );
}

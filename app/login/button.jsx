"use client";

import { signIn, signOut } from "next-auth/react";
import { getSession } from "next-auth/react"

import { useEffect, useState } from "react";

export const LoginButton = () => {

  const [session, setSession] = useState(null);

  useEffect(() => {
    const login = async () => {
      const currentSession = await getSession();
      setSession(currentSession);
      console.log("login button ", currentSession);
    };
    login();
  }, []);


  return (
    <div className="flex gap-8 flex-col">
      <h1 className="text-3xl">Authentication</h1>
      <p>Email: {session ? session?.user?.email : "Not Authenticated"}</p>
      {
        session ?
          <button className="bg-rose-600 text-white py-2 px-4 rounded" onClick={() => signOut()}>
            Sign Out
          </button>
          :
          <>
          <button className="bg-slate-500 text-white py-2 px-4 rounded" onClick={() => signIn("github")}>
            Git Sign in
          </button>
          <button className="bg-slate-500 text-white py-2 px-4 rounded" onClick={() => signIn("google")}>
            Google Sign in
          </button>
          </>
      }

    </div>
  )
};


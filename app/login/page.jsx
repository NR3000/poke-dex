"use client"
import { SessionProvider} from "next-auth/react";
import { LoginButton } from "./button";

export default function Login(props) {
    return (
        <SessionProvider>
            <main className="flex items-center justify-center h-[70vh]">
                <LoginButton />
            </main>
        </SessionProvider>
    );
}

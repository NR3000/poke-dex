"use client"

import { getSession } from "next-auth/react";
import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react"
import { MdAccountCircle } from "react-icons/md"
import Backdrop from "./Backdrop";

const nav = [
    { "id": "poke-list-menu", "link": "/page/1", "path": "page", "name": "Poke-List" },
    { "id": "charts-menu", "link": "/charts", "path": "charts", "name": "Charts" },
    { "id": "search-menu", "link": "/search", "path": "search", "name": "Search" },
    { "id": "sheet-menu", "link": "/sheet", "path": "sheet", "name": "Sheet" },
]

const Header = () => {

    const [session, setSession] = useState(null);
    const [profileMenu, setProfileMenu] = useState(false);
    const path = usePathname()

    useEffect(() => {
        const login = async () => {
            const currentSession = await getSession();
            setSession(currentSession);
            console.log("login button ", currentSession);
        };
        login();
    }, []);


    return (
        <header className="sticky top-0 bg-rose-100 flex items-center h-12 px-4 py-2 justify-between border-b border-red-200">
            <section className="inline-flex gap-2 items-center">
                <div className="relative w-8 h-8">
                    <Image src={"/default.png"} alt="Logo" fill sizes="32" />
                </div>
                <span className="text-2xl">Pokedex</span>
            </section>
            <nav>
                <ul className="inline-flex gap-4">
                    {
                        nav.map((menu) => (
                            <Link
                                href={menu.link}
                                className={`${path.includes(menu.path) ? "text-sm px-2 py-1 border-y border-rose-600 font-semibold text-rose-600" : "text-sm px-2 py-1 border-y border-transparent hover:text-rose-600 font-semibold"}`}
                                key={menu.id}
                                onClick={() => setProfileMenu(false)}
                            >
                                {menu.name}
                            </Link>
                        ))
                    }
                </ul>
            </nav>
            <section className="inline-flex items-center gap-4">
                {
                    session ?
                        <div className="relative w-8 h-8 shadow-[0px_0px_0px_1px] rounded-full shadow-slate-700" onClick={() => setProfileMenu(!profileMenu)} ><Image src={session?.user?.image} className="rounded-full" alt="user-profile" fill sizes="32" /></div>
                        :
                        <MdAccountCircle className="text-3xl text-cyan-800" onClick={() => setProfileMenu(!profileMenu)} />
                }
                {profileMenu && <Backdrop action={() => setProfileMenu(false)} />}
                <div className={profileMenu ? "absolute w-max right-4 top-14 inline-flex gap-4 flex-col bg-rose-300 p-4 rounded-md h-max" : "hidden"}>
                    <span>{session?.user?.name}</span>
                    <Link href={`/api/auth/${session ? "signout" : "signin"}`} className="bg-rose-400 text-white py-1 px-4 rounded">
                        {session ? "Sign Out" : "Sign In"}
                    </Link>
                </div>
            </section>
        </header>
    )
}

export default Header
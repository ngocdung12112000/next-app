"use client";
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"

const Nav = () => {
    const {data: session}: any = useSession()
    return (
        <header className="w-100 bg-slate-500">
            <nav className="flex justify-between items-center px-10 py-4">
                <div>
                    BNDZ
                </div>
                <div className="flex gap-10">
                    <Link href="/">Home</Link>
                    <Link href="/admin">Admin</Link>
                    <Link href="/about">About</Link>
                    <Link href="/profile">Profile</Link>
                    {
                        !session ? (
                            <>
                                <Link href="/login">Login</Link>
                                <Link href="/signup">Sign up</Link>
                            </>
                        ): (
                            <>
                                {session.user.email}
                                <button onClick={() => {
                                    signOut()
                                }} className="p-2 px-5 -mt-1 bg-blue-400 rounded-full">Logout</button>
                            </>
                        )
                    }
                    
                </div>
            </nav>
        </header>
    )
}

export default Nav
"use client";


import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useConvexAuth } from "convex/react";
import { authClient } from "@/lib/auth-client";

export function Navbar(){
    const { isAuthenticated ,isLoading} = useConvexAuth();
    return(
        <nav className= "w-full py-5 flex items-center justify-between">
            <div className="flex items-center gap-8">
                <Link href ="/">
                <h1 className ="text-3xl font-bold">
                    Next<span className ="text-blue-500">Pro</span>
                </h1>
                </Link>
                <div className ="flex items-center gap-2">
                    <Link className ={buttonVariants({variant : "ghost"})} href ="/">Home</Link>
                    <Link className ={buttonVariants({variant : "ghost"})}  href ="/blog">Blog</Link>
                    <Link className ={buttonVariants({variant : "ghost"})}  href = "/create">Create</Link>

                </div>

            </div>
            <div className="flex items-center gap-2">
                {isLoading ? null : isAuthenticated ? (
                    <Button onClick={()=> authClient.signOut({})}>Logout</Button>
                ) :(
                    <>
                      <ThemeToggle />
                <Link className= {buttonVariants()} href="/auth/sign-up">Sign up</Link>
                <Link className= {buttonVariants({variant :"secondary"})} href="/auth/login">Login</Link>
                    </>
                )}
             
            </div>
        </nav>
    )   
}
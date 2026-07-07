'use client'
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { logoutAction } from "@/app/actions";
import { useRouter } from "next/navigation";

export function Logout() {

    const [email, setEmail] = useState('');
    const router = useRouter();

    const logout = async () => {
        try {
            await logoutAction();
            localStorage.removeItem("user")
            localStorage.removeItem("organization")
            router.push("/")
        } catch (e) {
            console.error(e);
        } 
    };


    useEffect(() => {
        const user = localStorage.getItem("user");

        if (user) {
            setEmail(JSON.parse(user).email);
        }

    }, []);

    return (
        <div className="flex items-center justify-between px-6 py-4">
            <Button variant="link" className="text-xs font-normal text-neutral-400" onClick={logout}>
                Log out
            </Button>

            <div className="mt-2 flex flex-col gap-0.5">
                <p className="text-xs font-normal text-neutral-400">
                    Logged in as
                </p>
                <p className="text-xs font-normal">
                    {email}
                </p>
            </div>
        </div>
    )
}
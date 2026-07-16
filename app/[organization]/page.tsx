'use client'
import { Logout } from "@/components/logout";
import { useParams } from "next/navigation";

export default function() {
    const param = useParams();

    return (
        <>
        <Logout />
        </>
    )
}
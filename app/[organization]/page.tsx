'use client'
import { useParams } from "next/navigation";

export default function() {
    const param = useParams();

    console.log(param)
    return (
        <>
            Hi there
        </>
    )
}
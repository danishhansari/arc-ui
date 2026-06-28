'use client'
import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Loader2 } from "lucide-react"
import { createWorkspaceAction } from "@/app/actions"
import Link from "next/link"

export const CreateWorkspace = () => {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const userInfo: any = localStorage.getItem("user")
    const {email} = JSON.parse(userInfo);
    const createWorkspace = async () => {
        try {
            setLoading(true);
            await createWorkspaceAction({
                name,
                url,
            });
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <main className="flex justify-center h-dvh">
                <div className="max-w-md w-full px-4 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl mt-18 text-center">Create a workspace</h2>
                        <h3 className="text-zinc-500 mt-2  mb-8 text-sm text-center">Move work forward accross teams and agents</h3>
                        <Label className="text-zinc-600 font-normal text-xs mb-2">Name</Label>
                        <Input className="border border-zinc-800 py-5"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <Label className="text-zinc-600 font-normal text-xs mt-6 mb-2">URL</Label>

                        <div className="flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring">
                            <span className="px-2 py-2.5 rounded-l-sm text-sm text-muted-foreground border-r bg-muted/40 border/30">
                                arc.app/
                            </span>

                            <Input
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                className="border-0 py-5 shadow-none focus-visible:ring-0 rounded-l-none"
                            />
                        </div>

                        <Button className="w-full mt-12 py-6 rounded-full font-normal bg-zinc-900 hover:bg-zinc-850" variant={'secondary'}
                            onClick={createWorkspace}
                            disabled={loading || !name || !url}
                        >Create workspace {loading && <Loader2 className="animate-spin" />}</Button>
                        <p className="text-zinc-600 font-normal text-sm text-center mt-8">Join existing workspace instead</p>
                    </div>
                    <div className="text-center py-4 text-xs">
                        <p className="text-zinc-400 font-medium">Using {email}</p>
                        <Link className="text-zinc-600 text-sm" href={'/login'}>Use a different email</Link>
                    </div>
                </div>
            </main>
        </>
    )
}
'use client'
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Loader2 } from "lucide-react"
import { createWorkspaceAction, existsWorkspaceUrl } from "@/app/actions"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

export const CreateWorkspace = () => {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const [debouncedUrl, setDebouncedUrl] = useState("")
    const [urlExists, setUrlExists] = useState<boolean | null>(null);
    const [showValid, setShowValid] = useState(false);
    const navigation = useRouter();
    const [email, setEmail] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedUrl(url)
        }, 500)
        return () => clearTimeout(timer);
    }, [url])

    useEffect(() => {
            const userInfo: any = localStorage.getItem("user")
            if(userInfo) {
            const {email} = JSON.parse(userInfo);
            setEmail(email);
            }
    })

    useEffect(() => {
        if (!debouncedUrl.trim()) {
            setUrlExists(null);
            setShowValid(false);
            return;
        }

        checkWorkspaceUrl(debouncedUrl);
    }, [debouncedUrl]);

    useEffect(() => {
        if (!showValid) return;

        const timer = setTimeout(() => {
            setShowValid(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, [showValid]);



    const createWorkspace = async () => {
        try {
            setLoading(true);
            const response = await createWorkspaceAction({
                name,
                url: `arc.app/${url}`,
            });
            localStorage.setItem("organization", JSON.stringify(response));
            navigation.replace(`/${response.name}/welcome`)
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const checkWorkspaceUrl = async (debouncedUrl: string) => {
        try {
            const response = await existsWorkspaceUrl({
                url: `arc.app/${debouncedUrl}`,
            });
            setUrlExists(response.exists);
            if (response.exists) {
                setShowValid(false);
            } else {
                setShowValid(true);
            }
        } catch (e) {
            console.error(e);
        } finally {
        }
    }

    return (
        <>
            <main className="flex justify-center h-dvh">
                <div className="max-w-md w-full px-4 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl mt-18 md:mt-28 text-center">Create a workspace</h2>
                        <h3 className="text-zinc-500 mt-2  mb-8 text-sm text-center">Move work forward accross teams and agents</h3>
                        <Label className="text-zinc-600 font-normal text-xs mb-2">Name</Label>
                        <Input className="border border-zinc-800 py-5"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <Label className="text-zinc-600 font-normal text-xs mt-6 mb-2">URL</Label>

                        <div
                            className={cn(
                                "flex items-center rounded-md border transition-colors",
                                "focus-within:ring-1",
                                urlExists === null && "border-input focus-within:ring-ring",
                                urlExists === true &&
                                "border-red-500 focus-within:border-red-500 focus-within:ring-red-500 animate-shake",
                                showValid &&
                                "border-green-500 focus-within:border-green-500 focus-within:ring-green-500"
                            )}
                        >
                            <span className="px-2 py-2.5 rounded-l-sm text-sm text-muted-foreground border-r bg-muted/40">
                                arc.app/
                            </span>

                            <Input
                                value={url}
                                onChange={(e) => {
                                    setUrl(e.target.value);
                                    setShowValid(false);
                                    setUrlExists(null);
                                }}
                                className="border-0 py-5 shadow-none focus-visible:ring-0 rounded-l-none"
                            />
                        </div>

                        <div>
                            {loading && (
                                <p className="text-xs text-muted-foreground mt-0.5">
                                    Checking workspace URL...
                                </p>
                            )}

                            {!loading && urlExists === true && (
                                <p className="text-xs text-red-500 mt-0.5">
                                    This workspace URL is already taken.
                                </p>
                            )}

                            {!loading && showValid && (
                                <p className="text-xs text-green-600 mt-0.5">
                                    This workspace URL is available.
                                </p>
                            )}


                        </div>

                        <Button className="w-full mt-12 py-6 rounded-full font-normal bg-zinc-900 hover:bg-zinc-850" variant={'secondary'}
                            onClick={createWorkspace}
                            disabled={
                                loading ||
                                !name.trim() ||
                                !url.trim() ||
                                urlExists !== false
                            }
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
'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { Loader2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWorkspaceSummary } from "../actions";
import { WorkspaceSummary } from "@/types";



export default function Workspace() {

    const [workspaces, setWorkspaces] = useState<WorkspaceSummary[]>([]);
    const [loading, setLoading] = useState(true);
    const userInfo: any = localStorage.getItem("user")
    const { email } = JSON.parse(userInfo);


    useEffect(() => {
        fetchWorkspaces();
    }, []);

    const fetchWorkspaces = async () => {
        try {
            const response = await getWorkspaceSummary();
            setWorkspaces(response);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const getInitials = (name: string) =>
        name
            .split(" ")
            .map(word => word[0])
            .join("")
            .toUpperCase()
            .slice(0, 2);

    return (
        <section className="flex h-full flex-col">
            <div className="flex items-center justify-between px-6 py-4">
                <Button variant="link" className="text-xs font-normal text-neutral-400">
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

            <div className="flex h-[80vh] items-center justify-center">
                <div>
                    <p className="text-2xl font-medium">
                        You have access to these workspaces
                    </p>

                    <div className="mx-auto mt-8 max-w-md rounded-lg bg-white/5 px-4 py-6">

                        {loading ? (
                            <p className="text-sm text-neutral-400">
                                <Loader2 className="animate-spin" />
                            </p>
                        ) : (
                            <>
                                {workspaces.map((workspace, index) => (
                                    <div key={workspace.workspaceId}>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="flex h-7.5 w-7.5 items-center justify-center rounded bg-blue-500 font-semibold text-white">
                                                    {getInitials(workspace.workspaceName)}
                                                </div>

                                                <div className="flex flex-col gap-0.5 text-xs">
                                                    <p>{workspace.workspaceName}</p>
                                                    <p className="font-semibold text-gray-500">
                                                        {workspace.workspaceMembers}{" "}
                                                        {workspace.workspaceMembers === 1
                                                            ? "member"
                                                            : "members"}
                                                    </p>
                                                </div>
                                            </div>

                                            <Button variant="secondary">
                                                Join
                                            </Button>
                                        </div>

                                        {index !== workspaces.length - 1 && (
                                            <div className="my-6 border-t border-neutral-800" />
                                        )}
                                    </div>
                                ))}

                                <div className="my-6 border-t border-neutral-800" />

                                <Link
                                    href="/workspace/create"
                                    className="inline-flex items-center gap-1 rounded-full bg-zinc-800 px-2 py-1.5 text-sm hover:bg-zinc-700"
                                >
                                    <Plus size={14} />
                                    Create new workspace
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
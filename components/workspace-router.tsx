"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { WorkspaceType } from "@/types";

export default function WorkspaceRedirect({ workspace }: {workspace: WorkspaceType }) {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("organization", JSON.stringify(workspace));
    router.replace(`/${workspace.name}/inbox`);
  }, [workspace, router]);

  return null;
}
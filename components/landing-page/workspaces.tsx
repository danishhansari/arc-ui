
 "use client";

 import { useEffect, useState } from "react";
 import Link from "next/link";
 import { Plus } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { WorkspaceSummaryType } from "@/types";
 import {
   getWorkspaceSummaryAction,
   updateWorkspaceAction,
 } from "@/app/actions";
 import { useRouter } from "next/navigation";
import { Logout } from "../logout";
import { Skeleton } from "../ui/skeleton";

 export const Workspaces = () => {
   const [workspaces, setWorkspaces] = useState<WorkspaceSummaryType[]>([]);
   const [loading, setLoading] = useState(true);
   const router = useRouter();

   useEffect(() => {
     fetchWorkspaces();
   }, []);


   const fetchWorkspaces = async () => {
     try {
       const response = await getWorkspaceSummaryAction();
       setWorkspaces(response);
     } catch (e) {
       console.error(e);
     } finally {
       setLoading(false);
     }
   };

   const updateWorkspace = async (workspaceId: string) => {
     try {
       const response = await updateWorkspaceAction(workspaceId);
       localStorage.setItem("organization", JSON.stringify(response));
       router.push(response.name)
     } catch (e) {
       console.error(e);
     }
   };

   const getInitials = (name: string) =>
     name
       .split(" ")
       .map((word) => word[0])
       .join("")
       .toUpperCase()
       .slice(0, 2);

   return (
     <section className="flex h-full flex-col">
       <Logout />


         <div className="flex h-[80vh] items-center justify-center">
           <div>
             <p className="text-2xl font-medium">
               You have access to these workspaces
             </p>

             <div className="mx-auto mt-8 max-w-md rounded-lg bg-white/5 px-4 py-6">
               {loading ? (
                 <>
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-4">
                       <Skeleton className="h-8 w-8 rounded-md" />

                       <div className="space-y-2">
                         <Skeleton className="h-4 w-28" />
                         <Skeleton className="h-3 w-20" />
                       </div>
                     </div>

                     <Skeleton className="h-7 w-12 rounded-full" />
                   </div>

                   <div className="my-6 border-t border-neutral-800" />

                   <Skeleton className="h-9 w-44 rounded-full" />
                 </>
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

                         <Button
                           variant="secondary"
                           onClick={() => updateWorkspace(workspace.workspaceId)}
                         >
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
 };
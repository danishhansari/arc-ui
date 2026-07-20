"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getInitials } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { logoutAction } from "@/app/actions";

export function OrganizationDropdown({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const router = useRouter();

  const logout = async () => {
    try {
      await logoutAction();
      localStorage.removeItem("user");
      localStorage.removeItem("organization");
      router.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Button
          variant={"ghost"}
          className="flex rounded-md p-1 ml-1.5 items-center gap-2 mt-1"
        >
          <div className="flex h-4.5 w-4.5 text-xs items-center justify-center rounded bg-blue-500 font-semibold text-white">
            {getInitials(name)}
          </div>
          <p className="text-xs">{name}</p>
          <ChevronDown size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60" align="center">
        <DropdownMenuGroup>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Invite and manage members</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Switch workspace</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="ml-0.5 -mt-6">
                <DropdownMenuLabel>{email}</DropdownMenuLabel>
                <DropdownMenuItem className="bg-accent flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="flex h-4.5 w-4.5 text-xs rounded-full items-center justify-center bg-blue-500 font-semibold text-white">
                      {getInitials(name)}
                    </div>
                    {name}
                  </div>
                  <div>
                    <Check />
                  </div>
                </DropdownMenuItem>
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Link href={"/workspace/create"}>
                    Create or join a workspace...
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Add an account...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

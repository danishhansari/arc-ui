"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { navigation } from "@/lib/constants";
import { WorkspaceType } from "@/types";
import { useEffect, useState } from "react";
import { DropdownMenuDemo } from "@/components/dropdown";

export function AppSidebar() {
  const pathname = usePathname();
  const [organization, setOrganization] = useState<WorkspaceType | null>(null);

  useEffect(() => {
    const organizationObj = localStorage.getItem("organization");

    if (organizationObj) {
      setOrganization(JSON.parse(organizationObj));
    }
  }, []);

  if (!organization) {
    return null;
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <DropdownMenuDemo name={organization.name} />
        </SidebarGroup>
        <SidebarGroup className="-mt-4">
          <SidebarMenu className="-ml-2">
            {navigation.map((group) => (
              <SidebarGroup key={group.label}>
                <SidebarMenu>
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    const link ='/' + organization.name + item.href;
                    return (
                      <SidebarMenuItem key={item.href}>
                        <SidebarMenuButton
                          className={`text-xs font-sans rounded-sm text-zinc-400 hover:font-semibold ${pathname === link ? "font-semibold": ""}`}
                          asChild
                          isActive={pathname === link}
                        >
                          <Link href={`/${organization.name}${item.href}`}>
                            <Icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroup>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

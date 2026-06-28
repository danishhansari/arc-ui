"use server";

import { cookies } from "next/headers";

export async function createWorkspaceAction(data: {
  name: string;
  url: string;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_USER_SERVICE_URL}/issue/workspace`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Failed to create workspace");
  }
  const serverResponse  = await response.json();
  return serverResponse; 
}
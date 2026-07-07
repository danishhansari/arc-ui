"use server";

import { OnboardingData } from "@/types";
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
    const message = await response.json();
    throw new Error(message || "Failed to create workspace");
  }
  const serverResponse = await response.json();
  return serverResponse;
}

export async function existsWorkspaceUrl(data: {
  url: string;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    throw new Error("Unauthorized");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_USER_SERVICE_URL}/issue/workspace/exists`,
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
    const message = await response.json();
    console.log(message)
    throw new Error("Failed to get response is exists or not");
  }
  const serverResponse = await response.json();
  console.log(serverResponse)
  return serverResponse;
}

export async function createWorkspaceMemberAction(data: OnboardingData) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_USER_SERVICE_URL}/issue/workspace/member`,
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
    const message = await response.json();
    throw new Error(message || "Failed to create workspace");
  }
  const serverResponse = await response.json();
  return serverResponse;
}

export async function getWorkspaceSummary() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_USER_SERVICE_URL}/issue/workspace`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );
  if (!response.ok) {
    const message = await response.json();
    throw new Error(message || "Failed to create workspace");
  }
  const serverResponse = await response.json();
  return serverResponse;
}

export async function logoutAction() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_USER_SERVICE_URL}/user/auth/logout`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const message = await response.json();
    throw new Error(message || "Failed to logout");
  }
  cookieStore.delete("token");
  return;
}
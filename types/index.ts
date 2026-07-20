export interface OnboardingData {
    name: string;
    title: string;
    invitedEmail: string[];
    workspaceId?:string;
}

export interface EmailChipsInputProps {
  value?: string[];
  onChange?: (emails: string[]) => void;
  placeholder?: string;
  className?: string;
}

export interface WorkspaceSummaryType {
    workspaceId: string;
    workspaceName: string;
    workspaceMembers: number;
};

export interface WorkspaceType {
    id: string;
    name: string;
    url: string;
    workspaceCreator: string;
};

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type Status = "backlog" | "todo" | "progress" | "done";
export type Priority = "high" | "medium" | "low";

export interface Issue {
  id: string;
  title: string;
  status: Status;
  priority: Priority;
  assignee: string;
  color: string;
}
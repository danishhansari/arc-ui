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

export interface WorkspaceSummary {
    workspaceId: string;
    workspaceName: string;
    workspaceMembers: number;
};

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


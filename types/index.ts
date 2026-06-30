export interface OnboardingData {
    name: string;
    title: string;
    emails: string[];
}

export interface EmailChipsInputProps {
  value?: string[];
  onChange?: (emails: string[]) => void;
  placeholder?: string;
  className?: string;
}

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


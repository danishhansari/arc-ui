import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { EMAIL_REGEX, EmailChipsInputProps } from "@/types";


export function EmailChipsInput({
  value,
  onChange,
  placeholder = "eg. account@google.com",
  className,
}: EmailChipsInputProps) {
  const [emails, setEmails] = useState<string[]>(value ?? []);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value) setEmails(value);
  }, [value]);

  const updateEmails = (next: string[]) => {
    setEmails(next);
    onChange?.(next);
  };

  const addEmail = (raw: string) => {
    const email = raw.trim().replace(/,$/, "");
    if (!email) return;

    if (!EMAIL_REGEX.test(email)) {
      setError(`"${email}" is not a valid email`);
      return;
    }
    if (emails.includes(email)) {
      setError(`"${email}" already added`);
      setInputValue("");
      return;
    }

    updateEmails([...emails, email]);
    setInputValue("");
    setError(null);
  };

  const removeEmail = (email: string) => {
    updateEmails(emails.filter((e) => e !== email));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "," || e.key === " ") {
      e.preventDefault();
      addEmail(inputValue);
    } else if (e.key === "Backspace" && inputValue === "" && emails.length > 0) {
      // remove last chip when backspacing on empty input
      updateEmails(emails.slice(0, -1));
    } else {
      setError(null);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData("text");
    if (pasted.includes(",") || pasted.includes(" ") || pasted.includes("\n")) {
      e.preventDefault();
      const parts = pasted.split(/[\s,]+/).filter(Boolean);
      parts.forEach((p) => addEmail(p));
    }
  };

  const handleBlur = () => {
    if (inputValue.trim()) addEmail(inputValue);
  };

  return (
    <div className="space-y-1.5">
      <div
        ref={containerRef}
        onClick={() => inputRef.current?.focus()}
        className={cn(
          "flex min-h-20 w-full flex-wrap content-start items-start gap-1.5 rounded-md border border-input bg-transparent px-3 py-2.5 text-sm shadow-sm cursor-text",
          "focus-within:ring-1 focus-within:ring-ring focus-within:outline-none",
          error && "border-destructive focus-within:ring-destructive",
          className
        )}
      >
        {emails.map((email) => (
          <Badge
            key={email}
            variant="secondary"
            className="flex items-center gap-1 rounded-full px-1.5 py-3 font-normal"
          >
            {email}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeEmail(email);
              }}
              className="ml-0.5 rounded-full hover:bg-muted-foreground/20"
            >
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}

        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setError(null);
          }}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          onBlur={handleBlur}
          placeholder={emails.length === 0 ? placeholder : ""}
          className="flex-1 min-w-30 bg-transparent outline-none placeholder:text-muted-foreground"
        />
      </div>

      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-2xl border bg-white/80 px-4 py-2 text-sm text-ink shadow-sm transition-colors placeholder:text-ink/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mauve-400 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white/5 dark:text-blush-50 dark:placeholder:text-blush-100/30",
          error
            ? "border-red-400 focus-visible:ring-red-400"
            : "border-blush-200 focus-visible:border-mauve-400 dark:border-white/10",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

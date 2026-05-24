import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: "default" | "textarea";
  rows?: number;
  className?: string;
  suffix?: React.ReactNode;
  required?: boolean;
}

export default function Input({
  label,
  variant = "default",
  rows = 7,
  className = "",
  suffix,
  required,
  ...props
}: InputProps) {
  const base =
    "w-full rounded-xl border border-outline bg-white placeholder:text-[#808080] placeholder:text-sm text-base text-[#0B1226] px-4 py-3 focus:outline-none focus:ring-0";

  if (variant === "textarea") {
    return (
      <label className="flex flex-col gap-2 w-full">
        {label && (
          <span className="text-sm text-[#111111] font-medium">
            {label} {required && <span className="text-red-400">*</span>}
          </span>
        )}
        <textarea
          rows={rows}
          className={`${base} min-h-[140px] resize-none ${className}`}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      </label>
    );
  }

  return (
    <label className="flex flex-col gap-2 w-full">
      {label && (
        <span className="text-sm text-[#111111] font-medium">
          {label} {required && <span className="text-red-400">*</span>}
        </span>
      )}
      <div className="relative w-full">
        <input
          className={`${base} ${suffix ? "pr-12" : ""} ${className}`}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
        {suffix && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none flex items-center">
            {suffix}
          </div>
        )}
      </div>
    </label>
  );
}

import Link from "next/link";
import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  target?: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  target,
  icon,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-1.5 w-full md:w-fit rounded-xl text-base md:text-base 3xl:text-[22px] leading-7 tracking-tight transition-opacity hover:opacity-90 py-2.5 px-4 sm:py-2.5 3xl:py-3.5 sm:px-4 3xl:px-5";

  const variants = {
    primary: "bg-primary-dark text-white font-medium",
    outline: "border border-outline font-normal",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} target={target} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon}
    </button>
  );
}
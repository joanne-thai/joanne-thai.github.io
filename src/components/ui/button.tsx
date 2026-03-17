import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800",
        outline:
          "border border-zinc-200 bg-white px-5 py-3 text-zinc-700 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700",
        secondary: "bg-emerald-600 px-5 py-3 text-white hover:bg-emerald-700",
        ghost: "px-3 py-2 text-zinc-600 hover:bg-emerald-50 hover:text-emerald-700",
        link: "px-0 py-0 text-emerald-600 hover:text-emerald-700",
      },
      size: {
        default: "",
        sm: "px-4 py-2.5 text-sm",
        lg: "px-6 py-3.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

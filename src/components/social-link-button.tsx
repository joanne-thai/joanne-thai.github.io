import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SocialLinkButtonProps {
  href: string;
  label: string;
  icon: LucideIcon;
  external?: boolean;
  className?: string;
  iconOnlyOnMobile?: boolean;
}

export function SocialLinkButton({
  href,
  label,
  icon: Icon,
  external = false,
  className,
  iconOnlyOnMobile = false,
}: SocialLinkButtonProps) {
  return (
    <a
      href={href}
      aria-label={label}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
      className={cn(
        buttonVariants({ variant: "outline" }),
        iconOnlyOnMobile
          ? "size-12 justify-center p-0 sm:size-auto sm:justify-between sm:px-5 sm:py-3"
          : "justify-between",
        className,
      )}
    >
      <span className="flex items-center gap-2">
        <Icon className="size-4" />
        <span className={cn(iconOnlyOnMobile && "sr-only sm:not-sr-only")}>{label}</span>
      </span>
      {external ? <ArrowUpRight className={cn("size-4", iconOnlyOnMobile && "hidden sm:block")} /> : null}
    </a>
  );
}

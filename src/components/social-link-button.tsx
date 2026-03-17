import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SocialLinkButtonProps {
  href: string;
  label: string;
  icon: LucideIcon;
  external?: boolean;
}

export function SocialLinkButton({ href, label, icon: Icon, external = false }: SocialLinkButtonProps) {
  return (
    <a
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
      className={cn(buttonVariants({ variant: "outline" }), "justify-between")}
    >
      <span className="flex items-center gap-2">
        <Icon className="size-4" />
        {label}
      </span>
      {external ? <ArrowUpRight className="size-4" /> : null}
    </a>
  );
}

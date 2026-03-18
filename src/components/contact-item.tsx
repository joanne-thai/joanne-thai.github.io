import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ContactItemProps {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
  cta?: string;
}

export function ContactItem({ label, value, href, icon: Icon, external = false, cta = "Open" }: ContactItemProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="space-y-4">
        <div className="flex size-11 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 text-emerald-600">
          <Icon className="size-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-zinc-500">{label}</p>
          <CardTitle className="mt-2 text-lg">{value}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="mt-auto">
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full justify-between")}
        >
          {cta}
          <ArrowUpRight className="size-4" />
        </a>
      </CardContent>
    </Card>
  );
}

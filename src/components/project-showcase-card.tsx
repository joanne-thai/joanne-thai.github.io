import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProjectShowcaseCardProps {
  index: string;
  slug: string;
  title: string;
  description: string;
  tools: string;
  analysis: string;
  image: string;
  githubUrl: string;
  detailPageEnabled: boolean;
  badge?: string;
}

export function ProjectShowcaseCard({
  index,
  slug,
  title,
  description,
  tools,
  analysis,
  image,
  githubUrl,
  detailPageEnabled,
  badge,
}: ProjectShowcaseCardProps) {
  return (
    <Card className="overflow-hidden p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-soft-lg sm:p-6">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-8">
        <div className="overflow-hidden rounded-[24px] border border-zinc-200 bg-zinc-100">
          <img src={image} alt={title} className="h-full min-h-[280px] w-full object-cover" />
        </div>

        <div className="flex flex-col gap-5 px-1 py-2">
          <div className="flex flex-wrap items-center gap-3">
            {badge ? <Badge>{badge}</Badge> : null}
            <span className="text-4xl font-semibold tracking-tight text-zinc-300">{index}</span>
          </div>

          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-[2rem]">{title}</h3>
            <p className="mt-4 text-base leading-7 text-zinc-600">{description}</p>
          </div>

          <div className="space-y-2 border-t border-zinc-200 pt-5">
            <p className="text-sm leading-6 text-zinc-600">
              <span className="font-semibold text-zinc-900">Tools:</span> {tools}
            </p>
            <p className="text-sm leading-6 text-zinc-600">
              <span className="font-semibold text-zinc-900">Analysis:</span> {analysis}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {detailPageEnabled ? (
              <Link to={`/projects/${slug}`} className={buttonVariants({ variant: "secondary" })}>
                View Detail
              </Link>
            ) : null}

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), "justify-between")}
            >
              Open GitHub
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}

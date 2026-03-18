import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { MicroscopeImage } from "@/components/microscope-image";
import { PowerBIEmbed } from "@/components/power-bi-embed";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getProjectBySlug } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function DetailSection({ title, content }: { title: string; content: string }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900">{title}</h2>
      <p className="text-base leading-7 text-zinc-600">{content}</p>
    </section>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900">{title}</h2>
      <ul className="space-y-3 text-base leading-7 text-zinc-600">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 size-1.5 rounded-full bg-emerald-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ProjectDetailPage() {
  const { slug = "" } = useParams();
  const project = getProjectBySlug(slug);

  if (!project || !project.detailPageEnabled || !project.detail) {
    return (
      <main className="page-shell py-16 sm:py-20">
        <Card className="p-8">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-600">Project unavailable</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900">This detail page is not published yet.</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
            The project may exist on GitHub, but a case-study page has not been enabled for it yet.
          </p>
          <Link to="/#projects" className={cn(buttonVariants({ variant: "outline" }), "mt-6 w-fit")}>
            <ArrowLeft className="size-4" />
            Back to Projects
          </Link>
        </Card>
      </main>
    );
  }

  return (
    <main className="page-shell py-12 sm:py-16">
      <div className="flex flex-wrap items-center gap-3">
        <Link to="/#projects" className={buttonVariants({ variant: "outline", size: "sm" })}>
          <ArrowLeft className="size-4" />
          Back to Projects
        </Link>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "secondary", size: "sm" })}
        >
          Open GitHub
          <ArrowUpRight className="size-4" />
        </a>
      </div>

      <section className="pt-8">
        <SectionHeading
          eyebrow={project.category}
          title={project.title}
          description={project.detail.subtitle}
        />
      </section>

      <section className="pt-8">
        <div className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white p-4 shadow-soft">
          <img
            src={project.thumbnail[0]}
            alt={project.title}
            className="h-full min-h-[280px] w-full rounded-[26px] object-cover"
          />
        </div>
      </section>

      <section className="pt-8">
        <PowerBIEmbed title={`${project.title} Power BI report`} embedUrl={project.powerbiEmbedUrl} />
      </section>

      <section className="grid gap-8 pt-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <DetailSection title="Overview" content={project.detail.overview} />
          <DetailSection title="Business Problem" content={project.detail.businessProblem} />
          <DetailSection title="Dataset" content={project.detail.dataset} />
          <DetailList title="Approach" items={project.detail.approach} />
        </div>

        <div className="space-y-8">
          <DetailList title="Key Insights" items={project.detail.keyInsights} />
          <DetailList title="Tools Used" items={project.detail.toolsUsed} />
          <DetailList title="Recommendations" items={project.detail.recommendations} />
        </div>
      </section>

      <section className="pt-12 pb-8">
        <SectionHeading
          eyebrow="Screenshots"
          title="Selected views from the analysis story."
          description="A few supporting frames that show how the dashboard moves from headline metrics to segment-level detail and practical recommendations."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {project.images.map((image, index) => (
            <div
              key={image}
              className="overflow-visible rounded-[28px] border border-zinc-200 bg-white p-3 shadow-soft"
            >
              <MicroscopeImage
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                className="rounded-[22px]"
                imageClassName="object-cover rounded-[22px]"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

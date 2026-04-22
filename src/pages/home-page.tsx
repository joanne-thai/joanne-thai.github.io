import { portfolio } from "@/data/portfolio";
import { ContactItem } from "@/components/contact-item";
import { ProjectShowcaseCard } from "@/components/project-showcase-card";
import { SectionHeading } from "@/components/section-heading";
import { SkillGroup } from "@/components/skill-group";
import { SocialLinkButton } from "@/components/social-link-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export function HomePage() {
  return (
    <main>
      <section className="section-shell pt-12 sm:pt-18">
        <div className="page-shell">
          <div className="surface-card overflow-hidden px-6 py-8 sm:px-10 sm:py-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-600">Data Analyst Portfolio</p>
                <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                  {portfolio.profile.name}
                </h1>
                <p className="mt-5 max-w-2xl text-xl leading-8 text-zinc-700 sm:text-2xl">{portfolio.profile.role}</p>
                <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">{portfolio.profile.intro}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {portfolio.profile.socialLinks.map((link) => (
                    <SocialLinkButton
                      key={link.label}
                      href={link.href}
                      label={link.label}
                      icon={link.icon}
                      external={link.external}
                    />
                  ))}
                </div>
              </div>

              <div className="mx-auto w-full max-w-md">
                <div className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white p-4 shadow-soft">
                  <img
                    src={portfolio.profile.avatar}
                    alt={portfolio.profile.name}
                    className="h-full w-full rounded-[26px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell">
        <div className="page-shell space-y-8">
          <SectionHeading eyebrow="About" />

          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <Card>
              <CardHeader>
                <CardTitle>Professional Summary</CardTitle>
                <CardDescription>{portfolio.about.summary}</CardDescription>
              </CardHeader>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{portfolio.about.education.degree}</CardTitle>
                  <CardDescription>
                    {portfolio.about.education.university} | {portfolio.about.education.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm leading-7 text-zinc-600">
                    {portfolio.about.education.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 size-1.5 rounded-full bg-emerald-500" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell">
        <div className="page-shell space-y-8">
          <SectionHeading eyebrow="Featured Projects" />

          <div className="space-y-6">
            {portfolio.projects.map((project) => (
              <ProjectShowcaseCard
                key={project.id}
                index={project.index}
                slug={project.slug}
                title={project.title}
                description={project.shortDescription}
                tools={project.tools}
                analysis={project.analysis}
                images={project.thumbnail}
                githubUrl={project.githubUrl}
                detailPageEnabled={project.detailPageEnabled}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="section-shell">
        <div className="page-shell space-y-8">
          <SectionHeading eyebrow="Certifications" />

          <div className="grid gap-6 md:grid-cols-2">
            {portfolio.about.certifications.map((certification) => (
              <a
                key={certification.title}
                href={certification.href}
                target="_blank"
                rel="noreferrer"
                className="surface-card group block p-6 transition hover:border-emerald-200 hover:bg-emerald-50/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge>{certification.issuer}</Badge>
                      {certification.issued ? (
                        <span className="text-xs font-medium text-zinc-500">{certification.issued}</span>
                      ) : null}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-900">
                      {certification.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-600">{certification.description}</p>
                  </div>
                  <ArrowUpRight className="mt-1 size-5 shrink-0 text-zinc-400 transition group-hover:text-emerald-600" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell">
        <div className="page-shell space-y-8">
          <SectionHeading eyebrow="Skills" />

          <div className="grid gap-6 md:grid-cols-2">
            {portfolio.skills.map((group) => (
              <SkillGroup key={group.title} title={group.title} skills={group.skills} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell pb-18">
        <div className="page-shell space-y-8">
          <SectionHeading eyebrow="Contact" />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {portfolio.contacts.map((contact) => (
              <ContactItem key={contact.label} {...contact} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

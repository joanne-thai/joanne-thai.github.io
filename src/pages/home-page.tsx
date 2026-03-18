import { portfolio } from "@/data/portfolio";
import { ContactItem } from "@/components/contact-item";
import { ProjectShowcaseCard } from "@/components/project-showcase-card";
import { SectionHeading } from "@/components/section-heading";
import { SkillGroup } from "@/components/skill-group";
import { SocialLinkButton } from "@/components/social-link-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
          <SectionHeading
            eyebrow="About"
            title="Clear communication, thoughtful analysis, and business-first storytelling."
            description="A concise snapshot of how I approach analysis work, plus the education foundation behind it."
          />

          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <Card>
              <CardHeader>
                <CardTitle>Professional Summary</CardTitle>
                <CardDescription>{portfolio.about.summary}</CardDescription>
              </CardHeader>
            </Card>

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
      </section>

      <section id="projects" className="section-shell">
        <div className="page-shell space-y-8">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Case-study work that turns analysis into clear business direction."
            description="Each project pairs a practical business question with the supporting visuals, methods, and actions that help the outcome land."
          />

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
                images={[project.thumbnail, project.images[0] ?? project.thumbnail]}
                githubUrl={project.githubUrl}
                detailPageEnabled={project.detailPageEnabled}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell">
        <div className="page-shell space-y-8">
          <SectionHeading
            eyebrow="Skills"
            title="A balanced toolkit for analysis, reporting, and polished delivery."
            description="Core analyst capabilities paired with the workflow and communication tools that help projects land well."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {portfolio.skills.map((group) => (
              <SkillGroup key={group.title} title={group.title} skills={group.skills} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell pb-18">
        <div className="page-shell space-y-8">
          <SectionHeading
            eyebrow="Contact"
            title="Open to analyst roles, project conversations, and coffee chats."
            description="Reach out in whichever format is easiest. Links below open directly to the right place."
          />

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


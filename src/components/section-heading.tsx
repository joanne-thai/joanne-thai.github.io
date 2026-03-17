interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-600">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">{description}</p>
    </div>
  );
}

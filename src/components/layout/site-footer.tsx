export function SiteFooter({ name }: { name: string }) {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="page-shell flex flex-col gap-2 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>{name} Portfolio</p>
        <p>Built with React, Vite, Tailwind CSS, React Router, and shadcn/ui patterns.</p>
      </div>
    </footer>
  );
}

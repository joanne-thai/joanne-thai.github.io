import { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { portfolio } from "@/data/portfolio";
import { HomePage } from "@/pages/home-page";
import { ProjectDetailPage } from "@/pages/project-detail-page";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));

      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ block: "start" });
        });
      }

      return;
    }

    window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

  return null;
}

function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl items-center px-4 py-20 sm:px-6">
      <div className="w-full rounded-[28px] border border-zinc-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-600">Page not found</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900">This page is not in the portfolio.</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
          The link may be outdated, or the project detail page has not been published yet.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}

function AppShell() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <ScrollManager />
      <SiteNavbar name={portfolio.profile.name} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SiteFooter name={portfolio.profile.name} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

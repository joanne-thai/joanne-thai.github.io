import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
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
  images: string[];
  githubUrl: string;
  detailPageEnabled: boolean;
}

export function ProjectShowcaseCard({
  index,
  slug,
  title,
  description,
  tools,
  analysis,
  images,
  githubUrl,
  detailPageEnabled,
}: ProjectShowcaseCardProps) {
  const showcaseImages = images.length >= 2 ? images.slice(0, 2) : [images[0], images[0]];
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollToSlide = (nextIndex: number) => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const clampedIndex = Math.max(0, Math.min(nextIndex, showcaseImages.length - 1));
    slider.scrollTo({
      left: clampedIndex * slider.clientWidth,
      behavior: "smooth",
    });
    setActiveSlide(clampedIndex);
  };

  const handleSliderScroll = () => {
    const slider = sliderRef.current;

    if (!slider || slider.clientWidth === 0) {
      return;
    }

    const nextSlide = Math.round(slider.scrollLeft / slider.clientWidth);
    if (nextSlide !== activeSlide) {
      setActiveSlide(nextSlide);
    }
  };

  return (
    <Card className="overflow-hidden p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-soft-lg sm:p-6 lg:p-8">
      <div className="space-y-6 lg:space-y-8">
        <div className="flex items-start gap-4 sm:gap-5">
          <span className="shrink-0 text-4xl font-semibold tracking-tight text-zinc-300 sm:text-5xl">{index}</span>
          <h3 className="max-w-2xl pt-1 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-[2rem]">{title}</h3>
        </div>

        <div className="space-y-4 lg:hidden">
          <div
            ref={sliderRef}
            onScroll={handleSliderScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {showcaseImages.map((image, imageIndex) => (
              <div
                key={`${slug}-${imageIndex}`}
                className="min-w-full snap-center overflow-hidden rounded-[24px] border border-zinc-200 bg-zinc-100"
              >
                <img
                  src={image}
                  alt={`${title} preview ${imageIndex + 1}`}
                  className="h-[240px] w-full object-cover sm:h-[280px]"
                />
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => scrollToSlide(activeSlide - 1)}
                disabled={activeSlide === 0}
                className="inline-flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:border-zinc-300 hover:text-zinc-900 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Previous project image"
              >
                <ChevronLeft className="size-5" />
              </button>

              <div className="flex items-center gap-2">
                {showcaseImages.map((_, imageIndex) => (
                  <button
                    key={`${slug}-dot-${imageIndex}`}
                    type="button"
                    onClick={() => scrollToSlide(imageIndex)}
                    className={cn(
                      "h-2.5 rounded-full transition",
                      activeSlide === imageIndex ? "w-8 bg-emerald-500" : "w-2.5 bg-zinc-300 hover:bg-zinc-400",
                    )}
                    aria-label={`Go to project image ${imageIndex + 1}`}
                    aria-pressed={activeSlide === imageIndex}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollToSlide(activeSlide + 1)}
                disabled={activeSlide === showcaseImages.length - 1}
                className="inline-flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:border-zinc-300 hover:text-zinc-900 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Next project image"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="hidden gap-2 lg:grid lg:grid-cols-2">
          {showcaseImages.map((image, imageIndex) => (
            <div
              key={`${slug}-desktop-${imageIndex}`}
              className="overflow-hidden odd:rounded-tl-md odd:rounded-bl-md even:rounded-tr-md even:rounded-br-md border border-zinc-200 bg-zinc-100"
            >
              <img
                src={image}
                alt={`${title} preview ${imageIndex + 1}`}
                className="h-80 w-full object-cover xl:h-85"
              />
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <p className="text-base leading-7 text-zinc-600">{description}</p>

          <div className="space-y-5 border-t border-zinc-200 pt-5 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
            <div className="space-y-2">
              <p className="text-sm leading-6 text-zinc-600">
                <span className="font-semibold text-zinc-900">Tools:</span> {tools}
              </p>
              <p className="text-sm leading-6 text-zinc-600">
                <span className="font-semibold text-zinc-900">Analysis:</span> {analysis}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {detailPageEnabled ? (
                <Link to={`/projects/${slug}`} className={buttonVariants({ variant: "secondary" })}>
                  View Detail
                  <ArrowRight className="size-4" />
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
      </div>
    </Card>
  );
}

import type { PointerEvent as ReactPointerEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MicroscopeImageProps {
  src: string;
  alt: string;
  highResSrc?: string;
  zoom?: number;
  lensSize?: number;
  className?: string;
  imageClassName?: string;
}

export function MicroscopeImage({
  src,
  alt,
  highResSrc,
  zoom = 2.4,
  lensSize = 200,
  className,
  imageClassName,
}: MicroscopeImageProps) {
  const frameRef = useRef<number | null>(null);
  const boundsRef = useRef({ width: 0, height: 0 });
  const imageFrameRef = useRef<HTMLDivElement | null>(null);
  const lensRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const currentRef = useRef({ x: lensSize / 2, y: lensSize / 2 });
  const targetRef = useRef({ x: lensSize / 2, y: lensSize / 2 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    const deactivateLens = () => {
      setIsActive(false);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };

    const updateTarget = (clientX: number, clientY: number) => {
      const imageFrame = imageFrameRef.current;

      if (!imageFrame) {
        return;
      }

      const bounds = imageFrame.getBoundingClientRect();

      if (
        clientX < bounds.left ||
        clientX > bounds.right ||
        clientY < bounds.top ||
        clientY > bounds.bottom
      ) {
        deactivateLens();
        return;
      }

      boundsRef.current = { width: bounds.width, height: bounds.height };
      targetRef.current = clampPoint(clientX - bounds.left, clientY - bounds.top);
      ensureAnimation();
    };

    const handleWindowPointerMove = (event: PointerEvent) => {
      updateTarget(event.clientX, event.clientY);
    };

    window.addEventListener("pointermove", handleWindowPointerMove);

    return () => {
      window.removeEventListener("pointermove", handleWindowPointerMove);
    };
  }, [isActive]);

  const clampPoint = (x: number, y: number) => {
    const { width, height } = boundsRef.current;

    return {
      x: Math.min(Math.max(x, 0), width),
      y: Math.min(Math.max(y, 0), height),
    };
  };

  const paintLens = (x: number, y: number) => {
    const lens = lensRef.current;
    const { width, height } = boundsRef.current;

    if (!lens || width === 0 || height === 0) {
      return;
    }

    const radius = lensSize / 2;
    const offsetX = x * zoom - radius;
    const offsetY = y * zoom - radius;

    lens.style.transform = `translate3d(${x - radius}px, ${y - radius}px, 0)`;
    lens.style.backgroundSize = `${width * zoom}px ${height * zoom}px`;
    lens.style.backgroundPosition = `-${offsetX}px -${offsetY}px`;
  };

  const tick = () => {
    const current = currentRef.current;
    const target = targetRef.current;

    current.x += (target.x - current.x) * 0.28;
    current.y += (target.y - current.y) * 0.28;
    paintLens(current.x, current.y);

    if (Math.abs(target.x - current.x) < 0.2 && Math.abs(target.y - current.y) < 0.2) {
      currentRef.current = { ...target };
      paintLens(target.x, target.y);
      frameRef.current = null;
      return;
    }

    frameRef.current = requestAnimationFrame(tick);
  };

  const ensureAnimation = () => {
    if (frameRef.current === null) {
      frameRef.current = requestAnimationFrame(tick);
    }
  };

  const handlePointerEnter = (event: ReactPointerEvent<HTMLDivElement>) => {
    const bounds = imageFrameRef.current?.getBoundingClientRect() ?? event.currentTarget.getBoundingClientRect();
    boundsRef.current = { width: bounds.width, height: bounds.height };

    const nextPoint = clampPoint(event.clientX - bounds.left, event.clientY - bounds.top);
    currentRef.current = nextPoint;
    targetRef.current = nextPoint;
    setIsActive(true);
    paintLens(nextPoint.x, nextPoint.y);
    ensureAnimation();
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const bounds = imageFrameRef.current?.getBoundingClientRect() ?? event.currentTarget.getBoundingClientRect();
    boundsRef.current = { width: bounds.width, height: bounds.height };
    targetRef.current = clampPoint(event.clientX - bounds.left, event.clientY - bounds.top);
    ensureAnimation();
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-visible", className)}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
    >
      <div ref={imageFrameRef} className="overflow-hidden rounded-[inherit]">
        <img src={src} alt={alt} className={cn("block h-full w-full object-cover", imageClassName)} />
      </div>

      <div
        ref={lensRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-0 top-0 z-10 hidden rounded-full border border-emerald-200/90 opacity-0 shadow-[0_16px_40px_rgba(16,185,129,0.16),0_12px_28px_rgba(15,23,42,0.18)] ring-1 ring-white/60 backdrop-blur-sm transition-opacity duration-200",
          isActive ? "block opacity-100" : "",
        )}
        style={{
          width: lensSize,
          height: lensSize,
          backgroundImage: `url(${highResSrc ?? src})`,
          backgroundRepeat: "no-repeat",
          filter: "blur(0.2px)",
          boxShadow: "0 0 0 10px rgba(255,255,255,0.24) inset, 0 18px 44px rgba(15,23,42,0.18)",
        }}
      />
    </div>
  );
}

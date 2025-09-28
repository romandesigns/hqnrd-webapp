"use client";

import * as React from "react";
import "./styles.css";
import { useKeenSlider } from "keen-slider/react";

export interface CarouselOptions {
  slides: {
    perView: number;
    spacing: number;
  };
}

interface CarouselProps {
  children: React.ReactNode[];
  options: CarouselOptions;
  showArrows?: boolean;
  showDots?: boolean;
}

export const Carousel = ({
  children,
  options,
  showArrows = false,
  showDots = false,
}: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      vertical: false,
      mode: "free-snap",
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      breakpoints: {
        "(min-width: 300px)": {
          slides: { perView: 1, spacing: 5 },
        },
        "(min-width: 400px)": {
          slides: { perView: 2, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 3, spacing: 10 },
        },
      },
      ...options,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ],
  );

  return (
    <div className="navigation-wrapper relative">
      <div ref={sliderRef} className="keen-slider">
        {children}
      </div>

      {/* Arrows */}
      {showArrows && loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={false}
          />
          <Arrow
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={false}
          />
        </>
      )}

      {/* Dots */}
      {showDots && loaded && instanceRef.current && (
        <div className="dots mt-4 flex justify-center gap-2">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={`dot w-3 h-3 rounded-full ${
                  currentSlide === idx ? "bg-primary" : "bg-muted-foreground/40"
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

// Arrow Component
function Arrow({
  disabled,
  left,
  onClick,
}: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabledClass = disabled ? "opacity-40 cursor-not-allowed" : "";
  return (
    <svg
      onClick={onClick}
      className={`arrow absolute top-1/2 -translate-y-1/2 w-6 h-6 fill-current text-primary cursor-pointer ${
        left ? "left-2" : "right-2"
      } ${disabledClass}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {left ? (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      ) : (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

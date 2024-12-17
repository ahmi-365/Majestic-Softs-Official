"use client";

import React, { useEffect, useState } from "react";

// Utility function for conditional classNames
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  pauseOnHover = true,
  className,
}: {
  items: {
    image: string;
    name: string;
    userName: string;
    quote: string;
    title: string;
    comment: string;
    rating: number;
  }[];
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (items.length > 0) {
      initializeAnimation();
    }
  }, [items]);

  const initializeAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate items to create a seamless scroll effect
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      setAnimationDirection();
      setAnimationSpeed();
      setStart(true);
    }
  };

  const setAnimationDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const setAnimationSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--animation-duration", "300s");
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-6 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-gray-300 dark:border-slate-700 p-6 md:w-[450px] bg-white/70 dark:bg-muted/70"
          >
            <blockquote className="flex flex-col h-full justify-between">
              <div className="flex flex-row items-start gap-4">
                {/* User Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex flex-col justify-center gap-1">
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-300">
                    {item.name}
                  </span>
                  <span className="text-sm font-normal text-gray-600 dark:text-gray-400">
                    @{item.userName}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    {item.title}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-col">
                <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {item.quote}
                </span>

                {/* Comment Section */}
                <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                  <p>{item.comment}</p>
                </div>

                {/* Star Ratings */}
                <div className="mt-2 text-yellow-500">
                  {"★".repeat(item.rating)}{" "}
                  <span className="text-gray-400">
                    {"☆".repeat(5 - item.rating)}
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

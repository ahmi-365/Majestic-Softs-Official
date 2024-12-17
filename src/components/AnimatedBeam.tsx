"use client";

import React, { forwardRef, useRef } from "react";
import logo from '../assets/MW.jpg'
import Nextlogo from '../assets/Next.png'
import PHPlogo from '../assets/LiveWire.png'
import Flutterlogo from '../assets/Flutter.png'
import UIUXlogo from '../assets/UIUX.png'
import Seologo from '../assets/SEO1.png'
import Cloudlogo from '../assets/Cloud.png'

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
   
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg bg-background p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.googleDrive />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.googleDocs />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.notion />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Icons.openai />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.zapier />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.whatsapp />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.messenger />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const Icons = {
  notion: () => (
   <img src={Flutterlogo}   className="rounded-full transform scale-125 transition-transform duration-300 ease-in-out"
    />
  ),
  openai: () => (
    <img src={logo}   className="rounded-full transform scale-125 transition-transform duration-300 ease-in-out"
    />
  ),
  googleDrive: () => (
   <img src={Nextlogo}   className="rounded-full transform scale-125 transition-transform duration-300 ease-in-out"
   />

  ),
  whatsapp: () => (
<img
  src={PHPlogo}
  className="rounded-full transform scale-125 transition-transform duration-300 ease-in-out"
/>

  ),
  googleDocs: () => (
   <img
   src={UIUXlogo}
   className="rounded-full transform scale-125 transition-transform duration-300 ease-in-out"
 />
  ),
  zapier: () => (
   <img
  src={Seologo}
  className="rounded-full transform scale-150 transition-transform duration-300 ease-in-out"
/>



  ),
  messenger: () => (
   <img
   src={Cloudlogo}
   className="rounded-full transform scale-125 transition-transform duration-300 ease-in-out"
 />
  ),
};

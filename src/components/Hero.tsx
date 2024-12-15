"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Cover } from "@/components/ui/cover";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { AceternityLogo } from "./Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
const words = `          Innovative software solutions to drive your business forward.

`;

export const Hero = () => {
  return (
    <section id="home"
     className="container grid lg:grid-cols-2 place-items-center gap-10 ">
      {/* Left side content */}
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline text-[#6A11CB] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#F3E9FF] dark:to-[#6A11CB]">
              Empowering brands
              <br />
            </span>
            with strategic
            <br /> vision
          </h1>{" "}
        <span className="mb-9">  and </span><br />
          <h2 className="inline">
            <span className="inline mr-4 text-[#6A11CB]  dark:text-transparent dark:bg-clip-text  dark:bg-gradient-to-r dark:from-[#F3E9FF] dark:to-primary/80 ">
            <Cover> flawless execution</Cover>
            </span>
          </h2>
        </main>           

        <span className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        <TextGenerateEffect words={words} /></span>
        {/* <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Innovative software solutions to drive your business forward.
        </p> */}

        {/* Buttons section - Aligning the buttons side by side */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
  {/* Aceternity UI button */}
  <HoverBorderGradient
  containerClassName="rounded-full"
  as="button"
  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3"
  onClick={() => {
    const element = document.getElementById("faq");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60, // Adjust 60px to your navbar height
        behavior: "smooth",
      });
    }
  }}
>
  <span className="flex items-center">
    Get Started{" "}
    <div className="ms-3">
      <AceternityLogo />
    </div>
  </span>
</HoverBorderGradient>



  {/* Github Repository Link */}
  <a
    rel="noreferrer noopener"
    href="https://github.com/"
    target="_blank"
    className={`w-full md:w-auto ${buttonVariants({
      variant: "outline",
    })} flex items-center justify-center px-6 py-3`}
  >
    Github Repository
    <GitHubLogoIcon className="ml-2 w-5 h-5" />
  </a>
</div>

      </div>

      {/* Right side content */}
      <div className="z-10 mt-[80px]">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};

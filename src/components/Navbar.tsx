import { useState, useRef, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Blinds,
  CircuitBoard,
  Contact2,
  CopyMinusIcon,
  Linkedin,
  Settings2,
  WrapText,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import logo from "../assets/MS2.png";
import { ServicesHover } from "./ServicesHover"; // Corrected typo in import
import {
  App0,
  App1,
  App2,
  App3,
  App4,
  App5,
  App6,
  App7,
  App8,
  App9,
  FigmaIcon,
} from "./Icons";

interface RouteProps {
  href: string;
  label: string;
}

export const Navbar = () => {
  const [session] = useState({
    user: {
      name: "Majestics Softs",
      email: "majesticsofts@outlook.com",
      image: "https://www.w3schools.com/w3images/avatar2.png",
    },
  });

  const [isOpen, setIsOpen] = useState<boolean>(false); // For mobile menu
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false); // For user session dropdown
  const [isServicesHovered, setIsServicesHovered] = useState(false); // Hover state for Services modal
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false); // For Services mobile menu
  const [activeService, setActiveService] = useState<string | null>(null);
  const handleServiceClick = (service: string) => {
    setActiveService(service);
  };

  // Mock Data for Services and Routes
  const servicesDetails: Record<string, JSX.Element> = {
    "App Development": (
      <div className="flex-1 pr-4 pointer-events-none">
        <h3 className="mb-2 ms-[39px] text-lg font-bold text-purple-800 truncate">
          App Development
        </h3>
        <div className="space-y-1">
          {/* Frontend Development */}
          <a href="#" className="block hover:bg-gray-50 p-3 rounded-lg group">
            <div className="flex items-center gap-x-3">
              <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                {/* Replace <App1 /> with an actual icon or component */}
                <App1 />{" "}
              </div>
              <div>
                <p className="font-semibold text-gray-200 group-hover:text-purple-600 truncate">
                  Frontend Development
                </p>
                <p className="text-sm text-gray-400">
                  Craft dynamic UIs with Flutter, XML, and React Native.
                </p>
              </div>
            </div>
          </a>
          {/* Backend Development */}
          <a href="#" className="block hover:bg-gray-50 p-3 rounded-lg group">
            <div className="flex items-center gap-x-4">
              <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                {/* Replace <App2 /> with an actual icon or component */}
                <App2 />{" "}
              </div>
              <div>
                <p className="font-semibold text-gray-200 group-hover:text-purple-600 truncate">
                  Backend Engineering
                </p>
                <p className="text-sm text-gray-400">
                  Build scalable solutions with Dart, Java, Kotlin, and React
                  Native.
                </p>
              </div>
            </div>
          </a>
          {/* Mobile Development */}
          <a href="#" className="block hover:bg-gray-50 p-3 rounded-lg group">
            <div className="flex items-center gap-x-4">
              <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                {/* Replace <App3 /> with an actual icon or component */}
                <App3 />{" "}
              </div>
              <div>
                <p className="font-semibold text-gray-200 group-hover:text-purple-600 truncate">
                  App Innovation
                </p>
                <p className="text-sm text-gray-400">
                  Develop cross-platform mobile apps using Flutter or React
                  Native, Ionic, Xamarin, NativeScript,.
                </p>
              </div>
            </div>
          </a>{" "}
          <a href="#" className="block hover:bg-gray-50 p-3 rounded-lg group ">
            <div className="flex items-center gap-x-4">
              <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                <Blinds className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />{" "}
              </div>
              <div>
                <p className="font-semibold text-gray-200 group-hover:text-purple-600 truncate">
                  Hybrid App Development
                </p>
                <p className="text-sm text-gray-400">
                  Build apps using Ionic and Capacitor for seamless integration
                  with web and mobile.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    ),
    "Web Development": (
      <div className="flex-1 pr-4 pointer-events-none">
        <h3 className="mb-2 ms-[39px] text-lg font-bold text-purple-800 ">
          Web Development
        </h3>
        <div className="space-y-1">
          <a href="#" className="block hover:bg-gray-50 p-3 rounded-lg group ">
            <div className="flex items-center gap-x-4">
              <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                <App5 />
              </div>
              <div>
                <p className="font-semibold text-gray-200 group-hover:text-purple-600 truncate">
                  Next-Level Experiences{" "}
                </p>
                <p className="text-sm text-gray-400">
                  Build fast, SEO-friendly, and scalable web apps with Next.js.
                </p>
              </div>
            </div>
          </a>

          {/* Back-End Development with Node.js (MERN Stack) */}
          <a href="#" className="block hover:bg-gray-50 p-3 rounded-lg group ">
            <div className="flex items-center gap-x-4">
              <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                <App6 />
              </div>
              <div>
                <p className="font-semibold text-gray-200 group-hover:text-purple-600 truncate">
                  MERN | MEAN Power{" "}
                </p>
                <p className="text-sm text-gray-400">
                  Create high-performance real-time apps with MongoDB, Express,
                  React,Angular, and Node.js.
                </p>
              </div>
            </div>
          </a>

          {/* Back-End Development with PHP */}
          <a href="#" className="block hover:bg-gray-50 p-3 rounded-lg group ">
            <div className="flex items-center gap-x-4">
              <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                <App7 />
              </div>
              <div>
                <p className="font-semibold text-gray-200 group-hover:text-purple-600">
                  PHP Back-End Solutions{" "}
                </p>
                <p className="text-sm text-gray-400">
                  Build dynamic, scalable back-end systems with PHP for robust
                  websites.
                </p>
              </div>
            </div>
          </a>
          <a href="#" className="block hover:bg-gray-50 p-3 rounded-lg group ">
            <div className="flex items-center gap-x-4">
              <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                <CopyMinusIcon className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />{" "}
                {/* Replace with an appropriate icon for CMS */}
              </div>
              <div>
                <p className="font-semibold text-gray-200 group-hover:text-purple-600">
                  CMS Solutions
                </p>
                <p className="text-sm text-gray-400">
                  Design and manage websites effortlessly with WordPress,
                  Joomla, or Shopify.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    ),
    "Desktop Development": (
      <div className="flex-1 pr-4 pointer-events-none ">
        <h3 className="mb-2 ms-[29px] text-lg font-bold text-purple-800 truncate ">
          Desktop Development
        </h3>
        <div className="space-y-1">
          {/* Power-Packed Apps with .NET */}
          <a href="#" className="block hover:bg-gray-50 p-3 rounded-lg group ">
            <div className="flex items-center gap-x-4">
              <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                <App9 />
              </div>
              <div>
                <p className="font-semibold text-gray-200 group-hover:text-purple-600 truncate">
                  Robust Apps with .NET{" "}
                </p>
                <p className="text-sm text-gray-400">
                  Create high-performance, enterprise-level apps for Windows
                  with .NET.
                </p>
              </div>
            </div>
          </a>

          {/* Immersive Games with Unity */}
          <a href="#" className="block hover:bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center gap-x-4">
              <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                <App0 />
              </div>
              <div>
                <p className="font-semibold text-gray-200 group-hover:text-purple-600">
                  Unity Immersion{" "}
                </p>
                <p className="text-sm text-gray-400">
                  Craft engaging 2D and 3D games with Unity for multiple
                  platforms.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    ),
    "UI/UX Design": (
      <div className="flex-1 pr-4 pointer-events-none">
        <h3 className="mb-2 ms-[39px] text-lg font-bold text-purple-800 truncate">
          UI/UX Design
        </h3>
        <div className="space-y-1">
          <a href="#" className="block hover:bg-gray-50 p-3 rounded-lg group ">
            <div className="flex items-center gap-x-4">
              <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                <FigmaIcon />{" "}
                {/* Replace <FigmaIcon /> with the appropriate icon/component */}
              </div>
              <div>
                <p className="font-semibold text-gray-200 group-hover:text-purple-600">
                  Figma Mastery
                </p>
                <p className="text-sm text-gray-400">
                  Craft captivating interfaces powered by Figma's brilliance{" "}
                </p>
              </div>
            </div>
          </a>
          <a href="#" className="block hover:bg-gray-50 p-3 rounded-lg group ">
            <div className="flex items-center gap-x-4">
              <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                <Settings2 className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />{" "}
                {/* Replace <FigmaIcon /> with the appropriate icon/component */}
              </div>
              <div>
                <p className="font-semibold text-gray-200 group-hover:text-purple-600">
                  Adobe XD & Illustrator Mastery
                </p>
                <p className="text-sm text-gray-400">
                  Turn ideas into stunning visuals with Illustrator's precision.{" "}
                </p>
              </div>
            </div>
          </a>
          <a href="#" className="block hover:bg-gray-50 p-3 rounded-lg group ">
            <div className="flex items-center gap-x-4">
              <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                <CircuitBoard className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />{" "}
                {/* Replace <FigmaIcon /> with the appropriate icon/component */}
              </div>
              <div>
                <p className="font-semibold text-gray-200 group-hover:text-purple-600">
                  Rive Animation Magic
                </p>
                <p className="text-sm text-gray-400">
                  Animate designs into life with Rive's interactivity.{" "}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    ),

    "SEO Services": (
      <div className="flex-1 pr-4 pointer-events-none">
        <h3 className="mb-2 ms-[39px] text-lg font-bold text-purple-800 truncate">
          SEO Services
        </h3>
        <div className="space-y-1">
          <a href="#" className="block hover:bg-gray-50 p-3 rounded-lg group ">
            <div className="flex items-center gap-x-4">
              <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                <App8 /> {/* Replace with your appropriate icon/component */}
              </div>
              <div>
                <p className="font-semibold text-gray-200 group-hover:text-purple-600">
                  SEO Audits and Analysis
                </p>
                <p className="text-sm text-gray-400">
                  Perform deep SEO audits to identify optimization
                  opportunities.
                </p>
              </div>
            </div>
          </a>
          <a href="#" className="block hover:bg-gray-50 p-3 rounded-lg group">
            <div className="flex items-center gap-x-4">
              <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                <WrapText className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />{" "}
              </div>
              <div>
                <p className="font-semibold text-gray-200 group-hover:text-purple-600">
                  Keyword Research
                </p>
                <p className="text-sm text-gray-400">
                  Analyze high-impact keywords.
                </p>
              </div>
            </div>
          </a>
          <a href="#" className="block hover:bg-gray-50 p-3 rounded-lg group">
            <div className="flex items-center gap-x-4">
              <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-purple-100">
                <App4 /> {/* Replace with your appropriate icon/component */}
              </div>
              <div>
                <p className="font-semibold text-gray-200 group-hover:text-purple-600">
                  Digital Marketing Strategy
                </p>
                <p className="text-sm text-gray-400">
                  Optimize your brand's presence with effective, result-driven
                  marketing strategies.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    ),
  };

  // List of Static Routes
  const routeList: RouteProps[] = [
    { href: "/#home", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/aboutUs", label: "About Us" },
    { href: "/blogs", label: "Blogs" },
  ];

  // List of Services
  const servicesHeadings = [
    { href: "#app-development", label: "App Development" },
    { href: "#web-development", label: "Web Development" },
    { href: "#desktop-development", label: "Desktop Development" },
    { href: "#ui-ux-design", label: "UI/UX Design" },
    { href: "#seo", label: "SEO Services" },
  ];

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const profileImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        profileImageRef.current &&
        !profileImageRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b-[1px] dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <a
              href="#hero"
              className="ml-2 font-bold text-xl flex items-center dark:font-custom"
            >
              <img
                src={logo}
                alt="Majestic Softs Logo"
                className="w-12 h-12 rounded-lg shadow-lg mr-3"
              />
              Majestic <span className="ms-2 text-purple-400">Softs</span>
            </a>
          </NavigationMenuItem>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-3 mb-[-2px] relative">
            {routeList.map((route, i) => (
              <a
                href={route.href}
                key={i}
                className={`text-[17px] mb-[-5px] ${buttonVariants({
                  variant: "ghost",
                })}`}
                onMouseEnter={() => {
                  if (route.label === "Services") setIsServicesHovered(true);
                }}
                onMouseLeave={() => {
                  if (route.label === "Services") setIsServicesHovered(false);
                }}
              >
                {route.label}
              </a>
            ))}

            {/* Conditionally render ServicesHover when hovering over Services link */}
            {isServicesHovered && (
              <ServicesHover setIsServicesHovered={setIsServicesHovered} />
            )}
          </nav>
          {/* Mobile Navigation */}
          <span className="flex md:hidden">
            {/* Theme Toggle */}
            <ModeToggle />

            {/* Navigation Sheet */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="flex md:hidden h-5 w-5">
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent
                side={"left"}
                className={`transform transition-transform ease-in-out duration-500 ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl transition-all ease-in-out duration-500">
                    <a
                      href="#hero"
                      onClick={() => setIsOpen(false)}
                      className="transition-all ease-in-out duration-500"
                    >
                      Majestic Softs
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6 mt-4 items-center justify-center">
                  {/* Show Hamburger Menu Icon or Back Button when Services are Open or Active Service is Present */}
                  {(isServicesMenuOpen || activeService) && (
                    <div className="flex justify-start w-full">
                      <button
                        onClick={() => {
                          if (activeService) {
                            setActiveService(null); // Reset activeService
                          } else {
                            setIsServicesMenuOpen(false); // Close the services menu
                          }
                        }}
                        className="flex items-center transition-all duration-500 ease-in-out"
                      >
                        <Menu className="h-7 w-7 text-purple-800 mt-[-60px]" />
                      </button>
                    </div>
                  )}

                  {/* Home Button (Only Show When Services are Not Open) */}
                  {!isServicesMenuOpen && !activeService && (
                    <a
                      href="#home"
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium hover:text-purple-600 transition-all ease-in-out duration-500"
                    >
                      Home
                    </a>
                  )}

                  {/* Services Button (Only Show When Services are Not Open) */}
                  {!isServicesMenuOpen && !activeService && (
                    <button
                      className="text-xl transition-all ease-in-out duration-500"
                      onClick={() => setIsServicesMenuOpen(true)}
                    >
                      Services
                    </button>
                  )}

                  {/* Conditional Rendering for Active Service */}
                  {activeService ? (
                    <div className="p-4 transition-all ease-in-out duration-500">
                      {servicesDetails[activeService]}
                    </div>
                  ) : (
                    <>
                      {isServicesMenuOpen && (
                        <div className="flex flex-col gap-4 mt-2 transition-all ease-in-out duration-500">
                          {servicesHeadings.map(({ label }) => (
                            <button
                              key={label}
                              onClick={() => handleServiceClick(label)}
                              className="text-lg font-bold text-purple-800 hover:text-purple-600 transition-all ease-in-out duration-500"
                            >
                              {label}
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Static Navigation Routes (Excluding Services and Home) */}
                      {!isServicesMenuOpen &&
                        routeList
                          .filter(
                            ({ label }) =>
                              label !== "Services" && label !== "Home"
                          ) // Hide the Services and Home buttons from static routes
                          .map(({ href, label }) => (
                            <a
                              key={label}
                              href={href}
                              onClick={() => setIsOpen(false)}
                              className="text-lg font-medium hover:text-purple-600 transition-all ease-in-out duration-500"
                            >
                              {label}
                            </a>
                          ))}
                    </>
                  )}

                  {/* GitHub Link */}
                  <div className="mt-6">
                    <a
                      href="https://github.com/"
                      target="_blank"
                      className={`flex items-center w-[110px] border ${buttonVariants(
                        {
                          variant: "secondary",
                        }
                      )}`}
                    >
                      <GitHubLogoIcon className="w-5 h-5 mr-2" />
                      Github
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* User Profile and Links */}
          <div className="hidden md:flex gap-2">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <Linkedin className="mr-2 w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="/contact"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <Contact2 className="w-5 h-5" />
            </a>
            <ModeToggle />
            <div className="relative">
              <img
                ref={profileImageRef}
                src={session.user.image}
                alt={session.user.name}
                className="w-8 h-8 rounded-full cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 mt-2 w-64 bg-white dark:bg-black border rounded-lg shadow-lg"
                >
                  <div className="flex items-center p-4">
                    <img
                      src={session.user.image}
                      alt={session.user.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{session.user.name}</p>
                      <p className="text-sm text-gray-600">
                        {session.user.email}
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-gray-300"></div>
                  <button className="flex items-center w-full p-2 text-sm text-purple-600">
                    <ArrowRightOnRectangleIcon className="w-5 h-5" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

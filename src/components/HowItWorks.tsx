import { HoverEffect } from "./HoverEffect";
import { Briefcase, Users, Cloud, Code, Shield, Monitor, Database, Smartphone } from "lucide-react";  // Import icons from lucide-react

// Define the structure for each feature
interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Briefcase size={24} />,
    title: "Business Solutions",
    description: "We offer tailored business solutions to streamline operations and enhance productivity.",
  },
  {
    icon: <Users size={24} />,
    title: "Team Collaboration",
    description: "Collaborate effectively with your team using the latest communication and project management tools.",
  },
  {
    icon: <Cloud size={24} />,
    title: "Cloud Computing",
    description: "Secure and scalable cloud solutions to meet your business needs and future growth.",
  },
  {
    icon: <Code size={24} />,
    title: "Software Development",
    description: "Custom software development to bring your unique ideas to life with top-quality code.",
  },
  {
    icon: <Shield size={24} />,
    title: "Cybersecurity",
    description: "Protect your data with our state-of-the-art cybersecurity measures and threat protection.",
  },
  {
    icon: <Monitor size={24} />,
    title: "UI/UX Design",
    description: "Design beautiful and user-friendly interfaces to create seamless digital experiences.",
  },
  {
    icon: <Database size={24} />,
    title: "Data Management",
    description: "Efficient data storage and management solutions to keep your information secure and organized.",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile Solutions",
    description: "Build mobile apps that offer a great user experience across all devices and platforms.",
  },
];

// Update the HowItWorks component to use HoverEffect
export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32 pb-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Our{" "}
        <span className="text-[#6A11CB] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#F3E9FF] dark:to-[#6A11CB] ms-4">
          Expertise at a Glance
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        We provide innovative solutions that can transform your business. Here's how we do it.
      </p>

      {/* Use the HoverEffect component here */}
      <HoverEffect
        items={features.map(({ icon, title, description }) => ({
          title,
          description,
          link: "#", // Replace with a relevant link if needed
          icon,
        }))}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      />
    </section>
  );
};

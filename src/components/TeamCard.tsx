import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function TeamCard() {
 const testimonials = [
  {
    quote:
      "Majestic Softs streamlined our project management process with their innovative approach. Their expertise is unmatched!",
    name: "Sarah Chen",
    designation: "Senior Project Manager at BrightTech",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Majestic Softs delivered a seamless integration of our tools and systems. Their solutions exceeded all expectations.",
    name: "Michael Rodriguez",
    designation: "Chief Technology Officer at NovaSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The app Majestic Softs developed for us improved productivity tenfold. Their focus on user experience is truly commendable.",
    name: "Emily Watson",
    designation: "Director of Operations at Vertex Solutions",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Their team is a powerhouse of creativity and technical expertise. Majestic Softs brought our vision to life flawlessly.",
    name: "James Kim",
    designation: "Lead Software Engineer at DataForge",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Majestic Softs has revolutionized how we handle scalability. Their customized solutions are perfect for our growth.",
    name: "Lisa Thompson",
    designation: "VP of Digital Strategy at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Working with Majestic Softs was an absolute pleasure. Their dedication and technical acumen are second to none.",
    name: "Sophia Lee",
    designation: "Head of Product Development at Skyline Apps",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    quote:
      "Their software solutions enhanced our operational efficiency significantly. I highly recommend Majestic Softs for any business.",
    name: "Carlos Martinez",
    designation: "Chief Operating Officer at GlobalEdge",
    src: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Majestic Softs took our project from concept to reality in record time. Their professionalism is unmatched.",
    name: "Isabella Brown",
    designation: "Project Lead at Crescent Systems",
    src: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    quote:
      "They built a robust solution tailored to our needs. Majestic Softs has earned our trust as a go-to tech partner.",
    name: "Andrew Scott",
    designation: "IT Manager at Prism Tech",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },
];


  return <AnimatedTestimonials testimonials={testimonials} />;
}

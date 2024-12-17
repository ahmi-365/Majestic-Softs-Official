"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
export const testimonials = [
  {
    image: "https://ui-avatars.com/api/?name=John+Doe", // Avatar Generator URL
    name: "John Doe",
    userName: "john_doe",
    quote: "This service exceeded all my expectations!",
    title: "Frontend Developer",
    comment:
      "The attention to detail in the design and functionality was remarkable. A truly seamless experience!",
    rating: 4,
  },
  {
    image: "https://ui-avatars.com/api/?name=Jane+Smith", // Avatar Generator URL
    name: "Jane Smith",
    userName: "jane_smith",
    quote: "A pleasure to work with this team!",
    title: "UI/UX Designer",
    comment:
      "Their creative approach and clear communication made the process incredibly smooth. I look forward to working with them again.",
    rating: 5,
  },
  {
    image: "https://ui-avatars.com/api/?name=Mark+Brown", // Avatar Generator URL
    name: "Mark Brown",
    userName: "mark_brown",
    quote: "Truly innovative and reliable solutions!",
    title: "Backend Developer",
    comment:
      "From start to finish, they provided exceptional solutions that addressed all our needs with ease. Highly recommend.",
    rating: 3,
  },
  {
    image: "https://ui-avatars.com/api/?name=Susan+Lee", // Avatar Generator URL
    name: "Susan Lee",
    userName: "susan_lee",
    quote: "An outstanding experience from the team!",
    title: "Project Manager",
    comment:
      "The project was executed flawlessly, and the communication throughout the process was excellent. Truly a top-notch team.",
    rating: 4,
  },
  {
    image: "https://ui-avatars.com/api/?name=Alex+Jones", // Avatar Generator URL
    name: "Alex Jones",
    userName: "alex_jones",
    quote: "Exceeded all expectations and more!",
    title: "Full Stack Developer",
    comment:
      "The team not only delivered excellent solutions but also added valuable suggestions that improved the final product. Great experience!",
    rating: 4,
  },
  {
    image: "https://ui-avatars.com/api/?name=Emily+Davis", // Avatar Generator URL
    name: "Emily Davis",
    userName: "emily_davis",
    quote: "Creative, collaborative, and efficient!",
    title: "Creative Director",
    comment:
      "The final product was exactly what we envisioned. Their creativity, attention to detail, and work ethic were outstanding.",
    rating: 5,
  },
  {
    image: "https://ui-avatars.com/api/?name=Chris+Adams", // Avatar Generator URL
    name: "Chris Adams",
    userName: "chris_adams",
    quote: "Always a reliable partner!",
    title: "Software Engineer",
    comment:
      "The team is not only innovative but also incredibly reliable. They’ve helped us deliver high-quality products every time.",
    rating: 3,
  },
  {
    image: "https://ui-avatars.com/api/?name=Nina+Green", // Avatar Generator URL
    name: "Nina Green",
    userName: "nina_green",
    quote: "Game-changing results for our business!",
    title: "Marketing Specialist",
    comment:
      "Thanks to their innovative solutions, our marketing strategies have been more effective, and we’ve seen significant growth in conversions.",
    rating: 5,
  },
  {
    image: "https://ui-avatars.com/api/?name=David+Brown", // Avatar Generator URL
    name: "David Brown",
    userName: "david_brown",
    quote: "Professional and result-driven team!",
    title: "Data Scientist",
    comment:
      "Their professionalism and attention to detail were truly impressive. The final product was exactly what we needed to improve our processes.",
    rating: 4,
  },
  {
    image: "https://ui-avatars.com/api/?name=Olivia+Taylor", // Avatar Generator URL
    name: "Olivia Taylor",
    userName: "olivia_taylor",
    quote: "Transformative and strategic partnership!",
    title: "Digital Marketing Manager",
    comment:
      "The team’s strategic insights and approach helped us transform our digital presence. They are a fantastic partner to work with.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials">
      <div className="h-[40rem] flex flex-col items-center justify-center relative overflow-hidden ">
        <h2 className="text-3xl md:text-5xl font-bold text-center leading-tight">
          Why Businesses
          <span className="text-[#6A11CB] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#F3E9FF] dark:to-[#6A11CB] ml-2">
            Trust Us Client Success Stories
          </span>
        </h2>

        <p className="text-xl text-muted-foreground pt-6 pb-8 text-center max-w-3xl mx-auto">
          We don't just craft software – we engineer the future. By partnering
          with forward-thinking organizations, we transform challenges into
          groundbreaking solutions.
        </p>

        {/* Scrolling right */}
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          className="mb-7"
        />
      </div>

    </section>
  );
}


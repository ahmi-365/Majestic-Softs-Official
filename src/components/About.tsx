import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32 mt-[-100px]">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our
                <span className="text-[#6A11CB] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#F3E9FF] dark:to-[#6A11CB] ms-4">
                  Vision & Expertise
                  {" "}
                </span>{" "}
              </h2>

              <p className="text-xl text-muted-foreground mt-9">
                At Majestics Softs, we specialize in delivering innovative,
                reliable software solutions designed to drive business
                transformation in today’s dynamic digital landscape. With a
                focus on cutting-edge technology and customer-centric
                strategies, we empower organizations to streamline operations,
                enhance user experiences, and foster sustainable growth. Our
                team of experts collaborates closely with clients to understand
                their unique needs, providing tailored solutions that not only
                solve immediate challenges but also pave the way for long-term
                success. We are dedicated to ensuring that your business remains
                at the forefront of industry advancements, adapting to the
                evolving needs of the market.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};

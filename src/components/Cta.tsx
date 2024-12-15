import { WhatsApp } from "./Icons";
import { Button } from "./ui/button";

const scrollToFeatures = () => {
  const element = document.getElementById("features");
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",  // Adjusts where the section lands
    });
  }
};

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
  Let's Bring{" "}
  <span className="text-[#6A11CB] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#F3E9FF] dark:to-[#6A11CB]">
    Your Vision & Ideas
  </span>{" "}
  <span className="text-[#6A11CB] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#6A11CB] dark:to-[#F3E9FF]">to Life</span> — Talk to Us Today!
</h2> 



<p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
  Have a groundbreaking idea or need expert guidance? Let’s collaborate to build innovative software solutions that drive your success. Reach out to us today!
</p>

        </div>

        <div className="space-y-4 lg:col-start-2">
          <div className="flex justify-center space-x-4">
            <a
              href="https://wa.me/923076652123?text=Hi%20there!%20I%20have%20a%20query."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full md:w-auto bg-green-600 dark:bg-primary/60 text-white hover:bg-green-600 hover:border-green-600 transition duration-300">
                <WhatsApp  />
                Need Help? Chat Now!
              </Button>
            </a>

            {/* Button to scroll to features section */}
            <Button
              onClick={scrollToFeatures}  // Trigger scrollToFeatures when clicked
              variant="outline"  // Corrected variant to "outline"
              className="flex items-center justify-center transition-all border-primary hover:border-b-2 bg-black text-white py-2 px-4 rounded dark:bg-neutral-900 dark:hover:bg-neutral-800 transition duration-300"
            >
              View all features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

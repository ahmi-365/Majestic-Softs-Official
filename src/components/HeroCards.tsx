import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { LightBulbIcon } from "./Icons";

export const HeroCards = () => {
  return (
    <div className="flex flex-col lg:flex lg:flex-row lg:flex-wrap lg:gap-8 lg:relative lg:w-[700px] lg:h-[500px] lg:ml-[-90px] lg:mt-[-35px] gap-6 px-4 lg:px-0">
      {/* Testimonial */}
      <Card className="relative w-full lg:absolute lg:w-[340px] lg:-top-[15px] lg:ms-[50px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="bg-primary/20 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h11M9 21V3m8 8l-3 3m0 0l-3-3m3 3v10"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <CardTitle className="text-lg">Scalable Solutions</CardTitle>
            <CardDescription className="font-normal text-primary">Designed for Growth</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          Our software solutions are built with scalability in mind, ensuring your systems grow seamlessly with your business.
        </CardContent>
      </Card>

      {/* Team Member */}
      <Card className="relative w-full lg:absolute lg:right-[20px] lg:top-[-9px] lg:w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <div className="bg-primary/20 p-3 rounded-full mt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.75 3v6h-4.5m0 0v6h4.5m-4.5-6h15m-10.5 0V3m5.25 6v6M15.75 3v6m0 6h4.5m-4.5 0v6m0-6H9.75m6-6V3m-6 0v6"
              />
            </svg>
          </div>
          <CardTitle className="text-center">Agile Development Process</CardTitle>
          <CardDescription className="font-normal text-primary">
            Delivering Fast and Efficient Results
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Our agile development methodology ensures the rapid delivery of high-quality software by breaking down the development process into iterative and incremental cycles. This approach allows us to adapt seamlessly to your evolving needs, ensuring that each phase is aligned with your vision and business goals.
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="/services"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
              })}
            >
              Learn More
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="relative w-full lg:absolute lg:top-[150px] lg:left-[50px] lg:w-72 mt-4 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex flex-col md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Custom Software Development</CardTitle>
            <CardDescription className="font-normal text-primary">Designed for Growth</CardDescription>

            <CardDescription className="text-md mt-2">
              We build custom software solutions tailored to your business needs, ensuring seamless integration and scalability.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

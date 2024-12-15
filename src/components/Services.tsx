import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./hooks/use-outside-click";
import {
  MagnifierIcon,
  WalletIcon,
  ChartIcon,
  PlaneIcon,
  MedalIcon,
  LightBulbIcon,
  GiftIcon,
} from "./Icons"; // Importing the icons
import cubeLeg from "../assets/cube-leg.png";

export const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.05 } }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);

interface ServiceProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  content: () => JSX.Element;
  icon: JSX.Element;
}

export function Services() {
  const [active, setActive] = useState<ServiceProps | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };

    document.body.style.overflow = active ? "hidden" : "auto";

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const cards: ServiceProps[] = [
    {
      description:
        "Custom Web Development to craft dynamic, responsive, and scalable websites for modern users.",
      title: "Responsive Websites",
      ctaText: "Learn More",
      ctaLink: "https://your-website.com/web-development",
      content: () => (
        <p>
          We specialize in building responsive, high-performance websites that
          adapt seamlessly across devices, delivering an optimal user
          experience. Whether you need a corporate website, a personal blog, or
          an interactive web application, we combine aesthetic design with
          robust backend functionality to deliver superior results. Our team
          ensures that every site is built with the latest web standards and
          optimized for performance across all browsers and devices.
          <br />
          Our websites are optimized for SEO, ensuring maximum visibility in
          search engines. We integrate cutting-edge technologies such as React,
          Vue, and Angular for frontend development and provide seamless
          integration with powerful CMS platforms like WordPress, Drupal, or
          headless CMS solutions. With an emphasis on security and scalability,
          our websites evolve with your growing needs, ensuring they remain
          relevant and reliable over time.
          <br />
          Additionally, we offer ongoing maintenance services to keep your site
          secure and up to date with the latest features, as well as support for
          any troubleshooting or enhancements that may arise. Our goal is to
          empower your business with a digital presence that effectively engages
          your target audience and drives conversions.
        </p>
      ),
      icon: <MagnifierIcon />,
    },
    {
      description:
        "Cross-platform mobile applications designed to provide seamless user experiences.",
      title: "Cross-Platform Apps",
      ctaText: "Explore Services",
      ctaLink: "https://your-website.com/mobile-apps",
      content: () => (
        <p>
          Our team creates high-quality mobile apps that work smoothly across
          multiple platforms, ensuring your app reaches a broader audience.
          Leveraging technologies like React Native, Flutter, and Xamarin, we
          craft apps that are not only functional but also deliver exceptional
          performance. Whether you're looking to create a social networking
          platform, an e-commerce app, or a custom enterprise solution, our
          mobile applications are built to be fast, secure, and scalable.
          <br />
          From prototyping to development and post-launch maintenance, we guide
          you through the entire app development lifecycle. Each app is
          rigorously tested for usability, ensuring a flawless user experience
          that drives engagement and satisfaction.
          <br />
          Our mobile app solutions are fully customizable to meet your specific
          business requirements. Whether you need deep integration with your
          backend infrastructure or additional functionalities like push
          notifications, in-app purchases, or geolocation services, we provide a
          comprehensive solution. Our goal is to ensure your mobile app stands
          out in the crowded market while delivering value to your users.
        </p>
      ),
      icon: <WalletIcon />,
    },
    {
      description:
        "Scalable cloud solutions to ensure robust, efficient, and flexible infrastructure for your business.",
      title: "Scalable Cloud Architecture",
      ctaText: "Get Started",
      ctaLink: "https://your-website.com/cloud-solutions",
      content: () => (
        <p>
          We offer scalable cloud solutions tailored to your business needs,
          helping you optimize costs while enhancing performance. Our expertise
          spans cloud migration, custom cloud-native application development,
          and setting up hybrid cloud environments.
          <br />
          Partnering with leading providers like AWS, Microsoft Azure, and
          Google Cloud, we design architectures that are secure, resilient, and
          future-proof. Our services include infrastructure automation using
          tools like Terraform and Kubernetes, ensuring seamless scaling and
          robust disaster recovery strategies.
          <br />
          Whether you're starting your cloud journey or seeking to optimize your
          existing setup, our team ensures smooth transitions and uninterrupted
          operations. We also specialize in creating serverless solutions that
          further reduce infrastructure complexity, allowing you to focus on
          building great applications while we handle the backend operations.
          With a focus on cost efficiency, security, and performance, we ensure
          that your cloud infrastructure is aligned with your business goals.
        </p>
      ),
      icon: <ChartIcon />,
    },
    {
      description:
        "Custom e-commerce solutions to boost your online presence and sales.",
      title: "Online Store Solutions",
      ctaText: "Start Selling",
      ctaLink: "https://your-website.com/ecommerce",
      content: () => (
        <p>
          Create a powerful and secure online store with our e-commerce
          development services, offering seamless user experiences and efficient
          management tools. We provide end-to-end solutions, including store
          setup, payment gateway integration, inventory management, and advanced
          analytics. Our e-commerce solutions are designed to help you scale
          effectively and offer a personalized shopping experience for your
          customers.
          <br />
          Our designs prioritize user journey optimization, ensuring faster
          conversions and customer retention. We also specialize in developing
          custom plugins and modules tailored to your specific needs. With
          expertise in platforms like Shopify, WooCommerce, Magento, and
          headless e-commerce systems, we ensure that your store stays ahead of
          the competition.
          <br />
          Additionally, we offer integration with marketing tools such as email
          marketing, customer segmentation, and advanced product recommendation
          algorithms to further enhance your customer experience and drive
          revenue. Our goal is to help you build a robust online store that not
          only meets your current needs but is also future-proof as your
          business grows.
        </p>
      ),
      icon: <PlaneIcon />,
    },
    {
      description:
        "Professional consulting to empower businesses with tailored software solutions.",
      title: "Expert Guidance",
      ctaText: "Consult with Us",
      ctaLink: "https://your-website.com/consulting",
      content: () => (
        <p>
          Receive expert advice on the best software solutions tailored to your
          business, helping you make informed decisions and optimize your
          processes. Whether you're modernizing legacy systems or exploring
          emerging technologies, we offer actionable strategies to enhance
          operational efficiency.
          <br />
          Our consulting services include technology assessment, solution
          architecture, and ROI analysis to ensure every project delivers
          maximum value. We focus on delivering long-term solutions that align
          with your business goals, keeping you competitive in a fast-paced
          digital world. Our team works closely with yours to ensure smooth
          implementation and integration, allowing for seamless transition and
          minimal downtime.
          <br />
          We help businesses stay ahead of the curve with expert insights on the
          latest technological trends and innovations, whether it’s cloud
          adoption, AI, or blockchain. We ensure that every technology solution
          we recommend is aligned with your company's long-term objectives and
          goals.
        </p>
      ),
      icon: <MedalIcon />,
    },
    {
      description:
        "Innovation labs to transform groundbreaking ideas into reality.",
      title: "Ideas to Reality",
      ctaText: "Explore Now",
      ctaLink: "https://your-website.com/innovation",
      content: () => (
        <p>
          Transform your ideas into cutting-edge solutions with our innovation
          labs, pushing the boundaries of technology and creativity. Our team
          works collaboratively with you to ideate, prototype, and implement
          revolutionary concepts. Whether it's IoT, blockchain, AI, or machine
          learning, we have the expertise to explore and implement
          transformative solutions.
          <br />
          With a fail-fast approach and agile methodology, our labs focus on
          delivering functional prototypes quickly, enabling iterative
          improvements and practical applications. We believe in a rapid
          development cycle that allows us to adapt quickly and validate ideas
          early, ensuring that the final solution is both innovative and
          market-ready.
          <br />
          Our goal is to help you stay ahead of the curve by developing next-gen
          solutions that are practical, scalable, and impactful. We provide
          end-to-end services from conceptualization to deployment, ensuring
          that your ideas become reality.
        </p>
      ),
      icon: <LightBulbIcon />,
    },
    {
      description:
        "Customized corporate gifting solutions to strengthen relationships with clients and employees.",
      title: "Gifts for Employees",
      ctaText: "Learn More",
      ctaLink: "https://your-website.com/gifting",
      content: () => (
        <p>
          Show your appreciation with customized corporate gifts, designed to
          delight employees and clients alike, making a lasting impact. We offer
          a wide range of options, including branded merchandise, curated gift
          boxes, and personalized tokens of appreciation. Our gifting services
          help you reinforce your company's values and build meaningful
          relationships with those who matter most.
          <br />
          From design to delivery, we ensure a seamless gifting experience that
          reflects your brand's identity and creates a memorable impression. We
          assist in choosing the perfect gift for every occasion and ensuring it
          is thoughtfully presented. Let us help you foster loyalty and
          recognition through impactful gifting strategies.
          <br />
          Additionally, we offer subscription-based gifting programs for ongoing
          employee and client engagement, allowing for consistent appreciation
          throughout the year. With our customized approach, your gifts will
          always stand out and make a lasting impact on the recipients.
        </p>
      ),
      icon: <GiftIcon />,
    },
    {
      description:
        "Tailored business intelligence solutions to unlock the power of your data and drive decision-making.",
      title: "Business Intelligence & Analytics",
      ctaText: "Unlock Insights",
      ctaLink: "https://your-website.com/analytics",
      content: () => (
        <p>
          Our business intelligence and analytics solutions help you extract
          actionable insights from your data, empowering your business to make
          informed, data-driven decisions. We specialize in implementing
          end-to-end analytics platforms, from data integration to
          visualization. Our team helps you uncover trends, optimize operations,
          and predict future outcomes by harnessing the power of your data.
          <br />
          We work with leading BI tools like Power BI, Tableau, and Looker to
          design custom dashboards that provide real-time insights into your key
          performance indicators. Whether you're looking to improve operational
          efficiency, enhance customer experience, or develop predictive models,
          our solutions help you achieve your business objectives faster.
          <br />
          Our team ensures that your BI platform is tailored to your
          organization's specific needs, providing the right tools to turn
          complex data into easily accessible and actionable insights. We work
          with you every step of the way to ensure the solution is seamlessly
          integrated and optimized for your business.
        </p>
      ),
      icon: <ChartIcon />,
    },
  ];

  return (
    <section
    id="services"
    className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
  >
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-1">
      Our{" "}
      <span className="inline text-[#6A11CB] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#F3E9FF] dark:to-[#6A11CB]">
        Client-Centric Services
      </span>
    </h2>
    <p className="text-neutral-600 dark:text-neutral-400 text-lg sm:text-xl mt-4 mb-8 text-center">
      Explore our wide range of tailored services to meet your business needs.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 sm:mt-16">
      <ul className="flex flex-col gap-6 w-full">
        {cards.map((card) => (
          <motion.div
            key={`card-${card.title}`}
            layoutId={`card-${card.title}`}
            onClick={() => setActive(card)}
            className="flex flex-col sm:flex-row items-start gap-4 bg-white dark:bg-neutral-900 justify-between max-w-full rounded-xl p-4 border border-gray-300 hover:border-gray-500 hover:bg-gray-50 dark:border-neutral-700 dark:hover:border-neutral-600 dark:hover:bg-neutral-800"
          >
            <div className="flex gap-4 items-center max-w-full">
              <motion.div layoutId={`image-${card.title}`}>
                <div className="p-3 rounded-xl bg-secondary/100 dark:bg-primary/20">
                  {card.icon}
                </div>
              </motion.div>
              <div className="flex-1 min-w-0">
                <motion.h3
                  layoutId={`title-${card.title}`}
                  className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-400 truncate"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}`}
                  className="text-md mt-2 text-neutral-700 dark:text-neutral-400 truncate"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
  
      <img
        src={cubeLeg}
        className="w-[80%] sm:w-[300px] lg:w-[500px] mt-[200px] object-contain"
        alt="About services"
      />
    </div>
  
    <AnimatePresence>
      {active && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.div
              ref={ref}
              layoutId={`card-${active.title}`}
              className="w-full max-w-lg h-full sm:h-auto sm:rounded-2xl bg-white dark:bg-neutral-900 overflow-hidden"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 bg-black/20 text-white p-2 rounded-full"
              >
                ✖
              </button>
              <div className="p-4 flex gap-4 items-center">
                <div className="bg-primary/20 p-2 rounded-full">
                  {active.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-green-600 dark:text-green-600 truncate">
                    {active.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 truncate">
                    {active.description}
                  </p>
                </div>
              </div>
              <div className="p-4 overflow-y-auto max-h-[60vh] sm:max-h-[70vh] custom-scroll">
                {active.content()}
              </div>
              <a
                href={active.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-4 my-3 px-4 py-2 text-center rounded-full bg-primary/90 dark:bg-primary/30 text-white"
              >
                {active.ctaText}
              </a>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  </section>
  

  );
}
 {/* <motion.p
              layoutId={`description-${card.description}`}
              className="text-md mt-2"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {card.description.split(" ").slice(0, -3).join(" ") + " "}
              <span className="block">
                {card.description.split(" ").slice(-3).join(" ")}
              </span>
            </motion.p> */}
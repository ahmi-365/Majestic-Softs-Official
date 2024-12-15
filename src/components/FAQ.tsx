import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DrawerDemo } from './Drawer'

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How do I get a custom software solution tailored to my business needs?",
    answer: "Simply reach out to us through our contact form or schedule a consultation. Our team will assess your business goals and craft a custom solution that fits your needs perfectly.",
    value: "item-1",
  },
  {
    question: "How long does it take to develop a software solution?",
    answer: "The timeline depends on the complexity of the project. Small projects can take a few weeks, while larger, more complex ones may take a few months. We’ll provide a timeline once we understand your needs.",
    value: "item-2",
  },
  {
    question: "Do you offer both web and mobile app development?",
    answer: "Yes, we specialize in both web and mobile development. Whether you need a responsive website or a mobile app, we can handle both to help your business grow.",
    value: "item-3",
  },
  {
    question: "What makes your software development process unique?",
    answer: "We follow an agile development process, which ensures flexibility, transparency, and regular feedback loops. This allows us to continuously optimize and improve the solution according to your needs.",
    value: "item-4",
  },
  {
    question: "Do you provide ongoing support and maintenance for developed solutions?",
    answer: "Yes, we offer post-launch support and maintenance services to ensure your software is always up-to-date and running smoothly. We’re just a message away if you encounter any issues.",
    value: "item-5",
  },
  {
    question: "Can you integrate our existing systems with new software?",
    answer: "Absolutely! We can integrate your software with any third-party APIs, CRMs, or other systems to ensure smooth and efficient workflows.",
    value: "item-6",
  },
  {
    question: "How do I know if my software idea is feasible?",
    answer: "We’ll conduct a feasibility study to assess the technical, business, and operational aspects of your idea. Based on this, we’ll provide expert recommendations and a clear development roadmap.",
    value: "item-7",
  },
];


export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4 flex items-center">
  Still have questions?{" "}
  {/* Add margin to create space between text and Drawer button */}
  <span className="ml-2">
    <DrawerDemo />
  </span>
</h3>

    </section>
  );
};

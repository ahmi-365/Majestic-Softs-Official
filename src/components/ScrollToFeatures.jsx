import { Button } from "./ui/button";

const ScrollToFeatures = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",  // Adjusts where the section lands
      });
    }
  };

  return (
    <Button
      variant="outline"
      onClick={scrollToFeatures}
      className="flex items-center justify-center transition-all border-primary hover:border-b-2 bg-black text-white py-2 px-4 rounded dark:bg-neutral-900 dark:hover:bg-neutral-800 transition duration-300"
    >
      View all features
    </Button>
  );
};

export default ScrollToFeatures;

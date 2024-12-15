import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { toast } from "react-toastify";  // Import toastify

// Define type for formData
interface FormData {
  name: string;
  email: string;
  message: string;
}

export function DrawerDemo() {
  // State to manage form data with proper typing
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes with proper event typing
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission with event typing
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/contact", formData);

      // Assuming response has a message or status
      if (response.data.success) {
        // Display success toast
        toast.success(
          `Dear!  ${formData.name} Your message has been sent. We will get back to you shortly!`
        );
      } else {
        // Handle any failure case
        toast.error("Something went wrong. Please try again.");
      }
      
      setFormData({ name: "", email: "", message: "" });

      console.log(
        `%c🎉 Success! Message sent from ${formData.name} (%c${formData.email}%c). We'll get back to you soon! 🚀`,
        "color: green; font-weight: bold;",
        "color: blue;",
        "color: green; font-weight: bold;"
      );
    } catch (error: any) {
      // Log error details for debugging
      console.error("Error occurred during form submission:", error.response || error.message);

      // Display error toast with more info
      toast.error(`Error: ${error.response?.data?.message || "Something went wrong."}`);
    }
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="text-primary transition-all border-primary hover:border-b-2">Contact Us</button>
      </DrawerTrigger>
      <DrawerContent className="m-[10px] sm:m-[50px] mb-0">
        <div className="mx-auto w-full max-w-sm sm:max-w-md">
          <DrawerHeader className="text-center sm:text-left p-4">
            <DrawerTitle className="text-xl sm:text-2xl font-bold mt-4 sm:mt-0 mt-[-20px]">Contact Us</DrawerTitle>
            <DrawerDescription className="text-sm sm:text-base mt-2 sm:mt-3">
              We would love to hear from you. Please leave a message.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-bold">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border-2 border-gray-400 rounded text-black mt-2"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="email" className="block text-sm sm:text-base font-bold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border-2 border-gray-400 rounded text-black mt-2"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="message" className="block text-sm sm:text-base font-bold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border-2 border-gray-400 dark:border rounded text-black mt-2"
                />
              </div>
            </form>
          </div>
          <DrawerFooter className="mt-4 flex flex-col sm:flex-row justify-between">
            <Button
              type="button" // Prevent form submit on its own
              onClick={handleSubmit} // Manually triggering the submit function
              className="w-full sm:w-1/2 py-2 text-white bg-primary/90 dark:bg-primary/70 rounded-full hover:bg-primary/80 transition mb-2 sm:mb-0"
            >
              Submit
            </Button>
            <DrawerClose asChild>
              <Button className="w-full sm:w-1/2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerDemo;

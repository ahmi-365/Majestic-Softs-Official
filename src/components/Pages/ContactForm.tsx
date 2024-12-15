import React from 'react';
import '../CSS/Contact.css';
import { Helmet } from 'react-helmet-async';
import SendButton from '../ui/SendButton';

const Contact: React.FC = () => {
 

  return (
    <div>
      <Helmet>
        <title>Contact Us | Majestic Softs</title>
        <meta
          name="description"
          content="Get in touch with Majestic Softs to turn your software ideas into reality. Contact us today to start your project."
        />
      </Helmet>

      <span className="contact"></span>
      <div className="min-h-screen flex items-center justify-center mb-9">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <div className="mt-0 lg:mt-[-150px]">
              <h1 className="text-3xl font-bold text-[#6A11CB] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#F3E9FF] dark:to-[#6A11CB] mb-4">
                Connect With Us: Let's Build Something Great Together
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Have an idea for a revolutionary app? Want to create cutting-edge software solutions? Our team of
                experts is ready to help turn your vision into reality. Let's start the conversation today!
              </p>

              <div className="space-y-6">
                {/* Office */}
                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-500 dark:text-blue-400 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin-house"
                    >
                      <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
                      <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
                      <path d="M18 22v-3" />
                      <circle cx="10" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white">Our Office</h4>
                    <p className="text-gray-600 dark:text-gray-300 font-semibold">
                      3rd Floor, Opposite Style, Al-Hussain Plaza, Mohammad Ali Jinnah Rd, Okara, Punjab -{' '}
                      <span className="text-gray-400 font-normal">Innovation starts here.</span>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-500 dark:text-blue-400 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-voicemail"
                    >
                      <circle cx="6" cy="12" r="4" />
                      <circle cx="18" cy="12" r="4" />
                      <line x1="6" x2="18" y1="16" y2="16" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white">Let's Talk</h4>
                    <p className="text-gray-600 dark:text-gray-300 font-semibold">
                      (+92) 309 5393234 -{' '}
                      <span className="text-gray-400 font-normal">We are always ready to listen.</span>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-500 dark:text-blue-400 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mails"
                    >
                      <rect width="16" height="13" x="6" y="4" rx="2" />
                      <path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
                      <path d="M2 8v11c0 1.1.9 2 2 2h14" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white">Email Us</h4>
                    <p className="text-gray-600 dark:text-gray-300 font-semibold">
                      info@majesticsofts.com -{' '}
                      <span className="text-gray-400 font-normal">Send us your questions or proposals.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="bg-white dark:bg-transparent shadow-lg rounded-lg p-8 mt-[-40px]">
              <h2 className="text-3xl font-semibold text-[#6A11CB] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#6A11CB] dark:to-[#F3E9FF] uppercase mb-6">
                Get in Touch with Our Team
              </h2>
              <form>
                <div className="space-y-6">
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
                  />
                  <textarea
                    placeholder="Tell Us About Your Project"
                    rows={5}
                    className="resize-none w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
                  ></textarea>
                  <SendButton/>
                  {/* <SendButton
                    type="submit"
                    className="w-full py-3 bg-blue-500 dark:bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition"
                  >
                    Send Message
                  </SendButton> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

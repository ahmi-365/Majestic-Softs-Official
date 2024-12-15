import logo from "../assets/MS2.png";
import {
  FaGithub,
  FaTwitter,
  FaPhone,
  FaClock,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="text-white py-12 ">
      <div className="container mx-auto px-4">
        <hr className="w-11/12 mx-auto mb-9" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info and Map */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src={logo}
                alt="Majestic Softs Logo"
                className="w-12 h-12 rounded-lg shadow-lg mr-3"
              />
              <h2 className="text-2xl font-bold text-black dark:text-white">Majestic Softs</h2>
            </div>
            <p className="mb-6 text-gray-500 dark:text-gray-400">
              Leading software development company in Okara, providing innovative solutions for web, mobile, and desktop applications.
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg h-48 mb-6">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d214.1827113405684!2d73.4352192674938!3d30.804782874716857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922a7007c3d4f79%3A0xe03f8573506db5df!2sMajestic%20Softs!5e0!3m2!1sen!2s!4v1733292084966!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                aria-label="Google Maps showing company location"
              />
            </div>
          </div>

          {/* Contact Information */}
<div className="space-y-4 text-black dark:text-white">
  <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Contact Info</h3>
  
  {/* Phone */}
  <div className="flex items-center space-x-3">
    <FaPhone className="text-blue-400" />
    <span>+92 309 5393234</span>
  </div>
  
  {/* Working Hours */}
  <div className="flex items-center space-x-3">
    <FaClock className="text-blue-400" />
    <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
  </div>
   {/* Email */}
   <div className="flex items-center space-x-3">
    <FaEnvelope className="text-blue-400" />
    <span>
      <a
        href="mailto:info@majesticsofts.com"
        className="hover:text-blue-400 transition-colors duration-300"
      >
        info@majesticsofts.com
      </a>
    </span>
  </div>
  {/* Address */}
  <div className="flex items-center space-x-3">
    <FaMapMarkerAlt className="text-blue-400" size={34} />
    <span>3rd Floor, Opposite Style, Al-Hussain Plaza, Mohammad Ali Jinnah Rd, Okara, Punjab</span>
  </div>

 
  
  {/* Social Links */}
  <div className="pt-4">
    <h3 className="text-xl font-semibold mb-4">Social Links</h3>
    <div className="grid grid-cols-3 gap-y-3 md:grid-cols-6 gap-4">
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition-colors duration-300 "
        aria-label="LinkedIn Profile"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#E1306C] transition-colors duration-300"
        aria-label="Instagram Profile"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-purple-400 transition-colors duration-300 "
        aria-label="GitHub Profile"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition-colors duration-300 "
        aria-label="Twitter Profile"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-800 transition-colors duration-300"
        aria-label="Facebook Profile"
      >
        <FaFacebook size={24} />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-600 transition-colors duration-300 "
        aria-label="YouTube Channel"
      >
        <FaYoutube size={24} />
      </a>
    </div>
  </div>
</div>


          {/* Quick Links */}
          <div className="text-black dark:text-white">
            <div className="mb-8 text-black dark:text-white">
              <h3 className="text-xl font-semibold mb-4">Platforms</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    Mobile Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    Desktop Applications
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    AI & ML Services
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* About Section */}
              <div>
                <h3 className="text-xl font-semibold mb-4">About</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

             
            </div>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Resources</h3>
            <ul className="space-y-2 text-black dark:text-white">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="w-4/12 mx-auto mt-3 mb-3" />

        <div className=" text-center text-gray-400">
          <p>&copy; 2024 Majestic Softs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import Contact from "./components/Pages/ContactForm";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";
import AboutUsAi from "./components/Pages/AboutUs";
import NotFound from "./components/Pages/404NotFound";
// import BlogPage from "./components/Pages/Blogs";
import { BlogListPage } from "./components/Blogs/pages/BlogListPage";
import { BlogPostPage } from "./components/Blogs/pages/BlogPostPage";
// import NoInternet from "./components/Pages/NoInternet"; // Import the NoInternet component
// import { useState, useEffect } from "react";

function App() {
  // const [isOnline, setIsOnline] = useState(navigator.onLine);

  // useEffect(() => {
  //   const handleOnlineStatus = () => setIsOnline(navigator.onLine);

  //   window.addEventListener("online", handleOnlineStatus);
  //   window.addEventListener("offline", handleOnlineStatus);

  //   return () => {
  //     window.removeEventListener("online", handleOnlineStatus);
  //     window.removeEventListener("offline", handleOnlineStatus);
  //   };
  // }, []);

  // if (!isOnline) {
  //   return <NoInternet />; // Show NoInternet page if offline
  // }

  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <HowItWorks />
                <About />
                <Services />
                <Testimonials />
                <Team />
                <Cta />
                <Newsletter />
                <FAQ />
                <ToastContainer />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />{" "}
          <Route path="/aboutUs" element={<AboutUsAi />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import AppStore from "./components/AppStore/AppStore";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import FreeSources from "./components/FreeSources"; 
import Pagetwo from "./components/Pagetwo";
import Pagethree from "./components/Pagethree";
import Pagefour from "./components/Pagefour";
import Pagefive from "./components/Pagefive";
import Pagesix from "./components/Pagesix";
import Login from "./components/login";
import Signup from "./components/signup";


 // Import your FreeSources component

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Routes>
          <Route path="/FreeSources" element={<FreeSources />} />
          <Route path="/page2" element={<Pagetwo />} />
          <Route path="/page3" element={<Pagethree />} />
          <Route path="/page4" element={<Pagefour />} />
          <Route path="/page5" element={<Pagefive />} />
          <Route path="/page6" element={<Pagesix />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/about" element={<Banner/>} />
          <Route path="/login" element={<Login/>} />
          
          
          
          
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Banner />
                
                <Testimonial />
                <Footer />
                
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React, { useEffect } from "react";
import About from "./components/About";;
import Contact from "./components/Contact";
import Finding from "./components/Finding";
import Index from "./components/Index";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

function App() {
  // Scroll-to-top functionality
  useEffect(() => {
    const mybutton = document.getElementById("myBtn");

    const scrollFunction = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <Header />
      <Index />
      <About />
      <Finding />
      <Login />
      <Signup />
      <Contact />
      <Footer myFunction={topFunction} />
    </>
  );
}

export default App;

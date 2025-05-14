import About from "./components/About";
import Community from "./components/Community";
import Contact from "./components/Contact";
import Finding from "./components/Finding";
import Index from "./components/Index";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

function App() {
  let index = 0;
  carousel();

  function carousel() {
    let i;
    let x = document.getElementsByClassName("slide-show");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    index++;
    if (index > x.length) {
      index = 1;
    }
    // x[index - 1].style.display = "block";
    // setTimeout(carousel, 5000);
  }

  let mybutton = document.getElementById("myBtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <Header />
      <About />
      <Community />
      <Contact />
      <Finding />
      <Index />
      <Login />
      <Signup />
      <Footer myFunction = {topFunction}/>
    </>
  );
};

export default App

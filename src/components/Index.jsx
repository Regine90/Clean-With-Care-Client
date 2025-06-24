import React, { useState, useEffect } from "react";
import "../shared/styles.css";
import { Link } from "react-router-dom";

function Index() {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);

  const images1 = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
  ];
  const images2 = [
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
  ];
  const images3 = [
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg",
    "images/12.jpg",
  ];

  useEffect(() => {
    const timer1 = setInterval(
      () => setIndex1((prev) => (prev + 1) % images1.length),
      5000
    );
    const timer2 = setInterval(
      () => setIndex2((prev) => (prev + 1) % images2.length),
      5000
    );
    const timer3 = setInterval(
      () => setIndex3((prev) => (prev + 1) % images3.length),
      5000
    );

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, []);

  return (
    <main>
      <section className="index-hero">
        <div className="index-content">
          <h1>
            Bringing Comfort One <span>Clean</span> Home at a Time
          </h1>
          <p>
            CleanWithCare is a non-profit organization dedicated to supporting
            individuals and families in need of cleanliness and hygiene. Our
            mission is to create a safe, welcoming, and supportive community
            where people can enjoy the benefits of good health, well-being, and
            a sense of belonging.
          </p>
          <Link to="/find" className="btn primary-btn">
            Meet The Community
          </Link>
        </div>
      </section>

      <section className="community-text">
        <h2>What our community says about us</h2>
      </section>

      <section className="slide-show-wrapper">
        <img className="slide-show" src={images1[index1]} alt="Testimonial 1" />
        <img className="slide-show" src={images2[index2]} alt="Testimonial 2" />
        <img className="slide-show" src={images3[index3]} alt="Testimonial 3" />
      </section>
    </main>
  );
}

export default Index;

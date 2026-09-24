import { useEffect, useState } from "react";

import hero01 from "../assets/hero/hero-01.jpg";
import hero02 from "../assets/hero/hero-02.jpg";
import hero03 from "../assets/hero/hero-03.jpg";
import hero04 from "../assets/hero/hero-04.jpg";

const heroImages = [hero01, hero02, hero03, hero04];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {heroImages.map((image, index) => (
        <img
          key={image}
          src={image}
          alt=""
          className={`hero-image ${index === currentImage ? "active" : ""}`}
        />
      ))}

      <div className={`hero-content ${currentImage === 0 ? "active" : ""}`}>
        <h1>CROWN & AMBER</h1>
        <p>A TIMELESS CUP OF TEA</p>
      </div>
    </section>
  );
}

export default Hero;

import { useEffect, useState } from "react";

const heroImages = [
  "/images/hero/hero-01.jpg",
  "/images/hero/hero-02.jpg",
  "/images/hero/hero-03.jpg",
  "/images/hero/hero-04.jpg",
];

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

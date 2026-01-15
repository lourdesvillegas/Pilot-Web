// src/components/HeroSlider.tsx
import React, { useEffect, useState } from "react";

type Slide = {
  id: number;
  titleTag: string;
  heading: string;
  buttonText: string;
  bgImage: string;
};

const slides: Slide[] = [
  {
    id: 1,
    titleTag: "LOREM IPSUM",
    heading: "Grow Your Business More Efficiently",
    buttonText: "Read more",
    bgImage:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600", // cámbialo por tu imagen
  },
  {
    id: 2,
    titleTag: "STRATEGY & PLANNING",
    heading: "We Help You Scale With Confidence",
    buttonText: "Read more",
    bgImage:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 3,
    titleTag: "DIGITAL TRANSFORMATION",
    heading: "Empower Your Team With Better Tools",
    buttonText: "Read more",
    bgImage:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const AUTO_PLAY_DELAY = 6000; // 6 segundos

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_DELAY);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const currentSlide = slides[current];

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="relative h-[380px] sm:h-[450px] md:h-[520px] lg:h-[600px] flex items-center"
        style={{
          backgroundImage: `url(${currentSlide.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
       
        <div className="absolute inset-0 bg-black/40" />
     
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
          <div className="max-w-xl text-left md:text-left">
             <div className="flex flex-col gap-2 mb-3">
                <div className="h-[3px] w-[40px] bg-[#0055FF]" />
                    <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#0055FF]">
                        {currentSlide.titleTag}
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-[#fff] drop-shadow-md  px-0 py-1">
                    {currentSlide.heading}
                    </h2>
                </div>

            

            {/* Botón */}
            <div className="mt-5">
              <button className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 bg-[#0055FF] text-white text-sm sm:text-base font-medium shadow-md hover:bg-[#0040c2] transition-colors">
                <span>{currentSlide.buttonText}</span>
                {/* Flecha */}
                <span className="inline-flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Controles laterales opcionales (prev/next) */}
        <div className="absolute inset-y-0 left-0 flex items-center px-2 sm:px-4">
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
            }
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-black/30 text-white p-2 hover:bg-black/50 transition"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="M11 18l-6-6 6-6" />
            </svg>
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center px-2 sm:px-4">
          <button
            onClick={() =>
              setCurrent((prev) => (prev + 1) % slides.length)
            }
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-black/30 text-white p-2 hover:bg-black/50 transition"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Dots indicadores */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              current === index
                ? "w-6 bg-[#0055FF]"
                : "w-2 bg-white/70 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;

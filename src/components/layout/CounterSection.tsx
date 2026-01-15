// src/components/layout/CounterSection.tsx
import React from "react";
import CountUp from "react-countup";
import { useEffect, useRef, useState } from "react";


const CounterSection = () => {

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); 
        }
      },
      {
        threshold: 0.4, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0234B4] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {/* Item */}
          <Stat
            start={startCount}
            end={95}
            suffix="%"
            label="Proyectos completos"
          />

          <Stat
            start={startCount}
            end={50}
            suffix="K"
            label="Tasa de éxito"
          />

          <Stat
            start={startCount}
            end={120}
            suffix="+"
            label="Clientes satisfechos"
          />

          <Stat
            start={startCount}
            end={10}
            suffix="+"
            label="Años de experiencia"
          />

        </div>
      </div>
    </section>
  );
};

type StatProps = {
  start: boolean;
  end: number;
  suffix?: string;
  label: string;
};

const Stat = ({ start, end, suffix = "", label }: StatProps) => {
  return (
    <div>
      <div className="text-white text-5xl md:text-6xl font-bold mb-2">
        {start && (
          <CountUp
            start={0}
            end={end}
            duration={2.5}
            suffix={suffix}
          />
        )}
      </div>
      <h3 className="text-white text-base md:text-lg">
        {label}
      </h3>
    </div>
  );
};
export default CounterSection;

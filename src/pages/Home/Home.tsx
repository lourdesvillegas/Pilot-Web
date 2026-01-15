import React from "react";
import HeroSlider from "../../components/layout/HeroSlider";
import AboutSection from "../../components/layout/AboutSection";
import FeaturesSection from "../../components/layout/FeatureSection";
import CounterSection from "../../components/layout/CounterSection";
import StrategicSection from "../../components/layout/StrategicSection";


const Home = () => {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <FeaturesSection />
      <CounterSection/>
      <StrategicSection/>
    </>
  );
};

export default Home;
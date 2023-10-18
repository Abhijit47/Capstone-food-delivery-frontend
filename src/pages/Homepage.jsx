import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Meals from "../components/Meals";
import Testimonials from "../components/Testimonials";
import PriceSection from "../components/PriceSection";
import CallToAction from "../components/CallToAction";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Meals />
      <Testimonials />
      <PriceSection />
      <CallToAction />
    </main>
  );
};

export default Homepage;

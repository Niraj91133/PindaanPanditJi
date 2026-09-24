import React from "react";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import IntroSection from "@/components/IntroSection";
import ServicesGrid from "@/components/ServicesGrid";
import FeaturedPackage from "@/components/FeaturedPackage";
import PanditProfile from "@/components/PanditProfile";
import WhyUs from "@/components/WhyUs";
import ProcessTimeline from "@/components/ProcessTimeline";
import GayaJiSection from "@/components/GayaJiSection";
import Gallery from "@/components/Gallery";
import ReviewsSection from "@/components/ReviewsSection";
import FAQAccordion from "@/components/FAQAccordion";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <IntroSection />
      <ServicesGrid />
      <FeaturedPackage />
      <PanditProfile />
      <WhyUs />
      <ProcessTimeline />
      <GayaJiSection />
      <Gallery />
      <ReviewsSection />
      <FAQAccordion />
      <FinalCTA />
    </>
  );
}

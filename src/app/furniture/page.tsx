import LandingPage from "@/components/organisms/furniture/landingPage";
import CraftsmanshipSection from "@/components/organisms/furniture/craftsmanshipStory";
import Costomize_Section from "@/components/organisms/furniture/costomize-section";
import CustomDesignProcess from "@/components/organisms/furniture/customDesignProcess";
import ClientCreations from "@/components/organisms/furniture/clientCreations";
import MaterialsAndFinishes from "@/components/organisms/furniture/materialsAndFinishes";
import PricingSection from "@/components/organisms/furniture/pricing-section";
import TestimonialCarousel from "@/components/organisms/furniture/furniture-testimonial";

export default function Furniture() {
  return (
    <>
    <LandingPage />
    <CraftsmanshipSection />
    <Costomize_Section />
    <CustomDesignProcess />
    <ClientCreations />
    <MaterialsAndFinishes />
    <PricingSection />
    <TestimonialCarousel />
    </>
  );
}

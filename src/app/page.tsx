import LandingPage from "../components/organisms/home/landingPage";
import HomePage from "../components/organisms/home/homePage";
import OurStorySection from "@/components/organisms/home/ourstory-section";
import ServicesSection from "@/components/organisms/home/services-section";
import ProjectsSection from "@/components/organisms/home/projects-section";
import FurnitureSection from "@/components/organisms/home/furniture-section";
import TestimonialSection from "@/components/organisms/home/testimonial-section";
import ContactForm from "@/components/organisms/home/contactform-section";
import ContactUs from "@/components/organisms/home/contactus-section";
import Footer from "@/components/molecules/footer";
import LocationSection from "@/components/organisms/home/map-section";

export default function Home() {
  return (
    <>
      <LandingPage />
      <HomePage />
      <OurStorySection />
      <ServicesSection />
      <ProjectsSection />
      <FurnitureSection />
      <TestimonialSection />
      <ContactForm />
      <ContactUs />
      <LocationSection />
      <Footer />
    </>
  );
}

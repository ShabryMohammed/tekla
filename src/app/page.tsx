import LandingPage from "../components/organisms/home/landingPage";
import HomePage from "../components/organisms/home/homePage";
import OurStorySection from "@/components/organisms/home/ourstory-section";
import ServicesSection from "@/components/organisms/home/services-section";
import ProjectsSection from "@/components/organisms/home/projects-section";

export default function Home() {
  return (
    <>
      <LandingPage />
      <HomePage />
      <OurStorySection />
      <ServicesSection />
      <ProjectsSection />
    </>
  );
}

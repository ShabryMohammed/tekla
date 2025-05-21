import LandingPage from "@/components/organisms/furniture/landingPage";
import CraftsmanshipSection from "@/components/organisms/furniture/craftsmanshipStory";
import Costomize_Section from "@/components/organisms/furniture/costomize_Section";
import CustomDesignProcess from "@/components/organisms/furniture/customDesignProcess";
import ClientCreations from "@/components/organisms/furniture/clientCreations";
import MaterialsAndFinishes from "@/components/organisms/furniture/materialsAndFinishes";

export default function Furniture() {
  return (
    <>
    <LandingPage />
    <CraftsmanshipSection />
    <Costomize_Section />
    <CustomDesignProcess />
    <ClientCreations />
    <MaterialsAndFinishes />
    </>
  );
}

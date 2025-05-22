"use client"

import { useState, useEffect } from "react"
import LandingPage from "../components/organisms/home/landingPage"
import HomePage from "../components/organisms/home/homePage"
import OurStorySection from "@/components/organisms/home/ourstory-section"
import ServicesSection from "@/components/organisms/home/services-section"
import ProjectsSection from "@/components/organisms/home/projects-section"
import FurnitureSection from "@/components/organisms/home/furniture-section"
import TestimonialSection from "@/components/organisms/home/testimonial-section"
import ContactForm from "@/components/organisms/home/contactform-section"
import ContactUs from "@/components/organisms/home/contactus-section"
import LocationSection from "@/components/organisms/home/map-section"
import DesignProcess from "@/components/organisms/home/design-section"
import ParallaxProvider from "@/components/parallax/parallax-provider"
import ParallaxSection from "@/components/parallax/parallax-section"
import Footer from "@/components/molecules/footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time or wait for resources to load
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000) // Adjust time as needed

    return () => clearTimeout(timer)
  }, [])

  return (
    <>

          {/* Loading screen */}
      {isLoading && (
        <div className="fixed inset-0 z-50 transition-opacity duration-500">
          <LandingPage />
        </div>
      )}

      {/* Main content - will be rendered but hidden behind the loading screen until loaded */}
      <div className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <ParallaxProvider>
          <ParallaxSection type="zoom-out" speed={0.8}>
            <HomePage />
          </ParallaxSection>

          <ParallaxSection type="scale-in" speed={1.2}>
            <OurStorySection />
          </ParallaxSection>

          <ParallaxSection type="parallax-depth" speed={1.5}>
            <ServicesSection />
          </ParallaxSection>

          <ParallaxSection type="stagger-children" speed={0.9}>
            <ProjectsSection />
          </ParallaxSection>

          <ParallaxSection type="3d-tilt" speed={1}>
            <DesignProcess />
          </ParallaxSection>

          <ParallaxSection type="parallax-horizontal" speed={1.2}>
            <FurnitureSection />
          </ParallaxSection>

          <ParallaxSection type="rotate-in" speed={0.7}>
            <TestimonialSection />
          </ParallaxSection>

          <ParallaxSection type="reveal-mask" speed={1.5}>
            <ContactForm />
          </ParallaxSection>

          <ParallaxSection type="zoom-out" speed={1.3}>
            <ContactUs />
          </ParallaxSection>

          <ParallaxSection type="scale-in" speed={0.8}>
            <LocationSection />
          </ParallaxSection>

          <Footer />
        </ParallaxProvider>
      </div>
    </>
  )
}

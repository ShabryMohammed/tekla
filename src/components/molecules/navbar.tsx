"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <nav className="bg-black border-white border-[0.1px] rounded-[40px] relative mx-auto max-w-[95%] lg:max-w-[90%] xl:max-w-[80%] mt-10">
      <div className="w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-300 hover:text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4 xl:space-x-8">
              <Link
                href="/"
                className="text-gray-300 hover:text-white px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium whitespace-nowrap"
                style={{ fontFamily: "Montserrat" }}
              >
                Home
              </Link>
              <Link
                href="/real-estate"
                className="text-gray-300 hover:text-white px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium whitespace-nowrap"
                style={{ fontFamily: "Montserrat" }}
              >
                Real Estate
              </Link>
              <Link
                href="/interior-design"
                className="text-gray-300 hover:text-white px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium whitespace-nowrap"
                style={{ fontFamily: "Montserrat" }}
              >
                Interior Design
              </Link>

              <Link
                href="/furniture"
                className="text-gray-300 hover:text-white px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium"
                style={{ fontFamily: "Montserrat" }}
              >
                Furniture
              </Link>

              <Link
                href="/packages"
                className="text-gray-300 hover:text-white px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium"
                style={{ fontFamily: "Montserrat" }}
              >
                Packages
              </Link>
              <Link
                href="/blog"
                className="text-gray-300 hover:text-white px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium"
                style={{ fontFamily: "Montserrat" }}
              >
                Blog
              </Link>
              <Link
                href="/our-team"
                className="text-gray-300 hover:text-white px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium"
                style={{ fontFamily: "Montserrat" }}
              >
                Our Team
              </Link>
            </div>
          </div>

          {/* Contact Us button */}
          <div className="flex items-center">
            <Button className="rounded-full bg-white text-black hover:bg-gray-200 text-xs md:text-sm px-3 md:px-4 py-1 md:py-2">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isMobileMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black">
          <Link href="/" className="block text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">
            Home
          </Link>
          <Link href="/real-estate" className="block text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">
            Real Estate
          </Link>
          <Link
            href="/interior-design"
            className="block text-white hover:text-gray-300 px-3 py-2 text-sm font-medium"
          >
            Interior Design
          </Link>

          {/* Mobile dropdown */}
          <div>
            <button
              className="flex w-full items-center justify-between text-white hover:text-gray-300 px-3 py-2 text-sm font-medium"
              onClick={() => toggleDropdown("mobile-furniture")}
            >
              Furniture
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  activeDropdown === "mobile-furniture" ? "rotate-180" : "",
                )}
              />
            </button>

            {activeDropdown === "mobile-furniture" && (
              <div className="pl-4 border-l-2 border-yellow-500 ml-3">
                <Link
                  href="/furniture/link-five"
                  className="block text-white hover:text-gray-300 px-3 py-2 text-sm font-medium"
                >
                  Link Five
                </Link>
                <Link
                  href="/furniture/link-six"
                  className="block text-white hover:text-gray-300 px-3 py-2 text-sm font-medium"
                >
                  Link Six
                </Link>
                <Link
                  href="/furniture/link-seven"
                  className="block text-white hover:text-gray-300 px-3 py-2 text-sm font-medium"
                >
                  Link Seven
                </Link>
              </div>
            )}
          </div>

          <Link href="/packages" className="block text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">
            Packages
          </Link>
          <Link href="/blog" className="block text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">
            Blog
          </Link>
          <Link href="/our-team" className="block text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">
            Our Team
          </Link>

          <div className="mt-4 px-3">
            <Button className="w-full rounded-full bg-white text-black hover:bg-gray-200 ">Contact Us</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

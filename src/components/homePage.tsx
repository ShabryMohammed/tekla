import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/intirior-design.png"
          alt="Interior design background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Logo */}
        <header className="pt-8 px-6 md:px-12 text-center">
          <div className="inline-block">
            <h1
              className="text-white lg:text-xl font-light tracking-[0.2em]"
              style={{ fontFamily: "Ysabeau" }}
            >
              TEKLA
            </h1>
            <p className="text-white/80 text-[12px] tracking-wider pt-1">
              Since 2008
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="mt-[100px] flex flex-col md:flex-row items-start px-6 md:px-16 lg:px-24 relative">
          {/* Left Column */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 z-10">
            <h2
              className="text-white text-4xl md:text-5xl lg:text-8xl font-light leading-tight whitespace-nowrap"
              style={{ fontFamily: "Ysabeau" }}
            >
              Transform Your Space with
            </h2>
            <div
              className="max-w-xl mt-6 text-white/80 text-sm md:text-base pl-5"
              style={{ fontFamily: "Montserrat" }}
            >
              <p>
                Where your space becomes a masterpiece. We specialize in custom interior design solutions that are stylish, functional, and uniquely yours. Whether it's a home, office, or commercial space - we turn your vision into reality.
              </p>
            </div>
          </div>

          {/* Right Column: Absolute Position */}
          <div
            className="absolute top-[150px] left-[750px] flex flex-col items-start gap-8 z-10"
          >
            <h2 className="text-white text-4xl md:text-5xl lg:text-7xl font-light leading-tight"
            style={{ fontFamily: "Montserrat" }}>
              Timeless Design
            </h2>

            
<div className="flex flex-col md:flex-row items-center gap-4 w-full px-3">
  {/* Get in Touch Button */}
  <Link
    href="#contact"
    className="flex items-center justify-between gap-4 pl-4 pr-1 py-2 border-3 border-[#E5C767] text-white rounded-full transition-colors w-full h-[52px]"
  >
    <span className="text-sm tracking-wider mx-auto" style={{ fontFamily: "Montserrat" }}>
      GET IN TOUCH
    </span>
    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
      <ArrowUpRight className="text-black h-4 w-4" />
    </div>
  </Link>

  {/* Services Button */}
  <Link
    href="#services"
    className="flex items-center justify-between gap-4 pl-4 pr-1 py-2 bg-[#E5C767] text-black rounded-full hover:bg-yellow-400 transition-colors w-full h-[52px]"
  >
    <span className="text-sm tracking-wider mx-auto" style={{ fontFamily: "Montserrat" }}>
      SERVICES
    </span>
    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
      <ArrowUpRight className="text-black h-4 w-4" />
    </div>
  </Link>
</div>

          </div>
        </div>
      </div>
    </main>
  )
}

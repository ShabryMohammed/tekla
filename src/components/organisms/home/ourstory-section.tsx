"use client"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export default function OurStorySection() {
  const controls = useAnimation()
  const [hasAnimated, setHasAnimated] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible")
      setHasAnimated(true)
    }
  }, [controls, inView, hasAnimated])

  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  }

  // Generate random delays for each image
  const delays = Array.from({ length: 5 }, () => Math.random() * 1.5)

  return (
    <section
      className="bg-black text-white py-12 px-4 md:px-8 lg:px-12"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto md:mt-36">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
<<<<<<< HEAD
          {/* Left column with heading and text */}
          <div className="lg:col-span-3 flex flex-col text-center -mx-10">
            <h2 className="text-4xl md:text-7xl font-medium mb-4"
            style={{ fontFamily: "Ysabeau" }}>Our </h2>
            <h2 className="text-4xl md:text-7xl font-medium mb-4"
            style={{ fontFamily: "Ysabeau" }}>Story</h2>
            <div className="border-t-2 border-white w-full my-12"></div>
            <div className="space-y-6 mt-2">
              <p className="text-sm text-left"
              style={{ fontFamily: "Montserrat" }}>
                With over 10 years of experience, our team of passionate designers has transformed hundreds of spaces
                with creativity and precision. We believe great design balances beauty with purpose, and every detail
                matters.
              </p>
              <p className="text-sm text-left"
              style={{ fontFamily: "Montserrat" }}>
                With over 10 years of experience, our team of passionate designers has transformed hundreds of spaces
                with creativity and precision. We believe great design balances beauty with purpose, and every detail
                matters.
=======
          {/* Left column */}
          <div className="lg:col-span-3 flex flex-col text-center px-4 sm:px-6 md:px-0 md:-mx-10">
            <h2 className="text-4xl md:text-7xl font-medium mb-2 md:mb-4">Our</h2>
            <h2 className="text-4xl md:text-7xl font-medium mb-4">Story</h2>
            <div className="border-t-2 border-white w-full max-w-xs mx-auto md:max-w-none md:w-full my-8 md:my-12"></div>
            <div className="space-y-4 md:space-y-6 mt-2 px-4 sm:px-6 md:px-0">
              <p className="text-sm text-left leading-relaxed sm:text-base">
                With over 10 years of experience, our team of passionate designers has transformed hundreds of spaces with
                creativity and precision. We believe great design balances beauty with purpose, and every detail matters.
              </p>
              <p className="text-sm text-left leading-relaxed sm:text-base">
                With over 10 years of experience, our team of passionate designers has transformed hundreds of spaces with
                creativity and precision. We believe great design balances beauty with purpose, and every detail matters.
>>>>>>> 3a8c6152e332a8a08eaa1d8f51de12e57afcb52f
              </p>
            </div>

            {/* Desktop bottom left image */}
            <motion.div
              className="hidden md:block mt-16 relative rounded-lg overflow-hidden aspect-[3/3]"
              custom={delays[0]}
              initial="hidden"
              animate={controls}
              variants={imageVariants}
            >
              <Image src="/ourstory/s3.png" alt="Image" fill className="object-cover rounded-3xl" />
            </motion.div>
          </div>

          {/* Right column with images */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-10 py-0 md:pl-20">
            {/* Top image */}
            <motion.div
              className="relative rounded-lg overflow-hidden aspect-[3/3] w-[95%]"
              custom={delays[1]}
              initial="hidden"
              animate={controls}
              variants={imageVariants}
            >
              <Image src="/ourstory/s4.png" alt="Image" fill className="object-cover rounded-3xl" />
            </motion.div>

            <div className="space-y-10 p-0">
              {/* Right small card */}
              <motion.div
                className="bg-black border-2 border-[#E5C767] rounded-4xl p-4 relative w-[85%]"
                custom={delays[2]}
                initial="hidden"
                animate={controls}
                variants={imageVariants}
              >
                <div className="relative aspect-[5/3] overflow-hidden mb-3">
                  <Image src="/ourstory/s1.png" alt="Image" fill className="object-cover rounded-3xl" />
                </div>
<<<<<<< HEAD
                <h3 className="font-medium text-lg"
                style={{ fontFamily: "Montserrat" }}>Serene Living</h3>
                <p className="text-xs text-gray-300"
                style={{ fontFamily: "Montserrat" }}>The beauty in living <br /> the finer life.</p>
              </div>

              {/* Learn More button */}
              <div className="flex justify-start items-center gap-4">
                <button className="flex items-center justify-between gap-4 pl-4 pr-1 py-2 border-3 border-[#E5C767] text-white rounded-full transition-colors w-[280px] h-[52px]"
                style={{ fontFamily: "Montserrat" }}>
=======
                <h3 className="font-medium text-lg">Serene Living</h3>
                <p className="text-xs text-gray-300">The beauty in living<br />the finer life.</p>
              </motion.div>

              <div className="flex justify-center md:justify-start items-center gap-4 w-full">
                <button className="flex items-center justify-between gap-4 pl-4 pr-1 py-2 border-3 border-[#E5C767] text-white rounded-full transition-colors w-[280px] h-[52px] max-w-full">
>>>>>>> 3a8c6152e332a8a08eaa1d8f51de12e57afcb52f
                  <span>Learn More</span>
                  <div className="rounded-full">
                    <Image src="/arrow.png" alt="Arrow" width={40} height={40} />
                  </div>
                </button>
              </div>
            </div>

            {/* Bottom large image */}
            <motion.div
              className="md:col-span-2 relative rounded-lg overflow-hidden aspect-[5/3] w-[95%]"
              custom={delays[3]}
              initial="hidden"
              animate={controls}
              variants={imageVariants}
            >
              <Image src="/ourstory/s2.png" alt="Image" fill className="object-cover rounded-3xl" />
            </motion.div>

            {/* Pagination dots */}
            <div className="md:col-span-2 flex justify-center gap-1 md:-mt-10">
              <span className="h-2 w-2 bg-white rounded-full"></span>
              <span className="h-2 w-2 bg-gray-500 rounded-full"></span>
              <span className="h-2 w-2 bg-gray-500 rounded-full"></span>
              <span className="h-2 w-2 bg-gray-500 rounded-full"></span>
            </div>
          </div>

          {/* Mobile only bottom image */}
          <motion.div
            className="md:hidden relative rounded-lg overflow-hidden aspect-[4/3]"
            custom={delays[4]}
            initial="hidden"
            animate={controls}
            variants={imageVariants}
          >
            <Image src="/ourstory/s1.png" alt="Image" fill className="object-cover rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

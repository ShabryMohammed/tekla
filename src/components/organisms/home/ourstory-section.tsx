import Image from "next/image"

export default function OurStorySection() {
  return (
    <section className="bg-black text-white py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto md:mt-36">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Left column with heading and text */}
          <div className="lg:col-span-3 flex flex-col text-center px-4 sm:px-6 md:px-0 md:-mx-10">
            <h2 className="text-4xl md:text-7xl font-medium mb-2 md:mb-4">Our </h2>
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
              </p>
            </div>

            {/* Bottom left image (only visible on larger screens) */}
            <div className="hidden md:block mt-16 relative rounded-lg overflow-hidden aspect-[3/3]">
              <Image src="/ourstory/s3.png" alt="Cozy living space with sofa" fill className="object-cover rounded-3xl" />
            </div>
          </div>

          {/* Right column with images */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-10 py-0 md:pl-20">
            {/* Top row */}
            <div className="relative rounded-lg overflow-hidden aspect-[3/3] w-[95%]">
              <Image
                src="/ourstory/s4.png"
                alt="Wooden shelf with decorative items"
                fill
                className="object-cover rounded-3xl"
              />
            </div>

            <div className="space-y-10 p-0">
              {/* Top right card */}
              <div className="bg-black border-2 border-[#E5C767] rounded-4xl p-4 relative w-[85%]">
                <div className="relative aspect-[5/3] overflow-hidden mb-3">
                  <Image
                    src="/ourstory/s1.png"
                    alt="Coral chair with plant"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
                <h3 className="font-medium text-lg">Serene Living</h3>
                <p className="text-xs text-gray-300">The beauty in living <br /> the finer life.</p>
              </div>

              <div className="flex justify-center md:justify-start items-center gap-4 w-full">
                <button className="flex items-center justify-between gap-4 pl-4 pr-1 py-2 border-3 border-[#E5C767] text-white rounded-full transition-colors w-[280px] h-[52px] max-w-full">
                  <span>Learn More</span>
                  <div className="rounded-full">
                    <Image src="/arrow.png" alt="Arrow icon" width={40} height={40} />
                  </div>
                </button>
              </div>
            </div>

            {/* Bottom image (spans full width on larger screens) */}
            <div className="md:col-span-2 relative rounded-lg overflow-hidden aspect-[5/3] w-[95%]">
              <Image
                src="/ourstory/s2.png"
                alt="Modern living room with gray sofa"
                fill
                className="object-cover rounded-3xl"
              />
            </div>

            {/* Pagination dots */}
            <div className="md:col-span-2 flex justify-center gap-1 mt-2">
              <span className="h-2 w-2 bg-white rounded-full"></span>
              <span className="h-2 w-2 bg-gray-500 rounded-full"></span>
              <span className="h-2 w-2 bg-gray-500 rounded-full"></span>
              <span className="h-2 w-2 bg-gray-500 rounded-full"></span>
            </div>
          </div>

          {/* Bottom left image (only visible on mobile) */}
          <div className="md:hidden relative rounded-lg overflow-hidden aspect-[4/3]">
            <Image
              src="/ourstory/s1.png"
              alt="Cozy living space with sofa"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

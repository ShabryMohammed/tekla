import Image from "next/image"
import Link from "next/link"

export default function costomize_Section() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start p-4 mt-20 mx-10">
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-5xl md:text-3xl font-light"
        style={{ fontFamily: "Ysabeau" }}>Customize your furniture</h1>
        <p className="text-sm md:text-xs text-gray-400 max-w-xl mx-auto mt-15 mb-20"
        style={{ fontFamily: "Montserrat" }}>
          Browse our collection of customizable furniture across styles and categories. Choose your size,
          materials, finish, and design details—or start from scratch with your own idea. From cozy sofas to
          elegant dining tables.
        </p>
      </div>
      <div className="max-w-6xl w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Navigation */}
          <div className="flex flex-col space-y-12">
            <nav className="md:space-y-9 lg:space-y-15" style={{ fontFamily: "Montserrat" }}>
              <Link href="#" className="block hover:text-gray-300 transition-colors lg:text-[20px] md:text-sm">
                Living Room
              </Link>
              <Link href="#" className="block hover:text-gray-300 transition-colors lg:text-[20px] md:text-sm">
                Bedroom
              </Link>
              <Link href="#" className="block hover:text-gray-300 transition-colors lg:text-[20px] md:text-sm">
                Dining & Kitchen
              </Link>
              <Link href="#" className="block hover:text-gray-300 transition-colors lg:text-[20px] md:text-sm">
                Office
              </Link>
              <Link href="#" className="block hover:text-gray-300 transition-colors lg:text-[20px] md:text-sm">
                Outdoor Furniture
              </Link>
            </nav>
          </div>

 <div className="relative w-fit bg-black ">
  {/* Overlapping layout */}
  <div className="relative z-10 flex md:space-x-3 lg:space-x-6">
    {/* 3 vertical images */}
    <Image
      src="/furnitureWebsite/costomizesSection/image1.png"
      alt="Pink chair"
      width={170}
      height={509}
      className="object-cover lg:h-[509px] lg:w-[170px] md:h-[300px] md:w-[100px]"
    />
    <Image
      src="/furnitureWebsite/costomizesSection/image2.png"
      alt="Shelving unit"
      width={170}
      height={509}
      className="object-cover lg:h-[509px] lg:w-[170px] md:h-[300px] md:w-[100px]"
    />
    <Image
      src="/furnitureWebsite/costomizesSection/image3.png"
      alt="Bedroom"
      width={170}
      height={509}
      className="object-cover lg:h-[509px] lg:w-[170px] md:h-[300px] md:w-[100px]"
    />
  </div>

  {/* Sofa and table overlapping bottom */}
  <div className="absolute md:top-40 md:right-[120px] lg:top-80 lg:right-[200px] z-20 flex items-end justify-between w-full px-4">
    <Image
      src="/furnitureWebsite/costomizesSection/image4.png"
      alt="Gray sofa"
      width={612}
      height={408}
      className="object-contain lg:h-[408px] lg:w-[612px] md:h-[250px] md:w-[400px]"
    />
    <Image
      src="/furnitureWebsite/costomizesSection/image5.png"
      alt="Nesting tables"
      width={158}
      height={126}
      className="object-contain lg:h-[126px] lg:w-[158px] md:h-[80px] md:w-[100px] right-10" 
    />
  </div>
</div>


        </div>
      </div>
    </div>
  )
}

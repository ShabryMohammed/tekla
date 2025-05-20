import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MoveRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 flex items-center gap-4">
              Customize Your Furniture
              <span className="hidden md:inline-block w-32 h-0.5 bg-gray-300"></span>
            </h1>
            <p className="text-gray-600 max-w-3xl">
              Where your space becomes a masterpiece. We specialize in custom design solutions that are stylish,
              functional, and uniquely yours. Whether it&apos;s a home, office, or commercial space - we turn your
              vision into reality. From cozy apartments to expansive commercial spaces, we offer end-to-end design
              services tailored to your needs and style. Our approach combines trend-forward thinking with timeless
              elegance, ensuring every project is functional and fabulous.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 mb-12">
            <div className="relative group overflow-hidden rounded-md">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Bathroom design"
                width={300}
                height={400}
                className="w-full h-56 md:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                <h3 className="text-white text-xl font-medium">Bathroom</h3>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-md">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Chair design"
                width={300}
                height={400}
                className="w-full h-56 md:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                <h3 className="text-white text-xl font-medium">Chair</h3>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-md">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Decor design"
                width={300}
                height={400}
                className="w-full h-56 md:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                <h3 className="text-white text-xl font-medium">Decor</h3>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-md">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Lamp design"
                width={300}
                height={400}
                className="w-full h-56 md:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                <h3 className="text-white text-xl font-medium">Lamp</h3>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-full text-gray-800 hover:bg-gray-50 transition-colors"
            >
              Explore More
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-400 rounded-full text-gray-800 hover:bg-amber-500 transition-colors uppercase font-medium"
            >
              Customize Your Furniture
              <MoveRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

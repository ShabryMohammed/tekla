import Image from "next/image"

export default function ContactForm() {
  return (
    <main className="min-h-screen">
      <section className="relative w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#0a2920]">
          {/* Left side - Form */}
          <div className="p-8 md:p-12 lg:p-16 mt-12 mb-20">
            <form className="space-y-8 max-w-md">
              <div className="space-y-2">
                <label htmlFor="name" className="text-white text-sm"
                style={{ fontFamily: "Montserrat" }}>
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border-b border-white pb-2 text-white focus:outline-none focus:border-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-white text-sm"
                style={{ fontFamily: "Montserrat" }}>
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b border-white pb-2 text-white focus:outline-none focus:border-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-white text-sm"
                style={{ fontFamily: "Montserrat" }}>
                  Mobile Phone:
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-transparent border-b border-white pb-2 text-white focus:outline-none focus:border-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-white text-sm"
                style={{ fontFamily: "Montserrat" }}>
                  Message:
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full bg-transparent border-b border-white pb-2 text-white focus:outline-none focus:border-white resize-none"
                />
              </div>
            </form>

            <div className="ml-26 mt-18">
            <button
                type="submit"
                className="flex items-center justify-between gap-4 pl-4 pr-1 -py-1 bg-[#e9c85d] text-black font-medium py-1 px-8 rounded-full hover:bg-[#d4b64a] transition-colors"
              style={{ fontFamily: "Montserrat" }}>
                SEND REQUEST
                <Image src="/arrow.png" alt="Arrow Right" width={40} height={40} />
              </button>
              </div>
          </div>

          {/* Right side - Text and Image */}
          <div className="relative">
            <div className="absolute inset-0 z-10 p-8 md:p-12 lg:p-16 flex flex-col justify-start">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 md:mb-8"
              style={{ fontFamily: "MontseYsabeaurrat" }}>
                Let&apos;s Discuss
                <br />
                your project
              </h2>
              <p className="text-white/80 text-sm md:text-base max-w-lg"
              style={{ fontFamily: "Montserrat" }}>
                where your space becomes a masterpiece. We specialize in custom interior design solutions that are
                stylish, functional, and uniquely yours. Whether it&apos;s a home, office, or commercial space - we turn
                your vision into reality.
              </p>
            </div>

            <Image
              src="/sofa.png"
              alt="Interior design showcase with a leather sofa and side table"
              width={1000}
              height={900}
              className="absolute top-[50%] h-[400] w-[700] z-20"
              priority
            />
            <Image
              src="/stool.png"
              alt="Interior design showcase with a leather sofa and side table"
              width={400}
              height={400}
              className="absolute top-[30%] md:top-[33%] lg:top-[33%] right-[80%] h-[100] w-[200] z-20"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  )
}

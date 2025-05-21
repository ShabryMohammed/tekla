import Image from "next/image"

export default function landingPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* Logo */}
      <header className="relative z-10 pt-6 px-4 flex justify-center mb-5">
        <div className="text-center">
          <h1 className="text-xl font-light tracking-widest"
          style={{ fontFamily: "Ysabeau" }}>TEKLA</h1>
          <p className="text-xs tracking-wider mt-1"
          style={{ fontFamily: "Montserrat" }}>SINCE 2008</p>
        </div>
      </header>

      <div className="relative" style={{ padding: "0 25px" }}>
        {/* Hero Image */}
        <div className="relative h-[619px] z-0">
          <Image
            src="/furnitureWebsite/landingpagebg.png"
            alt="Elegant living room with custom furniture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Main Tagline */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h2
            className="text-4xl md:text-5xl lg:text-7xl font-light text-center leading-relaxed"
            style={{ fontFamily: "Ysabeau" }}
          >
            Custom. Handmade.
            <br />
            Timeless.
          </h2>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="relative z-10 flex justify-center gap-2 mt-12">
        {[0, 1, 2, 3].map((dot) => (
          <span key={dot} className={`h-2 w-2 rounded-full ${dot === 0 ? "bg-white" : "bg-white/50"}`}></span>
        ))}
      </div>

      {/* Welcome Text */}
      <div className="relative z-10 p-8 text-center md:mt-9 lg:mt-15 mb-15">
        <p
          className="max-w-2xl mx-auto text-sm leading-relaxed"
          style={{ fontFamily: "Montserrat" }}
        >
          Welcome to Tekla, where your dream furniture comes to life. We specialize in <br /> handcrafted, custom-designed
          furniture tailored to your taste, space, and lifestyle.<br /> Whether it's a statement piece or a full room
          makeover — we build it exactly how you<br /> want it.
        </p>
      </div>
    </main>
  )
}

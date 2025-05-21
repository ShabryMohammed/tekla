import Image from "next/image";

export default function CustomDesignProcess() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 mt-[250px]">
      <h1
        className="text-white text-2xl md:text-3xl lg:text-4xl font-light mb-10 text-center"
        style={{ fontFamily: "Ysabeau" }}
      >
        Custom Design Process
      </h1>

      {/* Fixed grid: Always 10 columns */}
      <div className="w-full max-w-6xl grid grid-cols-10 border border-amber-600">
        {/* Main section - Step 01 */}
        <div className="col-span-7 relative p-4 md:p-6 lg:p-8 border-r border-amber-600 flex flex-col">
          <span
            className="text-white text-xl md:text-2xl mb-3"
            style={{ fontFamily: "Ysabeau" }}
          >
            01
          </span>

          <div className="mx-4 md:mx-10 lg:mx-20 text-start">
            <h2
              className="text-white text-xl md:text-2xl font-light mb-4"
              style={{ fontFamily: "Ysabeau" }}
            >
              Share Your Idea
            </h2>
            <p
              className="text-gray-400 text-[11px] md:text-[12px] mb-6 max-w-sm"
              style={{ fontFamily: "Montserrat" }}
            >
              Browse our collection of customizable furniture across styles and
              categories. Choose your size, materials, finish, and design details
              — or start from scratch with your own idea. From cozy sofas to
              elegant dining tables, we bring your furniture dreams to life.
            </p>
            <div className="w-[250px] md:w-[300px] lg:w-[350px]">
              <Image
                src="/furnitureWebsite/customDesignProcess.png"
                alt="Minimalist bedroom with neutral tones"
                width={350}
                height={200}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Vertical label (Step One) */}
          <div className="absolute left-35 bottom-8 transform -translate-y-4 -translate-x-full rotate-270 origin-bottom-left">
            <span
              className="text-white text-sm md:text-md tracking-widest"
              style={{ fontFamily: "Ysabeau" }}
            >
              Step One
            </span>
          </div>
        </div>

        {/* Steps 02-04 */}
        {[{ num: "02", label: "Step Two" }, { num: "03", label: "Step Three" }, { num: "04", label: "Step Four" }].map(
          (step, index) => (
            <div
              key={step.num}
              className={`col-span-1 flex flex-col items-center justify-between py-4 border-r border-amber-600 ${
                index === 2 ? "border-r-0" : ""
              }`}
            >
              <span
                className="text-white text-xl md:text-2xl"
                style={{ fontFamily: "Ysabeau" }}
              >
                {step.num}
              </span>
              <span
                className="rotate-270 text-white text-sm md:text-md xl:pb-15 lg:pb-10"
                style={{ fontFamily: "Ysabeau" }}
              >
                {step.label}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

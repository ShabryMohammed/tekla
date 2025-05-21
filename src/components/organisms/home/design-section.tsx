import Image from "next/image"
import { ChevronsDown } from "lucide-react"

export default function DesignProcess() {
  const steps = [
    {
      number: 1,
      title: "Consultation",
      description:
        "where your space becomes a masterpiece. We specialize in custom interior design solutions that are stylish, functional, and uniquely yours. Whether it’s a home, office, or commercial space – we turn your vision into reality.",
      image: "/design/d1.png",
      position: "right",
    },
    {
      number: 2,
      title: "Concept Development",
      description:
        "where your space becomes a masterpiece. We specialize in custom interior design solutions that are stylish, functional, and uniquely yours. Whether it’s a home, office, or commercial space – we turn your vision into reality.",
      image: "/design/d2.png",
      position: "left",
    },
    {
      number: 3,
      title: "Design & Planning",
      description:
        "where your space becomes a masterpiece. We specialize in custom interior design solutions that are stylish, functional, and uniquely yours. Whether it’s a home, office, or commercial space – we turn your vision into reality.",
      image: "/design/d3.png",
      position: "right",
    },
    {
      number: 4,
      title: "Execution & Styling",
      description:
        "where your space becomes a masterpiece. We specialize in custom interior design solutions that are stylish, functional, and uniquely yours. Whether it’s a home, office, or commercial space – we turn your vision into reality.",
      image: "/design/d4.png",
      position: "left",
    },
    {
      number: 5,
      title: "Final Reveal",
      description:
        "where your space becomes a masterpiece. We specialize in custom interior design solutions that are stylish, functional, and uniquely yours. Whether it’s a home, office, or commercial space – we turn your vision into reality.",
      image: "/design/d5.png",
      position: "right",
    },
  ]

  return (
    <div className="bg-black text-white min-h-screen w-full py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-20">Design Process</h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-400 mb-12">
            Our streamlined design process ensures your experience is smooth and stress-free. From initial consultation
            to the final touches, we collaborate closely with you to bring your vision to life — on time and within
            budget.
          </p>
          <div className="flex justify-center">
            <ChevronsDown className="w-12 h-12 text-amber-400 animate-bounce" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-white"></div>

          {/* Steps */}
          <div className="relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col ${index !== steps.length - 1 ? "mb-24 md:mb-32" : ""} ${
                  step.position === "right" ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
                  <div
                    className={`relative w-full max-w-sm h-64 md:h-80 ${
                      step.position === "right" ? "md:mr-8 lg:mr-16" : "md:ml-8 lg:ml-16"
                    }`}
                  >
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={`Step ${step.number}: ${step.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-black"></div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 flex flex-col justify-center ${
                    step.position === "right" ? "md:pl-8 lg:pl-16 md:text-left" : "md:pr-8 lg:pr-16 md:text-right"
                  }`}
                >
                  <h3 className="text-xl md:text-2xl font-light mb-4">
                    Step {step.number}: {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

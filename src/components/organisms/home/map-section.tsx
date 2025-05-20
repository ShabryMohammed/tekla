export default function LocationSection() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative w-full h-screen max-h-[600px] md:max-h-[800px] px-10 mx-auto my-10 mt-56 mb-16">
        {/* Business info overlay */}
        <div className="absolute top-4 left-10 z-10 bg-white p-4 rounded-sm shadow-md max-w-[300px]">
          <h1 className="text-lg font-medium text-gray-900">Tekla Interior & Woodworks</h1>
          <p className="text-sm text-gray-600 mt-1">104/1/1 High Level Rd, Colombo 00600</p>
        </div>

        {/* Map container */}
        <div className="w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.075!2d79.8755!3d6.8861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVlZIRys2RiBDb2xvbWJv!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
            className="w-full h-full border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Tekla Interior & Woodworks Location"
            aria-label="Map showing location of Tekla Interior & Woodworks"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

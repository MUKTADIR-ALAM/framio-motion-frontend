

import { useState } from "react"

const WhatWeDoSection = () => {
  const [activeService, setActiveService] = useState(null)

  const services = [
    {
      id: "video-editing",
      title: "Video Editing",
      color: "bg-green-500",
      items: [
        "Video Post-Production",
        "Motion Graphics",
        "Color Grading",
        "Visual Effects",
        "Animation",
        "Video Optimization",
      ],
    },
    {
      id: "web-dev",
      title: "Web Development",
      color: "bg-yellow-400",
      items: [
        "Responsive Web Design",
        "Frontend Development",
        "Backend Integration",
        "E-commerce Solutions",
        "Website Maintenance",
        "Custom Web Applications",
      ],
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      color: "bg-blue-500",
      items: [
        "Brand Identity Design",
        "Logo Design",
        "UI/UX Design",
        "Print Design",
        "Illustration",
        "Packaging Design",
      ],
    },
    
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      color: "bg-purple-500",
      items: [
        "SEO Optimization",
        "Social Media Marketing",
        "Email Campaigns",
        "PPC Advertising",
        "Content Strategy",
        "Analytics & Reporting",
      ],
    },
    
  ]

  const handleMouseEnter = (id) => {
    setActiveService(id)
  }

  const handleMouseLeave = () => {
    setActiveService(null)
  }

  return (
    <div className="bg-black text-white py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-bold">What We Do</h2>
          <a href="#" className="text-yellow-400 hover:underline flex items-center">
            view all
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0 border-0 md:border md:border-gray-800">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative transition-all duration-300 ease-in-out min-h-[450px] flex flex-col justify-between p-6 border border-gray-800 ${
                activeService === service.id ? service.color : ""
              } ${!activeService && "md:hover:bg-opacity-10 md:hover:bg-gray-500"} ${
                !activeService ? "bg-gray-900 md:bg-transparent" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(service.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">{service.title}</h3>

                <ul
                  className={`list-disc pl-5 space-y-2 ${activeService === service.id ? "text-black" : "md:hidden text-white"}`}
                >
                  {service.items.map((item, index) => (
                    <li key={index} className="text-sm font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhatWeDoSection

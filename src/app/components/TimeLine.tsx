
import Image from "next/image";
import React from "react";
import umbrella from "../images/freelancer.png";
import plane from "../images/doctor.png";
import ship from "../images/laptop.png";
import slope from "../images/medical-team.png";
import fire from "../images/syringe.png";
import ball from "../images/diagnosis.png";

export default function Timeline() {
  const timelineData = [
    {
      title: "Imagna sodales fringilla.",
      description:
        "inHealth founders Aubrey Sawyer, Michelle Alencar, and Johnnie Jenkins opened a brick-and-mortar clinic to provide health coach solutions to high-risk, hard-to-treat patients. It was one of the first to be reimbursed by insurance.",
      image: umbrella,
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "inHealth founders Aubrey Sawyer, Michelle Alencar, and Johnnie Jenkins opened a brick-and-mortar clinic to provide health coach solutions to high-risk, hard-to-treat patients. It was one of the first to be reimbursed by insurance.",
      image: ship,
    },
    {
      title: "Imagna sodales fringilla.",
      description:
        "inHealth founders Aubrey Sawyer, Michelle Alencar, and Johnnie Jenkins opened a brick-and-mortar clinic to provide health coach solutions to high-risk, hard-to-treat patients. It was one of the first to be reimbursed by insurance.",
      image: ball,
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "inHealth founders Aubrey Sawyer, Michelle Alencar, and Johnnie Jenkins opened a brick-and-mortar clinic to provide health coach solutions to high-risk, hard-to-treat patients. It was one of the first to be reimbursed by insurance.",
      image: fire,
    },
    {
      title: "Imagna sodales fringilla.",
      description:
        "inHealth founders Aubrey Sawyer, Michelle Alencar, and Johnnie Jenkins opened a brick-and-mortar clinic to provide health coach solutions to high-risk, hard-to-treat patients. It was one of the first to be reimbursed by insurance.",
      image: slope,
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "inHealth founders Aubrey Sawyer, Michelle Alencar, and Johnnie Jenkins opened a brick-and-mortar clinic to provide health coach solutions to high-risk, hard-to-treat patients. It was one of the first to be reimbursed by insurance.",
      image: plane,
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          Lorem ipsum dolor sit amet conse
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-500 transform -translate-x-1/2 hidden md:block"></div>

          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Connector Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full"></div>

              {/* Content */}
              <div className="w-1/2 p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
              </div>

              {/* Image */}
              <div className="w-1/2 flex justify-center p-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

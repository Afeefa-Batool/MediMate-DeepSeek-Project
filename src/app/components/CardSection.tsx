import Image from 'next/image';
import React from 'react';
import icon from '../images/icon.png';
export default function CardSection() {
  return (
    <div className="bg-gray-50 py-16">
    <div className="max-w-6xl mx-auto text-center">
      {/* Title */}
      <h2 className="text-4xl font-bold text-gray-900">
        Lorem ipsum dolor sit amet, consectetur ad
      </h2>

      {/* Cards Container */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Card Component */}
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg text-center"
          >
            {/* Icon/Image */}
            <div className="flex justify-center mb-4">
              <Image src={icon} alt="Icon" className="w-16 h-16" />
            </div>

            {/* Card Title */}
            <h3 className="text-lg font-semibold text-gray-900">
              Lorem ipsumrna
            </h3>

            {/* Card Description */}
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              eget sapien in metus interdum dignissim. Sed non turpis nec justo
              bibendum fermentum. Etiam vel urna in magna sodales fringilla.
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

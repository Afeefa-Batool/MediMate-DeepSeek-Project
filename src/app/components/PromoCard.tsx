import Image from 'next/image';
import React from 'react';
import banner from '../images/banner.png';

export default function PromoCard() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center w-[92%] mx-auto p-8">
      {/* Text Section */}
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <span className="text-black">Fusce eget sa</span>
        </h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget sapien
          in metus interdum dignissim. Sed non turpis nec justo bibendum fermentum.
          Etiam vel urna in magna sodales fringilla.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative">
        {/* Shadow Square */}
        <div className="absolute inset-0 w-full h-full bg-blue-100 rounded-lg translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4"></div>

        {/* Main Image */}
        <Image
          src={banner}
          alt="Traveler"
          className="relative z-10 w-full h-auto rounded-tl-2xl rounded-br-2xl object-cover shadow-lg"
        />
      </div>
    </div>
  );
}

import Image from 'next/image';
import React from 'react';
import icon1 from '../images/emergency-call.png';
import icon2 from '../images/care.png';
import icon3 from '../images/time-tracking.png';
export default function CardSection() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>

        {/* Cards Container */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <Image src={icon1} alt="Icon" className="w-16 h-16" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900"> Emergency First Aid Support</h3>
            <p className="text-gray-600 mt-2 text-sm">
            Get immediate first aid instructions for urgent situations.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <Image src={icon2} alt="Icon" className="w-16 h-16" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">24/7 AI Health Assistance </h3>
            <p className="text-gray-600 mt-2 text-sm">
            Get instant medical guidance anytime, anywhere.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <Image src={icon3} alt="Icon" className="w-16 h-16" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Health Record Tracking</h3>
            <p className="text-gray-600 mt-2 text-sm">
            Log and manage your medical history securely within the app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
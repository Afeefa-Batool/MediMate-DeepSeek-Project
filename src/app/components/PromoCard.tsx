import Image from 'next/image';
import React from 'react';
import banner from '../images/7.webp';

export default function PromoCard() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center w-[92%] mx-auto p-8">
      {/* Text Section */}
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
        Features of the AI Health Assistant App

        </h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
        💠 AI-Powered Medical Guidance – Get instant answers to health-related questions with an intelligent AI assistant.<br/>

        💠 Symptom Checker – Describe your symptoms, and the AI will provide possible causes and recommended next steps.<br/>

💠 Virtual Health Assistant – Get personalized health advice based on your medical history and preferences.<br/>

💠 Medication Reminders – Set reminders for your medicines and never miss a dose again.<br/>

💠 Doctor Consultation Booking – Easily schedule appointments with doctors and healthcare professionals.<br/>

💠 Emergency Assistance – Get quick guidance on first aid and emergency response steps.<br/>

💠 Health Tips & Insights – Receive daily health tips, nutrition advice, and wellness recommendations.<br/>

💠 Multi-Language Support – Communicate with the AI in different languages for better accessibility.<br/>


        </p>
      </div>

      {/* Image Section */}
      <div className="relative">
        {/* Shadow Square */}
        <div className="absolute inset-0 w-full h-[430px] bg-blue-100 rounded-lg translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4"></div>

        {/* Main Image */}
        <Image
          src={banner}
          alt="Traveler"
          className="relative z-10 w-full h-[480px] rounded-tl-2xl rounded-br-2xl object-cover shadow-lg"
        />
      </div>
    </div>
  );
}

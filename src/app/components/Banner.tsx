// import Link from "next/link";
// import logo from '../images/logo.png';
// import Image from 'next/image';

// export default function Banner() {
//   return (
//     <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/banner.png')" }}>

//       <div className="absolute inset-0 bg-black bg-opacity-80"></div>


//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">

//         <div className="absolute top-6 left-8 flex items-center space-x-8">

//           <div className="text-xl font-bold flex items-center space-x-2">
//             <Image src={logo} className="h-8" alt="Hero" width={150} height={100} />

//           </div>


//           <nav className="flex items-center space-x-6">
//             <Link href="/" className="hover:underline">
//               Home
//             </Link>
//             <Link href="/about" className="hover:underline">
//               About Us
//             </Link>
//             <Link href="/services" className="hover:underline">
//               Services
//             </Link>
//             <Link href="/contact" className="hover:underline">
//               Contact
//             </Link>
//             <div className="relative group">
//               <button className="flex items-center space-x-1">
//                 <span>More</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-4 w-4"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//               <div className="absolute hidden w-[200px] group-hover:block bg-white text-black mt-2 py-2 rounded shadow-lg">
//                 <Link href="/car-rentals" className="block px-4 py-2 hover:bg-gray-200">
//                   Car Rentals
//                 </Link>
//                 <hr />
//                 <Link href="/hotel-booking" className="block px-4 py-2 hover:bg-gray-200">
//                   Hotel Booking
//                 </Link>
//                 <hr />
//                 <Link href="/flight-booking" className="block px-4 py-2 hover:bg-gray-200">
//                   Flight Booking
//                 </Link>
//                 <hr />
//                 <Link href="/tours-offers" className="block px-4 py-2 hover:bg-gray-200">
//                   Tours & Offers
//                 </Link>
//                 <hr />
//                 <Link href="/visa-consultations" className="block px-4 py-2 hover:bg-gray-200">
//                   Visa Consultations
//                 </Link>
//               </div>
//             </div>
//           </nav>
//         </div>

//         {/* Login and Signup Buttons */}
//         <div className="absolute top-6 right-8 flex items-center space-x-4">
//           <Link href="/login" className="hover:underline">
//             Login
//           </Link>
//           <Link href="/signup" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg">
//             Signup
//           </Link>
//         </div>


//         <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//           Lorem Ipsum Dolor Sit Amet
//         </h1>


//         <p className="mt-4 text-lg md:text-xl max-w-2xl">
//           Lorem ipsum dolor sit amet consectetur adipiscing elit. Fusce eget
//           sapien in metus interdum dignissim. Sed non turpis nec justo bibendum
//           fermentum.
//         </p>


//         <Link href="/signup" className="mt-6 w-[250px] h-[48px] px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg">
//           Sign up
//         </Link>
//       </div>
//     </div>
//   );
// }


'use client'; // Add this directive at the top of the file

import Link from "next/link";
import logo from '../images/medimate-logo.gif';
import Image from 'next/image';
import { useState } from 'react';

export default function Banner() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/3.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        {/* Navbar */}
        <div className="absolute top-6 left-8 right-8 flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold flex items-center space-x-2">
            <Image src={logo}  alt="Hero" width={190} height={100} />
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <div className="relative group">
              <button className="flex items-center space-x-1">
                <span>More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute hidden w-[200px] group-hover:block bg-white text-black mt-2 py-2 rounded shadow-lg">
                <Link href="/car-rentals" className="block px-4 py-2 hover:bg-gray-200">
                  Car Rentals
                </Link>
                <hr />
                <Link href="/hotel-booking" className="block px-4 py-2 hover:bg-gray-200">
                  Hotel Booking
                </Link>
                <hr />
                <Link href="/flight-booking" className="block px-4 py-2 hover:bg-gray-200">
                  Flight Booking
                </Link>
                <hr />
                <Link href="/tours-offers" className="block px-4 py-2 hover:bg-gray-200">
                  Tours & Offers
                </Link>
                <hr />
                <Link href="/visa-consultations" className="block px-4 py-2 hover:bg-gray-200">
                  Visa Consultations
                </Link>
              </div>
            </div>
          </nav>

          {/* Login and Signup Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="hover:underline">
              Login
            </Link>
            <Link href="/signup" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg">
              Signup
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-[400px] h-full bg-black bg-opacity-90 z-20 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <Link href="/" className="text-2xl hover:underline" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className="text-2xl hover:underline" onClick={toggleMenu}>
              About Us
            </Link>
            <Link href="/services" className="text-2xl hover:underline" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="/contact" className="text-2xl hover:underline" onClick={toggleMenu}>
              Contact
            </Link>
            <div className="flex flex-col items-center space-y-4">
              <Link href="/login" className="text-2xl hover:underline" onClick={toggleMenu}>
                Login
              </Link>
              <Link
                href="/signup"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
                onClick={toggleMenu}
              >
                Signup
              </Link>
            </div>
          </div>
        </div>

        {/* Banner Content */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Your AI-Powered Health Companion
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
        Get instant medical guidance with our AI assistant. Whether you need quick answers, health advice, or support, our smart AI is here to assist you 24/7. Start your conversation now and take control of your well-being! 
        </p>
        <Link href="/assistant" className="mt-6 w-[250px] h-[48px] px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg">
        Ask AI Assistant
        </Link>
      </div>
    </div>
  );
}
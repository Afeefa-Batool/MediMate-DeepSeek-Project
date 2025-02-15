import Image from 'next/image';
import footer from '../images/5.jpg'
const Footer = () => {
  return (
    <footer className="relative text-black py-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={footer}
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Destinations Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Maldives</a></li>
              <li><a href="#" className="hover:underline">Los Angeles</a></li>
              <li><a href="#" className="hover:underline">Las Vegas</a></li>
              <li><a href="#" className="hover:underline">Toronto</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Join Our Newsletter</h3>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded text-black"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-black p-2 rounded"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-sm">Will send you weekly updates for your better tour packages.</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center">
          <p className="text-sm">Copyright@Vaccinia 2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
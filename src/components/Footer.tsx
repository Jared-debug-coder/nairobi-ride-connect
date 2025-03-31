
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Car } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Nairobi Ride Connect</span>
            </div>
            <p className="text-gray-300 mb-4">
              Premium car hire services in Nairobi with affordable rates and exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition">Home</Link>
              </li>
              <li>
                <Link to="/vehicles" className="text-gray-300 hover:text-primary transition">Our Vehicles</Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-primary transition">Book Now</Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-300 hover:text-primary transition">Locations</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Vehicle Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Vehicle Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/vehicles?category=economy" className="text-gray-300 hover:text-primary transition">Economy Cars</Link>
              </li>
              <li>
                <Link to="/vehicles?category=suv" className="text-gray-300 hover:text-primary transition">SUVs</Link>
              </li>
              <li>
                <Link to="/vehicles?category=luxury" className="text-gray-300 hover:text-primary transition">Luxury Cars</Link>
              </li>
              <li>
                <Link to="/vehicles?category=vans" className="text-gray-300 hover:text-primary transition">Vans & Minibuses</Link>
              </li>
              <li>
                <Link to="/vehicles?category=4x4" className="text-gray-300 hover:text-primary transition">4x4 & Safari Vehicles</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-300">Kimathi Street, Nairobi CBD, Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-300">+254 722 123 456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-300">info@nairobiride.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Nairobi Ride Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

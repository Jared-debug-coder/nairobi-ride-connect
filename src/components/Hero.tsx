
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LinkButton } from '@/components/ui/link-button';
import { Calendar, MapPin, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  
  return (
    <div className="relative bg-gradient-to-r from-neutral to-neutral-light text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      {/* Background Image - Would replace this with an actual image in production */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1560253414-f65d1f5a1929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Explore Nairobi With Our Premium Car Hire Services
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Experience the best car rental service in Nairobi with affordable rates, 
            wide selection of vehicles, and exceptional customer service.
          </p>
          
          {/* Quick Booking Form */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-primary text-xl font-semibold mb-4">Quick Booking</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral/50" size={20} />
                <select 
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-neutral"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                >
                  <option value="">Select pickup location</option>
                  <option value="jkia">Jomo Kenyatta International Airport</option>
                  <option value="cbd">Nairobi CBD</option>
                  <option value="westlands">Westlands</option>
                  <option value="karen">Karen</option>
                </select>
              </div>
              
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral/50" size={20} />
                <input 
                  type="date" 
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-neutral"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              
              <LinkButton 
                to="/booking"
                className="bg-primary hover:bg-primary-dark text-white py-3"
              >
                <Car className="mr-2" size={20} />
                <span>Find Cars</span>
              </LinkButton>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <LinkButton
              to="/booking"
              className="bg-primary hover:bg-primary-dark text-white"
              size="lg"
            >
              Book Now
            </LinkButton>
            <LinkButton
              to="/vehicles"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              size="lg"
            >
              View Vehicles
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

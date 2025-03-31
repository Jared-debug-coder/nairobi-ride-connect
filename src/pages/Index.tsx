
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VehicleCard, { VehicleProps } from '@/components/VehicleCard';
import LocationCard from '@/components/LocationCard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Car, MapPin, Phone, ThumbsUp, Award, Shield } from 'lucide-react';

const Index = () => {
  // Sample data for vehicles
  const popularVehicles: VehicleProps[] = [
    {
      id: '1',
      name: 'Toyota RAV4',
      image: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'SUV',
      pricePerDay: 6500,
      rating: 4.8,
      seats: 5,
      luggage: 3,
      transmission: 'Automatic',
      fuel: 'Petrol',
      isPopular: true
    },
    {
      id: '2',
      name: 'Toyota Prado',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: '4x4',
      pricePerDay: 12000,
      rating: 4.9,
      seats: 7,
      luggage: 4,
      transmission: 'Automatic',
      fuel: 'Diesel',
      isPopular: true
    },
    {
      id: '3',
      name: 'Toyota Corolla',
      image: 'https://images.unsplash.com/photo-1623869675781-80aa31012a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'Sedan',
      pricePerDay: 4500,
      rating: 4.7,
      seats: 5,
      luggage: 2,
      transmission: 'Automatic',
      fuel: 'Petrol',
      isPopular: true
    },
    {
      id: '4',
      name: 'Mercedes-Benz E-Class',
      image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'Luxury',
      pricePerDay: 15000,
      rating: 4.9,
      seats: 5,
      luggage: 2,
      transmission: 'Automatic',
      fuel: 'Petrol',
      isPopular: true
    },
  ];
  
  // Sample data for locations
  const popularLocations = [
    {
      name: 'Jomo Kenyatta International Airport',
      image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      address: 'JKIA, Embakasi, Nairobi',
      pickupPoints: 5
    },
    {
      name: 'Nairobi CBD',
      image: 'https://images.unsplash.com/photo-1611348524140-53c9a25ad10a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      address: 'Central Business District, Nairobi',
      pickupPoints: 8
    },
    {
      name: 'Westlands',
      image: 'https://images.unsplash.com/photo-1565109441140-eaad8998b91f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      address: 'Westlands, Nairobi',
      pickupPoints: 6
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Popular Vehicles Section */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral">Popular Vehicles</h2>
              <Button 
                as={Link} 
                to="/vehicles" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                View All
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularVehicles.map(vehicle => (
                <VehicleCard key={vehicle.id} {...vehicle} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Popular Locations Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral">Popular Pickup Locations</h2>
              <Button 
                as={Link} 
                to="/locations" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                View All
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularLocations.map((location, index) => (
                <LocationCard key={index} {...location} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-12 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why Choose Nairobi Ride Connect?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Wide Vehicle Selection</h3>
                <p className="text-white/80">Choose from our extensive fleet of vehicles ranging from economy to luxury.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Convenient Locations</h3>
                <p className="text-white/80">Multiple pickup and drop-off locations throughout Nairobi for your convenience.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ThumbsUp className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
                <p className="text-white/80">Our priority is your satisfaction, with 24/7 support and assistance.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral mb-4">Ready to Book Your Ride?</h2>
            <p className="text-neutral/70 max-w-2xl mx-auto mb-8">
              Experience the best car rental service in Nairobi with our premium vehicles and exceptional service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                as={Link}
                to="/booking"
                className="bg-primary hover:bg-primary-dark text-white px-8"
                size="lg"
              >
                Book Now
              </Button>
              <Button
                as={Link}
                to="/contact"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8"
                size="lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

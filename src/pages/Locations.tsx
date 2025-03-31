
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LocationCard from '@/components/LocationCard';
import { MapPin } from 'lucide-react';

const Locations = () => {
  // Sample data for locations
  const allLocations = [
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
    {
      name: 'Karen',
      image: 'https://images.unsplash.com/photo-1519834584171-e5846f371caa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      address: 'Karen, Nairobi',
      pickupPoints: 4
    },
    {
      name: 'Wilson Airport',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      address: 'Wilson Airport, Langata, Nairobi',
      pickupPoints: 3
    },
    {
      name: 'Gigiri',
      image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      address: 'Gigiri, Nairobi',
      pickupPoints: 2
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-neutral to-neutral-light text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Pickup Locations</h1>
            <p className="max-w-2xl mx-auto text-lg opacity-90">
              We offer convenient pickup points throughout Nairobi to make your car rental experience seamless.
            </p>
          </div>
        </section>
        
        {/* Locations Grid */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-neutral">All Pickup Locations</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allLocations.map((location, index) => (
                <LocationCard key={index} {...location} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Locations;

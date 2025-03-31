
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import VehicleCard, { VehicleProps } from '@/components/VehicleCard';

const Booking = () => {
  const { vehicleId } = useParams();
  
  // Sample data for vehicles - in a real app this would come from an API
  const allVehicles: VehicleProps[] = [
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
  
  // Find the selected vehicle if vehicleId is provided
  const selectedVehicle = vehicleId ? allVehicles.find(v => v.id === vehicleId) : null;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-neutral to-neutral-light py-12 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {selectedVehicle ? `Book ${selectedVehicle.name}` : 'Book a Vehicle'}
            </h1>
            <p className="text-lg opacity-90">
              {selectedVehicle 
                ? `Complete your booking for the ${selectedVehicle.category} vehicle`
                : 'Fill in your details to book your preferred vehicle'}
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Vehicle Details (if specific vehicle is selected) */}
            {selectedVehicle && (
              <div className="lg:col-span-1">
                <h2 className="text-xl font-semibold mb-4 text-neutral">Selected Vehicle</h2>
                <VehicleCard {...selectedVehicle} />
                
                <div className="mt-6 bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-neutral">Rental Includes:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 mr-2 text-primary mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="currentColor"/>
                      </svg>
                      <span className="text-neutral-dark">Comprehensive insurance</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 mr-2 text-primary mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="currentColor"/>
                      </svg>
                      <span className="text-neutral-dark">24/7 roadside assistance</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 mr-2 text-primary mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="currentColor"/>
                      </svg>
                      <span className="text-neutral-dark">Unlimited mileage</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 mr-2 text-primary mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="currentColor"/>
                      </svg>
                      <span className="text-neutral-dark">Vehicle delivery & collection</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            
            {/* Booking Form */}
            <div className={selectedVehicle ? "lg:col-span-2" : "lg:col-span-3"}>
              <BookingForm vehicleId={vehicleId} />
              
              {/* Recommended Vehicles (if no specific vehicle is selected) */}
              {!selectedVehicle && (
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-4 text-neutral">Recommended Vehicles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allVehicles.slice(0, 3).map(vehicle => (
                      <VehicleCard key={vehicle.id} {...vehicle} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;

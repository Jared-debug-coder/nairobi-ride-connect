
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LinkButton } from '@/components/ui/link-button';
import { Car, Award, Users, Clock, Shield, Phone } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-neutral to-neutral-light text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Nairobi Ride Connect</h1>
            <p className="max-w-2xl mx-auto text-lg opacity-90">
              The premier car rental service in Nairobi dedicated to providing exceptional service and quality vehicles.
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Car className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-neutral">Our Story</h2>
              </div>
              <p className="text-neutral/80 mb-4">
                Founded in 2015, Nairobi Ride Connect started with a small fleet of just 5 vehicles and a vision to transform the car rental experience in Kenya. Our founder, James Mwangi, noticed a gap in the market for reliable, transparent, and customer-focused car hire services in Nairobi.
              </p>
              <p className="text-neutral/80 mb-4">
                What began as a small operation has now grown into one of Nairobi's most trusted car rental services with a fleet of over 50 vehicles ranging from economy cars to luxury SUVs and specialized safari vehicles.
              </p>
              <p className="text-neutral/80">
                Throughout our growth, we've maintained our core values of exceptional customer service, transparency in pricing, and providing well-maintained, reliable vehicles for all our clients - whether they're tourists exploring Kenya's beauty or business professionals needing efficient transportation around Nairobi.
              </p>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral mb-4">Why Choose Us</h2>
              <p className="max-w-2xl mx-auto text-neutral/70">
                We're committed to providing the best car rental experience in Nairobi with our premium service and vehicles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-neutral">Quality Vehicles</h3>
                <p className="text-neutral/70">
                  Our fleet is regularly maintained and inspected to ensure safety, reliability, and comfort for all our customers.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-neutral">Experienced Team</h3>
                <p className="text-neutral/70">
                  Our staff has extensive knowledge of Nairobi and Kenya, providing valuable insights for your journey.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Clock className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-neutral">24/7 Support</h3>
                <p className="text-neutral/70">
                  We're available around the clock to assist with any queries or emergency situations during your rental period.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-neutral">Comprehensive Insurance</h3>
                <p className="text-neutral/70">
                  All our vehicles come with comprehensive insurance coverage for your peace of mind.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Car className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-neutral">Diverse Fleet</h3>
                <p className="text-neutral/70">
                  From compact cars to luxury SUVs and safari vehicles, we have the perfect vehicle for your needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Phone className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-neutral">Easy Booking</h3>
                <p className="text-neutral/70">
                  Our simple online booking system allows you to reserve your vehicle in minutes with instant confirmation.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience Our Service?</h2>
            <p className="max-w-2xl mx-auto mb-8 opacity-90">
              Book your vehicle today and discover why we're Nairobi's preferred car rental service.
            </p>
            <LinkButton
              to="/booking"
              className="bg-white text-primary hover:bg-white/90 px-8"
              size="lg"
            >
              Book Now
            </LinkButton>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

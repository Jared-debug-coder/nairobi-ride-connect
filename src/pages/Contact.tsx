
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-neutral to-neutral-light text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="max-w-2xl mx-auto text-lg opacity-90">
              We're here to help with any questions about our car rental services.
            </p>
          </div>
        </section>
        
        {/* Contact Information & Form */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-neutral mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-neutral">Our Location</h3>
                      <p className="text-neutral/70">Kimathi Street, Nairobi CBD, Kenya</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-neutral">Phone Number</h3>
                      <p className="text-neutral/70">+254 722 123 456</p>
                      <p className="text-neutral/70">+254 733 987 654</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-neutral">Email Address</h3>
                      <p className="text-neutral/70">info@nairobiride.com</p>
                      <p className="text-neutral/70">support@nairobiride.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-neutral">Office Hours</h3>
                      <p className="text-neutral/70">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-neutral/70">Saturday: 9:00 AM - 5:00 PM</p>
                      <p className="text-neutral/70">Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold text-neutral mb-2">24/7 Emergency Support</h3>
                  <p className="text-neutral/70 mb-2">
                    For roadside assistance and emergencies during your rental period:
                  </p>
                  <p className="text-primary font-bold">+254 700 555 999</p>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-neutral mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4 bg-muted p-6 rounded-lg">
                  <div>
                    <label htmlFor="name" className="block text-neutral font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-neutral font-medium mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-neutral font-medium mb-1">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="support">Customer Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Business Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-neutral font-medium mb-1">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-dark text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-neutral mb-6 text-center">Find Us on the Map</h2>
            <div className="h-96 w-full bg-gray-300 rounded-lg overflow-hidden">
              {/* Replace this with an actual map integration */}
              <div className="w-full h-full flex items-center justify-center bg-neutral/10">
                <p className="text-neutral font-medium">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

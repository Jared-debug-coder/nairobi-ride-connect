
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Car } from 'lucide-react';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-neutral">Nairobi Ride Connect</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-neutral-dark hover:text-primary transition">Home</Link>
            <Link to="/vehicles" className="text-neutral-dark hover:text-primary transition">Vehicles</Link>
            <Link to="/booking" className="text-neutral-dark hover:text-primary transition">Book Now</Link>
            <Link to="/locations" className="text-neutral-dark hover:text-primary transition">Locations</Link>
            <Link to="/about" className="text-neutral-dark hover:text-primary transition">About Us</Link>
          </div>

          {/* Sign In Button (Desktop) */}
          <div className="hidden md:block">
            <Button 
              onClick={() => setIsLoginModalOpen(true)} 
              variant="outline" 
              className="flex items-center space-x-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <User size={18} />
              <span>Sign In</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-neutral">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="px-4 py-2 text-neutral-dark hover:bg-muted rounded-md" onClick={closeMenu}>Home</Link>
              <Link to="/vehicles" className="px-4 py-2 text-neutral-dark hover:bg-muted rounded-md" onClick={closeMenu}>Vehicles</Link>
              <Link to="/booking" className="px-4 py-2 text-neutral-dark hover:bg-muted rounded-md" onClick={closeMenu}>Book Now</Link>
              <Link to="/locations" className="px-4 py-2 text-neutral-dark hover:bg-muted rounded-md" onClick={closeMenu}>Locations</Link>
              <Link to="/about" className="px-4 py-2 text-neutral-dark hover:bg-muted rounded-md" onClick={closeMenu}>About Us</Link>
              <Button 
                onClick={() => {
                  setIsLoginModalOpen(true);
                  closeMenu();
                }} 
                variant="outline" 
                className="flex items-center justify-center space-x-2 border-primary text-primary hover:bg-primary hover:text-white mx-4"
              >
                <User size={18} />
                <span>Sign In</span>
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </nav>
  );
};

export default Navbar;

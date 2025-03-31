
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Users, Briefcase, Fuel } from 'lucide-react';

export interface VehicleProps {
  id: string;
  name: string;
  image: string;
  category: string;
  pricePerDay: number;
  rating: number;
  seats: number;
  luggage: number;
  transmission: 'Automatic' | 'Manual';
  fuel: string;
  isPopular?: boolean;
}

const VehicleCard = ({ 
  id, 
  name, 
  image, 
  category, 
  pricePerDay, 
  rating, 
  seats, 
  luggage, 
  transmission, 
  fuel,
  isPopular 
}: VehicleProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
      {/* Image container */}
      <div className="relative">
        {isPopular && (
          <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
            Popular
          </div>
        )}
        <img 
          src={image} 
          alt={name} 
          className="h-48 w-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold text-neutral">{name}</h3>
            <p className="text-sm text-neutral/60">{category}</p>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-secondary fill-secondary" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-2 gap-y-2 mt-4 mb-4">
          <div className="flex items-center text-sm text-neutral/70">
            <Users className="h-4 w-4 mr-2 text-primary" />
            <span>{seats} Seats</span>
          </div>
          <div className="flex items-center text-sm text-neutral/70">
            <Briefcase className="h-4 w-4 mr-2 text-primary" />
            <span>{luggage} Luggage</span>
          </div>
          <div className="flex items-center text-sm text-neutral/70">
            <svg className="h-4 w-4 mr-2 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="currentColor"/>
            </svg>
            <span>{transmission}</span>
          </div>
          <div className="flex items-center text-sm text-neutral/70">
            <Fuel className="h-4 w-4 mr-2 text-primary" />
            <span>{fuel}</span>
          </div>
        </div>
        
        {/* Price and Book Button */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div>
            <p className="text-lg font-bold text-primary">KSh {pricePerDay.toLocaleString()}</p>
            <p className="text-xs text-neutral/60">per day</p>
          </div>
          <Button
            as={Link}
            to={`/booking/${id}`}
            className="bg-primary hover:bg-primary-dark text-white"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;

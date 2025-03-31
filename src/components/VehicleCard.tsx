
import React from 'react';
import { Star, Users, Briefcase, Fuel, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LinkButton } from '@/components/ui/link-button';

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
  fuel: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
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
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-3 right-3 z-10 bg-secondary text-white text-xs font-semibold px-2 py-1 rounded-full">
          Popular
        </div>
      )}
      
      {/* Vehicle Image */}
      <div className="h-40 overflow-hidden relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
          {category}
        </div>
      </div>
      
      {/* Vehicle Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-neutral">{name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-secondary fill-current" />
            <span className="text-sm font-medium ml-1">{rating}</span>
          </div>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-2 gap-y-2 mb-3">
          <div className="flex items-center space-x-1 text-xs text-neutral/70">
            <Users className="h-3.5 w-3.5" />
            <span>{seats} Seats</span>
          </div>
          <div className="flex items-center space-x-1 text-xs text-neutral/70">
            <Briefcase className="h-3.5 w-3.5" />
            <span>{luggage} Luggage</span>
          </div>
          <div className="flex items-center space-x-1 text-xs text-neutral/70">
            <Zap className="h-3.5 w-3.5" />
            <span>{transmission}</span>
          </div>
          <div className="flex items-center space-x-1 text-xs text-neutral/70">
            <Fuel className="h-3.5 w-3.5" />
            <span>{fuel}</span>
          </div>
        </div>
        
        {/* Price and Book Button */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <span className="text-primary font-bold">KSh {pricePerDay.toLocaleString()}</span>
            <span className="text-xs text-neutral/70"> / day</span>
          </div>
          <LinkButton 
            to={`/booking/${id}`}
            className="bg-primary text-white text-xs px-3 py-1.5 h-auto"
          >
            Book Now
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;

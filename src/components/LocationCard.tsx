
import { MapPin } from 'lucide-react';

interface LocationCardProps {
  name: string;
  image: string;
  address: string;
  pickupPoints: number;
}

const LocationCard = ({ name, image, address, pickupPoints }: LocationCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
      <div className="h-40 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-neutral mb-1">{name}</h3>
        <div className="flex items-start space-x-2 text-neutral/70">
          <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <p className="text-sm">{address}</p>
        </div>
        <div className="mt-3 text-sm text-neutral/70">
          <span className="text-primary font-medium">{pickupPoints}</span> pickup points available
        </div>
      </div>
    </div>
  );
};

export default LocationCard;

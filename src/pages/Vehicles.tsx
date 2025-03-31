
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VehicleCard, { VehicleProps } from '@/components/VehicleCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Filter, Car, Search } from 'lucide-react';

const Vehicles = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTransmissions, setSelectedTransmissions] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Sample data for vehicles
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
    {
      id: '5',
      name: 'Nissan X-Trail',
      image: 'https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'SUV',
      pricePerDay: 7000,
      rating: 4.6,
      seats: 5,
      luggage: 3,
      transmission: 'Automatic',
      fuel: 'Diesel',
      isPopular: false
    },
    {
      id: '6',
      name: 'Suzuki Swift',
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'Economy',
      pricePerDay: 3000,
      rating: 4.5,
      seats: 5,
      luggage: 1,
      transmission: 'Manual',
      fuel: 'Petrol',
      isPopular: false
    },
    {
      id: '7',
      name: 'Toyota Hiace',
      image: 'https://images.unsplash.com/photo-1633788467823-af9ec4ae9482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'Van',
      pricePerDay: 9000,
      rating: 4.6,
      seats: 14,
      luggage: 8,
      transmission: 'Manual',
      fuel: 'Diesel',
      isPopular: false
    },
    {
      id: '8',
      name: 'Land Rover Defender',
      image: 'https://images.unsplash.com/photo-1626863905121-3b0cee0aa29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: '4x4',
      pricePerDay: 18000,
      rating: 4.9,
      seats: 7,
      luggage: 4,
      transmission: 'Automatic',
      fuel: 'Diesel',
      isPopular: false
    },
  ];
  
  const categories = [...new Set(allVehicles.map(vehicle => vehicle.category))];
  const transmissions = [...new Set(allVehicles.map(vehicle => vehicle.transmission))];
  
  // Filter vehicles based on search and filters
  const filteredVehicles = allVehicles.filter(vehicle => {
    // Search query filter
    const matchesSearch = searchQuery === '' || 
      vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Price range filter
    const matchesPrice = vehicle.pricePerDay >= priceRange[0] && vehicle.pricePerDay <= priceRange[1];
    
    // Category filter
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(vehicle.category);
    
    // Transmission filter
    const matchesTransmission = selectedTransmissions.length === 0 || selectedTransmissions.includes(vehicle.transmission);
    
    return matchesSearch && matchesPrice && matchesCategory && matchesTransmission;
  });
  
  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };
  
  // Toggle transmission selection
  const toggleTransmission = (transmission: string) => {
    setSelectedTransmissions(prev => 
      prev.includes(transmission) 
        ? prev.filter(t => t !== transmission) 
        : [...prev, transmission]
    );
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-neutral to-neutral-light py-12 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Vehicle Fleet</h1>
            <p className="text-lg opacity-90">
              Browse our extensive collection of vehicles to find the perfect ride for your needs
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          {/* Search and Filter Controls */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral/50" size={20} />
                <Input
                  type="text"
                  placeholder="Search by name or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button 
                variant="outline" 
                className="md:w-auto flex items-center space-x-2 border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={18} />
                <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
              </Button>
            </div>
            
            {/* Filters Section */}
            {showFilters && (
              <div className="bg-muted p-4 rounded-lg animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Price Range Filter */}
                  <div>
                    <Label className="mb-2 block">Price Range (KSh per day)</Label>
                    <div className="px-2">
                      <Slider
                        defaultValue={[0, 20000]}
                        min={0}
                        max={20000}
                        step={500}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-sm text-neutral/70">
                        <span>KSh {priceRange[0].toLocaleString()}</span>
                        <span>KSh {priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Filter */}
                  <div>
                    <Label className="mb-2 block">Vehicle Category</Label>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`category-${category}`} 
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => toggleCategory(category)}
                          />
                          <label 
                            htmlFor={`category-${category}`}
                            className="text-sm text-neutral-dark cursor-pointer"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Transmission Filter */}
                  <div>
                    <Label className="mb-2 block">Transmission</Label>
                    <div className="space-y-2">
                      {transmissions.map(transmission => (
                        <div key={transmission} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`transmission-${transmission}`} 
                            checked={selectedTransmissions.includes(transmission)}
                            onCheckedChange={() => toggleTransmission(transmission)}
                          />
                          <label 
                            htmlFor={`transmission-${transmission}`}
                            className="text-sm text-neutral-dark cursor-pointer"
                          >
                            {transmission}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <Button 
                    variant="outline" 
                    className="text-sm mr-2"
                    onClick={() => {
                      setSelectedCategories([]);
                      setSelectedTransmissions([]);
                      setPriceRange([0, 20000]);
                      setSearchQuery('');
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          {/* Vehicles Grid */}
          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVehicles.map(vehicle => (
                <VehicleCard key={vehicle.id} {...vehicle} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Car className="h-16 w-16 mx-auto text-neutral/30 mb-4" />
              <h3 className="text-xl font-semibold text-neutral mb-2">No vehicles found</h3>
              <p className="text-neutral/70 mb-4">
                Try adjusting your search or filter criteria.
              </p>
              <Button 
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedTransmissions([]);
                  setPriceRange([0, 20000]);
                  setSearchQuery('');
                }}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Reset All Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Vehicles;


import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { format } from 'date-fns';
import { CalendarIcon, CreditCard, Car, MapPin, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import TermsAndConditionsModal from './TermsAndConditionsModal';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger 
} from "@/components/ui/collapsible";

const BookingForm = ({ vehicleId }: { vehicleId?: string }) => {
  const [pickupDate, setPickupDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [pickupLocation, setPickupLocation] = useState('');
  const [returnLocation, setReturnLocation] = useState('');
  const [sameReturnLocation, setSameReturnLocation] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [license, setLicense] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showRequirements, setShowRequirements] = useState(true);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!termsAccepted) {
      toast({
        title: "Terms & Conditions Required",
        description: "You must accept the terms and conditions to proceed with your booking.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Booking Submitted",
      description: "Your booking request has been received. We'll confirm shortly.",
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-neutral mb-6 flex items-center">
        <Car className="mr-2 text-primary" size={24} />
        Book Your Vehicle
      </h2>

      {/* Rental Requirements */}
      <Collapsible 
        open={showRequirements} 
        onOpenChange={setShowRequirements}
        className="mb-6 bg-muted/50 rounded-lg border border-muted"
      >
        <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 font-medium">
          <div className="flex items-center">
            <AlertCircle className="mr-2 h-5 w-5 text-primary" />
            <span>Rental Requirements</span>
          </div>
          <span className="text-sm text-muted-foreground">
            {showRequirements ? "Hide" : "Show"}
          </span>
        </CollapsibleTrigger>
        <CollapsibleContent className="px-4 pb-3 pt-0">
          <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-dark">
            <li>Driver must be at least 23 years old</li>
            <li>Valid driver's license held for at least 2 years</li>
            <li>Credit card in primary driver's name</li>
            <li>Security deposit required at pickup</li>
            <li>International visitors need an international driving permit</li>
          </ul>
        </CollapsibleContent>
      </Collapsible>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="md:col-span-2 pt-4 border-t border-muted">
            <h3 className="text-lg font-medium mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  id="firstName" 
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)} 
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  id="lastName" 
                  value={lastName} 
                  onChange={(e) => setLastName(e.target.value)} 
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  required
                  placeholder="+254"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="license">Driver's License Number</Label>
                <Input 
                  id="license" 
                  value={license} 
                  onChange={(e) => setLicense(e.target.value)} 
                  required
                />
              </div>
            </div>
          </div>

          {/* Pickup Location */}
          <div className="space-y-2">
            <Label htmlFor="pickupLocation">Pickup Location</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral/50" size={18} />
              <Select value={pickupLocation} onValueChange={setPickupLocation} required>
                <SelectTrigger id="pickupLocation" className="pl-10">
                  <SelectValue placeholder="Select pickup location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jkia">Jomo Kenyatta International Airport</SelectItem>
                  <SelectItem value="wilsonAirport">Wilson Airport</SelectItem>
                  <SelectItem value="cbd">Nairobi CBD</SelectItem>
                  <SelectItem value="westlands">Westlands</SelectItem>
                  <SelectItem value="karen">Karen</SelectItem>
                  <SelectItem value="kilimani">Kilimani</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Pickup Date */}
          <div className="space-y-2">
            <Label htmlFor="pickupDate">Pickup Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="pickupDate"
                  variant="outline"
                  className={cn(
                    "w-full pl-3 text-left font-normal",
                    !pickupDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {pickupDate ? format(pickupDate, "PPP") : <span>Select date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={pickupDate}
                  onSelect={setPickupDate}
                  initialFocus
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Same Return Location Checkbox */}
          <div className="md:col-span-2 flex items-start space-x-2">
            <Checkbox 
              id="sameLocation" 
              checked={sameReturnLocation} 
              onCheckedChange={(checked) => {
                setSameReturnLocation(checked as boolean);
                if (checked) {
                  setReturnLocation(pickupLocation);
                } else {
                  setReturnLocation('');
                }
              }}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="sameLocation"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Return to the same location
              </label>
              <p className="text-sm text-muted-foreground">
                Uncheck if you want to return the vehicle to a different location
              </p>
            </div>
          </div>

          {/* Return Location (conditional) */}
          {!sameReturnLocation && (
            <div className="space-y-2">
              <Label htmlFor="returnLocation">Return Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral/50" size={18} />
                <Select value={returnLocation} onValueChange={setReturnLocation} required>
                  <SelectTrigger id="returnLocation" className="pl-10">
                    <SelectValue placeholder="Select return location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jkia">Jomo Kenyatta International Airport</SelectItem>
                    <SelectItem value="wilsonAirport">Wilson Airport</SelectItem>
                    <SelectItem value="cbd">Nairobi CBD</SelectItem>
                    <SelectItem value="westlands">Westlands</SelectItem>
                    <SelectItem value="karen">Karen</SelectItem>
                    <SelectItem value="kilimani">Kilimani</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Return Date */}
          <div className="space-y-2">
            <Label htmlFor="returnDate">Return Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="returnDate"
                  variant="outline"
                  className={cn(
                    "w-full pl-3 text-left font-normal",
                    !returnDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {returnDate ? format(returnDate, "PPP") : <span>Select date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={returnDate}
                  onSelect={setReturnDate}
                  initialFocus
                  disabled={(date) => date < (pickupDate || new Date())}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start space-x-2 pt-4 border-t border-muted">
          <Checkbox 
            id="terms" 
            checked={termsAccepted}
            onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
            required
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I accept the <TermsAndConditionsModal />
            </label>
            <p className="text-sm text-muted-foreground">
              By checking this box, you confirm that you have read and agree to our rental terms, requirements, and policies.
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full bg-primary hover:bg-primary-dark">
          <CreditCard className="mr-2" size={18} />
          Complete Booking
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const TermsAndConditionsModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="h-auto p-0 text-primary underline">
          Terms and Conditions
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-neutral">Rental Terms and Conditions</DialogTitle>
          <DialogDescription className="text-neutral-dark">
            Please read the following terms and conditions carefully before proceeding with your vehicle rental.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-4 text-sm text-neutral-dark">
            <section>
              <h3 className="text-lg font-semibold text-neutral">1. Driver Requirements</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>All drivers must be at least 23 years of age.</li>
                <li>Valid driver's license held for at least 2 years is required.</li>
                <li>International visitors must present a valid international driving permit along with their original license.</li>
                <li>A credit card in the primary driver's name is required for security deposit.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-neutral">2. Rental Period and Extensions</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Minimum rental period is 24 hours.</li>
                <li>Late returns beyond a 30-minute grace period will incur additional daily charges.</li>
                <li>Rental extensions must be approved at least 24 hours before the scheduled return date.</li>
                <li>Unapproved extensions may result in vehicle recovery and additional charges.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-neutral">3. Vehicle Use Restrictions</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Vehicles must remain within Kenya's national borders unless prior written authorization is obtained.</li>
                <li>Off-road driving is prohibited except for 4x4 vehicles on designated tracks.</li>
                <li>Maximum passengers cannot exceed the vehicle's stated capacity.</li>
                <li>Smoking is strictly prohibited in all vehicles. Violation will result in a cleaning fee.</li>
                <li>Transporting pets is subject to prior approval and additional fees.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-neutral">4. Insurance Coverage</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Basic insurance with collision damage waiver (CDW) is included in the rental price.</li>
                <li>Customer is responsible for the first KSh 50,000 of damage in case of an accident.</li>
                <li>Optional Super CDW is available to reduce excess to KSh 15,000.</li>
                <li>Insurance is voided if terms of rental are breached (e.g., unauthorized driver, driving under influence).</li>
                <li>Personal belongings are not covered under our insurance policy.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-neutral">5. Fuel Policy</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Vehicles are provided with a full tank of fuel and must be returned with a full tank.</li>
                <li>Refueling service is available at an additional fee plus the cost of fuel.</li>
                <li>Using incorrect fuel type will result in full liability for any resulting damage.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-neutral">6. Security Deposit</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>A security deposit between KSh 20,000 - KSh 100,000 (depending on vehicle type) will be pre-authorized on your credit card.</li>
                <li>The deposit will be released upon vehicle return, subject to inspection and fuel check.</li>
                <li>Processing time for deposit release depends on your bank (typically 7-14 business days).</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-neutral">7. Cancellation Policy</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Cancellation more than 72 hours before pickup: Full refund minus processing fee.</li>
                <li>Cancellation between 24-72 hours: 50% refund.</li>
                <li>Cancellation less than 24 hours: No refund.</li>
                <li>No-shows will be charged the full booking amount.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-neutral">8. Breakdown Assistance</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>24/7 roadside assistance is provided for all rentals.</li>
                <li>In case of breakdown, call our emergency number immediately.</li>
                <li>Replacement vehicle is subject to availability and may not be identical.</li>
                <li>Unauthorized repairs will not be reimbursed.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-neutral">9. Traffic Violations</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Renter is responsible for all traffic violations, fines, and penalties incurred during the rental period.</li>
                <li>An administrative fee will be charged in addition to any fine processed by us.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-neutral">10. Governing Law</h3>
              <p className="mt-2">
                These terms and conditions are governed by the laws of Kenya. Any disputes arising shall be subject to the exclusive jurisdiction of the Kenyan courts.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TermsAndConditionsModal;

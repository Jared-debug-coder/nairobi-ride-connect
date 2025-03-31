
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { LinkButton } from '@/components/ui/link-button';

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-neutral to-neutral-light py-12 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms and Conditions</h1>
            <p className="text-lg opacity-90">
              Our vehicle rental policies and requirements
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="prose max-w-none">
              <ScrollArea className="h-[70vh] pr-4">
                <div className="space-y-6">
                  <section>
                    <h2 className="text-2xl font-bold text-neutral mb-4">Rental Terms and Conditions</h2>
                    <p className="text-neutral-dark mb-6">
                      Thank you for choosing our vehicle rental service in Nairobi, Kenya. This document outlines the terms and conditions that govern your rental agreement with us. By making a reservation or renting a vehicle from us, you acknowledge that you have read, understood, and agree to be bound by these terms.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-neutral">1. Driver Requirements</h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3 text-neutral-dark">
                      <li>All drivers must be at least 23 years of age.</li>
                      <li>Valid driver's license held for at least 2 years is required.</li>
                      <li>International visitors must present a valid international driving permit along with their original license.</li>
                      <li>A credit card in the primary driver's name is required for security deposit.</li>
                      <li>Drivers must have a clean driving record with no major offenses in the past 3 years.</li>
                      <li>Additional drivers must be registered on the rental agreement and meet the same requirements.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-neutral">2. Rental Period and Extensions</h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3 text-neutral-dark">
                      <li>Minimum rental period is 24 hours.</li>
                      <li>Late returns beyond a 30-minute grace period will incur additional daily charges.</li>
                      <li>Rental extensions must be approved at least 24 hours before the scheduled return date.</li>
                      <li>Unapproved extensions may result in vehicle recovery and additional charges.</li>
                      <li>Early returns do not qualify for partial refunds unless agreed in advance.</li>
                      <li>Maximum rental period without renewal of contract is 30 days.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-neutral">3. Vehicle Use Restrictions</h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3 text-neutral-dark">
                      <li>Vehicles must remain within Kenya's national borders unless prior written authorization is obtained.</li>
                      <li>Off-road driving is prohibited except for 4x4 vehicles on designated tracks.</li>
                      <li>Maximum passengers cannot exceed the vehicle's stated capacity.</li>
                      <li>Smoking is strictly prohibited in all vehicles. Violation will result in a cleaning fee.</li>
                      <li>Transporting pets is subject to prior approval and additional fees.</li>
                      <li>Vehicles must not be used for commercial purposes including taxi or delivery services.</li>
                      <li>Racing, speed testing, or driving instruction is strictly prohibited.</li>
                      <li>Driving on beaches, through rivers, or in flooded areas is not permitted.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-neutral">4. Insurance Coverage</h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3 text-neutral-dark">
                      <li>Basic insurance with collision damage waiver (CDW) is included in the rental price.</li>
                      <li>Customer is responsible for the first KSh 50,000 of damage in case of an accident.</li>
                      <li>Optional Super CDW is available to reduce excess to KSh 15,000.</li>
                      <li>Insurance is voided if terms of rental are breached (e.g., unauthorized driver, driving under influence).</li>
                      <li>Personal belongings are not covered under our insurance policy.</li>
                      <li>Damage to tires, windscreen, undercarriage, and interior may not be covered by standard insurance.</li>
                      <li>Loss of vehicle keys is not covered and will incur replacement charges.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-neutral">5. Fuel Policy</h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3 text-neutral-dark">
                      <li>Vehicles are provided with a full tank of fuel and must be returned with a full tank.</li>
                      <li>Refueling service is available at an additional fee plus the cost of fuel.</li>
                      <li>Using incorrect fuel type will result in full liability for any resulting damage.</li>
                      <li>Fuel receipts must be kept and may be requested upon vehicle return.</li>
                      <li>Failure to refill will result in fuel charges at premium rates plus a service fee.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-neutral">6. Security Deposit</h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3 text-neutral-dark">
                      <li>A security deposit between KSh 20,000 - KSh 100,000 (depending on vehicle type) will be pre-authorized on your credit card.</li>
                      <li>The deposit will be released upon vehicle return, subject to inspection and fuel check.</li>
                      <li>Processing time for deposit release depends on your bank (typically 7-14 business days).</li>
                      <li>Deductions may be made for damages, missing items, traffic violations, or additional cleaning.</li>
                      <li>Deposit amount increases for premium and luxury vehicles.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-neutral">7. Cancellation Policy</h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3 text-neutral-dark">
                      <li>Cancellation more than 72 hours before pickup: Full refund minus processing fee.</li>
                      <li>Cancellation between 24-72 hours: 50% refund.</li>
                      <li>Cancellation less than 24 hours: No refund.</li>
                      <li>No-shows will be charged the full booking amount.</li>
                      <li>Refunds are processed within 14 business days.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-neutral">8. Breakdown Assistance</h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3 text-neutral-dark">
                      <li>24/7 roadside assistance is provided for all rentals.</li>
                      <li>In case of breakdown, call our emergency number immediately.</li>
                      <li>Replacement vehicle is subject to availability and may not be identical.</li>
                      <li>Unauthorized repairs will not be reimbursed.</li>
                      <li>Towing costs are covered only when authorized by our roadside assistance team.</li>
                      <li>Breakdown due to customer negligence may result in additional charges.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-neutral">9. Traffic Violations</h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3 text-neutral-dark">
                      <li>Renter is responsible for all traffic violations, fines, and penalties incurred during the rental period.</li>
                      <li>An administrative fee will be charged in addition to any fine processed by us.</li>
                      <li>We reserve the right to provide driver information to authorities for unresolved violations.</li>
                      <li>Speeding tickets, parking fines, and toll violations remain the renter's responsibility.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-neutral">10. Vehicle Inspection and Return</h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3 text-neutral-dark">
                      <li>Customers should inspect the vehicle thoroughly at pickup and report any damage.</li>
                      <li>A pre-rental inspection form must be signed before departure.</li>
                      <li>Upon return, the vehicle will be inspected for any new damage or missing items.</li>
                      <li>Customers should allow sufficient time for the return inspection process.</li>
                      <li>Additional charges may apply for excessive dirt requiring special cleaning.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-neutral">11. Personal Data Protection</h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3 text-neutral-dark">
                      <li>Customer information is collected and processed in accordance with Kenya's data protection laws.</li>
                      <li>Personal data may be used for reservation processing, legal requirements, and customer service.</li>
                      <li>We do not sell personal information to third parties.</li>
                      <li>Customers have the right to access, correct, or request deletion of their personal data.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-neutral">12. Governing Law</h3>
                    <p className="mt-3 text-neutral-dark">
                      These terms and conditions are governed by the laws of Kenya. Any disputes arising shall be subject to the exclusive jurisdiction of the Kenyan courts. By proceeding with your reservation, you acknowledge acceptance of these terms.
                    </p>
                  </section>

                  <div className="pt-6 mt-6 border-t border-muted">
                    <p className="text-sm text-neutral-dark">
                      Last updated: June 2023
                    </p>
                    <LinkButton to="/booking" className="mt-6">
                      Return to Booking
                    </LinkButton>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;

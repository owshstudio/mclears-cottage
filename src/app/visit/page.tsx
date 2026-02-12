'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Calendar, 
  DollarSign, 
  Shirt, 
  PawPrint, 
  Volume2, 
  Fish,
  Coffee,
  MapPin,
  ArrowRight,
  Check,
  AlertCircle,
  Compass,
  Castle,
  Waves,
  Car,
  Palmtree,
  Gamepad2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const whatToBring = [
  'Pillows, sheets, blankets',
  'Towels (bath and beach)',
  'Lawn chairs',
  'Fishing gear',
  'Bathing suits',
  'Sunscreen & bug spray',
  'Casual clothes only!',
  'Coolers for your catch'
];

const rules = [
  { icon: Volume2, rule: 'Quiet hours: 11 PM - 7 AM' },
  { icon: Clock, rule: '5 MPH speed limit on resort roads' },
  { icon: AlertCircle, rule: 'No firearms or fireworks' },
  { icon: Fish, rule: 'Clean fish only in fish cleaning building' },
  { icon: AlertCircle, rule: 'No campfires on grass - use fire rings only' },
  { icon: AlertCircle, rule: 'No laundry clotheslines allowed' },
  { icon: AlertCircle, rule: 'Gas cans must be stored in boat or vehicle, not under decks' },
  { icon: AlertCircle, rule: 'Wash cars/boats at Fish Processing Building only (lake water tap)' }
];

export default function VisitPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/gal12.jpg"
          alt="Black Lake shoreline"
          fill
          className="object-cover scale-105"
          style={{ filter: 'blur(0.5px)' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[--color-lake-blue]/80 via-[--color-lake-blue]/80 to-[--color-lake-blue]/75" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Plan Your Visit
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto drop-shadow-md">
            Everything you need to know before you arrive
          </p>
        </motion.div>
      </section>

      {/* Check-in/Check-out Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[--color-forest-green]/10 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-[--color-forest-green]" />
                  </div>
                  <CardTitle className="text-[--color-lake-blue]">Check-In</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-[--color-lake-blue] mb-2">1:00 PM</p>
                  <p className="text-[--color-muted-foreground]">Your cottage will be ready and waiting</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[--color-sunset-orange]/10 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-[--color-sunset-orange]" />
                  </div>
                  <CardTitle className="text-[--color-lake-blue]">Check-Out</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-[--color-lake-blue] mb-2">10:00 AM</p>
                  <p className="text-[--color-muted-foreground]">Please leave the cottage clean and tidy</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Reservations Section */}
      <section className="py-20 px-4 bg-[--color-soft-gray]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 text-[--color-sunset-orange] mb-4">
              <Calendar size={24} />
              <span className="font-semibold">Booking Info</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-lake-blue]">
              Reservations & Deposits
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="flex items-center gap-2 font-semibold text-[--color-lake-blue] text-lg mb-4">
                      <DollarSign className="text-[--color-sunset-orange]" size={20} />
                      Deposit Requirements
                    </h3>
                    <ul className="space-y-3 text-[--color-muted-foreground]">
                      <li className="flex items-start gap-2">
                        <Check size={18} className="text-[--color-forest-green] mt-0.5 shrink-0" />
                        <span><strong>Weekly stay:</strong> $200 deposit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={18} className="text-[--color-forest-green] mt-0.5 shrink-0" />
                        <span><strong>Weekend stay:</strong> $100 deposit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={18} className="text-[--color-forest-green] mt-0.5 shrink-0" />
                        <span><strong>Next year:</strong> $50 advance deposit (nonrefundable)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={18} className="text-[--color-forest-green] mt-0.5 shrink-0" />
                        <span>Full payment due on arrival</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-[--color-lake-blue] text-lg mb-4">
                      Cancellation Policy
                    </h3>
                    <ul className="space-y-3 text-[--color-muted-foreground]">
                      <li className="flex items-start gap-2">
                        <AlertCircle size={18} className="text-amber-500 mt-0.5 shrink-0" />
                        <span>15% refund processing fee</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle size={18} className="text-red-500 mt-0.5 shrink-0" />
                        <span><strong>No refunds after April 1</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle size={18} className="text-amber-500 mt-0.5 shrink-0" />
                        <span>Deposit holds reservation 24 hours after arrival time</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-[--color-muted-foreground]">
                    <strong>Payment:</strong> We accept cash, check, and credit cards. Credit card payments are subject to a 3.99% processing fee.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* What to Bring Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-[--color-sunset-orange] mb-4">
                <Shirt size={24} />
                <span className="font-semibold">Pack Smart</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[--color-lake-blue] mb-6">
                What to Bring
              </h2>
              <p className="text-[--color-muted-foreground] mb-8">
                Our cottages come equipped with kitchens and basic amenities, but you&apos;ll need to bring 
                your own bedding and personal items. Here&apos;s a handy checklist:
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {whatToBring.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check size={18} className="text-[--color-forest-green] shrink-0" />
                    <span className="text-[--color-muted-foreground]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/gal16.jpg"
                alt="Cottage porch view"
                fill
                className="object-cover object-center scale-105"
                style={{ filter: 'blur(0.3px)' }}
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[--color-lake-blue]/10 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pet Policy Section */}
      <section className="py-20 px-4 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[--color-sunset-orange]/10 flex items-center justify-center">
                  <PawPrint className="w-8 h-8 text-[--color-sunset-orange]" />
                </div>
                <CardTitle className="text-[--color-lake-blue] text-2xl">Pet Policy</CardTitle>
                <p className="text-[--color-muted-foreground]">Yes, we&apos;re pet-friendly! Here are the details:</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="p-4 bg-[--color-soft-gray] rounded-lg">
                    <p className="text-2xl font-bold text-[--color-lake-blue]">$10</p>
                    <p className="text-sm text-[--color-muted-foreground]">per night per pet</p>
                  </div>
                  <div className="p-4 bg-[--color-soft-gray] rounded-lg">
                    <p className="text-2xl font-bold text-[--color-lake-blue]">$50</p>
                    <p className="text-sm text-[--color-muted-foreground]">per week per pet</p>
                  </div>
                  <div className="p-4 bg-[--color-soft-gray] rounded-lg">
                    <p className="text-2xl font-bold text-[--color-lake-blue]">2</p>
                    <p className="text-sm text-[--color-muted-foreground]">pets maximum</p>
                  </div>
                </div>
                
                <div className="text-left max-w-md mx-auto">
                  <h4 className="font-semibold text-[--color-lake-blue] mb-3">Requirements:</h4>
                  <ul className="space-y-2 text-[--color-muted-foreground]">
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-[--color-forest-green] mt-0.5 shrink-0" />
                      Pets must be leashed at all times outdoors
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-[--color-forest-green] mt-0.5 shrink-0" />
                      Current rabies certificate required
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-[--color-forest-green] mt-0.5 shrink-0" />
                      Please clean up after your pet (&quot;scoopers&quot; available at fish cleaning station)
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-[--color-forest-green] mt-0.5 shrink-0" />
                      No pets on furniture or beds (bring a dog bed)
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-[--color-forest-green] mt-0.5 shrink-0" />
                      You are responsible for any damages caused by pets
                    </li>
                  </ul>
                </div>
                
                <p className="mt-6 text-sm text-amber-700 bg-amber-50 border border-amber-200 p-3 rounded-lg text-left">
                  <strong>Note:</strong> Aggressive or excessively barking dogs are a problem. Please don&apos;t let your pet ruin your vacation. Also, please do not feed our resident dogs!
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-lake-blue] mb-4">
              Resort Rules
            </h2>
            <p className="text-[--color-muted-foreground]">
              Help us keep McLear&apos;s a great place for everyone
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4"
          >
            {rules.map((rule) => (
              <motion.div key={rule.rule} variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[--color-lake-blue]/10 flex items-center justify-center shrink-0">
                      <rule.icon className="w-6 h-6 text-[--color-lake-blue]" />
                    </div>
                    <span className="text-[--color-muted-foreground]">{rule.rule}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Safety Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                  <AlertCircle size={20} />
                  Important Safety Information
                </h3>
                <ul className="space-y-2 text-sm text-red-700">
                  <li>• <strong>Dock Safety:</strong> Small children and non-swimmers must wear personal flotation devices on docks. Never leave children unattended near the water.</li>
                  <li>• <strong>Beach Notice:</strong> We are not a NYS Health Department approved bathing facility. The beach is not inspected.</li>
                  <li>• Report any accidents or maintenance concerns to the front office immediately.</li>
                  <li>• Parents are responsible for the conduct of their children at all times.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Fish Bone Cafe Section */}
      <section className="py-20 px-4 bg-[--color-soft-gray]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1"
            >
              <Image
                src="/images/gal17.jpg"
                alt="Fish Bone Cafe"
                fill
                className="object-cover object-center scale-105"
                style={{ filter: 'blur(0.3px)' }}
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[--color-lake-blue]/10 to-transparent" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 text-[--color-sunset-orange] mb-4">
                <Coffee size={24} />
                <span className="font-semibold">On-Site Dining</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[--color-lake-blue] mb-6">
                The Fish Bone Cafe
              </h2>
              <p className="text-[--color-muted-foreground] mb-4 text-lg">
                Start your morning right at our on-site cafe! The Fish Bone serves up hearty breakfasts 
                to fuel your day on the lake.
              </p>
              <p className="text-[--color-muted-foreground] mb-6">
                Whether you&apos;re heading out for early morning fishing or just want a relaxing 
                breakfast with a view, we&apos;ve got you covered. Casual atmosphere, friendly service, 
                and food that hits the spot.
              </p>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <p className="text-amber-800">
                  <strong>2026 Season:</strong> Serving breakfast only. Check with us for hours during your stay.
                </p>
              </div>
              
              <div className="space-y-2 text-sm text-[--color-muted-foreground]">
                <div className="flex items-center gap-2">
                  <Fish className="text-[--color-sunset-orange]" size={18} />
                  <span><strong>Live bait & ice</strong> available at office/diner</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-[--color-sunset-orange]" size={18} />
                  <span>Fishing licenses & tackle within walking distance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="text-[--color-sunset-orange]" size={18} />
                  <span>Convenience store 3.5 miles away</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 text-[--color-sunset-orange] mb-4">
              <Compass size={24} />
              <span className="font-semibold">Explore the Area</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-lake-blue] mb-4">
              Nearby Attractions
            </h2>
            <p className="text-[--color-muted-foreground] max-w-2xl mx-auto">
              Plenty to see and do within a short drive of McLear&apos;s
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[--color-lake-blue]/10 flex items-center justify-center shrink-0">
                      <Castle className="w-6 h-6 text-[--color-lake-blue]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[--color-lake-blue] mb-2">1000 Islands & Boldt Castle</h3>
                      <p className="text-sm text-[--color-muted-foreground]">
                        Tour boats, shopping, dining, and the famous Boldt Castle in Alexandria Bay. ~25 min drive.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[--color-lake-blue]/10 flex items-center justify-center shrink-0">
                      <Waves className="w-6 h-6 text-[--color-lake-blue]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[--color-lake-blue] mb-2">More Lakes Nearby</h3>
                      <p className="text-sm text-[--color-muted-foreground]">
                        Butterfield Lake, Red Lake, Muskelunge Lake, and more fishing options in the area.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[--color-lake-blue]/10 flex items-center justify-center shrink-0">
                      <Gamepad2 className="w-6 h-6 text-[--color-lake-blue]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[--color-lake-blue] mb-2">Family Fun</h3>
                      <p className="text-sm text-[--color-muted-foreground]">
                        Go-kart racing, mini golf, petting zoos, and aqua zoo attractions nearby.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[--color-lake-blue]/10 flex items-center justify-center shrink-0">
                      <Palmtree className="w-6 h-6 text-[--color-lake-blue]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[--color-lake-blue] mb-2">Outdoor Activities</h3>
                      <p className="text-sm text-[--color-muted-foreground]">
                        Golf courses, tennis, public beaches, and white water rafting on the Black River.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[--color-lake-blue]/10 flex items-center justify-center shrink-0">
                      <Car className="w-6 h-6 text-[--color-lake-blue]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[--color-lake-blue] mb-2">Rainy Day Options</h3>
                      <p className="text-sm text-[--color-muted-foreground]">
                        Frederic Remington Art Museum, Antique Boat Museum (Clayton), Watertown shopping mall.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[--color-lake-blue]/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-[--color-lake-blue]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[--color-lake-blue] mb-2">Historic Sites</h3>
                      <p className="text-sm text-[--color-muted-foreground]">
                        Fort Drum, Eisenhower Locks & Seaway Project (Massena), Mohawk Casino nearby.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 bg-[--color-soft-gray]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 text-[--color-sunset-orange] mb-4">
              <MapPin size={24} />
              <span className="font-semibold">Find Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-lake-blue] mb-4">
              Location & Directions
            </h2>
            <p className="text-xl text-[--color-muted-foreground]">
              2477 County Route #6, Hammond, NY 13646
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2839.8861647927!2d-75.7184!3d44.4338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4e8e8b4b8b8b%3A0x0!2s2477+County+Route+6%2C+Hammond%2C+NY+13646!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="McLear's Cottage Colony Location"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions? We&apos;re Here to Help!
          </h2>
          <p className="text-xl text-white mb-8">
            Contact us for more information or to make a reservation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[--color-sunset-orange] hover:bg-[--color-sunset-gold] text-white text-lg px-8"
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-white/10 text-white font-semibold hover:bg-white hover:text-[--color-lake-blue] text-lg px-8"
            >
              <a href="tel:315-375-6508">
                Call (315) 375-6508
              </a>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

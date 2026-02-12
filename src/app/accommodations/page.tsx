'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bed, Users, Tv, Flame, ShowerHead, UtensilsCrossed, Tent, Caravan, ArrowRight, Check, X } from 'lucide-react';
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

const cottages = [
  {
    title: 'Lakefront 2-Bedroom',
    image: '/images/gal02.jpg',
    price: '$830',
    period: 'per week',
    beds: '2 Bedrooms',
    capacity: 'Sleeps 4-6',
    amenities: ['Full Kitchen', 'Cable TV', 'Heat', 'Shower', 'Lake View'],
    featured: true
  },
  {
    title: 'Lakefront 3-4 Bedroom',
    image: '/images/gal03.jpg',
    price: '$890-930',
    period: 'per week',
    beds: '3-4 Bedrooms',
    capacity: 'Sleeps 6-8',
    amenities: ['Full Kitchen', 'Cable TV', 'Heat', 'Shower', 'Lake View'],
    featured: true
  },
  {
    title: 'Non-Lakefront Cottage',
    image: '/images/gal04.jpg',
    price: 'Call',
    period: 'for pricing',
    beds: 'Various Sizes',
    capacity: 'Various',
    amenities: ['Full Kitchen', 'Cable TV', 'Heat', 'Shower'],
    featured: false
  }
];

const cabins = [
  {
    title: 'Camping Cabin',
    image: '/images/gal05.jpg',
    price: '$360 - $420',
    period: 'per week',
    description: 'Rustic cabins with beds only. Perfect for those who want a roof over their head but love the camping experience.',
    note: 'No kitchen or bathroom - beds only. Access to resort facilities.'
  }
];

const amenitiesIcons = {
  'Full Kitchen': UtensilsCrossed,
  'Cable TV': Tv,
  'Heat': Flame,
  'Shower': ShowerHead,
  'Lake View': Bed
};

const includedItems = [
  'Kitchen with dishes, utensils, pots & pans',
  'Microwave, coffee maker, toaster',
  'Cable TV in all units',
  'Heat for cool evenings',
  'Shower facilities'
];

const notIncluded = [
  'Towels',
  'Bed linens',
  'Pillows',
  'Blankets'
];

export default function AccommodationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/gal07.jpg"
          alt="McLear's cottages on Black Lake"
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
            Our Accommodations
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto drop-shadow-md">
            From cozy lakefront cottages to rustic camping cabins
          </p>
        </motion.div>
      </section>

      {/* Cottages Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-lake-blue] mb-4">
              Lakefront Cottages
            </h2>
            <p className="text-[--color-muted-foreground] max-w-2xl mx-auto">
              Wake up to stunning lake views and enjoy all the comforts of home in our fully-equipped cottages.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {cottages.map((cottage) => (
              <motion.div key={cottage.title} variants={fadeInUp}>
                <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={cottage.image}
                      alt={cottage.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                    {cottage.featured && (
                      <span className="absolute top-4 right-4 bg-[--color-sunset-orange] text-white px-3 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-[--color-lake-blue]">{cottage.title}</CardTitle>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[--color-sunset-orange]">{cottage.price}</span>
                      <span className="text-[--color-muted-foreground] text-sm">{cottage.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-4 text-sm text-[--color-muted-foreground]">
                      <span className="flex items-center gap-1">
                        <Bed size={16} />
                        {cottage.beds}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={16} />
                        {cottage.capacity}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cottage.amenities.map((amenity) => {
                        const Icon = amenitiesIcons[amenity as keyof typeof amenitiesIcons] || Check;
                        return (
                          <span
                            key={amenity}
                            className="inline-flex items-center gap-1 text-xs bg-[--color-soft-gray] px-2 py-1 rounded"
                          >
                            <Icon size={12} />
                            {amenity}
                          </span>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Camping Cabins Section */}
      <section className="py-20 px-4 bg-[--color-soft-gray]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 text-[--color-sunset-orange] mb-4">
              <Tent size={24} />
              <span className="font-semibold">Rustic Experience</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-lake-blue] mb-4">
              Camping Cabins
            </h2>
            <p className="text-[--color-muted-foreground] max-w-2xl mx-auto">
              For those who want a roof over their head but love the camping experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            {cabins.map((cabin) => (
              <Card key={cabin.title} className="overflow-hidden">
                <div className="md:flex">
                  <div className="relative h-64 md:h-auto md:w-1/2 overflow-hidden">
                    <Image
                      src={cabin.image}
                      alt={cabin.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 350px"
                    />
                  </div>
                  <div className="p-6 md:w-1/2">
                    <h3 className="text-2xl font-bold text-[--color-lake-blue] mb-2">{cabin.title}</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-2xl font-bold text-[--color-sunset-orange]">{cabin.price}</span>
                      <span className="text-[--color-muted-foreground] text-sm">{cabin.period}</span>
                    </div>
                    <p className="text-[--color-muted-foreground] mb-4">{cabin.description}</p>
                    <p className="text-sm bg-amber-50 border border-amber-200 text-amber-800 p-3 rounded-lg">
                      <strong>Note:</strong> {cabin.note}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* RV & Tent Camping Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/gal10.jpg"
                alt="RV and tent camping at McLear's"
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
            >
              <div className="inline-flex items-center gap-2 text-[--color-sunset-orange] mb-4">
                <Caravan size={24} />
                <span className="font-semibold">Bring Your Own</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[--color-lake-blue] mb-6">
                RV & Tent Camping
              </h2>
              <p className="text-[--color-muted-foreground] mb-6 text-lg">
                Bring your RV or pitch a tent and enjoy the beautiful Black Lake setting. Our campsites give you access to all resort amenities.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="text-[--color-forest-green] mt-1 shrink-0" size={20} />
                  <span>RV sites with electric and water hookups</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[--color-forest-green] mt-1 shrink-0" size={20} />
                  <span>Tent camping sites available</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[--color-forest-green] mt-1 shrink-0" size={20} />
                  <span>Access to bathrooms and shower facilities</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[--color-forest-green] mt-1 shrink-0" size={20} />
                  <span>Use of dock and boat launch</span>
                </div>
              </div>

              <Button asChild className="bg-[--color-lake-blue] hover:bg-[--color-lake-blue-light]">
                <Link href="/contact">
                  Contact for Rates
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4 bg-[--color-lake-blue]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What&apos;s Included
            </h2>
            <p className="text-white drop-shadow-sm">
              Our cottages come equipped with everything you need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[--color-forest-green]">
                    <Check size={24} />
                    Included in Your Stay
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {includedItems.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="text-[--color-forest-green] mt-0.5 shrink-0" size={18} />
                        <span className="text-[--color-muted-foreground]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[--color-sunset-orange]">
                    <X size={24} />
                    Please Bring Your Own
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {notIncluded.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <X className="text-[--color-sunset-orange] mt-0.5 shrink-0" size={18} />
                        <span className="text-[--color-muted-foreground]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm bg-amber-50 border border-amber-200 text-amber-800 p-3 rounded-lg">
                    BYOB: Bring Your Own Bedding! Towels, sheets, blankets, and pillows are not provided.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visitor Fees Section */}
      <section className="py-20 px-4 bg-[--color-soft-gray]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-lake-blue] mb-4">
              Visitor Fees
            </h2>
            <p className="text-[--color-muted-foreground]">
              Bringing extra guests? Here&apos;s what to know.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <p className="text-sm text-[--color-muted-foreground] mb-2">Cottage Visitors</p>
              <p className="text-3xl font-bold text-[--color-lake-blue]">$20</p>
              <p className="text-[--color-muted-foreground]">per person / per night</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <p className="text-sm text-[--color-muted-foreground] mb-2">Campground Visitors</p>
              <p className="text-3xl font-bold text-[--color-lake-blue]">$10</p>
              <p className="text-[--color-muted-foreground]">per person / per night</p>
            </div>
          </motion.div>

          <p className="text-center text-sm text-[--color-muted-foreground] mt-6">
            Visitor fees apply to guests not included in your original reservation.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[--color-lake-blue] mb-4">
            Ready to Book?
          </h2>
          <p className="text-xl text-[--color-muted-foreground] mb-8">
            Contact us today to reserve your cottage, cabin, or campsite
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
              className="border-[--color-lake-blue] text-[--color-lake-blue] hover:bg-[--color-lake-blue] hover:text-white text-lg px-8"
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

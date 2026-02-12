'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Ship, Anchor, Users, Shield, AlertTriangle, ArrowRight, Check } from 'lucide-react';
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

const boatOptions = [
  {
    title: '14\' Boat Only',
    description: 'Perfect for fishing with your own motor or just rowing',
    dailyRate: '$20',
    weeklyRate: '$100',
    icon: Ship,
    features: ['Anchor included', 'Oars included', 'Cushions', 'PFDs provided']
  },
  {
    title: '14\' Boat + 9.8-9.9hp Motor',
    description: 'Great for exploring the lake at a leisurely pace',
    dailyRate: '$100',
    weeklyRate: '$400',
    icon: Ship,
    features: ['Anchor included', 'Oars included', 'Cushions', 'PFDs provided', '9.8-9.9hp outboard motor'],
    popular: true
  },
  {
    title: '14\' Boat + 15hp Motor',
    description: 'More power for covering more water',
    dailyRate: '$125',
    weeklyRate: '$450',
    icon: Ship,
    features: ['Anchor included', 'Oars included', 'Cushions', 'PFDs provided', '15hp outboard motor']
  }
];

const includedItems = [
  { item: 'Anchor', icon: Anchor },
  { item: 'Oars', icon: Ship },
  { item: 'Cushions', icon: Users },
  { item: 'Personal Flotation Devices (PFDs)', icon: Shield }
];

export default function BoatsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/gal08.jpg"
          alt="Boat on Black Lake"
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
          <div className="inline-flex items-center gap-2 text-[--color-sunset-gold] mb-4">
            <Ship size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Boat Rentals
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto drop-shadow-md">
            Get out on Black Lake with our 14-foot fishing boats
          </p>
        </motion.div>
      </section>

      {/* Boat Options Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-lake-blue] mb-4">
              Rental Options
            </h2>
            <p className="text-[--color-muted-foreground] max-w-2xl mx-auto">
              Choose the setup that works best for your fishing adventure
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {boatOptions.map((boat) => (
              <motion.div key={boat.title} variants={fadeInUp}>
                <Card className={`h-full hover:shadow-xl transition-shadow relative ${boat.popular ? 'ring-2 ring-[--color-sunset-orange]' : ''}`}>
                  {boat.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[--color-sunset-orange] text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  )}
                  <CardHeader className="text-center pt-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[--color-lake-blue]/10 flex items-center justify-center">
                      <boat.icon className="w-8 h-8 text-[--color-lake-blue]" />
                    </div>
                    <CardTitle className="text-[--color-lake-blue] text-xl">{boat.title}</CardTitle>
                    <p className="text-[--color-muted-foreground] text-sm mt-2">{boat.description}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <div className="flex justify-center items-baseline gap-2 mb-2">
                        <span className="text-3xl font-bold text-[--color-sunset-orange]">{boat.dailyRate}</span>
                        <span className="text-[--color-muted-foreground]">/day</span>
                      </div>
                      <div className="flex justify-center items-baseline gap-2">
                        <span className="text-xl font-semibold text-[--color-lake-blue]">{boat.weeklyRate}</span>
                        <span className="text-[--color-muted-foreground] text-sm">/week</span>
                      </div>
                    </div>
                    
                    <ul className="text-left space-y-2">
                      {boat.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-[--color-muted-foreground]">
                          <Check size={16} className="text-[--color-forest-green] shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4 bg-[--color-soft-gray]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-lake-blue] mb-4">
              Every Rental Includes
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {includedItems.map((item) => (
              <motion.div key={item.item} variants={fadeInUp} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white shadow-md flex items-center justify-center">
                  <item.icon className="w-10 h-10 text-[--color-lake-blue]" />
                </div>
                <span className="font-medium text-[--color-lake-blue]">{item.item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dock Rentals Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 text-[--color-sunset-orange] mb-4">
              <Anchor size={24} />
              <span className="font-semibold">Bring Your Own Boat?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-lake-blue] mb-4">
              Dock Rentals
            </h2>
            <p className="text-[--color-muted-foreground] max-w-2xl mx-auto">
              We have dock space available for privately owned boats (20&apos; max)
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                  <div className="p-4 bg-[--color-soft-gray] rounded-lg">
                    <p className="text-sm text-[--color-muted-foreground] mb-2">Up to 14&apos;</p>
                    <p className="text-xl font-bold text-[--color-lake-blue]">$10/day</p>
                    <p className="text-lg font-semibold text-[--color-sunset-orange]">$60/week</p>
                  </div>
                  <div className="p-4 bg-[--color-soft-gray] rounded-lg">
                    <p className="text-sm text-[--color-muted-foreground] mb-2">15&apos; - 18&apos;</p>
                    <p className="text-xl font-bold text-[--color-lake-blue]">$12/day</p>
                    <p className="text-lg font-semibold text-[--color-sunset-orange]">$75/week</p>
                  </div>
                  <div className="p-4 bg-[--color-soft-gray] rounded-lg">
                    <p className="text-sm text-[--color-muted-foreground] mb-2">Over 18&apos;</p>
                    <p className="text-xl font-bold text-[--color-lake-blue]">$15/day</p>
                    <p className="text-lg font-semibold text-[--color-sunset-orange]">$100/week</p>
                  </div>
                  <div className="p-4 bg-[--color-soft-gray] rounded-lg">
                    <p className="text-sm text-[--color-muted-foreground] mb-2">Pontoon</p>
                    <p className="text-xl font-bold text-[--color-lake-blue]">$20/day</p>
                    <p className="text-lg font-semibold text-[--color-sunset-orange]">$125/week</p>
                  </div>
                </div>
                <p className="text-center text-sm text-[--color-muted-foreground] mt-4">
                  Maximum boat length: 20 feet. Add $1/day or $5/week for electric hookup.
                </p>
                <p className="text-center text-sm text-[--color-muted-foreground] mt-2">
                  Plus applicable sales tax.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4 bg-[--color-soft-gray]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <div className="bg-[--color-lake-blue] text-white p-6">
                <div className="flex items-center gap-3">
                  <AlertTriangle size={28} />
                  <h2 className="text-2xl font-bold">Rental Requirements</h2>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-[--color-lake-blue] text-lg mb-2">Age Requirement</h3>
                    <p className="text-[--color-muted-foreground]">
                      All boat operators must be <strong>18 years or older</strong>, OR possess a valid 
                      <strong> New York State Boater Safety Certificate</strong>.
                    </p>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h3 className="font-semibold text-[--color-lake-blue] text-lg mb-2">Safety First</h3>
                    <ul className="space-y-2 text-[--color-muted-foreground]">
                      <li className="flex items-start gap-2">
                        <Check size={18} className="text-[--color-forest-green] mt-0.5 shrink-0" />
                        All passengers must wear PFDs (we provide them!)
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={18} className="text-[--color-forest-green] mt-0.5 shrink-0" />
                        Boats must be returned before dark
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={18} className="text-[--color-forest-green] mt-0.5 shrink-0" />
                        No reckless operation or excessive speed near shore
                      </li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-amber-800 text-sm">
                      <strong>Note:</strong> Boat availability is on a first-come, first-served basis. 
                      We recommend reserving your boat when you book your accommodation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Black Lake Fishing Section */}
      <section className="py-20 px-4 bg-[#1e3a5f]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                World-Class Fishing on Black Lake
              </h2>
              <p className="text-white mb-6 text-lg">
                Black Lake is renowned as one of the best bass fishing destinations in the Northeast. 
                Whether you&apos;re after largemouth bass, northern pike, or walleye, our boats will get you 
                where the fish are biting.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="text-[#f59e0b]" size={20} />
                  <span className="text-white">Largemouth & Smallmouth Bass</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-[#f59e0b]" size={20} />
                  <span className="text-white">Northern Pike</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-[#f59e0b]" size={20} />
                  <span className="text-white">Walleye</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-[#f59e0b]" size={20} />
                  <span className="text-white">Panfish (Perch, Bluegill, Crappie)</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/gal15.jpg"
                alt="Fishing on Black Lake"
                fill
                className="object-cover object-center scale-105"
                style={{ filter: 'blur(0.3px)' }}
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[--color-lake-blue]/15 to-transparent" />
            </motion.div>
          </div>
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
            Ready to Hit the Water?
          </h2>
          <p className="text-xl text-[--color-muted-foreground] mb-8">
            Reserve your boat when you book your stay
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[--color-sunset-orange] hover:bg-[--color-sunset-gold] text-white text-lg px-8"
            >
              <Link href="/contact">
                Reserve a Boat
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

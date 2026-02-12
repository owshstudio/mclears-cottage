'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Tent, Ship, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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

const features = [
  {
    icon: Home,
    title: 'Lakefront Cottages',
    description: 'Cozy 2-4 bedroom cottages with full kitchens and stunning lake views.',
    href: '/accommodations'
  },
  {
    icon: Tent,
    title: 'Camping & Cabins',
    description: 'RV sites with hookups, tent camping, and rustic camping cabins.',
    href: '/accommodations'
  },
  {
    icon: Ship,
    title: 'Boat Rentals',
    description: '14-foot boats available with or without motors for your fishing adventures.',
    href: '/boats'
  }
];

const galleryImages = [
  '/images/gal01.jpg',
  '/images/gal06.jpg',
  '/images/gal09.jpg',
  '/images/gal14.jpg',
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/aerial1000.jpg"
          alt="Aerial view of McLear's Cottage Colony on Black Lake"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[--color-lake-blue]/70 to-[--color-lake-blue]/85" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg [text-shadow:_0_2px_12px_rgb(0_0_0_/_60%),_0_4px_24px_rgb(0_0_0_/_40%)]">
            Welcome to McLear&apos;s
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-lg [text-shadow:_0_2px_8px_rgb(0_0_0_/_50%)]">
            Black Lake&apos;s Favorite Destination Since the 1920s
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[--color-sunset-orange] hover:bg-[--color-sunset-gold] text-white text-lg px-8"
            >
              <Link href="/accommodations">
                View Accommodations
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-white/10 text-white font-semibold hover:bg-white hover:text-[--color-lake-blue] text-lg px-8"
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-lake-blue] mb-6">
              A Family Tradition on Black Lake
            </h2>
            <p className="text-lg text-[--color-muted-foreground] leading-relaxed mb-8">
              For over 90 years, McLear&apos;s Cottage Colony has welcomed families, anglers, and nature lovers to the beautiful shores of Black Lake. Our family-owned resort offers the perfect escape from the everyday—where memories are made, fish are caught, and relaxation comes naturally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-[--color-soft-gray]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[--color-lake-blue] text-center mb-12"
          >
            Everything You Need
          </motion.h2>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={fadeInUp}>
                <Link href={feature.href}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[--color-lake-blue]/10 flex items-center justify-center group-hover:bg-[--color-sunset-orange]/10 transition-colors">
                        <feature.icon className="w-8 h-8 text-[--color-lake-blue] group-hover:text-[--color-sunset-orange] transition-colors" />
                      </div>
                      <h3 className="text-xl font-semibold text-[--color-lake-blue] mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-[--color-muted-foreground]">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[--color-lake-blue] mb-6">
                Plan Your Visit
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[--color-sunset-orange]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[--color-sunset-orange]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[--color-lake-blue]">Location</h3>
                    <p className="text-[--color-muted-foreground]">
                      2477 County Route #6, Hammond, NY 13646
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[--color-sunset-orange]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[--color-sunset-orange]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[--color-lake-blue]">Phone</h3>
                    <a href="tel:315-375-6508" className="text-[--color-muted-foreground] hover:text-[--color-sunset-orange] transition-colors">
                      (315) 375-6508
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[--color-sunset-orange]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[--color-sunset-orange]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[--color-lake-blue]">Email</h3>
                    <a href="mailto:gofishin@mclears.com" className="text-[--color-muted-foreground] hover:text-[--color-sunset-orange] transition-colors">
                      gofishin@mclears.com
                    </a>
                  </div>
                </div>
              </div>
              <Button
                asChild
                className="mt-8 bg-[--color-lake-blue] hover:bg-[--color-lake-blue-light]"
              >
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/gal01.jpg"
                alt="McLear's lakefront view"
                fill
                className="object-cover object-center scale-105"
                style={{ filter: 'blur(0.3px)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[--color-lake-blue]/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Cam Section */}
      <section className="py-20 px-4 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Live from Black Lake
            </h2>
            <p className="text-white text-lg">
              Check out the current conditions at McLear&apos;s
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="aspect-video rounded-xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://camstreamer.com/embed/FtJ7jCCGJQNHKnZT8yAU2gt1UgawX9ONvuzn1hu1"
              className="w-full h-full"
              allow="autoplay; fullscreen"
              title="McLear's Live Camera - Black Lake"
            />
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-[--color-soft-gray]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-lake-blue] mb-4">
              Experience McLear&apos;s
            </h2>
            <p className="text-[--color-muted-foreground]">
              Take a virtual tour of our cottage colony
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="aspect-video rounded-xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.youtube.com/embed/2KFP4vbO0Tw"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="McLear's Cottage Colony Video Tour"
            />
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-lake-blue] mb-4">
              Life at McLear&apos;s
            </h2>
            <p className="text-[--color-muted-foreground]">
              A glimpse of what awaits you on Black Lake
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {galleryImages.map((src, index) => (
              <motion.div
                key={src}
                variants={fadeInUp}
                className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow max-w-[300px] mx-auto"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 150px, 200px"
                />
              </motion.div>
            ))}
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
            Ready for Your Black Lake Adventure?
          </h2>
          <p className="text-xl text-white mb-8">
            Book your cottage, cabin, or campsite today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[--color-sunset-orange] hover:bg-[--color-sunset-gold] text-white text-lg px-8"
            >
              <Link href="/accommodations">
                View Accommodations
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-white/10 text-white font-semibold hover:bg-white hover:text-[--color-lake-blue] text-lg px-8"
            >
              <a href="tel:315-375-6508">
                Call Now
              </a>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

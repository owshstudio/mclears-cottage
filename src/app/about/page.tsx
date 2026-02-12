'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Users, Fish, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import HeritageTimeline from '@/components/HeritageTimeline';

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

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/aerial1000.jpg"
          alt="Aerial view of McLear's Cottage Colony"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[--color-lake-blue]/70 to-[--color-lake-blue]/85" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg [text-shadow:_0_2px_12px_rgb(0_0_0_/_60%),_0_4px_24px_rgb(0_0_0_/_40%)]">
            Our Story
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto drop-shadow-lg [text-shadow:_0_2px_8px_rgb(0_0_0_/_50%)]">
            90+ years of family tradition on Black Lake
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 text-[--color-sunset-orange] mb-4">
              <Heart size={24} />
              <span className="font-semibold">Family-Owned Since the 1920s</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-lake-blue] mb-6">
              A Black Lake Tradition
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none text-[--color-muted-foreground]"
          >
            <p className="text-lg leading-relaxed mb-6">
              For over 90 years, McLear&apos;s Cottage Colony has been welcoming families, anglers, and nature lovers 
              to the beautiful shores of Black Lake. What started as a small family operation in the 1920s has 
              grown into one of the most beloved destinations in the Thousand Islands region.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Through the decades, we&apos;ve watched generations of families return year after year—children who 
              first visited with their parents now bring their own kids to experience the same magic. The 
              traditions continue: early morning fishing trips, lazy afternoons on the dock, evenings gathered 
              around sharing stories of the day&apos;s catch.
            </p>
            <p className="text-lg leading-relaxed">
              We&apos;ve grown and improved over the years, but our commitment remains the same: provide a warm, 
              welcoming place where families can escape the everyday and create lasting memories together. 
              That&apos;s the McLear&apos;s way, and it always will be.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-[--color-soft-gray]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[--color-lake-blue]/10 flex items-center justify-center">
                    <Users className="w-8 h-8 text-[--color-lake-blue]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[--color-lake-blue] mb-3">Family First</h3>
                  <p className="text-[--color-muted-foreground]">
                    We&apos;re a family running a resort for families. Your kids are safe, your pets are welcome, 
                    and everyone is treated like an old friend.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[--color-lake-blue]/10 flex items-center justify-center">
                    <Fish className="w-8 h-8 text-[--color-lake-blue]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[--color-lake-blue] mb-3">Fishing Heritage</h3>
                  <p className="text-[--color-muted-foreground]">
                    Black Lake is renowned for world-class bass fishing. We&apos;ve hosted tournaments and 
                    welcomed anglers for nearly a century.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[--color-lake-blue]/10 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-[--color-lake-blue]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[--color-lake-blue] mb-3">Simple Pleasures</h3>
                  <p className="text-[--color-muted-foreground]">
                    No fancy amenities needed. Just clean cottages, beautiful water, good fishing, and the 
                    peace that comes from being away from it all.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Heritage Timeline Section */}
      <HeritageTimeline />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[--color-lake-blue] mb-4">
            Be Part of Our Story
          </h2>
          <p className="text-xl text-[--color-muted-foreground] mb-8">
            Join the generations of families who&apos;ve made McLear&apos;s their home away from home
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
              className="border-[--color-lake-blue] text-[--color-lake-blue] hover:bg-[--color-lake-blue] hover:text-white text-lg px-8"
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

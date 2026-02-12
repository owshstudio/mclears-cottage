'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { History } from 'lucide-react';

interface TimelineEra {
  decade: string;
  year?: string;
  title: string;
  description: string;
  images: {
    src: string;
    caption: string;
  }[];
}

const timelineData: TimelineEra[] = [
  {
    decade: '1920s',
    title: 'The Beginning',
    description: 'McLear\'s Cottage Colony is founded on the pristine shores of Black Lake. The early days saw simple accommodations and the beginning of a family legacy that would span nearly a century.',
    images: [
      { src: '/images/history/20BroadLakeView.jpg', caption: 'Broad Lake View - Early 1920s' },
      { src: '/images/history/26shoreline.jpg', caption: 'The shoreline, 1926' },
    ],
  },
  {
    decade: '1940s',
    title: 'Growth & Community',
    description: 'The resort expands with new facilities including the ice house. The campground grows as families begin returning year after year, establishing traditions that continue to this day.',
    images: [
      { src: '/images/history/40IceHouse.jpg', caption: 'The Ice House, 1940s' },
      { src: '/images/history/40sground.jpg', caption: 'Campground grounds, 1940s' },
      { src: '/images/history/48maindock.jpg', caption: 'Main dock, 1948' },
    ],
  },
  {
    decade: '1950s',
    title: 'The Golden Era',
    description: 'Black Lake becomes known as a premier fishing destination. The resort buzzes with activity as the post-war generation discovers the magic of lakeside vacations.',
    images: [
      { src: '/images/history/50sDaddyO.jpg', caption: 'The Daddy-O, 1950s' },
      { src: '/images/history/50sdock.jpg', caption: 'Dock life, 1950s' },
      { src: '/images/history/50ChuckWaller.jpg', caption: 'Chuck Waller with his catch' },
    ],
  },
  {
    decade: '1960s',
    title: 'Family & Fun',
    description: 'A vibrant decade of family gatherings, summer dances, and growing traditions. The resort becomes a beloved destination for multiple generations of families.',
    images: [
      { src: '/images/history/60EarlyDaddyO.jpg', caption: 'Early Daddy-O restaurant' },
      { src: '/images/history/60sSenecalGirls.jpg', caption: 'The Senecal girls, summer 1960s' },
      { src: '/images/history/62Grandpa.jpg', caption: 'Grandpa McLear, 1962' },
      { src: '/images/history/62TheTwist.jpg', caption: 'Dancing "The Twist", 1962' },
    ],
  },
  {
    decade: '1970s',
    title: 'Lake Life',
    description: 'Sailing regattas and fishing tournaments put Black Lake on the map. McLear\'s becomes the gathering place for the lake community.',
    images: [
      { src: '/images/history/76regatta.jpg', caption: 'Sailing regatta, 1976' },
      { src: '/images/history/64wagon.jpg', caption: 'The camp wagon' },
    ],
  },
  {
    decade: '1980s-90s',
    title: 'Continuing the Legacy',
    description: 'A new generation takes the helm while honoring the traditions established by those who came before. The resort continues to welcome families old and new.',
    images: [
      { src: '/images/history/80Aug.jpg', caption: 'Summer gathering, August 1980' },
      { src: '/images/history/83dinner.jpg', caption: 'Family dinner, 1983' },
      { src: '/images/history/91BobBuckland.jpg', caption: 'Bob Buckland, 1991' },
    ],
  },
  {
    decade: 'Today',
    title: 'Still Family-Owned',
    description: 'Over 90 years later, McLear\'s remains a family operation. We continue to welcome new guests while cherishing the return of families who\'ve been coming for generations.',
    images: [
      { src: '/images/history/melanddog.jpg', caption: 'Mel & friend' },
      { src: '/images/history/hiscottages.jpg', caption: 'Our historic cottages' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function HeritageTimeline() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[--color-warm-white] to-[--color-soft-gray]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-[--color-sunset-orange] mb-4">
            <History size={24} />
            <span className="font-semibold">Our Heritage</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[--color-lake-blue] mb-4">
            90+ Years of Memories
          </h2>
          <p className="text-lg text-[--color-muted-foreground] max-w-2xl mx-auto">
            From humble beginnings in the 1920s to today, McLear&apos;s has been creating lasting memories for generations of families.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          {/* Vertical line - hidden on mobile, shown on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[--color-sunset-orange] via-[--color-lake-blue] to-[--color-forest-green] -translate-x-1/2 rounded-full" />

          {/* Timeline items */}
          <div className="space-y-16 md:space-y-24">
            {timelineData.map((era, index) => (
              <motion.div
                key={era.decade}
                variants={itemVariants}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8 md:gap-12`}
              >
                {/* Content side */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-[--color-border]">
                    <span className="inline-block text-3xl md:text-4xl font-bold text-[--color-sunset-orange] mb-2">
                      {era.decade}
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold text-[--color-lake-blue] mb-3">
                      {era.title}
                    </h3>
                    <p className="text-[--color-muted-foreground] leading-relaxed">
                      {era.description}
                    </p>
                  </div>
                </div>

                {/* Center dot - hidden on mobile, shown on md+ */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[--color-lake-blue] rounded-full border-4 border-white shadow-lg z-10 items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                {/* Mobile timeline dot */}
                <div className="md:hidden absolute left-0 top-0 w-4 h-4 bg-[--color-sunset-orange] rounded-full border-2 border-white shadow" />

                {/* Images side */}
                <div className="flex-1 w-full">
                  <div className={`grid gap-3 ${
                    era.images.length === 1 
                      ? 'grid-cols-1' 
                      : era.images.length === 2 
                        ? 'grid-cols-2' 
                        : 'grid-cols-2'
                  }`}>
                    {era.images.slice(0, 4).map((image, imgIndex) => (
                      <motion.div
                        key={image.src}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: imgIndex * 0.1 }}
                        className={`relative group ${
                          era.images.length === 3 && imgIndex === 2 ? 'col-span-2' : ''
                        } ${
                          era.images.length === 1 ? 'max-w-md mx-auto' : ''
                        }`}
                      >
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                          <Image
                            src={image.src}
                            alt={image.caption}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500 sepia-[0.15] hover:sepia-0"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-sm font-medium drop-shadow-lg">{image.caption}</p>
                          </div>
                        </div>
                        {/* Static caption for accessibility */}
                        <p className="mt-2 text-xs text-[--color-muted-foreground] text-center md:hidden">
                          {image.caption}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* End flourish */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex justify-center mt-12"
          >
            <div className="w-12 h-12 bg-[--color-forest-green] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-lg">♥</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-[--color-lake-blue] rounded-2xl text-white"
        >
          <p className="text-xl md:text-2xl font-medium mb-2">
            &ldquo;We&apos;re not just a resort — we&apos;re a family tradition.&rdquo;
          </p>
          <p className="text-white/80">
            Join the generations of families who call McLear&apos;s home.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

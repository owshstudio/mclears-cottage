'use client';

import { motion } from 'framer-motion';
import { 
  Fish, 
  Waves, 
  Sailboat, 
  Flame, 
  TreeDeciduous, 
  Heart 
} from 'lucide-react';

const activities = [
  {
    icon: Fish,
    title: 'Fishing',
    tagline: 'Black Lake\'s famous bass & pike',
  },
  {
    icon: Waves,
    title: 'Swimming',
    tagline: 'Crystal clear waters await',
  },
  {
    icon: Sailboat,
    title: 'Boating & Kayaking',
    tagline: 'Explore every cove',
  },
  {
    icon: Flame,
    title: 'Campfires & S\'mores',
    tagline: 'Stories under the stars',
  },
  {
    icon: TreeDeciduous,
    title: 'Wildlife & Nature',
    tagline: 'Eagles, deer & more',
  },
  {
    icon: Heart,
    title: 'Family Time',
    tagline: 'Unplug & reconnect',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ActivityIcons() {
  return (
    <section className="py-16 px-4 bg-[--color-warm-white]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[--color-lake-blue] mb-3">
            Things to Do
          </h2>
          <p className="text-[--color-muted-foreground] text-lg">
            Your adventure starts here
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
        >
          {activities.map((activity) => (
            <motion.div
              key={activity.title}
              variants={itemVariants}
              className="group flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 mb-4 rounded-full bg-[--color-lake-blue]/10 flex items-center justify-center group-hover:bg-[--color-sunset-orange]/15 transition-colors duration-300">
                <activity.icon 
                  className="w-8 h-8 text-[--color-lake-blue] group-hover:text-[--color-sunset-orange] transition-colors duration-300" 
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg font-semibold text-[--color-lake-blue] mb-1">
                {activity.title}
              </h3>
              <p className="text-sm text-[--color-muted-foreground]">
                {activity.tagline}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

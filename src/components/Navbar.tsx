'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/accommodations', label: 'Accommodations' },
  { href: '/boats', label: 'Boats' },
  { href: '/visit', label: 'Plan Your Visit' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/mclogo2.gif"
              alt="McLear's Cottage Colony"
              width={60}
              height={60}
              className="h-14 w-auto"
            />
            <div className="hidden sm:block">
              <span className="text-[--color-lake-blue] font-bold text-xl">McLear&apos;s</span>
              <span className="block text-xs text-[--color-muted-foreground]">Cottage Colony</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[--color-lake-blue] hover:text-[--color-sunset-orange] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:315-375-6508"
              className="flex items-center gap-2 bg-[--color-sunset-orange] text-white px-4 py-2 rounded-lg hover:bg-[--color-sunset-gold] transition-colors"
            >
              <Phone size={18} />
              <span className="hidden lg:inline">(315) 375-6508</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[--color-lake-blue]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-[--color-lake-blue] hover:text-[--color-sunset-orange] font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:315-375-6508"
                className="flex items-center justify-center gap-2 bg-[--color-sunset-orange] text-white px-4 py-3 rounded-lg mt-4"
              >
                <Phone size={18} />
                <span>(315) 375-6508</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Fish } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[--color-lake-blue] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/mclogo2.gif"
                alt="McLear's Cottage Colony"
                width={50}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
              <div>
                <span className="font-bold text-xl">McLear&apos;s</span>
                <span className="block text-xs text-white/90">Cottage Colony & Campground</span>
              </div>
            </div>
            <p className="text-white text-sm">
              Black Lake&apos;s favorite destination since the 1920s. Family-owned and operated for over 90 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/accommodations" className="text-white hover:text-[--color-sunset-gold] transition-colors">
                  Accommodations
                </Link>
              </li>
              <li>
                <Link href="/boats" className="text-white hover:text-[--color-sunset-gold] transition-colors">
                  Boat Rentals
                </Link>
              </li>
              <li>
                <Link href="/visit" className="text-white hover:text-[--color-sunset-gold] transition-colors">
                  Plan Your Visit
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-[--color-sunset-gold] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-[--color-sunset-gold] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[--color-sunset-gold]" />
                <span className="text-white text-sm">
                  2477 County Route #6<br />
                  Hammond, NY 13646
                </span>
              </li>
              <li>
                <a href="tel:315-375-6508" className="flex items-center gap-3 text-white hover:text-[--color-sunset-gold] transition-colors">
                  <Phone size={18} className="text-[--color-sunset-gold]" />
                  <span>(315) 375-6508</span>
                </a>
              </li>
              <li>
                <a href="mailto:gofishin@mclears.com" className="flex items-center gap-3 text-white hover:text-[--color-sunset-gold] transition-colors">
                  <Mail size={18} className="text-[--color-sunset-gold]" />
                  <span>gofishin@mclears.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Tagline */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-4">Come Fish With Us!</h3>
              <p className="text-white text-sm mb-4">
                Experience the beauty of Black Lake. Perfect for families, fishing enthusiasts, and anyone looking to relax.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[--color-sunset-gold]">
              <Fish size={24} />
              <span className="font-medium">Black Lake, NY</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/90 text-sm">
          <p>© {new Date().getFullYear()} McLear&apos;s Cottage Colony. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

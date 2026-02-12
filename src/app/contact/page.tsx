'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const accommodationOptions = [
  'Lakefront 2-Bedroom Cottage',
  'Lakefront 3-4 Bedroom Cottage',
  'Non-Lakefront Cottage',
  'Camping Cabin',
  'RV Site',
  'Tent Camping',
  'Boat Rental Only',
  'Not Sure Yet'
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    accommodation: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Basic validation
    if (!formState.name || !formState.email || !formState.message) {
      setError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setError('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission (replace with actual form handler like Formspree)
    try {
      // For now, simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/gal18.jpg"
          alt="Contact McLear's Cottage Colony"
          fill
          className="object-cover scale-105"
          style={{ filter: 'blur(0.5px)' }}
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
            Contact Us
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto drop-shadow-lg [text-shadow:_0_2px_8px_rgb(0_0_0_/_50%)]">
            We&apos;d love to hear from you!
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-[--color-lake-blue] text-2xl">Send Us a Message</CardTitle>
                  <p className="text-[--color-muted-foreground]">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[--color-forest-green]/10 flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-[--color-forest-green]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[--color-lake-blue] mb-2">Message Sent!</h3>
                      <p className="text-[--color-muted-foreground] mb-6">
                        Thank you for contacting us. We&apos;ll get back to you within 24-48 hours.
                      </p>
                      <Button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormState({
                            name: '',
                            email: '',
                            phone: '',
                            dates: '',
                            accommodation: '',
                            message: ''
                          });
                        }}
                        variant="outline"
                        className="border-[--color-lake-blue] text-[--color-lake-blue]"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formState.phone}
                            onChange={handleChange}
                            placeholder="(555) 555-5555"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dates">Preferred Dates</Label>
                          <Input
                            id="dates"
                            name="dates"
                            value={formState.dates}
                            onChange={handleChange}
                            placeholder="e.g., July 4-11, 2026"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="accommodation">Accommodation Preference</Label>
                        <select
                          id="accommodation"
                          name="accommodation"
                          value={formState.accommodation}
                          onChange={handleChange}
                          className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select an option...</option>
                          {accommodationOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Tell us about your trip plans, questions, or special requests..."
                          rows={5}
                          required
                        />
                      </div>

                      {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm">
                          {error}
                        </div>
                      )}

                      <Button
                        type="submit"
                        className="w-full bg-[--color-sunset-orange] hover:bg-[--color-sunset-gold] text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send size={18} />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-[--color-lake-blue] mb-6">Get in Touch</h2>
                <p className="text-[--color-muted-foreground] mb-8">
                  Have questions about accommodations, boat rentals, or anything else? 
                  We&apos;re happy to help! Reach out by phone, email, or the contact form.
                </p>
              </div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[--color-lake-blue]/10 flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-[--color-lake-blue]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[--color-lake-blue] mb-1">Phone</h3>
                        <a 
                          href="tel:315-375-6508" 
                          className="text-lg text-[--color-sunset-orange] hover:text-[--color-sunset-gold] transition-colors font-medium"
                        >
                          (315) 375-6508
                        </a>
                        <p className="text-sm text-[--color-muted-foreground] mt-1">
                          Best way to reach us!
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[--color-lake-blue]/10 flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6 text-[--color-lake-blue]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[--color-lake-blue] mb-1">Email</h3>
                        <a 
                          href="mailto:gofishin@mclears.com" 
                          className="text-lg text-[--color-sunset-orange] hover:text-[--color-sunset-gold] transition-colors font-medium"
                        >
                          gofishin@mclears.com
                        </a>
                        <p className="text-sm text-[--color-muted-foreground] mt-1">
                          We&apos;ll respond within 24-48 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[--color-lake-blue]/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6 text-[--color-lake-blue]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[--color-lake-blue] mb-1">Address</h3>
                        <p className="text-[--color-muted-foreground]">
                          2477 County Route #6<br />
                          Hammond, NY 13646
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[--color-lake-blue]/10 flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 text-[--color-lake-blue]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[--color-lake-blue] mb-1">Office Hours</h3>
                        <p className="text-[--color-muted-foreground]">
                          Seasonal operation<br />
                          Call for current hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-[--color-soft-gray]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-lake-blue] mb-4">
              Find Us on Black Lake
            </h2>
            <p className="text-[--color-muted-foreground]">
              Located in beautiful Hammond, NY
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
    </div>
  );
}

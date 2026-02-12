# McLear's Website — Design Spec for Build

## Overview
Modern, clean redesign for a family-owned cottage colony on Black Lake, NY. 90+ years in business. Target: families and fishing enthusiasts.

## Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui (for buttons, forms, cards, inputs — clean, accessible)
- **Animations:** Framer Motion (smooth page transitions, hover effects, scroll animations)
- **Icons:** Lucide React (clean, consistent icon set)
- **Deployment:** Vercel
- **No CMS initially** — static content, can add Sanity later if needed

## Brand
- **Name:** McLear's Cottage Colony and Campground
- **Tagline:** "Black Lake's Favorite Destination"
- **Vibe:** Warm, welcoming, family-owned, nature-focused, nostalgic but modern
- **Colors (suggested):**
  - Primary: Deep lake blue (#1e3a5f or similar)
  - Accent: Warm sunset orange/gold (#d97706)
  - Neutral: Warm whites, soft grays
  - Nature greens for accents

## Assets to Pull from Current Site
Base URL: `https://www.mclears.com/`

**Logo:**
- mclogo.gif
- mclogo2.gif  
- mclogo3.gif

**Hero/Featured:**
- aerial1000.jpg (aerial view - primary hero candidate)
- 0home1R.jpg, 0home2R.jpg, 0home3R.jpg

**Gallery (18 images):**
- gal01.jpg through gal18.jpg

**Live Cam (embed):**
- https://camstreamer.com/embed/FtJ7jCCGJQNHKnZT8yAU2gt1UgawX9ONvuzn1hu1

**YouTube Video:**
- https://www.youtube.com/embed/2KFP4vbO0Tw

## Site Structure (6 pages)

### 1. Home (`/`)
**Hero Section:**
- Full-width aerial image
- Headline: "Welcome to McLear's"
- Subhead: "Black Lake's Favorite Destination Since the 1920s"
- CTA button: "View Accommodations" → /accommodations

**Intro Section:**
- Brief welcome text (2-3 sentences about family-owned, 90+ years)
- 3 feature cards: Cottages | Camping | Boat Rentals

**Quick Info Section:**
- Address, phone, email
- Season dates (if applicable)
- "Contact Us" CTA

**Live Cam Section:**
- Embed Camstreamer feed (shows lake/dock view)
- Caption: "Live from Black Lake"

**Featured Gallery:**
- 3-4 best photos from gallery

### 2. Accommodations (`/accommodations`)
**Hero:** Lake/cottage image with "Our Accommodations" headline

**Cottages Section:**
Grid or cards showing cottage types:
- Lakefront 2-bedroom ($830/week)
- Lakefront 3-4 bedroom ($890/week)
- Non-lakefront options

Each card shows:
- Photo (from gallery)
- Name/number
- Bedrooms, beds, capacity
- Key amenities icons (kitchen, TV, heat, shower)
- Price per week

**Camping Cabins Section:**
- 4 cabins, $360-420/week
- Note: no kitchen/bathroom, beds only

**RV & Tent Camping Section:**
- RV sites available with hookups
- Tent camping available
- Include pricing if known (check rate sheet)
- Access to resort amenities (bathrooms, dock, etc.)

**What's Included:**
- Kitchen w/ dishes, utensils, pots, pans
- Microwave, coffee maker, toaster
- Cable TV, heat, shower
- NOT included: towels, linens, pillows (BYOB)

**CTA:** "Ready to Book? Contact Us"

### 3. Boat Rentals (`/boats`)
**Simple page:**
- 14' boats: $20/day, $100/week
- With 9.8-9.9hp motor: $100/day, $400/week
- With 15hp motor: $125/day, $450/week

**Requirements:**
- Must be 18+ or have NYS boater safety certificate
- Includes anchor, oars, cushions, PFDs

**CTA:** Contact to reserve

### 4. Plan Your Visit (`/visit`)
**Consolidated info page:**

**Check-in/Check-out:**
- Check-in: 1:00 PM
- Check-out: 10:00 AM

**Reservations:**
- $200 deposit (week) / $100 (weekend)
- 15% refund fee
- No refunds after April 1

**What to Bring:**
- Pillows, sheets, blankets, towels
- Lawn chairs, beach towels
- Fishing gear, bathing suits
- Casual clothes only!

**Pet Policy:**
- $10/night or $50/week per pet
- Must be leashed at all times
- Max 2 pets
- Current rabies certificate required

**Rules Highlights:**
- Quiet hours: 11 PM - 7 AM
- 5 MPH speed limit on roads
- No firearms or fireworks
- Clean fish only in fish cleaning building

**Fish Bone Cafe Section:**
- On-site cafe serving breakfast
- Note: breakfast only for 2026 season
- Include the personality copy from current site (casual, welcoming vibe)

**Location & Map:**
- Embed Google Map
- Address: 2477 County Route #6, Hammond, NY 13646

### 5. Contact (`/contact`)
**Contact Form:**
- Name
- Email
- Phone
- Message
- Preferred dates (optional)
- Cottage/cabin preference (optional dropdown)

**Direct Contact:**
- Phone: (315) 375-6508
- Email: gofishin@mclears.com
- Address with map embed

**Hours:** (if applicable)

## Components to Build

1. **Navbar** — Logo, nav links, mobile hamburger
2. **Hero** — Full-width image with overlay text
3. **FeatureCard** — Icon, title, short description
4. **AccommodationCard** — Image, title, details, price
5. **InfoSection** — Two-column text + image
6. **ContactForm** — Form with validation
7. **Footer** — Logo, links, contact info, copyright

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## SEO Basics
- Title: "McLear's Cottage Colony | Black Lake, NY Vacation Rentals"
- Description: "Family-owned cottage colony and campground on Black Lake, NY. Lakefront cottages, camping cabins, and boat rentals. Book your fishing vacation today."
- Include structured data for LocalBusiness

## Forms
Contact form should:
- Send email to gofishin@mclears.com (or use Formspree/similar for MVP)
- Show success message on submit
- Basic validation (required fields, email format)

## Notes
- No online booking system — contact form and phone only
- Keep it simple, scannable, mobile-friendly
- Warm and inviting, not corporate
- Photos do the heavy lifting — let them breathe

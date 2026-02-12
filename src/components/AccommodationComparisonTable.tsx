'use client';

import { motion } from 'framer-motion';
import { 
  UtensilsCrossed, 
  ShowerHead, 
  Waves, 
  Bed, 
  Home, 
  Tent,
  Check,
  X
} from 'lucide-react';

// All accommodation data
const accommodations = [
  // Lakefront 3-4 Bedroom Cottages
  { id: '1', name: 'Cottage #1', type: 'Cottage', bedrooms: 4, lakefront: true, weeklyRate: '$930', features: { kitchen: true, bathroom: true, lakeView: true } },
  { id: '4', name: 'Cottage #4', type: 'Cottage', bedrooms: 3, lakefront: true, weeklyRate: '$890', features: { kitchen: true, bathroom: true, lakeView: true } },
  { id: '14', name: 'Cottage #14', type: 'Cottage', bedrooms: 3, lakefront: true, weeklyRate: '$890', features: { kitchen: true, bathroom: true, lakeView: true } },
  { id: '15', name: 'Cottage #15', type: 'Cottage', bedrooms: 3, lakefront: true, weeklyRate: '$890', features: { kitchen: true, bathroom: true, lakeView: true } },
  
  // Lakefront 2-Bedroom Cottages
  { id: '2', name: 'Cottage #2', type: 'Cottage', bedrooms: 2, lakefront: true, weeklyRate: '$870', features: { kitchen: true, bathroom: true, lakeView: true } },
  { id: '3', name: 'Cottage #3', type: 'Cottage', bedrooms: 2, lakefront: true, weeklyRate: '$870', features: { kitchen: true, bathroom: true, lakeView: true } },
  { id: '5', name: 'Cottage #5', type: 'Cottage', bedrooms: 2, lakefront: true, weeklyRate: '$830', features: { kitchen: true, bathroom: true, lakeView: true } },
  { id: '16', name: 'Cottage #16', type: 'Cottage', bedrooms: 2, lakefront: true, weeklyRate: '$830', features: { kitchen: true, bathroom: true, lakeView: true } },
  { id: '17', name: 'Cottage #17', type: 'Cottage', bedrooms: 2, lakefront: true, weeklyRate: '$830', features: { kitchen: true, bathroom: true, lakeView: true } },
  
  // Non-Lakefront Cottages
  { id: '6', name: 'Cottage #6', type: 'Cottage', bedrooms: 3, lakefront: false, weeklyRate: '$890', features: { kitchen: true, bathroom: true, lakeView: false } },
  { id: '7', name: 'Cottage #7', type: 'Cottage', bedrooms: 2, lakefront: false, weeklyRate: '$830', features: { kitchen: true, bathroom: true, lakeView: false } },
  { id: '9', name: 'Cottage #9', type: 'Cottage', bedrooms: 4, lakefront: false, weeklyRate: '$930', features: { kitchen: true, bathroom: true, lakeView: false } },
  { id: '10', name: 'Cottage #10', type: 'Cottage', bedrooms: 2, lakefront: false, weeklyRate: '$830', features: { kitchen: true, bathroom: true, lakeView: false } },
  
  // Camping Cabins
  { id: 'cabin-1', name: 'Cabin A', type: 'Cabin', bedrooms: 1, lakefront: false, weeklyRate: '$360-420', nightlyRate: '$95-125', features: { kitchen: false, bathroom: false, lakeView: false } },
  { id: 'cabin-2', name: 'Cabin B', type: 'Cabin', bedrooms: 1, lakefront: false, weeklyRate: '$360-420', nightlyRate: '$95-125', features: { kitchen: false, bathroom: false, lakeView: false } },
  { id: 'cabin-3', name: 'Cabin C', type: 'Cabin', bedrooms: 1, lakefront: false, weeklyRate: '$360-420', nightlyRate: '$95-125', features: { kitchen: false, bathroom: false, lakeView: false } },
  { id: 'cabin-4', name: 'Cabin D', type: 'Cabin', bedrooms: 1, lakefront: false, weeklyRate: '$360-420', nightlyRate: '$95-125', features: { kitchen: false, bathroom: false, lakeView: false } },
];

// Feature icon component
function FeatureIcon({ 
  available, 
  icon: Icon, 
  label 
}: { 
  available: boolean; 
  icon: React.ComponentType<{ size?: number; className?: string }>; 
  label: string;
}) {
  return (
    <div 
      className={`flex items-center justify-center w-8 h-8 rounded-full ${
        available 
          ? 'bg-[--color-forest-green]/10 text-[--color-forest-green]' 
          : 'bg-gray-100 text-gray-300'
      }`}
      title={available ? label : `No ${label.toLowerCase()}`}
    >
      <Icon size={16} />
    </div>
  );
}

// Mobile card component
function AccommodationCard({ accommodation }: { accommodation: typeof accommodations[0] }) {
  const isCottage = accommodation.type === 'Cottage';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2">
            {isCottage ? (
              <Home size={18} className="text-[--color-lake-blue]" />
            ) : (
              <Tent size={18} className="text-[--color-sunset-orange]" />
            )}
            <h3 className="font-semibold text-[--color-lake-blue]">{accommodation.name}</h3>
          </div>
          <p className="text-sm text-[--color-muted-foreground]">{accommodation.type}</p>
        </div>
        {accommodation.lakefront && (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
            <Waves size={12} />
            Lakefront
          </span>
        )}
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <p className="text-xs text-[--color-muted-foreground]">Bedrooms</p>
          <p className="font-medium flex items-center gap-1">
            <Bed size={14} />
            {accommodation.bedrooms}
          </p>
        </div>
        <div>
          <p className="text-xs text-[--color-muted-foreground]">Weekly Rate</p>
          <p className="font-bold text-[--color-sunset-orange]">{accommodation.weeklyRate}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
        <span className="text-xs text-[--color-muted-foreground] mr-1">Features:</span>
        <FeatureIcon available={accommodation.features.kitchen} icon={UtensilsCrossed} label="Kitchen" />
        <FeatureIcon available={accommodation.features.bathroom} icon={ShowerHead} label="Bathroom" />
        <FeatureIcon available={accommodation.features.lakeView} icon={Waves} label="Lake View" />
      </div>
      
      {'nightlyRate' in accommodation && accommodation.nightlyRate && (
        <p className="text-xs text-[--color-muted-foreground] mt-3 pt-3 border-t border-gray-100">
          Nightly: <span className="font-medium">{accommodation.nightlyRate}</span>
        </p>
      )}
    </motion.div>
  );
}

export default function AccommodationComparisonTable() {
  const cottages = accommodations.filter(a => a.type === 'Cottage');
  const cabins = accommodations.filter(a => a.type === 'Cabin');
  
  return (
    <section className="py-16 px-4 bg-[--color-soft-gray]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[--color-lake-blue] mb-3">
            Compare All Accommodations
          </h2>
          <p className="text-[--color-muted-foreground] max-w-2xl mx-auto">
            Find the perfect fit for your Black Lake getaway at a glance
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[--color-forest-green]/10 flex items-center justify-center">
              <UtensilsCrossed size={12} className="text-[--color-forest-green]" />
            </div>
            <span className="text-[--color-muted-foreground]">Kitchen</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[--color-forest-green]/10 flex items-center justify-center">
              <ShowerHead size={12} className="text-[--color-forest-green]" />
            </div>
            <span className="text-[--color-muted-foreground]">Bathroom</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[--color-forest-green]/10 flex items-center justify-center">
              <Waves size={12} className="text-[--color-forest-green]" />
            </div>
            <span className="text-[--color-muted-foreground]">Lake View</span>
          </div>
        </motion.div>

        {/* Desktop Table */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
          >
            <table className="w-full">
              <thead>
                <tr className="bg-[--color-lake-blue] text-white">
                  <th className="px-6 py-4 text-left font-semibold">Name</th>
                  <th className="px-4 py-4 text-center font-semibold">Type</th>
                  <th className="px-4 py-4 text-center font-semibold">Bedrooms</th>
                  <th className="px-4 py-4 text-center font-semibold">Lakefront</th>
                  <th className="px-4 py-4 text-center font-semibold">Weekly Rate</th>
                  <th className="px-6 py-4 text-center font-semibold">Features</th>
                </tr>
              </thead>
              <tbody>
                {/* Cottages Section Header */}
                <tr className="bg-blue-50">
                  <td colSpan={6} className="px-6 py-3">
                    <div className="flex items-center gap-2 font-semibold text-[--color-lake-blue]">
                      <Home size={18} />
                      <span>Cottages ({cottages.length})</span>
                    </div>
                  </td>
                </tr>
                {cottages.map((accommodation, index) => (
                  <tr 
                    key={accommodation.id} 
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                  >
                    <td className="px-6 py-4">
                      <span className="font-medium text-[--color-lake-blue]">{accommodation.name}</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                        Cottage
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="inline-flex items-center gap-1">
                        <Bed size={14} className="text-[--color-muted-foreground]" />
                        {accommodation.bedrooms}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      {accommodation.lakefront ? (
                        <span className="inline-flex items-center gap-1 text-[--color-forest-green]">
                          <Check size={18} />
                          <span className="sr-only">Yes</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-gray-300">
                          <X size={18} />
                          <span className="sr-only">No</span>
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="font-bold text-[--color-sunset-orange]">{accommodation.weeklyRate}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <FeatureIcon available={accommodation.features.kitchen} icon={UtensilsCrossed} label="Kitchen" />
                        <FeatureIcon available={accommodation.features.bathroom} icon={ShowerHead} label="Bathroom" />
                        <FeatureIcon available={accommodation.features.lakeView} icon={Waves} label="Lake View" />
                      </div>
                    </td>
                  </tr>
                ))}
                
                {/* Cabins Section Header */}
                <tr className="bg-amber-50">
                  <td colSpan={6} className="px-6 py-3">
                    <div className="flex items-center gap-2 font-semibold text-[--color-sunset-orange]">
                      <Tent size={18} />
                      <span>Camping Cabins ({cabins.length})</span>
                      <span className="ml-2 text-sm font-normal text-[--color-muted-foreground]">
                        — 12×12 room, beds only (access to resort facilities)
                      </span>
                    </div>
                  </td>
                </tr>
                {cabins.map((accommodation, index) => (
                  <tr 
                    key={accommodation.id} 
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                  >
                    <td className="px-6 py-4">
                      <span className="font-medium text-[--color-lake-blue]">{accommodation.name}</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">
                        Cabin
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="inline-flex items-center gap-1 text-[--color-muted-foreground]">
                        <Bed size={14} />
                        1 room
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="inline-flex items-center gap-1 text-gray-300">
                        <X size={18} />
                        <span className="sr-only">No</span>
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div>
                        <span className="font-bold text-[--color-sunset-orange]">{accommodation.weeklyRate}</span>
                        {'nightlyRate' in accommodation && accommodation.nightlyRate && (
                          <p className="text-xs text-[--color-muted-foreground] mt-1">
                            {accommodation.nightlyRate}/night
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <FeatureIcon available={accommodation.features.kitchen} icon={UtensilsCrossed} label="Kitchen" />
                        <FeatureIcon available={accommodation.features.bathroom} icon={ShowerHead} label="Bathroom" />
                        <FeatureIcon available={accommodation.features.lakeView} icon={Waves} label="Lake View" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {/* Cottages */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home size={20} className="text-[--color-lake-blue]" />
              <h3 className="font-semibold text-lg text-[--color-lake-blue]">Cottages ({cottages.length})</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {cottages.map((accommodation) => (
                <AccommodationCard key={accommodation.id} accommodation={accommodation} />
              ))}
            </div>
          </div>
          
          {/* Cabins */}
          <div className="pt-4">
            <div className="flex items-center gap-2 mb-2">
              <Tent size={20} className="text-[--color-sunset-orange]" />
              <h3 className="font-semibold text-lg text-[--color-lake-blue]">Camping Cabins ({cabins.length})</h3>
            </div>
            <p className="text-sm text-[--color-muted-foreground] mb-4">
              12×12 room with beds only — access to resort bathrooms & showers
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {cabins.map((accommodation) => (
                <AccommodationCard key={accommodation.id} accommodation={accommodation} />
              ))}
            </div>
          </div>
        </div>

        {/* Quick summary note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-[--color-muted-foreground]"
        >
          <p>
            All cottage rates are for 1-4 guests. Additional guests $20-40/week extra. 
            <span className="hidden sm:inline"> • </span>
            <br className="sm:hidden" />
            Prices subject to 3% bed tax.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

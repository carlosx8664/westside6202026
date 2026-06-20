import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, MapPin, Sparkles, SlidersHorizontal, BookOpen, MessageSquare } from 'lucide-react';
import { CARNIVAL_EVENTS } from '../data';
import { EventCategory, CarnivalEvent } from '../types';

export default function Events() {
  const [activeFilter, setActiveFilter] = useState<EventCategory>('all');

  const categories: { key: EventCategory; label: string }[] = [
    { key: 'all', label: 'All Events' },
    { key: 'adults', label: "Adults' Events" },
    { key: 'kids', label: "Kids' Entertainment" },
    { key: 'music', label: 'Musical Performances' },
  ];

  const filteredEvents = activeFilter === 'all'
    ? CARNIVAL_EVENTS
    : CARNIVAL_EVENTS.filter(event => event.category === activeFilter);

  return (
    <section id="events" className="py-24 bg-amber-500 text-black relative overflow-hidden border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="inline-block bg-black text-yellow-300 border-2 border-black font-mono font-black tracking-widest text-[10px] uppercase px-3 py-1.5 shadow-brutal-sm-black mb-3">THE 2026 CALENDAR</span>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-black uppercase tracking-tighter leading-none" id="events-section-heading">
              Official Schedule
            </h2>
            <p className="text-black font-bold text-sm sm:text-base mt-3">
              Mark your calendar and experience the absolute zenith of West African masquerading, brass harmonics, and family festivals.
            </p>
          </div>

          {/* Interactive Filtering Navigation */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" id="events-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-tight transition-all duration-200 cursor-pointer whitespace-nowrap border-2 border-black shadow-brutal-sm-black focus:outline-none ${
                  activeFilter === cat.key
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-yellow-400'
                }`}
                id={`filter-btn-${cat.key}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="events-grid">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event: CarnivalEvent) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={event.id}
                className="bg-white border-4 border-black rounded-[2rem] overflow-hidden flex flex-col h-full group hover-brutal transition-all duration-300 shadow-brutal-black text-black"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#7c3aed] border-b-4 border-black">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="bg-black text-white border border-white text-[9px] font-mono font-black tracking-widest px-2.5 py-1 rounded uppercase">
                      {event.category.toUpperCase()}
                    </span>
                    {event.popular && (
                      <span className="bg-red-600 border border-black text-white text-[9px] font-mono font-black tracking-widest px-2.5 py-1 rounded flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        POPULAR
                      </span>
                    )}
                  </div>

                  {/* Pricing tag */}
                  <div className="absolute bottom-3 right-3 bg-yellow-400 border-2 border-black text-black text-xs font-black px-3 py-1 rounded-lg uppercase shadow-brutal-sm-black">
                    {event.price}
                  </div>
                </div>

                {/* Event Metadata Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display font-black text-xl sm:text-2xl text-black uppercase tracking-tight mt-1 line-clamp-1">
                    {event.title}
                  </h3>
                  
                  <p className="text-slate-800 text-xs sm:text-sm mt-3 flex-grow line-clamp-3 leading-relaxed font-semibold">
                    {event.description}
                  </p>

                  {/* Operational details panel */}
                  <div className="mt-6 pt-5 border-t-2 border-black space-y-2.5">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-black font-black">
                      <Calendar className="w-4 h-4 text-orange-600 shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-black font-black">
                      <Clock className="w-4 h-4 text-orange-600 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-black font-black">
                      <MapPin className="w-4 h-4 text-[#7c3aed] shrink-0" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>

                  {/* Inquire Action Button */}
                  <div className="mt-6">
                    <a
                      href={`https://wa.me/233549232040?text=Hello%20Westside%20Carnival!%20I%20am%20inquiring%20about%20attending%20the%20${encodeURIComponent(event.title)}%20scheduled%20on%20${encodeURIComponent(event.date)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-black bg-yellow-400 hover:bg-black text-black hover:text-white font-black uppercase text-xs transition-all shadow-brutal-sm-black"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Inquire via WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic CTA at bottom of events */}
        <div className="mt-16 text-center">
          <p className="text-black font-bold text-sm bg-white inline-block border-2 border-black py-3 px-6 rounded-2xl shadow-brutal-sm-black">
            Hosting a marching squad or have special media requests?{' '}
            <a
              href="https://wa.me/233549232040?text=Hi%20Westside%20Carnival%20team,%20we%20want%20to%20register%20our%20marching%20fancy%20dress%20club%20or%20apply%2520for%20press%20creds."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7c3aed] uppercase font-black hover:underline ml-1"
            >
              Contact Committee
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}

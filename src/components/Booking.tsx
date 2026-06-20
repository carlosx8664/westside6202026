import { useState } from 'react';
import { motion } from 'motion/react';
import { Hotel, Utensils, Star, MapPin, MessageSquare, ShieldCheck, Heart } from 'lucide-react';
import { HOTEL_BOOKINGS, RESTAURANT_BOOKINGS } from '../data';
import { BookingItem } from '../types';

export default function Booking() {
  const [activeTab, setActiveTab] = useState<'hotels' | 'restaurants'>('hotels');

  const itemsToDisplay = activeTab === 'hotels' ? HOTEL_BOOKINGS : RESTAURANT_BOOKINGS;

  return (
    <section id="bookings" className="py-24 bg-[#7c3aed] text-black relative overflow-hidden border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-black text-yellow-400 border-2 border-black px-4 py-1.5 text-xs font-mono font-black tracking-widest uppercase mb-4 shadow-brutal-sm-black">PLAN YOUR STAY</span>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tighter" id="booking-section-heading">
            Travel & Accommodations
          </h2>
          <p className="text-yellow-100 font-bold text-sm sm:text-base mt-2">
            We have partnered with the absolute best hotels and restaurants in Sekondi-Takoradi to secure discounted rates for carnival guests.
          </p>
        </div>



        {/* Tab Buttons selection (Hotels vs Restaurants) */}
        <div className="flex justify-center mb-12" id="booking-tabs-container">
          <div className="bg-white p-2 rounded-2xl border-4 border-black flex max-w-md w-full shadow-brutal-black">
            <button
              onClick={() => setActiveTab('hotels')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-black uppercase transition-all cursor-pointer focus:outline-none ${
                activeTab === 'hotels'
                  ? 'bg-black text-yellow-300'
                  : 'text-black hover:bg-slate-100'
              }`}
              id="tab-btn-hotels"
            >
              <Hotel className="w-4 h-4" />
              Hotels & Lodging
            </button>
            <button
              onClick={() => setActiveTab('restaurants')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-black uppercase transition-all cursor-pointer focus:outline-none ${
                activeTab === 'restaurants'
                  ? 'bg-black text-yellow-300'
                  : 'text-black hover:bg-slate-100'
              }`}
              id="tab-btn-restaurants"
            >
              <Utensils className="w-4 h-4" />
              Dining List
            </button>
          </div>
        </div>

        {/* Listings Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="booking-cards-grid">
          {itemsToDisplay.map((item: BookingItem) => (
            <div
              key={item.id}
              className="bg-white border-4 border-black rounded-[2rem] overflow-hidden flex flex-col h-full group hover-brutal transition-all duration-300 shadow-brutal-black text-black"
              id={`booking-card-${item.id}`}
            >
              
              {/* Card visual banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-purple-950 border-b-4 border-black">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual tags overlay */}
                <div className="absolute top-4 left-4 bg-yellow-400 border-2 border-black px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 shadow-brutal-sm-black text-black">
                  <Star className="w-4 h-4 fill-black text-black" />
                  <span className="text-black font-black text-xs leading-none">{item.rating}</span>
                </div>

                <div className="absolute bottom-4 right-4 bg-black border-2 border-white text-yellow-300 text-xs font-black px-3 py-1.5 rounded-lg shadow-brutal-sm-black">
                  {item.priceRange}
                </div>
              </div>

              {/* Card main text */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Location indicator */}
                <div className="flex items-center gap-1.5 text-xs text-orange-600 font-mono font-black tracking-widest uppercase">
                  <MapPin className="w-4 h-4" />
                  <span>{item.location.toUpperCase()}</span>
                </div>

                <h3 className="font-display font-black text-xl text-black mt-2 leading-none uppercase">
                  {item.name}
                </h3>

                <p className="text-slate-800 text-xs sm:text-sm mt-3 flex-grow leading-relaxed font-semibold">
                  {item.description}
                </p>

                {/* Facilities / Amenities tags */}
                <div className="mt-5 space-y-2">
                  <span className="block text-[8px] font-mono font-black tracking-widest text-[#7c3aed] uppercase">AMENITIES & INFO</span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.facilities.map((fac, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] sm:text-xs font-black text-black bg-yellow-400/20 border border-black px-2.5 py-1 rounded-md uppercase"
                      >
                        {fac}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Instant Link Action */}
                <div className="mt-8 pt-5 border-t-2 border-black">
                  <a
                    href={`https://wa.me/${item.whatsappNumber}?text=${encodeURIComponent(item.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-green-500 hover:bg-black hover:text-white text-black border-2 border-black text-xs font-black uppercase shadow-brutal-sm-black transition-all text-center focus:outline-none"
                    id={`wa-book-btn-${item.id}`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    Book via WhatsApp
                  </a>
                  <span className="block text-center text-[9px] text-[#7c3aed] font-mono font-black mt-2.5 uppercase tracking-widest">
                    ★ Direct inquiry • GTB Approved ★
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Local Security and Safety tips */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 border-t-2 border-black" id="booking-safety-tips">
          <div className="bg-white p-5 rounded-2xl border-2 border-black flex gap-4 shadow-brutal-sm-black text-black">
            <div className="p-2.5 bg-orange-600 text-white rounded-xl border border-black shrink-0 h-fit">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-black text-black text-sm uppercase">Verified Operators</h4>
              <p className="text-xs text-slate-800 font-semibold mt-1 leading-relaxed">
                All hotels are licensed by the Ghana Tourism Board with professional security systems.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border-2 border-black flex gap-4 shadow-brutal-sm-black text-black">
            <div className="p-2.5 bg-yellow-400 text-black rounded-xl border border-black shrink-0 h-fit">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-black text-black text-sm uppercase">Direct Rates Booking</h4>
              <p className="text-xs text-slate-800 font-semibold mt-1 leading-relaxed">
                By booking directly through official WhatsApp handles, you avoid middleman commissions.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border-2 border-black flex gap-4 shadow-brutal-sm-black text-black">
            <div className="p-2.5 bg-[#7c3aed] text-white rounded-xl border border-black shrink-0 h-fit">
              <Heart className="w-5 h-5 text-yellow-300" />
            </div>
            <div>
              <h4 className="font-black text-black text-sm uppercase">Street Guides Assistance</h4>
              <p className="text-xs text-slate-800 font-semibold mt-1 leading-relaxed">
                Contacting our team via WhatsApp unlocks physical tourist recommendations and street parade guides.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Calendar, Compass, ArrowRight, MessageSquare } from 'lucide-react';
import { IMAGES } from '../data';

interface HeroProps {
  onNavigate?: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const handleScrollToSection = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.querySelector(id);
      if (element) {
        const topOffset = 85;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-16">
      {/* Background Image with Tinted Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Westside Carnival Masqueraders Parade"
          className="w-full h-full object-cover scale-105 filter brightness-40 contrast-110 transition-all duration-[30s]"
          style={{ transformOrigin: 'center' }}
          referrerPolicy="no-referrer"
        />
        {/* Colorful dynamic black-purple backing gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/35" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 pb-24 md:pt-8 md:pb-28 flex flex-col items-center text-center">
        
        {/* Cultural Badge Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-10 py-3 rounded-full bg-yellow-400 text-black border-4 border-black font-sans font-black tracking-wider uppercase text-xs sm:text-sm shadow-brutal-sm-black mb-5"
        >
          <span>THE WESTSIDE ANKOS TRADITION</span>
        </motion.div>

        {/* Major Animated Headlines */}
        <div className="max-w-5xl space-y-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full max-w-lg sm:max-w-xl md:max-w-2xl px-4 mb-4"
          >
            <h1 className="sr-only">Westside Carnival - Taadi's Annual</h1>
            <img
              src="/src/assets/images/b1c6f714-72de-41fe-8943-7545c1e3ebb2.png"
              alt="Westside Carnival Logo - The biggest christmas attraction in Ghana"
              className="w-full h-auto object-contain mx-auto transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xl sm:text-2xl md:text-3xl font-black text-purple-200 tracking-tight max-w-4xl mx-auto pt-4 uppercase italic"
          >
            Masquerading <span className="text-yellow-400">★</span> Musical Events <span className="text-brand-orange">★</span> Joy for All Ages
          </motion.p>
        </div>

        {/* Date and Location Quick Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg w-full bg-white text-black border-brutal-lg p-6 rounded-3xl shadow-brutal-white font-bold"
          id="hero-info-grid"
        >
          <div className="flex items-center gap-3 justify-center sm:justify-start sm:px-4 border-b-2 sm:border-b-0 sm:border-r-2 border-black pb-4 sm:pb-0">
            <Calendar className="w-6 h-6 text-brand-orange shrink-0" />
            <div className="text-left">
              <span className="block text-[10px] font-mono font-black tracking-widest text-[#7c3aed] uppercase leading-none">WHEN</span>
              <span className="block text-lg font-black uppercase text-black mt-1">DEC 24 - 27, 2026</span>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center sm:justify-start sm:px-4">
            <Compass className="w-6 h-6 text-[#7c3aed] shrink-0" />
            <div className="text-left">
              <span className="block text-[10px] font-mono font-black tracking-widest text-brand-orange uppercase leading-none">WHERE</span>
              <span className="block text-lg font-black uppercase text-black mt-1">TAKORADI, GHANA</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Button Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 items-center justify-center w-full max-w-xl"
        >
          <button
            onClick={() => handleScrollToSection('#events')}
            className="w-full sm:w-auto px-8 py-5 bg-yellow-400 text-black font-black uppercase tracking-tight rounded-2xl border-brutal-lg hover-brutal active-brutal shadow-brutal-black flex items-center justify-center gap-2 group cursor-pointer text-base focus:outline-none"
            id="hero-primary-cta"
          >
            Explore Schedule
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
          <button
            onClick={() => handleScrollToSection('#bookings')}
            className="w-full sm:w-auto px-8 py-5 bg-[#7c3aed] text-white font-black uppercase tracking-tight rounded-2xl border-brutal-lg hover-brutal active-brutal shadow-brutal-black flex items-center justify-center gap-2 cursor-pointer text-base focus:outline-none"
            id="hero-secondary-cta"
          >
            WhatsApp Booking
          </button>
        </motion.div>
      </div>

      {/* Aesthetic Design Dividers */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-black z-20" />
    </section>
  );
}

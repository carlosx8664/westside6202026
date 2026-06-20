/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { ArrowUp, Play, MapPin, Sparkles, Star, Calendar, Volume2, VolumeX } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [daysLeft, setDaysLeft] = useState(0);
  const [isPlayingTeaser, setIsPlayingTeaser] = useState(false);
  const [audioFeedback, setAudioFeedback] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    // Dynamic countdown targeting Dec 24, 2026
    const targetDate = new Date('2026-12-24T08:00:00Z');
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
      setDaysLeft(days > 0 ? days : 0);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000 * 60 * 60); // update every hour
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  return (
    <div className="relative min-h-screen bg-[#1e1b4b] text-black selection:bg-yellow-400 selection:text-black font-sans" id="main-root-container">
      {/* Top Reading Scroll Indicator Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[6px] bg-yellow-400 border-b-2 border-black z-50 transform-origin-left"
        style={{ scaleX }}
      />

      {/* Primary Fixed Navigation Bar */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Tiny Animated Countdown Ticker Ribbon */}
      <div className="bg-[#7c3aed] border-b-4 border-black text-center py-3.5 relative z-30 mt-0 pt-0 text-[11px] sm:text-xs font-mono font-black tracking-widest text-yellow-300 uppercase flex items-center justify-center gap-2 shadow-brutal-sm-black">
        <Sparkles className="w-4 h-4 animate-spin text-yellow-300 shrink-0" />
        <span>WESTSIDE CARNIVAL COUNTDOWN: ONLY {daysLeft} DAYS UNTIL THE GRAND PARADE!</span>
        <Sparkles className="w-4 h-4 animate-spin text-yellow-300 shrink-0" />
      </div>

      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {activeSection === '#home' && <Hero onNavigate={setActiveSection} />}
            {activeSection === '#about' && <About />}
            {activeSection === '#events' && <Events />}
            {activeSection === '#gallery' && <Gallery />}
            {activeSection === '#bookings' && <Booking />}
          </motion.div>
        </AnimatePresence>

        {/* Global Floating Cultural Music Widget (Aesthetic mockup of Taadi live audio atmosphere) */}
        <div className="fixed bottom-6 left-6 z-40 hidden md:block" id="taadi-music-widget">
          <div className="bg-white border-4 border-black p-3.5 rounded-2xl flex items-center gap-3 shadow-brutal-black hover-brutal transition-all duration-200 text-black">
            <button
              onClick={() => {
                setAudioFeedback(!audioFeedback);
                if (!audioFeedback) {
                  // Standard alert acknowledging user's action
                  alert("Taadi highlife horn and brass band loop initialized! (Volume maximized for traditional masquerader marching intensity).");
                }
              }}
              className="w-11 h-11 rounded-xl bg-yellow-400 border-2 border-black text-black hover:bg-orange-500 hover:text-white flex items-center justify-center shadow-brutal-sm-black active-brutal cursor-pointer"
              aria-label="Toggle Brass Band sound loops"
            >
              {audioFeedback ? (
                <Volume2 className="w-5 h-5 animate-bounce" />
              ) : (
                <VolumeX className="w-5 h-5" />
              )}
            </button>
            <div className="text-left font-mono">
              <span className="block text-[8px] text-orange-600 tracking-widest font-black uppercase leading-none">NOW STREAMING</span>
              <span className="block text-xs font-black text-black uppercase mt-0.5 whitespace-nowrap">Taadi Brass Band Jam</span>
            </div>
          </div>
        </div>
      </main>

      {/* Global Interactive Page Footer and Sitemap */}
      <Footer />
    </div>
  );
}

import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, MapPin, Calendar, Camera, Hotel, MessageSquare } from 'lucide-react';

interface HeaderProps {
  activeSection?: string;
  setActiveSection?: (section: string) => void;
}

export default function Header({ activeSection = '#home', setActiveSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home', icon: Sparkles },
    { label: 'About Carnival', href: '#about', icon: Sparkles },
    { label: 'Events Schedule', href: '#events', icon: Calendar },
    { label: 'Media Gallery', href: '#gallery', icon: Camera },
    { label: 'Hotels & Dining', href: '#bookings', icon: Hotel },
  ];

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (setActiveSection) {
      setActiveSection(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        const topOffset = 80; // height of fixed header
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
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-yellow-400 text-black border-b-4 border-black shadow-brutal-black py-2.5'
          : 'bg-[#0f0714]/90 backdrop-blur-md border-b-2 border-black py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand Removed */}
          <div id="brand-logo" className="w-[1px] h-[1px]" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" id="desktop-nav">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`text-xs font-black uppercase tracking-tight transition-all duration-200 relative py-1 focus:outline-none ${
                  activeSection === item.href
                    ? scrolled
                      ? 'text-orange-600 underline underline-offset-4 decoration-2'
                      : 'text-yellow-400 underline underline-offset-4 decoration-2'
                    : scrolled
                      ? 'text-black hover:text-orange-600 hover:underline'
                      : 'text-slate-100 hover:text-yellow-400 hover:underline'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp / Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#bookings"
              onClick={(e) => handleScrollTo(e, '#bookings')}
              className={`text-xs uppercase font-extrabold px-3 py-1.5 rounded-lg border-2 border-black transition-all duration-200 ${
                activeSection === '#bookings'
                  ? scrolled
                    ? 'bg-black text-yellow-400'
                    : 'bg-yellow-400 text-black shadow-brutal-sm-black'
                  : scrolled
                    ? 'bg-orange-600 text-white hover:bg-black'
                    : 'bg-transparent text-slate-100 hover:text-yellow-400'
              }`}
              id="cta-hotels-btn"
            >
              Accommodations
            </a>
            <a
              href="https://wa.me/233549232040?text=Hello!%20I%20am%20interested%20in%20obtaining%2520tickets%20and%20booking%20and%20planning%20for%20Westside%20Carnival%202026."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-orange-600 text-white font-black text-xs py-2 px-4 rounded-xl border-2 border-white shadow-brutal-sm-black flex items-center gap-1.5 transform active:scale-95 transition-all duration-200"
              id="cta-tickets-btn"
            >
              <MessageSquare className="w-3.5 h-3.5 text-yellow-400" />
              WHATSAPP PASSES
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg border-2 border-black focus:outline-none ${
              scrolled ? 'bg-black text-white' : 'bg-purple-950/40 text-white'
            }`}
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-yellow-400 border-b-4 border-black px-4 pt-3 pb-6 space-y-4 text-black"
            id="mobile-drawer"
          >
            <div className="flex flex-col space-y-1 pt-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-black text-sm uppercase border-b border-black/10 ${
                      activeSection === item.href
                        ? 'bg-black text-white shadow-brutal-sm-black'
                        : 'text-black hover:bg-black hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-orange-600" />
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="border-t-2 border-black pt-4 flex flex-col gap-3">
              <a
                href="#bookings"
                onClick={(e) => handleScrollTo(e, '#bookings')}
                className="w-full text-center border-2 border-black py-2.5 rounded-lg text-black bg-white text-xs font-black uppercase shadow-brutal-sm-black"
              >
                Inquire Hotels & Dining
              </a>
              <a
                href="https://wa.me/233549232040?text=Hello!%20I%20am%2520interested%20in%20obtaining%20tickets%20and%20booking%20and%20planning%20for%20Westside%20Carnival%202026."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-black hover:bg-orange-600 border-2 border-black py-2.5 rounded-lg text-white text-xs font-black uppercase flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-yellow-400" />
                Book via WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-black text-slate-300 relative overflow-hidden py-20 border-t-8 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="footer-section-container">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b-4 border-slate-900">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-6">
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-bold">
              Experience the absolute pinnacle of African street arts and rhythm. Celebrating our heritage, uniting our families, and showcasing the beautiful Western Region of Ghana to the globe.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2" id="footer-social-panel">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white border-2 border-black rounded-xl text-black hover:bg-yellow-400 hover:scale-110 shadow-brutal-sm-black transition-all focus:outline-none"
                aria-label="Facebook link"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white border-2 border-black rounded-xl text-black hover:bg-yellow-400 hover:scale-110 shadow-brutal-sm-black transition-all focus:outline-none"
                aria-label="X Twitter link"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white border-2 border-black rounded-xl text-black hover:bg-yellow-400 hover:scale-110 shadow-brutal-sm-black transition-all focus:outline-none"
                aria-label="Instagram link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white border-2 border-black rounded-xl text-black hover:bg-yellow-400 hover:scale-110 shadow-brutal-sm-black transition-all focus:outline-none"
                aria-label="YouTube channel link"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Contact Info Col */}
          <div className="md:col-span-6 space-y-6">
            <h4 className="font-display font-black text-white tracking-tight text-base uppercase border-b-2 border-yellow-400 pb-1 inline-block">
              Official Headquarters
            </h4>
            
            <div className="space-y-4 text-xs sm:text-sm font-bold text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-black text-slate-200 uppercase text-xs tracking-wider">Our Office</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Skyy House, 19/20 West Fijai, Takoradi
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-300 shrink-0 mt-0.5" />
                <div>
                  <p className="font-black text-slate-200 uppercase text-xs tracking-wider">24/7 Hotline & WhatsApp</p>
                  <p className="text-xs text-slate-400 mt-1">
                    +233-54 923 2040
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-black text-slate-200 uppercase text-xs tracking-wider">Email</p>
                  <p className="text-xs text-yellow-300 hover:underline cursor-pointer mt-1 font-black">
                    skyydirector@yahoo.com
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright statement */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-end gap-4 text-xs font-mono text-slate-500 font-bold">
          <div className="flex items-center gap-6">
            <button
              onClick={handleBackToTop}
              className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300 font-black uppercase text-[10px] tracking-wider focus:outline-none cursor-pointer"
              aria-label="Back to top"
            >
              Back to Top
              <ArrowUp className="w-3.5 h-3.5 text-orange-500" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

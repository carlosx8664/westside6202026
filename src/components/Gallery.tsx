import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Image, Video, X, Maximize2, Compass, Film, Music } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'masquerade' | 'brassband' | 'festival'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  // Filter gallery items
  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const filterTabs = [
    { key: 'all', label: 'All Media', icon: Compass },
    { key: 'masquerade', label: 'Masqueraders', icon: Image },
    { key: 'brassband', label: 'Brass Bands', icon: Music },
    { key: 'festival', label: 'Festival Moments', icon: Film },
  ];

  const handleOpenLightbox = (item: GalleryItem) => {
    // Find index of item in global GALLERY_ITEMS list
    const index = GALLERY_ITEMS.findIndex(g => g.id === item.id);
    if (index !== -1) {
      if (item.type === 'video') {
        // Since it is a video placeholder, show a simulated interactive cinematic notification or modal
        setActiveVideoUrl(item.title);
      } else {
        setLightboxIndex(index);
      }
    }
  };

  const handleNextLightbox = () => {
    if (lightboxIndex !== null) {
      let nextIndex = lightboxIndex + 1;
      // Loop or find next IMAGE
      while (nextIndex < GALLERY_ITEMS.length && GALLERY_ITEMS[nextIndex].type !== 'image') {
        nextIndex++;
      }
      if (nextIndex < GALLERY_ITEMS.length) {
        setLightboxIndex(nextIndex);
      } else {
        // Reset to first image
        const firstImgIndex = GALLERY_ITEMS.findIndex(g => g.type === 'image');
        setLightboxIndex(firstImgIndex !== -1 ? firstImgIndex : null);
      }
    }
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex !== null) {
      let prevIndex = lightboxIndex - 1;
      while (prevIndex >= 0 && GALLERY_ITEMS[prevIndex].type !== 'image') {
        prevIndex--;
      }
      if (prevIndex >= 0) {
        setLightboxIndex(prevIndex);
      } else {
        // Wrap to last image
        let lastImgIndex = GALLERY_ITEMS.length - 1;
        while (lastImgIndex >= 0 && GALLERY_ITEMS[lastImgIndex].type !== 'image') {
          lastImgIndex--;
        }
        setLightboxIndex(lastImgIndex !== -1 ? lastImgIndex : null);
      }
    }
  };

  return (
    <section id="gallery" className="py-24 bg-slate-900 text-slate-100 relative overflow-hidden border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-yellow-400 text-black border-2 border-black px-4 py-1.5 text-xs font-mono font-black tracking-widest uppercase mb-4 shadow-brutal-sm-black">CATCH THE VIBE</span>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tighter" id="gallery-section-heading">
            Westside Media Gallery
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 font-semibold">
            Explore photos and reels from previous celebrations and feel the high-tempo Taadi carnival spirit.
          </p>
          
          {/* Gallery Category Menu */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8" id="gallery-category-tabs">
            {filterTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-black text-xs font-black uppercase tracking-tight shadow-brutal-sm-black transition-all cursor-pointer ${
                    filter === tab.key
                      ? 'bg-yellow-400 text-black'
                      : 'bg-white text-black hover:bg-orange-600 hover:text-white'
                  }`}
                  id={`gallery-filter-${tab.key}`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="gallery-media-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => handleOpenLightbox(item)}
                className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden border-4 border-black bg-white cursor-pointer shadow-brutal-black hover-brutal transition-all duration-300"
              >
                {/* Image / Video cover */}
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 filter brightness-95 group-hover:brightness-90"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                {/* Visual Type Indicator Buttons */}
                <div className="absolute top-4 right-4 p-2.5 bg-yellow-400 border-2 border-black rounded-lg text-black shadow-brutal-sm-black">
                  {item.type === 'video' ? (
                    <Video className="w-4 h-4 text-black" />
                  ) : (
                    <Image className="w-4 h-4 text-black" />
                  )}
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col justify-end">
                  {item.type === 'video' ? (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center border-2 border-white shadow-brutal-sm-black group-hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                      <div>
                        <span className="block text-[8px] font-mono font-black tracking-widest text-yellow-400 uppercase">PLAY SIZZLE REEL</span>
                        <h4 className="font-display font-black text-white text-sm uppercase">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <span className="block text-[8px] font-mono font-black tracking-widest text-[#7c3aed] uppercase bg-yellow-400 px-2 py-0.5 inline-block border border-black rounded-sm">{item.category}</span>
                      <h4 className="font-display font-black text-white text-base uppercase mt-1">
                        {item.title}
                      </h4>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Media Call to action button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              alert("More official photos and local parade live feeds will be published immediately after the December press launches. Stay tuned through our official social media handles!");
            }}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-black border-4 border-black font-black uppercase text-sm rounded-2xl shadow-brutal-black hover-brutal active-brutal cursor-pointer"
            id="view-more-media-btn"
          >
            <Compass className="w-5 h-5 text-orange-600" />
            View More Festival Media (December Archives)
          </button>
        </div>

      </div>

      {/* PHOTO LIGHTBOX MODAL CONTAINER */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-black"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Modal Controls */}
            <div className="absolute top-4 right-4 flex items-center gap-4">
              <button
                className="p-2.5 bg-yellow-400 border-2 border-black text-black rounded-full hover:bg-orange-600 hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(null);
                }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Click to prevent closing */}
            <div
              className="relative max-w-5xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_ITEMS[lightboxIndex].url}
                alt={GALLERY_ITEMS[lightboxIndex].title}
                className="max-h-[70vh] w-auto max-w-full rounded-[2.5rem] object-contain border-4 border-black shadow-brutal-white"
                referrerPolicy="no-referrer"
              />

              {/* Lightbox descriptive footer panel */}
              <div className="text-center mt-6 max-w-2xl px-6 py-4 bg-white border-2 border-black rounded-2xl shadow-brutal-sm-black">
                <span className="text-[10px] font-mono font-black tracking-widest text-orange-600 uppercase">
                  {GALLERY_ITEMS[lightboxIndex].category}
                </span>
                <h3 className="font-display font-black text-xl text-black uppercase mt-1">
                  {GALLERY_ITEMS[lightboxIndex].title}
                </h3>
                {GALLERY_ITEMS[lightboxIndex].description && (
                  <p className="text-slate-805 text-sm mt-2 font-medium">
                    {GALLERY_ITEMS[lightboxIndex].description}
                  </p>
                )}
              </div>

              {/* Slider Arrows */}
              <button
                className="absolute left-2 lg:-left-20 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-black rounded-full text-black hover:bg-yellow-400 font-extrabold flex items-center justify-center shadow-brutal-sm-black"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevLightbox();
                }}
              >
                ←
              </button>
              <button
                className="absolute right-2 lg:-right-20 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-black rounded-full text-black hover:bg-yellow-400 font-extrabold flex items-center justify-center shadow-brutal-sm-black"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextLightbox();
                }}
              >
                →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SIMULATED CINEMATIC VIDEO PLAYBACK SCREEN */}
      <AnimatePresence>
        {activeVideoUrl !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0d0413]/95 backdrop-blur-md flex items-center justify-center p-4 text-black"
            onClick={() => setActiveVideoUrl(null)}
          >
            <div
              className="bg-white border-4 border-black max-w-3xl w-full rounded-[2rem] overflow-hidden p-6 relative shadow-brutal-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 p-2 bg-yellow-400 border-2 border-black text-black rounded-full"
                onClick={() => setActiveVideoUrl(null)}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center text-center py-6 px-4">
                <div className="w-16 h-16 rounded-full bg-orange-600 border-2 border-black text-white flex items-center justify-center mb-6 animate-pulse shadow-brutal-sm-black">
                  <Film className="w-7 h-7" />
                </div>
                
                <span className="text-[10px] font-mono font-black tracking-widest text-[#7c3aed] uppercase bg-yellow-400 px-3 py-1 rounded-md border border-black shadow-brutal-sm-black">WESTSIDE SHORTS PLAYBACK</span>
                <h3 className="font-display font-black text-black text-xl sm:text-2xl mt-4 uppercase">
                  {activeVideoUrl}
                </h3>
                
                {/* Simulated playback visual */}
                <div className="w-full aspect-video bg-black rounded-xl border-4 border-black mt-6 relative flex flex-col items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/50 via-transparent to-brand-orange/20" />
                  <div className="relative z-10 space-y-3 flex flex-col items-center">
                    <span className="w-2.5 h-2.5 bg-red-600 rounded-full animate-ping" />
                    <span className="text-xs font-mono text-slate-400">Streaming Local Broadcast Server...</span>
                    {/* Add beautiful visual graphic */}
                    <div className="flex gap-1.5 items-end justify-center pt-2">
                      <span className="w-1 bg-brand-orange animate-[bounce_1.4s_infinite] h-8" />
                      <span className="w-1 bg-brand-gold animate-[bounce_1.1s_infinite_0.4s] h-12" />
                      <span className="w-1 bg-purple-500 animate-[bounce_0.8s_infinite_0.2s] h-6" />
                      <span className="w-1 bg-brand-orange animate-[bounce_1.3s_infinite_0.5s] h-10" />
                      <span className="w-1 bg-brand-gold animate-[bounce_1s_infinite_0.1s] h-7" />
                    </div>
                  </div>
                </div>

                <p className="text-slate-800 font-bold text-xs sm:text-sm mt-6 max-w-md uppercase">
                  This media spot is configured for local server integrations. Real video streaming services will initialize automatically prior to the Parade Launch!
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <a
                    href="https://wa.me/233549232040?text=Hi%20Westside%20Carnival%20team,%20I'm%20writing%20to%20request%20access%20to%20press%2520kits%20and%20past%20broadcasting%20archives."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-black border-2 border-black hover:bg-yellow-400 text-white hover:text-black font-black uppercase text-xs rounded-xl shadow-brutal-sm-black flex items-center justify-center cursor-pointer"
                  >
                    Request Press Kit
                  </a>
                  <button
                    onClick={() => setActiveVideoUrl(null)}
                    className="px-6 py-3 bg-white border-2 border-black hover:bg-orange-600 text-black hover:text-white font-black uppercase text-xs rounded-xl shadow-brutal-sm-black cursor-pointer"
                  >
                    Close Player
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

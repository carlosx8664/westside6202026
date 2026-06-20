import { motion } from 'motion/react';
import { ShieldCheck, Tv } from 'lucide-react';
import { IMAGES } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-100 text-black relative overflow-hidden border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-black text-yellow-400 px-4 py-1.5 border-brutal-sm shadow-brutal-sm-black text-xs font-mono font-black tracking-widest uppercase mb-4"
          >
            BEHIND THE MASK & MELODY
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-black text-4xl sm:text-6xl text-black uppercase tracking-tighter leading-none"
            id="about-section-heading"
          >
            Westside Carnival Culture
          </motion.h2>
          <div className="w-24 h-2 bg-black mx-auto mt-4" />
        </div>

        {/* Story details layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column Text Story */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl font-black text-orange-600 uppercase tracking-tight leading-none">
              Taadi's Generational Brass & Fancy Dress Legacy
            </h3>
            
            <p className="text-slate-900 text-sm sm:text-base font-semibold leading-relaxed">
              Dating back to local brass bands and the historical fancy dress culture, the <strong className="font-extrabold text-black">Westside Carnival</strong> (popularly known as the Taadi Bronya Masquerade) transforms the dual city of Sekondi-Takoradi, Ghana, into a kaleidoscopic arena of synchronized footwork, colorful costumes, and roaring live trumpets.
            </p>

            <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
              Every year between December 24th and 27th, the streets are flooded by active clubs including the historic <strong className="font-extrabold text-black">Ankos</strong>, Cosmos, Holy Cities, and legacy groups. Participants dress in tailored matching fabrics decorated with stripes and tassels, wearing unique hand-sculpted papier-mâché masks representing different traditional themes.
            </p>

            <div className="border-l-8 border-orange-600 pl-4 py-3 my-4 bg-yellow-400/20 border-2 border-y-black border-r-black">
              <span className="italic text-slate-900 font-bold text-sm sm:text-base block">
                "It is more than just a festival; it's a generational bond. Ancestors, fathers, and children march side by side, ensuring Takoradi remains the undisputed home of West African masquerading."
              </span>
            </div>

            <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
              As Ghana's most heavily televised holiday event, the carnival draws deep attention from top media publications, radio houses, global documentarians, and national broadcasters. Millions of households watch live as masqueraders match rhythmic brass melodies with unmatched, competitive dancing steps for hours.
            </p>

            {/* Cultural Checkpoint Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4" id="about-features-container">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border-2 border-black shadow-brutal-sm-black">
                <div className="p-2 bg-orange-600 text-white border-2 border-black rounded-lg shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-black text-sm uppercase">Organized Security</h4>
                  <p className="text-xs text-slate-700 font-medium">Strictly coordinated routes and security escorts for all visitors and clubs.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white p-4 rounded-xl border-2 border-black shadow-brutal-sm-black">
                <div className="p-2 bg-yellow-400 text-black border-2 border-black rounded-lg shrink-0">
                  <Tv className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-black text-sm uppercase">Global Broadcast</h4>
                  <p className="text-xs text-slate-700 font-medium font-semibold">Over thirty major media hubs providing live feed and highlight packages daily.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Visual Showcase & Stats */}
          <div className="lg:col-span-5 relative">
            <div className="relative group rounded-[2rem] overflow-hidden border-4 border-black shadow-brutal-black bg-white">
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                <img
                  src={IMAGES.maskDetail}
                  alt="Traditional fancy dress hand-painted mask"
                  className="w-full h-full object-cover group-hover:scale-102 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

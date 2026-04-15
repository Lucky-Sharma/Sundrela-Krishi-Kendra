import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import harvesterImg from "@/assets/service-harvester.jpg";
import trolleyImg from "@/assets/service-trolley.jpg";
import cultivatorImg from "@/assets/service-cultivator.jpg";
import rotavatorImg from "@/assets/service-rotavator.jpg";
import ploughImg from "@/assets/service-plough.jpg";
import thresherImg from "@/assets/service-thresher.jpg";
import seeddrillImg from "@/assets/service-seeddrill.jpg";
import potatoImg from "@/assets/service-potato.jpg";
import garlicImg from "@/assets/service-garlic.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import aboutImg from "@/assets/about-farmers.jpg";

const images = [
  { src: heroBg, alt: "Harvester in wheat field" },
  { src: harvesterImg, alt: "Combine harvester" },
  { src: trolleyImg, alt: "Tractor with trolley" },
  { src: aboutImg, alt: "Farmers in field" },
  { src: cultivatorImg, alt: "Cultivator at work" },
  { src: rotavatorImg, alt: "Rotavator tilling" },
  { src: ploughImg, alt: "Plough turning soil" },
  { src: thresherImg, alt: "Thresher machine" },
  { src: seeddrillImg, alt: "Seed drill" },
  { src: potatoImg, alt: "Potato planter" },
  { src: garlicImg, alt: "Garlic planting" },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background bg-wheat-pattern">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ staggerChildren: 0.06 }}>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Our Work in the Field
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-muted-foreground text-center mb-12 text-lg">
            See our equipment and team in action across local farms
          </motion.p>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((img, i) => (
              <motion.div key={i} variants={fadeUp} transition={{ duration: 0.4 }} className="break-inside-avoid cursor-pointer group" onClick={() => setSelected(i)}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full rounded-lg shadow-sm group-hover:shadow-lg group-hover:brightness-90 transition-all duration-300"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-4 right-4 p-2 text-primary-foreground" onClick={() => setSelected(null)}>
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] rounded-lg object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;

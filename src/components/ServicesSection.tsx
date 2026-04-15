import { motion } from "framer-motion";
import harvesterImg from "@/assets/service-harvester.jpg";
import trolleyImg from "@/assets/service-trolley.jpg";
import cultivatorImg from "@/assets/service-cultivator.jpg";
import rotavatorImg from "@/assets/service-rotavator.jpg";
import ploughImg from "@/assets/service-plough.jpg";
import thresherImg from "@/assets/service-thresher.jpg";
import seeddrillImg from "@/assets/service-seeddrill.jpg";
import potatoImg from "@/assets/service-potato.jpg";
import garlicImg from "@/assets/service-garlic.jpg";

const services = [
  { name: "Combine Harvester", img: harvesterImg, desc: "Efficient wheat, paddy, and soybean harvesting with high-capacity combine harvesters for maximum yield." },
  { name: "Trolley (Trole)", img: trolleyImg, desc: "Heavy-duty tractor trolleys for transporting crops, farm materials, and equipment between fields." },
  { name: "Cultivator", img: cultivatorImg, desc: "Soil preparation and weed removal between crop rows for healthier plant growth and better yields." },
  { name: "Rotavator", img: rotavatorImg, desc: "Deep tilling and thorough soil mixing before sowing to create the perfect seedbed for your crops." },
  { name: "Plough (Hal)", img: ploughImg, desc: "Primary tillage for turning over and aerating the soil, essential for every cropping season." },
  { name: "Thresher (Thraser)", img: thresherImg, desc: "Fast and efficient grain separation from harvested crops, saving time and reducing manual labor." },
  { name: "Seed Drill", img: seeddrillImg, desc: "Precise sowing of seeds in uniform rows at the right depth for optimal germination and spacing." },
  { name: "Potato Planter", img: potatoImg, desc: "Mechanized potato planting that ensures uniform spacing and depth for a healthy potato crop." },
  { name: "Garlic Planter", img: garlicImg, desc: "Efficient and uniform garlic planting that saves time and ensures consistent crop quality." },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const ServicesSection = () => (
  <section id="services" className="py-16 md:py-24 bg-field-gradient">
    <div className="container mx-auto px-4">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ staggerChildren: 0.08 }}>
        <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Our Services
        </motion.h2>
        <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-muted-foreground text-center max-w-xl mx-auto mb-12 text-lg">
          Complete farming equipment services from sowing to harvesting
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={768}
                  height={512}
                />
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-serif font-bold text-sm md:text-base text-foreground mb-1">{s.name}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;

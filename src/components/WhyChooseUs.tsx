import { motion } from "framer-motion";
import { IndianRupee, UserCheck, Clock, MapPin } from "lucide-react";

const features = [
  { icon: IndianRupee, title: "Affordable Rates", desc: "Competitive pricing that fits every farmer's budget without compromising quality." },
  { icon: UserCheck, title: "Experienced Operators", desc: "Skilled and trained operators who handle equipment with care and precision." },
  { icon: Clock, title: "Available on Demand", desc: "Quick availability when you need it — just one call away during peak seasons." },
  { icon: MapPin, title: "Local Coverage", desc: "Serving Sundrela and surrounding villages with prompt and reliable service." },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const WhyChooseUs = () => (
  <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
    <div className="absolute inset-0 bg-wheat-pattern opacity-10" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ staggerChildren: 0.12 }}>
        <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-12">
          Why Choose Us
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} variants={fadeUp} transition={{ duration: 0.5 }} className="text-center p-6 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-golden/20 flex items-center justify-center">
                <f.icon className="w-7 h-7 text-golden" />
              </div>
              <h3 className="font-serif font-bold text-primary-foreground mb-2">{f.title}</h3>
              <p className="text-primary-foreground/70 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default WhyChooseUs;

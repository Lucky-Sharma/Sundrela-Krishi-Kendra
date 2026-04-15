import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Patel",
    village: "Village Sundrela, Raipur",
    rating: 5,
    quote: "Sundrela Krishi Kendra's harvester saved us days of work. Excellent service and very professional operators. Highly recommended!",
  },
  {
    name: "Suresh Yadav",
    village: "Village Bhatgaon, Raipur",
    rating: 5,
    quote: "I use their rotavator and seed drill every season. The equipment is always in top condition and rates are very fair.",
  },
  {
    name: "Mohan Singh",
    village: "Village Arang, Raipur",
    rating: 4,
    quote: "Best agricultural service in the area. They come on time and their operators know exactly what they are doing. Very reliable.",
  },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const TestimonialsSection = () => (
  <section className="py-16 md:py-24 bg-field-gradient">
    <div className="container mx-auto px-4">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ staggerChildren: 0.15 }}>
        <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          What Farmers Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={fadeUp} transition={{ duration: 0.5 }} className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`w-5 h-5 ${j < t.rating ? "fill-golden text-golden" : "text-border"}`} />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{t.quote}"</p>
              <div>
                <p className="font-serif font-bold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.village}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;

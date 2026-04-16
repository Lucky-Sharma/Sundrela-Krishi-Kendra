import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { TranslationKey } from "@/i18n/translations";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const testimonialsData: { quoteKey: TranslationKey; nameKey: TranslationKey; villageKey: TranslationKey; rating: number }[] = [
  { quoteKey: "testi1_quote", nameKey: "testi1_name", villageKey: "testi1_village", rating: 5 },
  { quoteKey: "testi2_quote", nameKey: "testi2_name", villageKey: "testi2_village", rating: 5 },
  { quoteKey: "testi3_quote", nameKey: "testi3_name", villageKey: "testi3_village", rating: 4 },
];

const TestimonialsSection = () => {
  const { t } = useLang();

  return (
    <section className="py-16 md:py-24 bg-field-gradient">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ staggerChildren: 0.15 }}>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            {t("testimonials_title")}
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonialsData.map((testi, i) => (
              <motion.div key={i} variants={fadeUp} transition={{ duration: 0.5 }} className="bg-card p-6 rounded-xl border border-border shadow-sm">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`w-5 h-5 ${j < testi.rating ? "fill-golden text-golden" : "text-border"}`} />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{t(testi.quoteKey)}"</p>
                <div>
                  <p className="font-serif font-bold text-foreground">{t(testi.nameKey)}</p>
                  <p className="text-muted-foreground text-sm">{t(testi.villageKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

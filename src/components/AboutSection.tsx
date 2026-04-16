import { motion } from "framer-motion";
import { Award, Tractor, Users } from "lucide-react";
import aboutImg from "@/assets/about-farmers.jpg";
import { useLang } from "@/context/LanguageContext";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const AboutSection = () => {
  const { t } = useLang();

  const cards = [
    { icon: Award, titleKey: "about_card1_title", descKey: "about_card1_desc" },
    { icon: Tractor, titleKey: "about_card2_title", descKey: "about_card2_desc" },
    { icon: Users, titleKey: "about_card3_title", descKey: "about_card3_desc" },
  ] as const;

  return (
    <section id="about" className="py-16 md:py-24 bg-background bg-wheat-pattern">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ staggerChildren: 0.15 }}>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            {t("about_title")}
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-lg">
            {t("about_desc")}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <img src={aboutImg} alt="Farmers in field" className="rounded-xl shadow-xl w-full object-cover max-h-[400px]" loading="lazy" width={800} height={600} />
            </motion.div>
            <div className="grid gap-6">
              {cards.map((card, i) => (
                <motion.div key={i} variants={fadeUp} transition={{ duration: 0.5 }} className="flex gap-4 p-5 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-foreground">{t(card.titleKey)}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{t(card.descKey)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

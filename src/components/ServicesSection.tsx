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
import { useLang } from "@/context/LanguageContext";
import { TranslationKey } from "@/i18n/translations";

const serviceData: { nameKey: TranslationKey; descKey: TranslationKey; img: string }[] = [
  { nameKey: "svc_harvester_name", descKey: "svc_harvester_desc", img: harvesterImg },
  { nameKey: "svc_trolley_name",   descKey: "svc_trolley_desc",   img: trolleyImg },
  { nameKey: "svc_cultivator_name",descKey: "svc_cultivator_desc",img: cultivatorImg },
  { nameKey: "svc_rotavator_name", descKey: "svc_rotavator_desc", img: rotavatorImg },
  { nameKey: "svc_plough_name",    descKey: "svc_plough_desc",    img: ploughImg },
  { nameKey: "svc_thresher_name",  descKey: "svc_thresher_desc",  img: thresherImg },
  { nameKey: "svc_seeddrill_name", descKey: "svc_seeddrill_desc", img: seeddrillImg },
  { nameKey: "svc_potato_name",    descKey: "svc_potato_desc",    img: potatoImg },
  { nameKey: "svc_garlic_name",    descKey: "svc_garlic_desc",    img: garlicImg },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const ServicesSection = () => {
  const { t } = useLang();

  return (
    <section id="services" className="py-16 md:py-24 bg-field-gradient">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ staggerChildren: 0.08 }}>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            {t("services_title")}
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-muted-foreground text-center max-w-xl mx-auto mb-12 text-lg">
            {t("services_subtitle")}
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {serviceData.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={t(s.nameKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={768}
                    height={512}
                  />
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="font-serif font-bold text-sm md:text-base text-foreground mb-1">{t(s.nameKey)}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{t(s.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

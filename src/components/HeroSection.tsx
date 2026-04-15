import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Golden wheat field with harvester"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-4 drop-shadow-lg">
            Sundrela Krishi Kendra
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-medium">
            Modern Farming Solutions for Every Field
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("#services")}
              className="px-8 py-4 bg-golden text-golden-foreground font-semibold rounded-lg text-lg hover:brightness-110 transition-all min-h-[48px] shadow-lg"
            >
              Our Services
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-8 py-4 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border-2 border-primary-foreground/30 font-semibold rounded-lg text-lg hover:bg-primary-foreground/20 transition-all min-h-[48px]"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

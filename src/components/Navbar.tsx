import { useState, useEffect } from "react";
import { Menu, X, Wheat } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: t("nav_home"), href: "#home" },
    { label: t("nav_about"), href: "#about" },
    { label: t("nav_services"), href: "#services" },
    { label: t("nav_gallery"), href: "#gallery" },
    { label: t("nav_contact"), href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "services", "gallery", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const LangSwitcher = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-1 ${className}`}>
      {(["en", "hi"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
            lang === l
              ? "bg-golden text-golden-foreground shadow"
              : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
          }`}
        >
          {l === "en" ? "EN" : "हि"}
        </button>
      ))}
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary shadow-lg" : "bg-primary/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" onClick={() => handleClick("#home")} className="flex items-center gap-2">
          <Wheat className="h-8 w-8 text-golden" />
          <span className="font-serif text-lg md:text-xl font-bold text-primary-foreground leading-tight">
            Sundrela Krishi Kendra
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "bg-golden text-golden-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <div className="ml-2 border-l border-primary-foreground/20 pl-3">
              <LangSwitcher />
            </div>
          </li>
        </ul>

        {/* Mobile: Lang switcher + Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <LangSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-primary-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 pb-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`block w-full text-left px-6 py-3 text-base font-medium transition-colors ${
                activeSection === link.href.slice(1)
                  ? "bg-golden text-golden-foreground"
                  : "text-primary-foreground/80 hover:bg-primary-foreground/10"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

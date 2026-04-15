import { useState, useEffect } from "react";
import { Menu, X, Wheat } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.slice(1));
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
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-primary-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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

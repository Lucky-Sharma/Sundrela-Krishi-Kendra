import { Wheat, Facebook, MessageCircle, Youtube } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLang();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navKeys = [
    { label: t("nav_home"),     href: "#home" },
    { label: t("nav_about"),    href: "#about" },
    { label: t("nav_services"), href: "#services" },
    { label: t("nav_gallery"),  href: "#gallery" },
    { label: t("nav_contact"),  href: "#contact" },
  ];

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Wheat className="h-7 w-7 text-golden" />
              <span className="font-serif text-lg font-bold text-primary-foreground">Sundrela Krishi Kendra</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">{t("footer_tagline")}</p>
          </div>
          <div>
            <h4 className="font-serif font-bold text-primary-foreground mb-3">{t("footer_quicklinks")}</h4>
            <ul className="space-y-2">
              {navKeys.map((link) => (
                <li key={link.href}>
                  <button onClick={() => scrollTo(link.href)} className="text-primary-foreground/70 hover:text-golden transition-colors text-sm">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-bold text-primary-foreground mb-3">{t("footer_follow")}</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-golden hover:text-golden-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919009662535" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-golden hover:text-golden-foreground transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-golden hover:text-golden-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-primary-foreground/50 text-sm">{t("footer_copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

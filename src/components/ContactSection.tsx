import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const serviceOptions = [
  "Combine Harvester", "Trolley (Trole)", "Cultivator", "Rotavator",
  "Plough (Hal)", "Thresher (Thraser)", "Seed Drill", "Potato Planter", "Garlic Planter",
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", village: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `🌾 *New Enquiry - Sundrela Krishi Kendra*%0A%0A👤 *Name:* ${encodeURIComponent(form.name)}%0A🏘️ *Village/City:* ${encodeURIComponent(form.village)}%0A📞 *Phone:* ${encodeURIComponent(form.phone)}%0A🚜 *Service:* ${encodeURIComponent(form.service)}%0A💬 *Message:* ${encodeURIComponent(form.message || "N/A")}`;
    window.open(`https://wa.me/919009662535?text=${text}`, "_blank");
    toast.success("Redirecting to WhatsApp... / व्हाट्सएप पर भेज रहे हैं...");
    setForm({ name: "", village: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background bg-wheat-pattern">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ staggerChildren: 0.12 }}>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            Get in Touch
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="font-serif text-xl text-muted-foreground text-center mb-12">
            संपर्क करें
          </motion.p>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.form variants={fadeUp} transition={{ duration: 0.5 }} onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                placeholder="Your Name / आपका नाम"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring min-h-[48px]"
              />
              <input
                required
                placeholder="Village / City"
                value={form.village}
                onChange={(e) => setForm({ ...form, village: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring min-h-[48px]"
              />
              <input
                required
                type="tel"
                placeholder="Phone Number / फोन नंबर"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring min-h-[48px]"
              />
              <select
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring min-h-[48px]"
              >
                <option value="">Select Service / सेवा चुनें</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <textarea
                placeholder="Message (optional)"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-lg text-lg hover:brightness-110 transition-all min-h-[48px]"
              >
                Send Message / संदेश भेजें
              </button>
            </motion.form>

            <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-foreground">Phone</h3>
                  <p className="text-muted-foreground">+91 90096 62535</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-foreground">Address</h3>
                  <p className="text-muted-foreground">Village Kaluheda, District Ujjain, M.P.</p>
                </div>
              </div>
              <a
                href="https://wa.me/919009662535"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-[hsl(142,70%,40%)] text-primary-foreground rounded-lg font-semibold text-lg hover:brightness-110 transition-all min-h-[48px] w-fit"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </a>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241!2d75.7031633!3d23.361809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963790b033d2acb%3A0x615c769c91958eab!2sSundrela%20krishi%20sevaa%20kendr!5e1!3m2!1sen!2sin!4v1744699200000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

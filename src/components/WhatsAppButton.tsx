import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919009662535"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[hsl(142,70%,40%)] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-primary-foreground" />
  </a>
);

export default WhatsAppButton;

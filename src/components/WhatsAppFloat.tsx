import { Phone } from "lucide-react";
import { useLocation } from "react-router-dom";

const WhatsAppFloat = () => {
  const location = useLocation();

  if (location.pathname === "/menu") {
    return null;
  }

  return (
    <a
      href="tel:0554476493"
      className="fixed bottom-20 md:bottom-6 right-6 z-50 w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-lg pulse-soft hover:bg-green-500 transition-colors"
      aria-label="Chiama Da Tommy"
    >
      <Phone className="w-6 h-6 text-white" />
    </a>
  );
};

export default WhatsAppFloat;

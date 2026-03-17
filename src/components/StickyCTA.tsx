import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Phone, Bike } from "lucide-react";

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible || location.pathname === "/menu") {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-slide-up">
      <div className="bg-card/95 backdrop-blur-md border-t border-border px-4 py-3 flex gap-3">
        <a
          href="tel:0554476493"
          className="flex-1 inline-flex items-center justify-center gap-2 border border-border font-accent uppercase tracking-wider text-sm py-3 rounded-lg hover:bg-secondary transition-colors"
        >
          <Phone className="w-4 h-4" />
          Chiama
        </a>
        <a
          href="https://deliveroo.it"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-accent uppercase tracking-wider text-sm py-3 rounded-lg hover:brightness-110 transition-all"
        >
          <Bike className="w-4 h-4" />
          Ordina Ora
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;

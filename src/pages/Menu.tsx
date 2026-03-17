import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  Facebook,
  Instagram,
  Share2,
  MessageSquare,
  ExternalLink,
} from "lucide-react";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import WhatsAppFloat from "@/components/WhatsAppFloat";

import cover from "@/assets/menu/cover.jpg";
import menu from "@/assets/menu/menu.jpg";
import birra1 from "@/assets/menu/birra1.jpg";
import birra2 from "@/assets/menu/birra2.jpg";

const menuPages: { src: string; alt: string }[] = [
  { src: cover, alt: "Copertina del menu di Da Tommy" },
  { src: menu, alt: "Menu Da Tommy – pagina 1" },
  { src: birra1, alt: "Menu Da Tommy – pagina 2" },
  { src: birra2, alt: "Menu Da Tommy – pagina 3" },
];

const Menu = () => {
  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Da Tommy — I' Re di' Panino",
        text: "Guarda il menu di Da Tommy, la miglior paninoteca di Firenze!",
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Header bar */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-14">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-accent uppercase tracking-wider">Home</span>
          </Link>
          <h1 className="font-display text-2xl">Il Nostro Menu</h1>
          <div className="w-16" /> {/* spacer */}
        </div>
      </header>

      {/* Menu document stream */}
      <section className="py-8">
        <div className="max-w-2xl mx-auto px-4 space-y-1">
          {menuPages.map((page, i) => (
            <div key={i} className="relative">
              <img
                src={page.src}
                alt={page.alt}
                loading={i < 3 ? "eager" : "lazy"}
                className="w-full h-auto rounded-sm"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Bottom action section */}
      <section className="py-16 border-t border-border">
        <div className="container max-w-2xl text-center space-y-10">
          {/* Rating recap */}
          <div>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-accent"
                  fill="hsl(var(--accent))"
                />
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              4.4 su Google · Oltre 700 recensioni
            </p>
          </div>

          {/* Leave a review */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Ti È Piaciuto? Faccelo Sapere!
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              La tua opinione è importante. Lascia una recensione su Google e
              aiuta altri buongustai a scoprirci.
            </p>
            <a
              href="https://www.google.com/maps/place/Da+Tommy/@43.7968373,11.2146686,13z/data=!4m6!3m5!1s0x132a56eacae13dab:0x65b422d82ea422dc!8m2!3d43.7904035!4d11.2296169!16s%2Fg%2F12mkvndqg?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-accent uppercase tracking-wider px-8 py-4 rounded-xl text-lg hover:bg-primary/90 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Lascia una Recensione
            </a>
          </div>

          {/* Social & sharing */}
          <div className="pt-4 space-y-4">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-accent">
              Seguici & Condividi
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <a
                href="https://it-it.facebook.com/da.tommy.33"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3 text-sm hover:border-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
              <a
                href="https://instagram.com/datommy_paninoteca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3 text-sm hover:border-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3 text-sm hover:border-primary transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Condividi
              </button>
            </div>

            {/* Delivery platforms */}
            <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
              {[
                {
                  label: "Deliveroo",
                  url: "https://deliveroo.it/it/menu/firenze/novoli-rifredi/paninoteca-da-tommy",
                },
                {
                  label: "Just Eat",
                  url: "https://www.justeat.it/restaurants-da-tommy-firenze/menu",
                },
                { label: "Glovo", url: "https://glovoapp.com/it/it/firenze/" },
              ].map((p) => (
                <a
                  key={p.label}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-muted rounded-lg px-4 py-2 text-xs font-accent uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  {p.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
      <WhatsAppFloat />
    </main>
  );
};

export default Menu;

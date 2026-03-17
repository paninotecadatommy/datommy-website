import { Link } from "react-router-dom";
import { ArrowLeft, Star, Facebook, Instagram, Share2, MessageSquare, ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// Product images
import hamburger from "@/assets/products/hamburger.jpg";
import panino from "@/assets/products/panino.jpg";
import porchetta from "@/assets/products/porchetta.jpg";
import pollo from "@/assets/products/pollo.jpg";
import veggie from "@/assets/products/veggie.jpg";
import patatine from "@/assets/products/patatine.jpg";
import alette from "@/assets/products/alette.jpg";
import tagliere from "@/assets/products/tagliere.jpg";
import stuzzichini from "@/assets/products/stuzzichini.jpg";
import crepe from "@/assets/products/crepe.jpg";
import gelato from "@/assets/products/gelato.jpg";

// Media / atmosphere images
import media2 from "@/assets/media/2.jpg";
import media6 from "@/assets/media/6.jpg";
import media8 from "@/assets/media/8.jpg";
import media9 from "@/assets/media/9.jpg";
import media13 from "@/assets/media/13.jpg";
import media14 from "@/assets/media/14.jpg";
import media18 from "@/assets/media/18.jpg";
import media19 from "@/assets/media/19.jpg";
import media20 from "@/assets/media/20.jpg";
import media21 from "@/assets/media/21.jpg";
import media22 from "@/assets/media/22.jpg";
import media23 from "@/assets/media/23.jpg";
import media24 from "@/assets/media/24.jpg";
import media25 from "@/assets/media/25.jpg";
import media26 from "@/assets/media/26.jpg";
import media27 from "@/assets/media/27.jpg";
import media28 from "@/assets/media/28.jpg";
import media29 from "@/assets/media/29.jpg";

const menuPages: { src: string; alt: string }[] = [
  { src: media2, alt: "Menu Da Tommy – pagina 1" },
  { src: media6, alt: "Menu Da Tommy – pagina 2" },
  { src: media8, alt: "Menu Da Tommy – pagina 3" },
  { src: media9, alt: "Menu Da Tommy – pagina 4" },
  { src: media13, alt: "Menu Da Tommy – pagina 5" },
  { src: media14, alt: "Menu Da Tommy – pagina 6" },
  { src: media18, alt: "Menu Da Tommy – pagina 7" },
  { src: media19, alt: "Menu Da Tommy – pagina 8" },
  { src: media20, alt: "Menu Da Tommy – pagina 9" },
  { src: media21, alt: "Menu Da Tommy – pagina 10" },
  { src: media22, alt: "Menu Da Tommy – pagina 11" },
  { src: media23, alt: "Menu Da Tommy – pagina 12" },
  { src: media24, alt: "Menu Da Tommy – pagina 13" },
  { src: media25, alt: "Menu Da Tommy – pagina 14" },
  { src: media26, alt: "Menu Da Tommy – pagina 15" },
  { src: media27, alt: "Menu Da Tommy – pagina 16" },
  { src: media28, alt: "Menu Da Tommy – pagina 17" },
  { src: media29, alt: "Menu Da Tommy – pagina 18" },
  { src: hamburger, alt: "Hamburger di Chianina" },
  { src: panino, alt: "Panino artigianale" },
  { src: porchetta, alt: "Porchetta toscana" },
  { src: pollo, alt: "Panino pollo e tacchino" },
  { src: veggie, alt: "Veggie burger" },
  { src: patatine, alt: "Patatine fritte" },
  { src: alette, alt: "Alette di pollo" },
  { src: tagliere, alt: "Tagliere misto" },
  { src: stuzzichini, alt: "Stuzzichini" },
  { src: crepe, alt: "Crêpe dolce" },
  { src: gelato, alt: "Gelato artigianale" },
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
              La tua opinione è importante. Lascia una recensione su Google e aiuta altri buongustai a scoprirci.
            </p>
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJd8Rc8CJWKhMR9lqfvnbYJ8c"
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
                { label: "Deliveroo", url: "https://deliveroo.it/it/menu/firenze/novoli-rifredi/paninoteca-da-tommy" },
                { label: "Just Eat", url: "https://www.justeat.it/restaurants-da-tommy-firenze/menu" },
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

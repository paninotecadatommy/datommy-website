import { useState } from "react";
import {
  ArrowRight,
  Beef,
  ChefHat,
  Sandwich,
  Cookie,
  Camera,
  X,
  Utensils,
} from "lucide-react";

import imgPanino from "@/assets/products/panino.jpg";
import imgTagliere from "@/assets/products/tagliere.jpg";
import imgPollo from "@/assets/products/pollo.jpg";
import imgStuzzichini from "@/assets/products/stuzzichini.jpg";
import imgDolci from "@/assets/products/crepe.jpg";
import imgVeggie from "@/assets/products/veggie.jpg";
import imgWings from "@/assets/products/alette.jpg";
import imgPorchetta from "@/assets/products/porchetta.jpg";

// Update Category Type
type Category = "tutti" | "panini" | "piatti" | "stuzzichini" | "dolci";

interface MenuItem {
  image: string;
  name: string;
  desc: string;
  price: string;
  category: Category;
  badge?: string;
}

const categories: { id: Category; label: string; icon: React.ReactNode }[] = [
  { id: "tutti", label: "Tutti", icon: <ChefHat className="w-4 h-4" /> },
  {
    id: "panini",
    label: "Crea il tuo Panino",
    icon: <Sandwich className="w-4 h-4" />,
  },
  {
    id: "piatti",
    label: "Piatti & Taglieri",
    icon: <Utensils className="w-4 h-4" />,
  },
  {
    id: "stuzzichini",
    label: "Stuzzichini",
    icon: <Cookie className="w-4 h-4" />,
  },
  { id: "dolci", label: "Le Dolcezze", icon: <Cookie className="w-4 h-4" /> },
];

const menuItems: MenuItem[] = [
  // --- PANINI ---
  {
    image: imgPanino,
    name: "Crea il tuo Panino",
    desc: "Base con Hamburger Chianina, Salsiccia, Porchetta o Veggie. Include formaggi, salse home-made e verdure fresche/grigliate.",
    price: "€7,50",
    category: "panini",
    badge: "Personalizzabile",
  },
  {
    image: imgPanino,
    name: "Carni Speciali",
    desc: "Upgrade per il tuo panino: Angus, Cinta Senese, Cinghiale, Agnello o Cervo.",
    price: "+€1,50",
    category: "panini",
  },

  // --- PIATTI & TAGLIERI ---
  {
    image: imgTagliere,
    name: "I Taglieri Da Tommy",
    desc: "Gran piatto con contorni a scelta, formaggi, verdure, patatine fritte, salse artigianali e pane caldo.",
    price: "€12,90",
    category: "piatti",
    badge: "Specialità",
  },
  {
    image: imgWings,
    name: "Alette di Pollo Rustiche",
    desc: "Servite con abbondante porzione di patatine fritte e salse.",
    price: "€13,90",
    category: "piatti",
  },
  {
    image: imgPollo,
    name: "Galletto Ruspante (500gr)",
    desc: "Galletto intero cotto alla perfezione, servito con patatine fritte.",
    price: "€16,90",
    category: "piatti",
    badge: "Piatto Forte",
  },
  {
    image: imgVeggie,
    name: "Hamburger di Ceci (Veg)",
    desc: "Piatto vegetariano con burger di ceci, verdure miste e contorni.",
    price: "€12,90",
    category: "piatti",
  },
  {
    image: imgPorchetta,
    name: "Porchetta Artigianale DOP",
    desc: "Piatto di porchetta selezionata servita con salse e patate.",
    price: "€15,90",
    category: "piatti",
  },
  {
    image: imgTagliere,
    name: "Gran Piatto Bavarese",
    desc: "La massima espressione del nostro menù: selezione completa di carni e contorni.",
    price: "€17,90",
    category: "piatti",
    badge: "XL",
  },

  // --- STUZZICHINI ---
  {
    image: imgStuzzichini,
    name: "Fish and Chips",
    desc: "Calamari e gamberi fritti nel cartoccio con patatine dorate.",
    price: "€8,90",
    category: "stuzzichini",
  },
  {
    image: imgStuzzichini,
    name: "Gli Stuzzichini Misti",
    desc: "Bocconcini di pollo, anelli di cipolla, mozzarelline, fiori di zucca, arancini e crocchette. 2 salse incluse.",
    price: "€6,50",
    category: "stuzzichini",
  },

  // --- DOLCI ---
  {
    image: imgDolci,
    name: "Tiramisù della Nonna",
    desc: "Il classico dolce italiano fatto in casa con ricetta tradizionale.",
    price: "€5,50",
    category: "dolci",
  },
  {
    image: imgDolci,
    name: "Crêpe Biologica",
    desc: "Sottile e golosa crêpe biologica con farciture a scelta.",
    price: "€5,50",
    category: "dolci",
  },
];

const galleryModules = import.meta.glob("@/assets/media/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const galleryImages = Object.entries(galleryModules).map(([path, src]) => {
  const filename =
    path
      .split("/")
      .pop()
      ?.replace(/\.[^/.]+$/, "") ?? "";

  const isNumeric = /^\d+$/.test(filename);

  const caption = isNumeric
    ? ""
    : filename.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    src,
    alt: caption || "Gallery Image",
    caption,
  };
});

const DELIVEROO_URL =
  "https://deliveroo.it/it/menu/firenze/novoli-rifredi/paninoteca-da-tommy/?day=TODAY&time=19%3A15&timestamp=1772734500";

const FeaturedMenu = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("tutti");
  const [activeTab, setActiveTab] = useState<"menu" | "gallery">("menu");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filteredItems =
    activeCategory === "tutti"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20" id="menu">
      <div className="container">
        <h2 className="font-display text-5xl md:text-6xl text-center mb-4">
          I Nostri <span className="text-primary">Classici</span>
        </h2>
        <p className="text-center text-muted-foreground font-serif italic mb-10">
          Carni Toscane. Salse Infinite. Fame Risolta.
        </p>

        {/* Main Tabs: Menu / Gallery */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab("menu")}
            className={`inline-flex items-center gap-2 font-accent uppercase tracking-wider text-sm px-6 py-3 rounded-lg border transition-all duration-300 ${
              activeTab === "menu"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:border-primary/50"
            }`}
          >
            <ChefHat className="w-4 h-4" />
            Menu
          </button>
          <button
            onClick={() => setActiveTab("gallery")}
            className={`inline-flex items-center gap-2 font-accent uppercase tracking-wider text-sm px-6 py-3 rounded-lg border transition-all duration-300 ${
              activeTab === "gallery"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:border-primary/50"
            }`}
          >
            <Camera className="w-4 h-4" />
            Galleria
          </button>
        </div>

        {activeTab === "menu" && (
          <>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 font-accent text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-accent text-accent-foreground border-accent"
                      : "bg-card text-muted-foreground border-border hover:border-accent/50 hover:text-foreground"
                  }`}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, i) => (
                <div
                  key={`${item.name}-${i}`}
                  className="group rounded-xl overflow-hidden bg-card border border-border food-card-hover cursor-pointer relative"
                >
                  {item.badge && (
                    <span className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground font-accent text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover food-image transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-accent text-base uppercase tracking-wide font-bold leading-tight">
                        {item.name}
                      </h3>
                      <span className="text-primary font-accent font-bold text-sm whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {item.desc}
                    </p>
                    <a
                      href={DELIVEROO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary font-accent text-sm uppercase tracking-wider hover:underline"
                    >
                      Ordina <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Items count */}
            <p className="text-center text-muted-foreground text-xs font-accent uppercase tracking-wider mt-6">
              {filteredItems.length} prodott
              {filteredItems.length === 1 ? "o" : "i"} trovati
            </p>
          </>
        )}

        {activeTab === "gallery" && (
          <>
            {/* Gallery Grid — masonry-like with varied sizes */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setLightbox(img.src)}
                  className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                    i === 0 ? "col-span-2 row-span-2" : ""
                  }`}
                >
                  <div
                    className={`overflow-hidden ${i === 0 ? "aspect-[4/3]" : "aspect-square"}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover food-image transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="font-accent text-sm uppercase tracking-wider text-foreground">
                      {img.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <a
            href={DELIVEROO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-accent uppercase tracking-wider text-sm"
          >
            <ArrowRight className="w-4 h-4" />
            Vedi tutto il menu su Deliveroo
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox}
            alt="Foto Da Tommy"
            className="max-w-full max-h-[85vh] object-contain rounded-xl food-image"
          />
        </div>
      )}
    </section>
  );
};

export default FeaturedMenu;

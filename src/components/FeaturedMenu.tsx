import { ArrowRight } from "lucide-react";
import menuChianina from "@/assets/menu-chianina.jpg";
import menuCinta from "@/assets/menu-cinta.jpg";
import menuColazione from "@/assets/menu-colazione.jpg";
import menuTiramisu from "@/assets/menu-tiramisu.jpg";

const items = [
  { 
    image: menuChianina, 
    name: "Gyros greca", 
    desc: "Il classico sapore ellenico con carne speziata, pita morbida e salsa tzatziki.", 
    price: "€8.50" 
  },
  { 
    image: menuCinta, 
    name: "Schiacciata chianina re di panino", 
    desc: "L'eccellenza toscana racchiusa in una schiacciata croccante con carne di Chianina di prima scelta.", 
    price: "€9.50" 
  },
  { 
    image: menuColazione, 
    name: "Galletto ruspante 500 grammi", 
    desc: "Mezzo chilo di pura bontà: galletto cotto a puntino, succoso e saporito.", 
    price: "€18.90" 
  },
  { 
    image: menuTiramisu, 
    name: "Gyros all'Italiana", 
    desc: "Un incontro unico tra la tradizione greca e ingredienti selezionati del nostro territorio.", 
    price: "€8.50" 
  },
];

const FeaturedMenu = () => {
  return (
    <section className="py-20" id="menu">
      <div className="container">
        <h2 className="font-display text-5xl md:text-6xl text-center mb-4">
          I Nostri <span className="text-primary">Classici</span>
        </h2>
        <p className="text-center text-muted-foreground font-serif italic mb-12">
          Carni Toscane. Salse Infinite. Fame Risolta.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="group rounded-xl overflow-hidden bg-card border border-border food-card-hover cursor-pointer">
              <div className="aspect-square overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover food-image transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-accent text-lg uppercase tracking-wide font-bold">{item.name}</h3>
                  <span className="text-primary font-accent font-bold text-sm">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                <a href="https://deliveroo.it/it/menu/firenze/novoli-rifredi/paninoteca-da-tommy/?day=TODAY&time=19%3A15&timestamp=1772734500" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary font-accent text-sm uppercase tracking-wider hover:underline">
                  Ordina <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="https://deliveroo.it/it/menu/firenze/novoli-rifredi/paninoteca-da-tommy/?day=TODAY&time=19%3A15&timestamp=1772734500" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-accent uppercase tracking-wider text-sm">
            <ArrowRight className="w-4 h-4" />
            Vedi tutto il menu su Deliveroo
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;

import menuChianina from "@/assets/menu-chianina.jpg";
import menuCinta from "@/assets/menu-cinta.jpg";
import menuColazione from "@/assets/menu-colazione.jpg";
import menuTiramisu from "@/assets/menu-tiramisu.jpg";

const items = [
  {
    image: menuChianina,
    name: "Panino Chianina",
    desc: "Il re del menu. Manzo chianino, cheddar, salse artigianali.",
    price: "€10–14",
  },
  {
    image: menuCinta,
    name: "Panino Cinta Senese",
    desc: "Maiale di razza toscana, formaggi misti, salsa BBQ.",
    price: "€10–14",
  },
  {
    image: menuColazione,
    name: "Colazione dell'Operaio",
    desc: "Per i veri affamati. Salsiccia, uovo, bacon, fritti.",
    price: "€12–16",
  },
  {
    image: menuTiramisu,
    name: "Tiramisù",
    desc: "Il dolce che ha conquistato Firenze.",
    price: "€4–6",
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
            <div
              key={i}
              className="group rounded-xl overflow-hidden bg-card border border-border food-card-hover cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover food-image transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-accent text-lg uppercase tracking-wide font-bold">{item.name}</h3>
                  <span className="text-primary font-accent font-bold text-sm">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                <a
                  href="https://deliveroo.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary font-accent text-sm uppercase tracking-wider hover:underline"
                >
                  Ordina →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://deliveroo.it"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors font-accent uppercase tracking-wider text-sm"
          >
            → Vedi tutto il menu su Deliveroo
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;

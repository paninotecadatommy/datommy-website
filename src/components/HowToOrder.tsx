const steps = [
  { num: "1", icon: "🍔", title: "SCEGLI", desc: "Sfoglia il menu online o in loco" },
  { num: "2", icon: "📱", title: "ORDINA", desc: "Sul tuo sito preferito in pochi tocchi" },
  { num: "3", icon: "😋", title: "GUSTA", desc: "A casa, o da noi in Via Forlanini" },
];

const HowToOrder = () => {
  return (
    <section className="py-20" id="ordina">
      <div className="container">
        <h2 className="font-display text-5xl md:text-6xl text-center mb-12">
          Come <span className="text-primary">Ordinare</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
          {steps.map((s, i) => (
            <div key={i} className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center mx-auto text-3xl">
                {s.icon}
              </div>
              <h3 className="font-accent text-accent text-xl uppercase tracking-wider font-bold">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://deliveroo.it"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-accent text-lg uppercase tracking-wider px-8 py-4 rounded-lg hover:brightness-110 transition-all duration-300"
          >
            Ordina Adesso su Deliveroo →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;

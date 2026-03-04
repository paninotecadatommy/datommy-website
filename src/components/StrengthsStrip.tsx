const strengths = [
  { icon: "🥩", title: "Carne Selezionata", text: "Chianina, Cinta Senese, pollo — solo carni d'eccellenza" },
  { icon: "🧴", title: "10+ Salse Artigianali", text: "Dal BBQ al tabasco, crea il tuo panino perfetto" },
  { icon: "🛵", title: "Consegna ~32 min", text: "Via Deliveroo, Just Eat e Glovo — caldo a casa tua" },
  { icon: "⭐", title: "4.4 su Google", text: "Oltre 700 fiorentini non possono sbagliarsi" },
  { icon: "🌙", title: "Aperto fino alle 3", text: "Il posto giusto anche dopo la serata" },
];

const StrengthsStrip = () => {
  return (
    <section className="py-12 border-y border-border bg-secondary">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {strengths.map((s, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="font-accent text-accent text-sm uppercase tracking-wider font-bold">{s.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsStrip;

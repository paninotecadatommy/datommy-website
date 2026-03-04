import { Beef, Droplets, Bike, Star, Moon } from "lucide-react";
import { ReactNode } from "react";

const strengths: { icon: ReactNode; title: string; text: string }[] = [
  { icon: <Beef className="w-7 h-7 text-accent" />, title: "Carne Selezionata", text: "Chianina, Cinta Senese, pollo — solo carni d'eccellenza" },
  { icon: <Droplets className="w-7 h-7 text-accent" />, title: "10+ Salse Artigianali", text: "Dal BBQ al tabasco, crea il tuo panino perfetto" },
  { icon: <Bike className="w-7 h-7 text-accent" />, title: "Consegna ~32 min", text: "Via Deliveroo, Just Eat e Glovo — caldo a casa tua" },
  { icon: <Star className="w-7 h-7 text-accent fill-accent" />, title: "4.4 su Google", text: "Oltre 700 fiorentini non possono sbagliarsi" },
  { icon: <Moon className="w-7 h-7 text-accent" />, title: "Aperto fino alle 3", text: "Il posto giusto anche dopo la serata" },
];

const StrengthsStrip = () => {
  return (
    <section className="py-12 border-y border-border bg-secondary">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {strengths.map((s, i) => (
            <div key={i} className="text-center space-y-2 flex flex-col items-center">
              {s.icon}
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

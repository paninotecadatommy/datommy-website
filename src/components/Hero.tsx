import { useEffect, useRef, useState } from "react";
import heroBurger from "@/assets/hero-burger.jpg";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    setIsOpen(hour >= 19 || hour < 3);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBurger}
          alt="Hamburger gourmet Da Tommy"
          className="w-full h-full object-cover food-image"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
      </div>

      {/* Badge */}
      <div className="absolute top-6 left-6 z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur-sm px-4 py-2">
          <span className="shimmer text-lg font-accent font-bold">⭐ 4.4</span>
          <span className="text-muted-foreground text-sm">· Oltre 700 recensioni Google</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4 pt-20">
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-wider mb-4">
          Il Panino Che
          <br />
          <span className="text-primary">Non Dimentichi.</span>
        </h1>

        <p className="font-serif text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 italic">
          Chianina, Cinta Senese, salse artigianali. Aperti dalle 19 fino alle 3 di notte.
        </p>

        {/* Urgency */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className={`w-2.5 h-2.5 rounded-full ${isOpen ? "bg-green-500 pulse-soft" : "bg-muted-foreground"}`} />
          <span className="text-sm font-accent uppercase tracking-wider text-muted-foreground">
            {isOpen ? "Aperto adesso" : "Apre alle 19:00"}
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://deliveroo.it"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-accent text-lg uppercase tracking-wider px-8 py-4 rounded-lg hover:brightness-110 transition-all duration-300"
          >
            🛵 Ordina Ora
          </a>
          <a
            href="tel:0554476493"
            className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-accent text-lg uppercase tracking-wider px-8 py-4 rounded-lg hover:bg-card transition-all duration-300"
          >
            📞 Chiama · 055 447 6493
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

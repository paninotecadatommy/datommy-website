import { useEffect, useRef, useState } from "react";

const reviews = [
  { text: "Il miglior panino di tutta Firenze — se potessi mangiarlo ogni giorno lo farei!", name: "Marco" },
  { text: "I miei amici da Milano e da Roma vengono a Firenze e Da Tommy è sempre tappa obbligatoria.", name: "Giulia" },
  { text: "Tornavo dall'hotel in cerca di qualcosa — questo posto ha placato la mia fame da orco. IMPERIALE.", name: "Alessandro" },
  { text: "Personale simpatico e accogliente. Tommy sempre molto gentile.", name: "Sara" },
  { text: "Aperto fino a tardi in zona Novoli — in zona non ci sono panini più buoni.", name: "Luca" },
  { text: "Hamburger ottimi, possibilità di condirli con praticamente tutto.", name: "Francesca" },
];

const ReviewsSlider = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="py-20 bg-secondary" id="recensioni">
      <div className="container">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 mb-6">
            <span className="shimmer font-accent font-bold">⭐ 4.4</span>
            <span className="text-muted-foreground text-sm">· Oltre 700 Recensioni su Google</span>
          </div>
        </div>
        <h2 className="font-display text-5xl md:text-6xl text-center mb-12">
          Cosa Dicono <span className="text-primary">di Noi</span>
        </h2>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {reviews.map((r, i) => (
              <div key={i} className="min-w-full px-4">
                <div className="max-w-2xl mx-auto text-center bg-card border border-border rounded-2xl p-8 md:p-12">
                  <div className="text-accent text-2xl mb-4">★★★★★</div>
                  <p className="font-serif italic text-lg md:text-xl leading-relaxed mb-6">
                    "{r.text}"
                  </p>
                  <p className="font-accent uppercase tracking-wider text-muted-foreground text-sm">
                    {r.name} — Firenze
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-6" : "bg-muted-foreground/40"
                }`}
                aria-label={`Recensione ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSlider;

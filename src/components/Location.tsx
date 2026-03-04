const Location = () => {
  return (
    <section className="py-20 bg-secondary" id="contatti">
      <div className="container">
        <h2 className="font-display text-5xl md:text-6xl text-center mb-12">
          Dove <span className="text-primary">Siamo</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-border aspect-video lg:aspect-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.5!2d11.2168!3d43.7891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ3JzIxLjAiTiAxMcKwMTMnMDAuNSJF!5e0!3m2!1sit!2sit!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 300 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Da Tommy - Mappa"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-accent uppercase tracking-wider text-sm text-accent mb-1">Indirizzo</p>
                  <p>Via Enrico Forlanini, 8/r — 50127 Firenze</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">📞</span>
                <div>
                  <p className="font-accent uppercase tracking-wider text-sm text-accent mb-1">Telefono</p>
                  <a href="tel:0554476493" className="hover:text-primary transition-colors">055 447 6493</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">🕘</span>
                <div>
                  <p className="font-accent uppercase tracking-wider text-sm text-accent mb-1">Orari</p>
                  <p>Ogni giorno dalle 19:00 alle 03:00</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">🚗</span>
                <div>
                  <p className="font-accent uppercase tracking-wider text-sm text-accent mb-1">Parcheggio</p>
                  <p>Parcheggio nelle vicinanze</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Via+Enrico+Forlanini+8+Firenze"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border font-accent uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-card transition-all duration-300 text-sm"
            >
              📍 Indicazioni
            </a>

            {/* Delivery platforms */}
            <div className="pt-4 border-t border-border">
              <p className="font-accent uppercase tracking-wider text-sm text-muted-foreground mb-4">Ordinaci anche su</p>
              <div className="flex gap-4 flex-wrap">
                {["Deliveroo", "Just Eat", "Glovo"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="bg-card border border-border rounded-lg px-5 py-3 font-accent uppercase tracking-wider text-sm hover:border-primary transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

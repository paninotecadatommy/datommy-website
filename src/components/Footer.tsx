import { Facebook, Instagram, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="font-display text-3xl mb-2">Da Tommy</h3>
            <p className="font-serif italic text-muted-foreground">I' Re di' Panino — Firenze</p>
            <p className="text-muted-foreground text-sm mt-3">Da 30 anni il re del panino a Firenze.</p>
          </div>

          <div>
            <h4 className="font-accent uppercase tracking-wider text-accent text-sm mb-4">Link Rapidi</h4>
            <nav className="space-y-2">
              {[
                { label: "Menu", href: "#menu" },
                { label: "Ordina", href: "#ordina" },
                { label: "Recensioni", href: "#recensioni" },
                { label: "Contatti", href: "#contatti" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-accent uppercase tracking-wider text-accent text-sm mb-4">Seguici</h4>
            <div className="flex gap-4 mb-6">
              <a href="https://it-it.facebook.com/datommy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2 text-sm hover:border-primary transition-colors">
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
              <a href="https://instagram.com/datommy_paninoteca" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2 text-sm hover:border-primary transition-colors">
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["Deliveroo", "Just Eat", "Glovo"].map((p) => (
                <span key={p} className="bg-muted rounded px-3 py-1 text-xs font-accent uppercase tracking-wider text-muted-foreground">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 Da Tommy — P.IVA 05847930483 · Via Forlanini 8/r · Firenze
          </p>
          <a href="https://deliveroo.it" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-accent uppercase tracking-wider text-sm hover:underline">
            Ancora affamato? Ordina adesso
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

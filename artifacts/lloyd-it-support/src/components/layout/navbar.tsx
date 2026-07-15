import { useState } from "react";
import { Link } from "wouter";
import { Terminal, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary text-primary-foreground p-2 flex items-center justify-center transition-transform group-hover:scale-110">
            <Terminal size={24} strokeWidth={2.5} />
          </div>
          <span className="font-bold text-xl tracking-tight uppercase">LLOYD<span className="text-primary">.IT</span></span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-wider">
          <button onClick={() => scrollTo('services')} className="hover:text-primary transition-colors">Services</button>
          <button onClick={() => scrollTo('pricing')} className="hover:text-primary transition-colors">Pricing</button>
          <button onClick={() => scrollTo('process')} className="hover:text-primary transition-colors">Process</button>
          <button 
            onClick={() => scrollTo('contact')} 
            className="bg-foreground text-background px-6 py-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Contact
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-10 h-10 border border-border text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-6 font-mono text-sm uppercase tracking-wider">
              <button onClick={() => scrollTo('services')} className="text-left hover:text-primary transition-colors">Services</button>
              <button onClick={() => scrollTo('pricing')} className="text-left hover:text-primary transition-colors">Pricing</button>
              <button onClick={() => scrollTo('process')} className="text-left hover:text-primary transition-colors">Process</button>
              <button 
                onClick={() => scrollTo('contact')} 
                className="bg-foreground text-background px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

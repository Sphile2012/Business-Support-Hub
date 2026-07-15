import { motion } from "framer-motion";
import { ArrowRight, Server, ShieldCheck, Database } from "lucide-react";
import cosmicImage from "@assets/cosmic-hero.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] pt-20 flex items-center overflow-hidden" id="hero">
      {/* Cosmic Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={cosmicImage} 
          alt="Cosmic Technology Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-secondary-foreground font-mono text-xs uppercase tracking-wider mb-8 border border-border">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for new projects
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6">
              IT Support,<br />
              <span className="text-primary">Engineered</span><br />
              for Reality.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl font-medium">
              I'm Lloyd. With a strong background in operations and public management, I provide professional, no-nonsense IT support that keeps businesses and individuals running smoothly.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300 w-full sm:w-auto"
              >
                Get Support Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center gap-3 bg-transparent border-2 border-foreground text-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300 w-full sm:w-auto"
              >
                View Services
              </button>
            </div>

            <div className="mt-16 flex items-center gap-8 pt-8 border-t border-border">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-3xl font-bold">10+</span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">Years Exp</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-3xl font-bold">24/7</span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">Reliability</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:h-[700px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-primary/10 translate-x-4 translate-y-4 border border-primary/20" />
            <div className="relative w-full h-full max-h-[600px] border-2 border-foreground overflow-hidden bg-muted group">
              <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
              <img 
                src={cosmicImage} 
                alt="Lloyd - IT Support Professional" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur border-t-2 border-foreground p-4 z-20 flex justify-between items-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="font-mono text-sm font-bold uppercase">System Admin</span>
                <span className="w-2 h-2 rounded-full bg-primary" />
              </div>
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex absolute left-2 top-16 lg:left-4 bg-background border-2 border-foreground p-4 items-center gap-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap"
            >
              <Server className="text-primary shrink-0" />
              <div className="flex flex-col">
                <span className="font-mono text-xs font-bold">Systems</span>
                <span className="text-xs text-muted-foreground">Optimized</span>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="hidden sm:flex absolute right-2 bottom-24 lg:right-4 bg-background border-2 border-foreground p-4 items-center gap-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap"
            >
              <ShieldCheck className="text-primary shrink-0" />
              <div className="flex flex-col">
                <span className="font-mono text-xs font-bold">Security</span>
                <span className="text-xs text-muted-foreground">Hardened</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

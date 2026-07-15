import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section className="py-32 bg-background relative border-y border-border" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Transparent Pricing.</h2>
          <p className="text-xl text-muted-foreground">
            No hidden fees. Just straightforward rates for professional technical support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Hourly Rate */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-2 border-border p-10 bg-card hover:border-foreground transition-colors relative group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-border group-hover:bg-foreground transition-colors" />
            
            <div className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Ad-Hoc / Troubleshooting
            </div>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-bold">R300</span>
              <span className="text-muted-foreground font-mono">/ hour</span>
            </div>
            
            <p className="text-muted-foreground mb-8 min-h-[60px]">
              Perfect for quick fixes, diagnostic sessions, software troubleshooting, and immediate individual support.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['Hardware diagnostics', 'Software debugging', 'Virus/Malware removal', 'Network troubleshooting'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="text-primary shrink-0 mt-0.5" size={20} />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full py-4 border-2 border-foreground font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
            >
              Book Session
            </button>
          </motion.div>

          {/* Project Setup */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-2 border-foreground p-10 bg-foreground text-background relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -z-10 rounded-full" />
            
            <div className="flex justify-between items-start mb-4">
              <div className="font-mono text-sm uppercase tracking-widest text-primary">
                Infrastructure / Deployments
              </div>
              <div className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
                Recommended
              </div>
            </div>
            
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-xl font-mono text-muted">From</span>
              <span className="text-5xl font-bold">R5,000</span>
            </div>
            
            <p className="text-muted mb-8 min-h-[60px]">
              Comprehensive office setups, network infrastructure design, and full-scale migrations. Price varies by scope.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['Full office network setup', 'Server configuration', 'Company-wide hardware deployment', 'Custom security architecture'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="text-primary shrink-0 mt-0.5" size={20} />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest hover:bg-background hover:text-foreground transition-colors"
            >
              Request Quote
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

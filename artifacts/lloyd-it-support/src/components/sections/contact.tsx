import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section className="py-32 bg-foreground text-background relative overflow-hidden" id="contact">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            >
              System<br/>Offline?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted max-w-md mb-12 font-medium"
            >
              Don't let technical issues stall your operations. Reach out for immediate support or to discuss your infrastructure needs.
            </motion.p>

            <div className="space-y-8">
              <motion.a 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                href="mailto:hlangananilloyd@gmail.com" 
                className="flex items-center gap-6 group"
              >
                <div className="w-16 h-16 bg-background/10 border border-background/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-mono text-sm uppercase tracking-wider text-muted mb-1">Email</div>
                  <div className="text-xl font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                    hlangananilloyd@gmail.com
                    <ArrowUpRight size={20} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                  </div>
                </div>
              </motion.a>

              <motion.a 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                href="tel:+27790237323" 
                className="flex items-center gap-6 group"
              >
                <div className="w-16 h-16 bg-background/10 border border-background/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-mono text-sm uppercase tracking-wider text-muted mb-1">Phone / WhatsApp</div>
                  <div className="text-xl font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                    079 023 7323
                    <ArrowUpRight size={20} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                  </div>
                </div>
              </motion.a>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-6"
              >
                <div className="w-16 h-16 bg-background/10 border border-background/20 flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-mono text-sm uppercase tracking-wider text-muted mb-1">Location</div>
                  <div className="text-xl font-bold">Hammanskraal, Tshwane</div>
                  <div className="text-muted text-sm mt-1">Available for on-site visits across Gauteng</div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-background text-foreground p-10 border-2 border-primary/20 relative"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
            <h3 className="text-2xl font-bold mb-8">Send a Dispatch</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider font-bold">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-muted border border-border p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all rounded-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider font-bold">Company</label>
                  <input 
                    type="text" 
                    className="w-full bg-muted border border-border p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all rounded-none"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-wider font-bold">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-muted border border-border p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all rounded-none"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-wider font-bold">Issue / Request</label>
                <textarea 
                  rows={4}
                  className="w-full bg-muted border border-border p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all rounded-none resize-none"
                  placeholder="Describe your IT needs..."
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-foreground text-background py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors mt-4"
              >
                Transmit Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      <footer className="mt-32 pt-8 border-t border-background/20 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-sm tracking-widest uppercase">
          © {new Date().getFullYear()} LLOYD.IT SUPPORT
        </div>
        <div className="text-muted text-sm font-mono uppercase">
          Status: <span className="text-green-500">Operational</span>
        </div>
      </footer>
    </section>
  );
}

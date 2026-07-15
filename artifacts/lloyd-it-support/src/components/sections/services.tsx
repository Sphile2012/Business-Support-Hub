import { motion } from "framer-motion";
import { Monitor, Network, Shield, Cpu, Cloud, Wrench } from "lucide-react";

const services = [
  {
    icon: <Monitor size={32} />,
    title: "Hardware Setup & Repair",
    description: "Workstation deployments, hardware diagnostics, and component replacements for individuals and entire offices."
  },
  {
    icon: <Network size={32} />,
    title: "Network Infrastructure",
    description: "Router configuration, WiFi optimization, cabling, and secure VPN setups to keep your business connected."
  },
  {
    icon: <Shield size={32} />,
    title: "Cybersecurity Audits",
    description: "Threat assessments, firewall configurations, and endpoint protection to secure your sensitive data."
  },
  {
    icon: <Cpu size={32} />,
    title: "System Administration",
    description: "OS installations, patch management, and server maintenance for reliable day-to-day operations."
  },
  {
    icon: <Cloud size={32} />,
    title: "Cloud & Backup",
    description: "Data migration, automated backup solutions, and disaster recovery planning to prevent data loss."
  },
  {
    icon: <Wrench size={32} />,
    title: "Helpdesk & Troubleshooting",
    description: "Rapid response to technical issues, software debugging, and user support to minimize downtime."
  }
];

export function Services() {
  return (
    <section className="py-32 bg-foreground text-background relative" id="services">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Technical Capabilities.
            </h2>
            <p className="text-xl text-muted font-medium max-w-2xl">
              From emergency troubleshooting to full-scale office network deployments. I bridge the gap between complex systems and operational efficiency.
            </p>
          </div>
          <div className="font-mono text-sm text-primary uppercase tracking-widest border border-primary px-4 py-2">
            [ Services_List ]
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-background/20 p-8 hover:bg-background hover:text-foreground transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-bl-full transition-colors -z-10" />
              
              <div className="mb-6 text-primary group-hover:scale-110 transition-transform origin-left duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted group-hover:text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-8 font-mono text-xs uppercase tracking-wider text-background/40 group-hover:text-primary transition-colors">
                Sys.Module.{String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

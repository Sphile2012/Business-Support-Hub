import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Consultation",
    description: "Meet with the client to assess IT needs, current infrastructure, and pain points."
  },
  {
    id: "02",
    title: "Planning",
    description: "Define the scope, timeline, and budget required for the solution."
  },
  {
    id: "03",
    title: "Proposal",
    description: "Present the service plan and costs, and secure formal agreement."
  },
  {
    id: "04",
    title: "Implementation",
    description: "Install and configure hardware/software, set up networks, and ensure security protocols."
  },
  {
    id: "05",
    title: "Testing",
    description: "Rigorously check systems for reliability, performance, and fix any immediate issues."
  },
  {
    id: "06",
    title: "Training",
    description: "Guide staff on how to use the newly deployed systems efficiently and safely."
  },
  {
    id: "07",
    title: "Documentation",
    description: "Hand over operational manuals, login details, and vital support information."
  },
  {
    id: "08",
    title: "Ongoing Support",
    description: "Provide maintenance packages, regular updates, and continuous monitoring."
  }
];

export function Process() {
  return (
    <section className="py-32 bg-muted relative" id="process">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Standard Operating<br/>Procedure.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl font-medium">
              A systematic approach derived from operations management. Every project follows a strict protocol to ensure zero downtime and total alignment.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Vertical Line connecting steps on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-background border-2 border-foreground items-center justify-center z-10 font-mono text-sm font-bold">
                  {step.id}
                </div>

                {/* Content Panel */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16 lg:pl-24' : 'md:pr-16 lg:pr-24 text-left md:text-right'}`}>
                  <div className="bg-background border border-border p-8 hover:border-primary transition-colors group relative">
                    <div className="md:hidden font-mono text-primary text-xl font-bold mb-4">{step.id}.</div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    {/* Decorative element */}
                    <div className={`absolute top-0 w-1 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300 ${
                      index % 2 === 0 ? 'left-0' : 'right-0 md:left-auto md:right-0 left-0'
                    }`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

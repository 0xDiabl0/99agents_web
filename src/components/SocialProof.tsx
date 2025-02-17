import React from "react";
import { motion } from "framer-motion";

interface SocialProofProps {
  clientLogos?: Array<{
    name: string;
    logo: string;
  }>;
  metrics?: Array<{
    label: string;
    value: string;
  }>;
}

const SocialProof = ({
  clientLogos = [
    {
      name: "Company 1",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=Company1",
    },
    {
      name: "Company 2",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=Company2",
    },
    {
      name: "Company 3",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=Company3",
    },
    {
      name: "Company 4",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=Company4",
    },
  ],
  metrics = [
    { label: "Active Users", value: "100,000+" },
    { label: "Projects Completed", value: "500+" },
    { label: "Success Rate", value: "99%" },
  ],
}: SocialProofProps) => {
  return (
    <section className="w-full py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground">
            Powering AI innovation across the globe
          </p>
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          {clientLogos.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-32 h-32 flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">
                {metric.value}
              </h3>
              <p className="text-muted-foreground">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

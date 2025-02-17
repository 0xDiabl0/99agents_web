import React from "react";
import { motion } from "framer-motion";
import { Shield, Rocket, Clock, Users } from "lucide-react";

interface WhyChooseUsProps {
  features?: Array<{
    icon: React.ElementType;
    title: string;
    description: string;
  }>;
}

const WhyChooseUs = ({ features }: WhyChooseUsProps) => {
  const defaultFeatures = [
    {
      icon: Shield,
      title: "Cutting-Edge Technology",
      description:
        "We leverage the latest AI advancements and best practices to deliver innovative solutions.",
    },
    {
      icon: Rocket,
      title: "Fast Implementation",
      description:
        "Quick deployment and integration of AI solutions to get your business up and running.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock technical support and maintenance for your AI systems.",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description:
        "A team of experienced AI developers and engineers committed to your success.",
    },
  ];

  const displayFeatures = features || defaultFeatures;

  return (
    <section className="w-full py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground">
            Your trusted partner in AI innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800"
              >
                <div className="mb-4 flex justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

import React from "react";
import ServiceCard from "./ServiceCard";
import { Brain, Code, Bot, Network } from "lucide-react";

interface FeaturesGridProps {
  services?: Array<{
    icon: React.ElementType;
    title: string;
    description: string;
  }>;
}

const FeaturesGrid = ({ services }: FeaturesGridProps) => {
  const defaultServices = [
    {
      icon: Brain,
      title: "AI Strategy Consulting",
      description:
        "Expert guidance on implementing AI solutions to transform your business operations and drive growth.",
    },
    {
      icon: Code,
      title: "Custom AI Development",
      description:
        "Tailored AI solutions built from the ground up to meet your specific business requirements.",
    },
    {
      icon: Bot,
      title: "Chatbot Integration",
      description:
        "Intelligent conversational AI agents that enhance customer service and automate support.",
    },
    {
      icon: Network,
      title: "AI Infrastructure Setup",
      description:
        "Robust and scalable AI infrastructure deployment for enterprise-grade applications.",
    },
  ];

  const displayServices = services || defaultServices;

  return (
    <div className="w-full py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Comprehensive AI solutions to power your business
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {displayServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;

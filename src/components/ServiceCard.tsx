import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

interface ServiceCardProps {
  icon?: React.ElementType;
  title?: string;
  description?: string;
}

const ServiceCard = ({
  icon: Icon = Zap,
  title = "AI Agent Development",
  description = "Build sophisticated AI agents tailored to your specific business needs with our expert development services.",
}: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="w-[280px] h-[320px] bg-white dark:bg-gray-900"
    >
      <Card className="h-full border-2 border-transparent hover:border-primary/50 transition-colors">
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;

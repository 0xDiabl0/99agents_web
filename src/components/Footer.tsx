import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  companyName?: string;
  socialLinks?: Array<{
    icon: React.ElementType;
    href: string;
    label: string;
  }>;
  links?: Array<{
    title: string;
    items: Array<{
      label: string;
      href: string;
    }>;
  }>;
}

const Footer = ({
  companyName = "99 Agents",
  socialLinks = [
    { icon: Twitter, href: "https://x.com/99agentsAI", label: "Twitter" },
    // { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:oxdiablo.crypto@gmail.com", label: "Email" },
  ],
  links = [
    {
      title: "Company",
      items: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Services",
      items: [
        { label: "AI Development", href: "#" },
        { label: "Consulting", href: "#" },
        { label: "Integration", href: "#" },
      ],
    },
    {
      title: "Resources",
      items: [
        { label: "Blog", href: "#" },
        { label: "Documentation", href: "#" },
        { label: "Case Studies", href: "#" },
      ],
    },
  ],
}: FooterProps) => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent mb-4">
              {companyName}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Building next-generation AI solutions for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {links.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

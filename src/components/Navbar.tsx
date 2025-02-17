import React from "react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { cn } from "../lib/utils";

interface NavbarProps {
  logo?: string;
  links?: Array<{ href: string; label: string }>;
  onGetStarted?: () => void;
}

const Navbar = ({
  logo = "99 Agents",
  links = [
    { href: "#features", label: "Features" },
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ],
  onGetStarted = () => console.log("Get Started clicked"),
}: NavbarProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 h-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <div className="container mx-auto h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"
          >
            {logo}
          </a>

          <NavigationMenu>
            <NavigationMenuList>
              {links.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    href={link.href}
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                    )}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Button
          onClick={onGetStarted}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Get in Touch
        </Button>
      </div>
    </div>
  );
};

export default Navbar;

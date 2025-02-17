import React, { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeaturesGrid from "./FeaturesGrid";
import WhyChooseUs from "./WhyChooseUs";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Home = () => {
  React.useEffect(() => {
    document.title = "99 Agents | AI Development Agency";
  }, []);

  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleGetStarted = () => {
    setIsContactFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar onGetStarted={handleGetStarted} />

      {/* Add top padding to account for fixed navbar */}
      <main className="pt-20 flex-grow">
        <HeroSection onCtaClick={handleGetStarted} />

        <FeaturesGrid />

        <WhyChooseUs />

        <ContactForm
          open={isContactFormOpen}
          onOpenChange={setIsContactFormOpen}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Home;

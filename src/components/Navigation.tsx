import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Brand */}
          <div className="font-mono text-lg font-medium">
            Dhanush
          </div>

          {/* Navigation */}
          <div className="hidden md:flex space-x-10">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Profile
            </button>

            <button
              onClick={() => scrollToSection("skills")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Expertise
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Hire / Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

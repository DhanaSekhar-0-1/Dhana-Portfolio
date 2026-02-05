import { Linkedin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ContactSection = () => {
  const handleLinkedInClick = () => {
    window.open(
      "https://linkedin.com/in/dhana-sekhar-dandugula",
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-light mb-16 text-center tracking-tight">
          Let’s Connect
        </h2>

        <Card className="p-8 md:p-12 text-center hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl md:text-3xl font-light mb-6">
            Open to AI/ML roles, freelance projects, and consulting
          </h3>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            If you are looking for an AI/ML Engineer who can build
            production-ready machine learning systems, deliver
            end-to-end freelance solutions, and integrate AI with
            enterprise CRM platforms, I’d be happy to connect.
          </p>

          {/* ✅ CENTERED LINKEDIN BUTTON */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="group px-10 py-3 text-base hover:scale-105 transition"
              onClick={handleLinkedInClick}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </Button>
          </div>

          <div className="mt-10 pt-8 border-t border-border/50">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              <Briefcase className="h-4 w-4" />
              Open to Full-Time · Freelance · Consulting
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;

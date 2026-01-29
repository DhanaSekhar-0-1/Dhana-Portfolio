
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ContactSection = () => {
  const handleSendMail = () => {
    window.open("mailto:suryasarath252@gmail.com?subject=Hello%20Dhana&body=Hi%20Dhana,%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you.", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/dhana-sekhar-dandugula-b0388225b", "_blank");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-light mb-16 text-center tracking-tight">
          Let's Connect
        </h2>
        <Card className="p-8 md:p-12 text-center hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl md:text-3xl font-light mb-6">
            Ready to build something amazing together?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're looking for a low-code architect, GenAI consultant, or just want to 
            discuss the latest in automation technology, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="group px-8 py-3 text-base hover:scale-105 transition-all duration-200"
              onClick={handleSendMail}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Message
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group px-8 py-3 text-base hover:scale-105 transition-all duration-200"
              onClick={handleLinkedInClick}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn Profile
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-border/50">
            <p className="text-muted-foreground">
              <Mail className="inline h-4 w-4 mr-2" />
              suryasarath252@gmail.com
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;

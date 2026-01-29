
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to upload your resume PDF to the public folder
    link.download = 'Dhana_Sekhar_Dandugula.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/dhana-sekhar-dandugula", "_blank");
  };

  const handleSendMail = () => {
    window.open("mailto:suryasarath252@gmail.com?subject=Hello%20Dhana&body=Hi%20Dhana,%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you.", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-5xl">
        <div className="animate-fade-in flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-shrink-0">
            <Avatar className="h-40 w-40 md:h-48 md:w-48 ring-4 ring-primary/10 mx-auto">
              <AvatarImage 
                src="/lovable-uploads/d13e715e-7f15-40a8-9f53-859c717d49cc.png" 
                alt="Dhana Sekhar Dandugula"
                className="object-cover"
              />
              <AvatarFallback className="text-3xl md:text-4xl font-medium">
                DS
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
              Hi, I'm{" "}
              <span className="font-medium">Dhana Sekhar Dandugula</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
              Pega CSSA | GenAI Innovator | Low-Code Architect
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              Building scalable, intelligent systems that merge automation with human insight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <Button
                size="lg"
                className="group px-8 py-3 text-base hover:scale-105 transition-all duration-200"
                onClick={handleDownloadResume}
              >
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group px-8 py-3 text-base hover:scale-105 transition-all duration-200"
                onClick={handleLinkedInClick}
              >
                Connect on LinkedIn
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

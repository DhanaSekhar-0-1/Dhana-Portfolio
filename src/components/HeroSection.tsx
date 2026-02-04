import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  const resumeUrl = "/Dhana_Sekhar_Dandugula.pdf";

  const handleDownloadResume = () => {
    window.open(resumeUrl, "_blank");
  };

  const handleLinkedInClick = () => {
    window.open(
      "https://linkedin.com/in/dhana-sekhar-dandugula",
      "_blank"
    );
  };

  const handleSendMail = () => {
    window.location.href =
      "mailto:suryasarath252@gmail.com?subject=AI/ML%20Opportunity&body=Hi%20Dhana,%0D%0A%0D%0AI%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect.";
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT: Profile + Description */}
          <div className="flex flex-col items-center md:items-start">
            <Avatar className="h-32 w-32 md:h-36 md:w-36 ring-4 ring-primary/10">
              <AvatarImage
                src="/images/dhanush_pic.png"
                alt="Dhana – AI/ML Engineer"
                className="object-cover"
              />
              <AvatarFallback className="text-3xl font-semibold">
                DS
              </AvatarFallback>
            </Avatar>

            {/* Description under profile */}
            <p className="mt-6 text-base md:text-lg text-muted-foreground text-center md:text-left max-w-sm leading-relaxed">
              I design and deploy real-world machine learning systems,
              build AI-powered web applications, and deliver freelance
              solutions with enterprise-grade architecture.
            </p>
          </div>

          {/* RIGHT: Main Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
              Hi, I’m <span className="font-medium">Dhana Sekhar Dandugula</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-3">
              AI/ML Engineer · Freelance Consultant · Pega CSA & CSSA Architect
            </p>

            {/* Availability */}
            <div className="mb-6 flex justify-center md:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
                               bg-green-500/10 text-green-600 text-sm font-medium">
                ● Available Immediately (Full-time / Freelance)
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="px-8 py-3 text-base hover:scale-105 transition"
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 h-4 w-4" />
                View Profile PDF
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-base hover:scale-105 transition"
                onClick={handleLinkedInClick}
              >
                Connect on LinkedIn
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="px-6 py-3 text-base"
                onClick={handleSendMail}
              >
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

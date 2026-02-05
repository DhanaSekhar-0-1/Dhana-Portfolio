import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  const resumeUrl = "/Dhana_Sekhar_Dandugula.pdf";

  return (
    <section className="min-h-screen flex items-center px-6 pt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-16 items-center">

          {/* LEFT: Profile Image */}
          <div className="flex justify-center md:justify-start">
            <Avatar className="h-40 w-40 ring-4 ring-primary/10">
              <AvatarImage
                src="/images/dhanush_pic.png"
                alt="Dhana Sekhar"
                className="object-cover"
              />
              <AvatarFallback className="text-3xl font-semibold">
                DS
              </AvatarFallback>
            </Avatar>
          </div>

          {/* RIGHT: Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
              Hi, I’m{" "}
              <span className="font-medium">
                Dhana Sekhar Dandugula
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Pega CSSA | GenAI Innovator | Low-Code Architect
            </p>

            <p className="max-w-xl text-base md:text-lg text-muted-foreground mb-8">
              Building scalable, intelligent systems that merge automation
              with human insight.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="px-8"
                onClick={() => window.open(resumeUrl, "_blank")}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8"
                onClick={() =>
                  window.open(
                    "https://linkedin.com/in/dhana-sekhar-dandugula",
                    "_blank"
                  )
                }
              >
                Connect on LinkedIn
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button variant="ghost" size="lg" asChild>
                <a href="mailto:suryasarath252@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

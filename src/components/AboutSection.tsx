
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-light mb-10 text-center">
          About Me
        </h2>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I am an AI/ML Engineer with hands-on experience in designing,
            building, and deploying real-world machine learning systems
            and AI-powered applications. My work focuses on transforming
            complex business problems into scalable, data-driven solutions.
          </p>

          <p>
            Alongside engineering roles, I actively deliver freelance
            projects where I own the complete lifecycle — from requirement
            analysis and model development to deployment and optimization.
            This experience has strengthened my problem-solving mindset,
            client communication, and delivery accountability.
          </p>

          <p>
            I am also a Certified Pega CSA and CSSA Architect, with strong
            expertise in CRM platforms, enterprise workflows, and decision
            automation. This enables me to integrate AI systems with
            enterprise-grade architectures, ensuring scalability,
            reliability, and long-term business value.
          </p>

          <p>
            I am seeking opportunities as an AI/ML Engineer, AI Engineer,
            or related role where I can contribute to building intelligent,
            production-ready systems that create measurable impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


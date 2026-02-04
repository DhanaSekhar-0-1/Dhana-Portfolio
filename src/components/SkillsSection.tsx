
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const skillsData = {
  "Artificial Intelligence & Machine Learning": [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing (NLP)",
    "Computer Vision",
    "Predictive Modeling",
    "Model Evaluation & Optimization"
  ],

  "Programming & Data": [
    "Python",
    "Data Analysis",
    "Pandas",
    "NumPy",
    "Scikit-learn"
  ],

  "AI Application Development": [
    "AI-powered Web Applications",
    "Model Deployment",
    "REST API Integration",
    "Automation Systems"
  ],

  "Enterprise & CRM": [
    "Pega Platform",
    "Pega CSA",
    "Pega CSSA",
    "CRM Architecture",
    "Decisioning & Workflow Automation"
  ],

  "Professional Strengths": [
    "Freelance Project Delivery",
    "End-to-End Ownership",
    "Client Communication",
    "Problem Solving",
    "System Design"
  ]
};

const SkillsSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
          Skills & Expertise
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="border rounded-xl p-6 bg-background hover:shadow-lg transition"
            >
              <h3 className="text-lg font-medium mb-4">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

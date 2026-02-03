const projects = [
  {
    title: "AI Resume Screening & Matching System",
    stack: ["Python", "NLP", "Machine Learning", "Flask"],
    description:
      "Built an AI-powered resume screening system that analyzes resumes and matches candidates to job descriptions using NLP and ML techniques.",
    impact: [
      "Reduced manual resume screening time by ~70%",
      "Improved candidate-job relevance scoring accuracy",
      "Designed for scalable integration with HR platforms"
    ]
  },
  {
    title: "Customer Churn Prediction Model",
    stack: ["Python", "Pandas", "Scikit-learn", "Data Analysis"],
    description:
      "Developed a predictive ML model to identify high-risk customers based on historical behavior and usage patterns.",
    impact: [
      "Achieved ~85% prediction accuracy on validation data",
      "Enabled proactive retention strategies for businesses",
      "Converted raw business data into actionable insights"
    ]
  },
  {
    title: "AI-Powered Web Application (Freelance)",
    stack: ["Python", "React", "API Integration", "AI Models"],
    description:
      "Delivered an end-to-end AI-powered web application for a freelance client, covering requirement analysis, model integration, and deployment.",
    impact: [
      "Owned full project lifecycle from concept to deployment",
      "Improved client workflow efficiency through automation",
      "Delivered a production-ready solution within deadlines"
    ]
  },
  {
    title: "Enterprise CRM Automation using Pega",
    stack: ["Pega Platform", "CRM", "Decisioning", "Workflow Automation"],
    description:
      "Designed and implemented scalable CRM workflows using the Pega platform, aligned with enterprise architecture best practices.",
    impact: [
      "Automated business workflows reducing manual effort",
      "Improved process consistency and system scalability",
      "Applied CSA & CSSA architectural principles in real use cases"
    ]
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
          Projects & Impact
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-medium mb-3">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>

              <ul className="list-disc list-inside mb-4 text-sm">
                {project.impact.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
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

export default ProjectsSection;

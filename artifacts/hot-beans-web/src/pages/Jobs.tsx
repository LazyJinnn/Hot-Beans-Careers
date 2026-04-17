import { Link } from "wouter";
import { Leaf, CheckCircle, Clock, MapPin, Briefcase, ArrowRight } from "lucide-react";

const jobs = [
  {
    id: "junior-web-developer",
    title: "Junior Web Developer",
    type: "Full-time",
    location: "Bristol (Hybrid)",
    salary: "£26,000 – £30,000",
    closing: "30 May 2026",
    intro:
      "We're looking for a motivated junior developer ready to grow their skills in a supportive, sustainability-focused studio. You'll work across a mix of client projects — from content-led websites to interactive web applications — with guidance from experienced developers every step of the way.",
    responsibilities: [
      "Build and maintain responsive, accessible websites using HTML, CSS, and JavaScript",
      "Collaborate with designers and senior developers to deliver projects on time and to a high standard",
      "Write clean, well-documented code that follows team conventions and sustainability guidelines",
      "Participate in code reviews, daily stand-ups, and regular knowledge-sharing sessions",
      "Optimise front-end assets (images, scripts, fonts) for performance and reduced data transfer",
      "Stay current with web standards and emerging sustainable web development practices",
    ],
    required: [
      "Level 3 qualification or above in web development, computing, or a related subject (or equivalent self-taught experience)",
      "Solid understanding of HTML5, CSS3, and vanilla JavaScript",
      "Familiarity with version control using Git",
      "Understanding of responsive design principles and mobile-first development",
      "A portfolio demonstrating at least two completed web projects",
      "Interest in web performance, accessibility, and/or sustainability",
    ],
    desirable: [
      "Experience with a JavaScript framework (React, Vue, or Svelte)",
      "Knowledge of web accessibility standards (WCAG 2.1 or 2.2)",
      "Understanding of sustainable web design principles (green hosting, efficient code, minimal data)",
      "Experience using browser dev tools to audit performance",
      "Contributions to open-source projects",
    ],
  },
  {
    id: "sustainable-web-developer",
    title: "Sustainable Web Developer",
    type: "Full-time",
    location: "Bristol (Hybrid / Remote considered)",
    salary: "£30,000 – £38,000",
    closing: "15 June 2026",
    intro:
      "This role is for a developer with some experience who wants to make green web practices the central focus of their career. You'll lead the sustainability audit process for new and existing client projects, champion best practices within the team, and help shape Hot Beans Web's evolving approach to low-carbon digital development.",
    responsibilities: [
      "Lead digital carbon audits for client websites and propose data-driven improvements",
      "Develop and maintain the team's sustainable web development guidelines and tooling",
      "Implement performance budgets, efficient caching strategies, and greener hosting configurations",
      "Mentor junior developers on sustainable coding and design practices",
      "Research and evaluate new approaches to reducing the environmental impact of the web",
      "Liaise with clients on the business case for sustainable digital development",
    ],
    required: [
      "Level 4 qualification or above in web development, computer science, or a related field",
      "1+ years of professional web development experience",
      "Strong knowledge of HTML, CSS, JavaScript, and at least one modern framework",
      "Demonstrated understanding of web performance optimisation techniques",
      "Working knowledge of sustainable web design principles (Sustainable Web Design by Tom Greenwood recommended)",
      "Experience with performance auditing tools (Lighthouse, WebPageTest, etc.)",
    ],
    desirable: [
      "Experience with green web APIs or carbon measurement tooling",
      "Knowledge of low-energy design patterns (dark mode, reduced animation, efficient typography)",
      "Familiarity with the Green Web Foundation or Web Sustainability Guidelines (WSG 1.0)",
      "Understanding of data centre energy considerations and green hosting options",
      "Experience with CI/CD pipelines and automated performance testing",
    ],
  },
];

export default function Jobs() {
  return (
    <main className="pt-24 pb-16">
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              <Briefcase className="w-4 h-4" />
              Open Positions
            </div>
            <h1 className="font-display text-5xl font-bold text-foreground mb-6">
              Join our growing team
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We hire for attitude and potential as much as experience. If you care about
              doing good work on the web — and doing it responsibly — you'll fit right in.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" data-testid="section-jobs">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {jobs.map((job) => (
            <article
              key={job.id}
              className="bg-card border border-border rounded-2xl overflow-hidden"
              data-testid={`job-card-${job.id}`}
            >
              <div className="bg-primary/8 border-b border-border px-8 py-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                      {job.title}
                    </h2>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        Closes {job.closing}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-primary font-bold text-lg">{job.salary}</div>
                    <div className="text-xs text-muted-foreground">per year</div>
                  </div>
                </div>
              </div>

              <div className="px-8 py-6 space-y-8">
                <p className="text-muted-foreground leading-relaxed">{job.intro}</p>

                <div>
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-primary" />
                    </span>
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-2">
                    {job.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-primary" />
                    </span>
                    Essential Requirements
                  </h3>
                  <ul className="space-y-2">
                    {job.required.map((r, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <Leaf className="w-3 h-3 text-accent" />
                    </span>
                    Desirable Skills
                  </h3>
                  <ul className="space-y-2">
                    {job.desirable.map((d, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <Link
                    href="/apply"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
                    data-testid={`link-apply-${job.id}`}
                  >
                    Apply for This Role
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground mb-2 text-sm">
            Don't see the right role? We're always happy to hear from talented people.
          </p>
          <a
            href="mailto:careers@hotbeansweb.co.uk"
            className="text-primary font-medium hover:underline text-sm"
            data-testid="link-email-careers"
          >
            Send us a speculative application at careers@hotbeansweb.co.uk
          </a>
        </div>
      </section>
    </main>
  );
}

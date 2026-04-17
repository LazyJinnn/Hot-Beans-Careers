import { Link } from "wouter";
import { Leaf, ExternalLink, Code, Globe, Zap } from "lucide-react";

const trainees = [
  {
    name: "Priya Sharma",
    role: "Trainee Front-End Developer",
    joined: "September 2023",
    qualification: "BSc Computer Science, University of Bristol",
    bio:
      "Priya came to us fresh from university with a passion for accessible design and a growing interest in sustainable tech. In her first year she's already made a measurable impact — redesigning our internal component library to remove unnecessary re-renders and reduce JavaScript bundle size by 32%.",
    contributions: [
      "Led the audit of image formats across 4 client sites, switching to WebP/AVIF and reducing page weight by an average of 1.2MB",
      "Introduced lazy loading patterns across the team's project template",
      "Researched and documented sustainable font loading strategies for team use",
    ],
    avatar: "https://api.dicebear.com/9.x/personas/svg?seed=Priya&backgroundColor=c0e8d5",
    icon: Code,
    color: "from-green-500 to-emerald-700",
  },
  {
    name: "Marcus Adeyemi",
    role: "Trainee Full-Stack Developer",
    joined: "January 2024",
    qualification: "Level 5 Diploma in Web Development, freeCodeCamp + bootcamp",
    bio:
      "Marcus joined after completing a rigorous self-taught journey through freeCodeCamp and a 12-week bootcamp. His background in environmental science gives him a unique perspective on digital sustainability. He's already developed tooling that helps our team estimate the carbon cost of a new project before a single line of code is written.",
    contributions: [
      "Built an internal carbon estimation tool that integrates with the Green Web Foundation API",
      "Migrated two legacy PHP projects to modern Node.js, improving server response times by 60%",
      "Runs the team's fortnightly 'Green Dev' knowledge-sharing sessions",
    ],
    avatar: "https://api.dicebear.com/9.x/personas/svg?seed=Marcus&backgroundColor=b8d4f0",
    icon: Globe,
    color: "from-blue-500 to-cyan-700",
  },
  {
    name: "Aisha Kowalski",
    role: "Trainee UX/UI Developer",
    joined: "April 2024",
    qualification: "HNC in Digital Design, Leeds College of Art",
    bio:
      "Aisha brings a rare combination of visual design sensibility and technical rigour. She specialises in the intersection of UX and sustainability — designing interfaces that guide users efficiently, reducing the time (and energy) spent completing tasks. She's currently leading the accessibility overhaul of our largest ongoing client project.",
    contributions: [
      "Developed a design system audit checklist aligning with WCAG 2.2 and sustainable design principles",
      "Reduced average user task completion time by 28% on a major e-commerce project through UX improvements",
      "Presented at the Bristol Web Meetup on sustainable UX design principles",
    ],
    avatar: "https://api.dicebear.com/9.x/personas/svg?seed=Aisha&backgroundColor=f0d4b8",
    icon: Zap,
    color: "from-amber-500 to-orange-600",
  },
];

export default function Team() {
  return (
    <main className="pt-24 pb-16">
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              <Leaf className="w-4 h-4" />
              The People
            </div>
            <h1 className="font-display text-5xl font-bold text-foreground mb-6">
              Meet our trainee developers
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our trainees aren't apprentices in the traditional sense — they're junior
              developers on real projects, with real clients, from week one. Here's what
              some of them are working on.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" data-testid="section-team">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {trainees.map((person, index) => (
            <div
              key={person.name}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              data-testid={`team-card-${person.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div
                className={`lg:col-span-4 ${index % 2 === 1 ? "lg:col-start-9" : ""}`}
              >
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div
                    className={`h-2 bg-gradient-to-r ${person.color}`}
                  />
                  <div className="p-8 text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-border">
                      <img
                        src={person.avatar}
                        alt={person.name}
                        className="w-full h-full object-cover"
                        data-testid={`img-avatar-${person.name.toLowerCase().replace(/\s+/g, "-")}`}
                      />
                    </div>
                    <h3 className="font-semibold text-foreground text-xl mb-1">
                      {person.name}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-1">{person.role}</p>
                    <p className="text-muted-foreground text-xs mb-4">
                      Joined {person.joined}
                    </p>
                    <div className="bg-secondary/50 rounded-lg px-4 py-3 text-left">
                      <p className="text-xs text-muted-foreground mb-1 font-medium uppercase tracking-wide">
                        Qualification
                      </p>
                      <p className="text-sm text-foreground">{person.qualification}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`lg:col-span-8 ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div className="bg-card border border-border rounded-2xl p-8">
                  <p className="text-foreground leading-relaxed mb-6">{person.bio}</p>
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                      <Leaf className="w-4 h-4" />
                      Sustainability Contributions
                    </h4>
                    <ul className="space-y-3">
                      {person.contributions.map((c, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Could you be next?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            We recruit two to three new trainees each year. If you've completed a relevant
            qualification and share our values, we'd love to meet you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
              data-testid="link-team-to-jobs"
            >
              See Current Openings
              <ExternalLink className="w-4 h-4" />
            </Link>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-6 py-3 rounded-xl hover:bg-secondary transition-colors"
              data-testid="link-team-to-apply"
            >
              Apply Directly
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

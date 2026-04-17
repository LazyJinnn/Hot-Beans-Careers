import { Leaf, ExternalLink, Star } from "lucide-react";

const courses = [
  {
    name: "Responsive Web Design Certification",
    provider: "freeCodeCamp",
    url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
    description:
      "A comprehensive free curriculum covering HTML, CSS, Flexbox, Grid, and accessibility. One of the most popular starting points for aspiring web developers worldwide.",
    tags: ["HTML", "CSS", "Accessibility", "Free"],
    sustainable: false,
  },
  {
    name: "The Odin Project — Full Stack JavaScript",
    provider: "The Odin Project",
    url: "https://www.theodinproject.com/paths/full-stack-javascript",
    description:
      "A free, open-source curriculum that takes you from beginner to full-stack developer. Project-based learning with a strong community. Covers Node.js, React, and databases.",
    tags: ["Full Stack", "JavaScript", "React", "Free"],
    sustainable: false,
  },
  {
    name: "CS50's Web Programming with Python and JavaScript",
    provider: "Harvard / edX",
    url: "https://cs50.harvard.edu/web/",
    description:
      "Harvard's legendary CS50 web course. Covers web application design, security, scalability, and modern frameworks. Free to audit on edX.",
    tags: ["Full Stack", "Python", "JavaScript", "Free Audit"],
    sustainable: false,
  },
  {
    name: "Sustainable Web Design — Course",
    provider: "Sustainable Web Design (Tom Greenwood)",
    url: "https://sustainablewebdesign.org/",
    description:
      "Resources and frameworks from the author of 'Sustainable Web Design'. Covers measuring the carbon cost of digital products, and practical strategies for reducing environmental impact.",
    tags: ["Sustainability", "Carbon Measurement", "Green Web", "Free"],
    sustainable: true,
  },
  {
    name: "Web Sustainability Guidelines (WSG 1.0)",
    provider: "W3C",
    url: "https://w3c.github.io/sustyweb/",
    description:
      "The W3C's official sustainability guidance for the web. Essential reading for any developer serious about understanding and implementing sustainable digital practices.",
    tags: ["Sustainability", "Standards", "W3C", "Free"],
    sustainable: true,
  },
  {
    name: "Green Web Foundation — Tools & Resources",
    provider: "Green Web Foundation",
    url: "https://www.thegreenwebfoundation.org/tools/",
    description:
      "A collection of open-source tools, APIs, and guides for checking whether a website is hosted on green energy, and for measuring the environmental impact of digital services.",
    tags: ["Sustainability", "Green Hosting", "Tools", "Free"],
    sustainable: true,
  },
  {
    name: "Google Web.dev — Performance Fundamentals",
    provider: "Google",
    url: "https://web.dev/learn/performance/",
    description:
      "Google's authoritative guide to web performance. Covers Core Web Vitals, resource loading, rendering strategies, and efficiency — all directly linked to lower energy use.",
    tags: ["Performance", "Core Web Vitals", "JavaScript", "Free"],
    sustainable: true,
  },
  {
    name: "Introduction to Web Accessibility",
    provider: "W3C / WAI",
    url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
    description:
      "The W3C's introduction to web accessibility — covering WCAG, inclusive design principles, and the business case for building for everyone. Accessibility and sustainability are deeply linked.",
    tags: ["Accessibility", "WCAG", "Inclusive Design", "Free"],
    sustainable: false,
  },
  {
    name: "The Complete JavaScript Course",
    provider: "Udemy / Jonas Schmedtmann",
    url: "https://www.udemy.com/course/the-complete-javascript-course/",
    description:
      "A thorough, practical introduction to modern JavaScript — from fundamentals to advanced patterns. One of the most highly rated development courses available.",
    tags: ["JavaScript", "ES6+", "OOP", "Paid"],
    sustainable: false,
  },
  {
    name: "MDN Web Docs — Learn Web Development",
    provider: "Mozilla",
    url: "https://developer.mozilla.org/en-US/docs/Learn",
    description:
      "Mozilla's comprehensive, always up-to-date learning pathway for web development. Covers HTML, CSS, JavaScript, and tooling — and remains the gold standard reference for working developers.",
    tags: ["HTML", "CSS", "JavaScript", "Free"],
    sustainable: false,
  },
];

export default function Courses() {
  const sustainableCourses = courses.filter((c) => c.sustainable);
  const generalCourses = courses.filter((c) => !c.sustainable);

  return (
    <main className="pt-24 pb-16">
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              <Leaf className="w-4 h-4" />
              Learning Resources
            </div>
            <h1 className="font-display text-5xl font-bold text-foreground mb-6">
              Courses and resources we recommend
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you're just starting out or looking to specialise in sustainable
              development, these are the resources our team trusts. Courses marked with a
              green leaf are particularly relevant to eco-conscious web practice.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" data-testid="section-courses">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          <div>
            <h2 className="flex items-center gap-3 font-display text-2xl font-bold text-foreground mb-8">
              <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-primary" />
              </div>
              Sustainable Web Development
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {sustainableCourses.map((course) => (
                <CourseCard key={course.name} course={course} highlighted />
              ))}
            </div>
          </div>

          <div>
            <h2 className="flex items-center gap-3 font-display text-2xl font-bold text-foreground mb-8">
              <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                <Star className="w-4 h-4 text-muted-foreground" />
              </div>
              Essential Web Development
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {generalCourses.map((course) => (
                <CourseCard key={course.name} course={course} highlighted={false} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Leaf className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">
            Not sure where to start?
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We recommend beginning with freeCodeCamp's Responsive Web Design Certification
            or The Odin Project for a solid technical foundation, then supplementing with
            the W3C Sustainability Guidelines and Google's performance resources. Once you
            have a portfolio of two to three projects, get in touch.
          </p>
        </div>
      </section>
    </main>
  );
}

function CourseCard({
  course,
  highlighted,
}: {
  course: (typeof courses)[0];
  highlighted: boolean;
}) {
  return (
    <a
      href={course.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block bg-card border rounded-2xl p-6 hover:shadow-md transition-all duration-200 ${
        highlighted ? "border-primary/30 hover:border-primary/50" : "border-border"
      }`}
      data-testid={`course-card-${course.name.toLowerCase().replace(/\s+/g, "-").slice(0, 30)}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-sm leading-snug mb-1 group-hover:text-primary transition-colors">
            {course.name}
          </h3>
          <p className="text-xs text-muted-foreground">{course.provider}</p>
        </div>
        <div className="flex items-center gap-2 ml-3 flex-shrink-0">
          {highlighted && (
            <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center">
              <Leaf className="w-3 h-3 text-primary" />
            </div>
          )}
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed mb-4">
        {course.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {course.tags.map((tag) => (
          <span
            key={tag}
            className={`text-xs px-2 py-0.5 rounded-full font-medium ${
              tag === "Free" || tag === "Free Audit"
                ? "bg-primary/10 text-primary"
                : "bg-secondary text-muted-foreground"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

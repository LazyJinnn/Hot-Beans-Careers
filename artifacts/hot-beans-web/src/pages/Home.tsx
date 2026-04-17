import { Link } from "wouter";
import { ArrowRight, Leaf, Globe, Zap, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  { value: "100%", label: "Renewable energy powered" },
  { value: "47%", label: "Lighter pages than industry average" },
  { value: "12+", label: "Years of sustainable development" },
  { value: "98", label: "Average Lighthouse score" },
];

const values = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description:
      "We design every project with environmental impact in mind — from green hosting to efficient code that consumes less energy at scale.",
  },
  {
    icon: Zap,
    title: "Performance by Design",
    description:
      "Fast sites use less power. We obsess over performance not just for user experience, but because every millisecond of efficiency is a win for the planet.",
  },
  {
    icon: Users,
    title: "Grow as You Go",
    description:
      "We invest heavily in training and mentorship. Trainees work alongside senior developers from day one, on real client projects that matter.",
  },
  {
    icon: Globe,
    title: "Accessible Web for All",
    description:
      "Inclusive design is sustainable design. We build sites that work for every user, on every device, regardless of ability or connection speed.",
  },
];

export default function Home() {
  return (
    <main>
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(150 60% 14%) 0%, hsl(150 40% 20%) 40%, hsl(85 50% 28%) 100%)",
        }}
        data-testid="section-hero"
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, hsl(85 60% 50%) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, hsl(150 60% 50%) 0%, transparent 40%)`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <Leaf className="w-4 h-4 text-green-300" />
              <span className="text-sm text-green-100 font-medium">
                London's Greenest Web Studio
              </span>
            </div>
            <h1
              className="font-display text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
              data-testid="heading-hero"
            >
              Build the web.
              <br />
              <span className="text-green-300">Save the planet.</span>
            </h1>
            <p className="text-lg text-green-100/80 leading-relaxed mb-10 max-w-lg">
              Hot Beans Web is looking for passionate web developers who believe the
              internet can be fast, beautiful, and kind to the earth. Join a team that
              walks the talk on sustainability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 bg-white text-green-900 font-semibold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors"
                data-testid="link-view-jobs"
              >
                See Open Roles
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
                data-testid="link-meet-team"
              >
                Meet the Team
              </Link>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-green-200/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background" data-testid="section-about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                <Leaf className="w-4 h-4" />
                Who We Are
              </div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6 leading-tight">
                A studio that believes code has a carbon footprint
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded in 2012, Hot Beans Web started with a simple belief: the best web
                experiences are the ones that load fast, use minimal resources, and leave
                a lighter footprint on the planet. Over a decade later, that philosophy
                has shaped everything we build.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We work with forward-thinking brands, charities, and public sector
                organisations across the UK, delivering high-performance digital
                experiences that are built to last — and built to be green. Our team is
                small, skilled, and deeply committed to continuous learning.
              </p>
              <div className="flex items-center gap-4">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground font-medium">
                  Green Web Foundation Verified — 100% renewable-powered infrastructure
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/8 border border-primary/15 rounded-2xl p-6 col-span-2">
                <TrendingUp className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">
                  Committed to Net Zero by 2026
                </h3>
                <p className="text-sm text-muted-foreground">
                  Beyond green hosting, we measure and offset the carbon cost of every
                  project we deliver — from design to deployment.
                </p>
              </div>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-2xl p-5"
                  data-testid={`about-stat-${stat.value}`}
                >
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30" data-testid="section-values">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              <Leaf className="w-4 h-4" />
              Our Commitments
            </div>
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              What drives everything we do
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              These aren't aspirations — they're the principles that guide every decision,
              every client conversation, and every line of code we write.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-md transition-shadow"
                data-testid={`value-card-${v.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(135deg, hsl(150 60% 14%) 0%, hsl(150 40% 22%) 100%)",
        }}
        data-testid="section-cta"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Leaf className="w-10 h-10 text-green-300 mx-auto mb-6" />
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Ready to build something that matters?
          </h2>
          <p className="text-green-100/80 leading-relaxed mb-10 text-lg">
            We're growing our team of trainee developers. If you've completed a web
            development qualification and you care about the planet, we'd love to hear
            from you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 bg-white text-green-900 font-semibold px-8 py-4 rounded-xl hover:bg-green-50 transition-colors"
              data-testid="link-cta-jobs"
            >
              View Open Positions
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
              data-testid="link-cta-apply"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

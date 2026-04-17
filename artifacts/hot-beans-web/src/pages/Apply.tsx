import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Leaf, CheckCircle, Send } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  role: z.string().min(1, "Please select a role"),
  qualification: z.string().min(1, "Please select your highest qualification"),
  experience: z.string().min(1, "Please select your experience level"),
  portfolioUrl: z
    .string()
    .url("Please enter a valid URL")
    .or(z.literal(""))
    .optional(),
  coverLetter: z.string().min(100, "Please write at least 100 characters in your cover letter"),
  sustainabilityCommitment: z.boolean().refine((v) => v === true, {
    message: "Please confirm your commitment to sustainable web practices",
  }),
});

type FormValues = z.infer<typeof schema>;

const roles = [
  "Junior Web Developer",
  "Sustainable Web Developer",
  "Speculative Application",
];

const qualifications = [
  "GCSE / O-Level",
  "A-Level / AS-Level",
  "BTEC / HNC / HND",
  "Level 3 Certificate or Diploma",
  "Level 4/5 Certificate or Diploma",
  "Bachelor's Degree",
  "Master's Degree or above",
  "Self-taught / Bootcamp",
  "Other",
];

const experienceLevels = [
  "No professional experience (personal/academic projects only)",
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "More than 5 years",
];

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      role: "",
      qualification: "",
      experience: "",
      portfolioUrl: "",
      coverLetter: "",
      sustainabilityCommitment: false,
    },
  });

  function onSubmit(values: FormValues) {
    console.log("Application submitted:", values);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Application received!
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-2">
            Thank you for applying to Hot Beans Web. We review every application
            personally and aim to respond within 10 working days.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We'll be in touch at the email address you provided. In the meantime, feel
            free to explore our learning resources or follow us online.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-16">
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              <Leaf className="w-4 h-4" />
              Apply
            </div>
            <h1 className="font-display text-5xl font-bold text-foreground mb-6">
              Start your application
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We read every application ourselves. Please take your time — a thoughtful
              cover letter goes a long way. We're especially interested in how you think
              about the web and why sustainability matters to you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" data-testid="section-apply-form">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="bg-primary/8 border-b border-border px-8 py-5">
              <h2 className="font-semibold text-foreground">Application Form</h2>
              <p className="text-sm text-muted-foreground mt-1">
                All fields are required unless marked optional
              </p>
            </div>

            <div className="px-8 py-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Jane Smith"
                              {...field}
                              data-testid="input-full-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="jane@example.com"
                              {...field}
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+44 7700 900000"
                              {...field}
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Role Applying For</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-role">
                                <SelectValue placeholder="Select a role" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {roles.map((r) => (
                                <SelectItem key={r} value={r}>
                                  {r}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="qualification"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Highest Qualification</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-qualification">
                                <SelectValue placeholder="Select qualification" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {qualifications.map((q) => (
                                <SelectItem key={q} value={q}>
                                  {q}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Years of Experience</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-experience">
                                <SelectValue placeholder="Select experience" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {experienceLevels.map((e) => (
                                <SelectItem key={e} value={e}>
                                  {e}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="portfolioUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Portfolio URL (optional)</FormLabel>
                        <FormControl>
                          <Input
                            type="url"
                            placeholder="https://yourportfolio.com"
                            {...field}
                            data-testid="input-portfolio-url"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="coverLetter"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cover Letter</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={8}
                            placeholder="Tell us about yourself, what draws you to web development, why you're interested in working at Hot Beans Web, and how you think about sustainability in relation to your work..."
                            {...field}
                            data-testid="textarea-cover-letter"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Minimum 100 characters. We value honesty and genuine enthusiasm
                          over polished language.
                        </p>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="sustainabilityCommitment"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-xl border border-primary/20 bg-primary/5 p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            data-testid="checkbox-sustainability"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="font-medium cursor-pointer">
                            I am committed to sustainable web development practices
                          </FormLabel>
                          <p className="text-xs text-muted-foreground">
                            I understand that Hot Beans Web places sustainability at the
                            centre of its work, and I'm committed to learning and applying
                            sustainable development practices throughout my career here.
                          </p>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    data-testid="button-submit-application"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Application
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

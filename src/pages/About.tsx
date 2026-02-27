import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Heart,
  Target,
  Users,
  Award,
  Calendar,
  Shield,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    desc: "Every decision we make is guided by what's best for our patients' recovery and wellbeing.",
  },
  {
    icon: Target,
    title: "Evidence-Based Treatment",
    desc: "Our protocols are backed by the latest research and clinical evidence in physiotherapy.",
  },
  {
    icon: Users,
    title: "Personalized Recovery",
    desc: "No two patients are alike – we create individualized treatment plans for everyone.",
  },
  {
    icon: Shield,
    title: "Trusted & Transparent",
    desc: "We maintain open communication throughout your recovery journey with clear progress tracking.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    desc: "Our team stays updated with the latest techniques and advancements in physiotherapy.",
  },
  {
    icon: Award,
    title: "Community Focused",
    desc: "Proudly serving the Agartala community with accessible and affordable physiotherapy care.",
  },
];

const milestones = [
  { number: "2000+", label: "Happy Patients" },
  { number: "6+", label: "Years of Experience" },
  { number: "98%", label: "Patient Satisfaction" },
  { number: "4.9★", label: "Google Rating" },
];

const About = () => (
  <Layout>
    {/* Hero Banner */}
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(212 72% 38%), hsl(212 72% 28%))",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24 text-center">
        <h1 className="font-heading text-3xl font-extrabold text-primary-foreground md:text-5xl">
          About Physio Plus Agartala
        </h1>
        <p className="mt-3 text-primary-foreground/70 md:text-lg max-w-2xl mx-auto">
          Your trusted partner for physiotherapy and rehabilitation in Agartala,
          Tripura.
        </p>
      </div>
    </section>

    {/* Story Section */}
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
              Our Story
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Dedicated to Healing Agartala, One Patient at a Time
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Physio Plus Agartala is a leading physiotherapy clinic located
                in the heart of Dhaleswar, Agartala. We are dedicated to
                providing exceptional, evidence-based physiotherapy care that
                empowers our patients to recover faster and live pain-free
                lives.
              </p>
              <p>
                Our team of experienced physiotherapists combines clinical
                expertise with compassion to deliver personalized treatment
                plans. Whether you're recovering from a sports injury, managing
                chronic pain, or rehabilitating after surgery, we're here to
                guide you every step of the way.
              </p>
              <p>
                At Physio Plus, we believe in treating the root cause, not just
                the symptoms. Using modern equipment and the latest therapeutic
                techniques, we ensure that every patient receives the highest
                standard of care.
              </p>
            </div>
            <Button className="mt-6" size="lg" asChild>
              <Link to="/book-appointment">
                <Calendar className="mr-2 h-4 w-4" /> Book an Appointment
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {milestones.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-border bg-card p-6 text-center shadow-sm"
              >
                <div className="font-heading text-3xl font-extrabold text-primary">
                  {m.number}
                </div>
                <div className="mt-1 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="section-padding section-alt">
      <div className="container-narrow text-center">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-semibold text-secondary uppercase tracking-wider mb-4">
            Our Mission
          </div>
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Making Quality Physiotherapy Accessible to Everyone in Tripura
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg leading-relaxed">
            As a proud part of the Agartala community, we are committed to
            making quality physiotherapy accessible and affordable for everyone
            in Tripura. We envision a community where pain doesn't limit
            potential and recovery is within everyone's reach.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          title="Our Values"
          subtitle="The principles that guide everything we do at Physio Plus."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <Card
              key={v.title}
              className="border-border hover:shadow-lg transition-shadow group"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary transition-colors">
                  <v.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative overflow-hidden section-padding text-center">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(212 72% 38%), hsl(152 40% 40%))",
        }}
      />
      <div className="relative container-narrow">
        <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
          Ready to Start Your Recovery?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80 md:text-lg">
          Book a consultation with our expert physiotherapists today.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg"
            asChild
          >
            <Link to="/book-appointment">
              <Calendar className="mr-2 h-4 w-4" /> Book Appointment
            </Link>
          </Button>
          <Button size="lg" variant="secondary" className="shadow-lg" asChild>
            <Link to="/services">
              Our Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;

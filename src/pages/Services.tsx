import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Calendar, ArrowRight, Bone, Brain, Dumbbell, HeartPulse,
  Hand, Activity, Footprints, ShieldCheck, Zap
} from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Back Pain Treatment",
    desc: "Comprehensive treatment for acute and chronic back pain using manual therapy, exercises, and modalities.",
    symptoms: ["Lower back stiffness", "Shooting pain down legs", "Difficulty bending or standing"],
    benefits: ["Pain relief without medication", "Improved posture and flexibility", "Long-term prevention strategies"],
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Bone,
    title: "Neck Pain Treatment",
    desc: "Specialized care for cervical pain, including whiplash, text neck, and cervical spondylosis.",
    symptoms: ["Neck stiffness", "Headaches from neck tension", "Reduced range of motion"],
    benefits: ["Reduced pain and stiffness", "Better sleep quality", "Ergonomic guidance"],
    color: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: Zap,
    title: "Slip Disc Management",
    desc: "Non-surgical management of herniated discs through targeted therapy and rehabilitation exercises.",
    symptoms: ["Radiating arm or leg pain", "Numbness or tingling", "Muscle weakness"],
    benefits: ["Avoid surgery in many cases", "Core strengthening", "Spinal mobility restoration"],
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Footprints,
    title: "Knee Pain Physiotherapy",
    desc: "Treatment for knee injuries, arthritis, and post-operative knee rehabilitation.",
    symptoms: ["Knee swelling", "Difficulty walking or climbing stairs", "Clicking or locking of knee"],
    benefits: ["Restored mobility", "Strengthened knee muscles", "Delayed or avoided knee surgery"],
    color: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: Hand,
    title: "Frozen Shoulder Therapy",
    desc: "Progressive mobilization techniques to restore shoulder movement and reduce pain.",
    symptoms: ["Severe shoulder stiffness", "Night pain", "Inability to raise arm"],
    benefits: ["Regained range of motion", "Pain reduction", "Functional recovery"],
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Brain,
    title: "Stroke Rehabilitation",
    desc: "Comprehensive neurological rehabilitation for stroke survivors to regain independence.",
    symptoms: ["Weakness on one side", "Balance difficulties", "Speech or swallowing issues"],
    benefits: ["Improved mobility", "Better balance and coordination", "Enhanced daily functioning"],
    color: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: Dumbbell,
    title: "Sports Injury Rehab",
    desc: "Return-to-sport rehabilitation for athletes of all levels with performance optimization.",
    symptoms: ["Muscle strains or tears", "Ligament sprains", "Overuse injuries"],
    benefits: ["Faster return to sport", "Injury prevention training", "Performance enhancement"],
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: ShieldCheck,
    title: "Arthritis Management",
    desc: "Gentle, effective therapy to manage joint inflammation, pain, and stiffness from arthritis.",
    symptoms: ["Joint swelling and warmth", "Morning stiffness", "Reduced joint function"],
    benefits: ["Pain management", "Joint protection strategies", "Maintained mobility"],
    color: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: HeartPulse,
    title: "Post Fracture Rehab",
    desc: "Rehabilitation after fractures to restore strength, mobility, and function.",
    symptoms: ["Stiffness after cast removal", "Muscle weakness", "Reduced range of motion"],
    benefits: ["Faster healing", "Full functional recovery", "Prevention of complications"],
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
];

const Services = () => (
  <Layout>
    {/* Hero Banner */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(212 72% 38%), hsl(212 72% 28%))" }} />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24 text-center">
        <h1 className="font-heading text-3xl font-extrabold text-primary-foreground md:text-5xl">
          Our Services
        </h1>
        <p className="mt-3 text-primary-foreground/70 md:text-lg max-w-2xl mx-auto">
          Comprehensive physiotherapy services for all your recovery and rehabilitation needs in Agartala.
        </p>
      </div>
    </section>

    {/* Services List */}
    <section className="section-padding">
      <div className="container-narrow">
        <div className="space-y-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon & Title */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${s.color} shrink-0 group-hover:scale-110 transition-transform`}>
                      <s.icon className={`h-7 w-7 ${s.iconColor}`} />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Service {String(i + 1).padStart(2, "0")}</span>
                      <h3 className="font-heading text-xl font-bold text-foreground">{s.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-xl bg-muted/50 p-4">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                    Symptoms We Treat
                  </h4>
                  <ul className="space-y-2">
                    {s.symptoms.map((sym) => (
                      <li key={sym} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1 w-1 rounded-full bg-muted-foreground/40 shrink-0" />
                        {sym}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl bg-accent/50 p-4">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    Benefits
                  </h4>
                  <ul className="space-y-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1 w-1 rounded-full bg-secondary/60 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5">
                <Button asChild>
                  <Link to="/book-appointment">
                    <Calendar className="mr-2 h-4 w-4" /> Book This Service
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative overflow-hidden section-padding text-center">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(212 72% 38%), hsl(152 40% 40%))" }} />
      <div className="relative container-narrow">
        <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
          Not Sure Which Service You Need?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80 md:text-lg">
          Book a consultation and let our experts assess your condition and recommend the best treatment plan.
        </p>
        <Button size="lg" className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg" asChild>
          <Link to="/book-appointment">
            <Calendar className="mr-2 h-4 w-4" /> Book a Consultation
          </Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Services;

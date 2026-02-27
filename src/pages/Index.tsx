import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "@/components/SectionHeading";
import Layout from "@/components/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import {
  Phone,
  Calendar,
  MessageCircle,
  Activity,
  Brain,
  Dumbbell,
  HeartPulse,
  Users,
  Bone,
  CheckCircle2,
  MapPin,
  Star,
  Clock,
  BadgeDollarSign,
  Stethoscope,
  ArrowRight,
  Shield,
  Award,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Bone,
    title: "Orthopedic Physiotherapy",
    desc: "Treatment for bone, joint, and muscle conditions to restore movement and reduce pain.",
  },
  {
    icon: Brain,
    title: "Neurological Rehabilitation",
    desc: "Specialized care for stroke, paralysis, and nervous system disorders.",
  },
  {
    icon: Dumbbell,
    title: "Sports Injury Rehab",
    desc: "Get back to peak performance with targeted sports injury recovery programs.",
  },
  {
    icon: HeartPulse,
    title: "Post-Surgery Rehab",
    desc: "Comprehensive rehabilitation after surgical procedures for faster recovery.",
  },
  {
    icon: Users,
    title: "Geriatric Physiotherapy",
    desc: "Gentle, effective therapy for age-related mobility and balance issues.",
  },
  {
    icon: Activity,
    title: "Back & Neck Pain Treatment",
    desc: "Evidence-based relief from chronic and acute back and neck pain.",
  },
];

const whyUs = [
  {
    icon: Stethoscope,
    title: "Experienced Care",
    desc: "Skilled physiotherapists with years of clinical expertise.",
  },
  {
    icon: CheckCircle2,
    title: "Personalized Plans",
    desc: "Every treatment plan is tailored to your unique needs.",
  },
  {
    icon: Activity,
    title: "Modern Equipment",
    desc: "State-of-the-art physiotherapy tools and technology.",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    desc: "Easy to reach in Dhaleswar, Agartala.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Pricing",
    desc: "Quality healthcare that doesn't break the bank.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    desc: "Convenient scheduling including weekends.",
  },
];

const faqs = [
  {
    q: "What conditions does physiotherapy treat?",
    a: "Physiotherapy treats a wide range of conditions including back pain, neck pain, sports injuries, post-surgical recovery, stroke rehabilitation, arthritis, frozen shoulder, and more.",
  },
  {
    q: "How many sessions will I need?",
    a: "The number of sessions depends on your condition, severity, and recovery goals. After an initial assessment, we'll create a personalized treatment plan with an estimated timeline.",
  },
  {
    q: "Do I need a doctor's referral?",
    a: "No, you can directly visit our clinic. However, having a referral from your doctor can help us understand your medical history better.",
  },
  {
    q: "Is physiotherapy painful?",
    a: "Some techniques may cause mild discomfort, but physiotherapy should not be painful. Our therapists always work within your comfort level and adjust treatment accordingly.",
  },
  {
    q: "What should I wear to a session?",
    a: "Wear comfortable, loose-fitting clothing that allows easy movement. This helps your therapist assess and treat the affected areas effectively.",
  },
];

const reviews = [
  {
    name: "Rajesh Kumar.",
    rating: 5,
    text: "Excellent treatment for my chronic back pain. The staff is very professional and caring.",
    initials: "RK",
  },
  {
    name: "Priya Debnath.",
    rating: 5,
    text: "My mother's knee pain improved significantly after just 10 sessions. Highly recommend!",
    initials: "PD",
  },
  {
    name: "Amit Sarkar.",
    rating: 5,
    text: "Best physiotherapy clinic in Agartala. Modern equipment and very effective treatment.",
    initials: "AS",
  },
];

const stats = [
  { value: "2000+", label: "Patients Treated" },
  { value: "6+", label: "Years Experience" },
  { value: "4.9★", label: "Google Rating" },
];

const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.6!2d91.2735!3d23.8363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f41b0b0b0b0b%3A0x0!2sPhysio%20Plus!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

const Index = () => (
  <Layout>
    {/* JSON-LD Schema */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physiotherapy",
          name: "Physio Plus Agartala",
          image: "",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Dhaleswar Road No. 8/9, Near Swarup Marriage Hall",
            addressLocality: "Agartala",
            addressRegion: "Tripura",
            postalCode: "799007",
            addressCountry: "IN",
          },
          telephone: "+916033497168",
          openingHours: ["Mo-Sa 12:00-21:00", "Su closed"],
          url: "https://physioplusagartala.com",
          priceRange: "$$",
        }),
      }}
    />

    {/* Hero Carousel */}
    <HeroCarousel />

    {/* Stats Bar */}
    <section className="px-4 py-6">
      <div className="mx-auto max-w-5xl rounded-2xl bg-card shadow-xl border border-border">
        <div className="grid grid-cols-3 divide-x divide-border">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-6 text-center md:py-8">
              <div className="font-heading text-2xl font-extrabold text-primary md:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services Overview */}
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive physiotherapy services tailored to your recovery needs."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="card-hover border-border group">
              <CardContent className="p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:shadow-lg">
                  <s.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button size="lg" asChild>
            <Link to="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding section-alt">
      <div className="container-narrow">
        <SectionHeading
          title="Why Choose Physio Plus?"
          subtitle="We're committed to helping you recover faster with personalized care."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w) => (
            <div
              key={w.title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                <w.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground">
                {w.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Reviews */}
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          title="What Our Patients Say"
          subtitle="Real experiences from our valued patients in Agartala."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <Card
              key={r.name}
              className="border-border hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{r.text}"
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading text-sm font-bold">
                    {r.initials}
                  </div>
                  <span className="font-heading text-sm font-semibold text-foreground">
                    {r.name}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Map */}
    <section className="section-padding section-alt">
      <div className="container-narrow">
        <SectionHeading
          title="Find Us"
          subtitle="Visit us at Dhaleswar, Agartala – conveniently located opposite Teresa Health Care."
        />
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-semibold text-foreground">
                  Address
                </h4>
                <p className="text-sm text-muted-foreground">
                  Dhaleswar Road No. 8/9, Near Swarup Marriage Hall, Agartala,
                  West Tripura
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-semibold text-foreground">
                  Working Hours
                </h4>
                <p className="text-sm text-muted-foreground">
                  Mon – Sat: 12:00 PM – 9:00 PM
                </p>
                <p className="text-sm text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-semibold text-foreground">
                  Phone
                </h4>
                <a
                  href="tel:+916033497168"
                  className="text-sm text-primary font-medium hover:underline"
                >
                  +91 60334 97168
                </a>
              </div>
            </div>
            <Button className="mt-2" asChild>
              <a
                href="https://maps.app.goo.gl/TV2mPx2dHPGshLdm6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 h-4 w-4" /> Get Directions
              </a>
            </Button>
          </div>
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <iframe
              title="Physio Plus Agartala Location"
              src={MAPS_EMBED_URL}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about physiotherapy and our clinic."
        />
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-heading text-sm font-semibold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* Final CTA */}
    <section className="relative overflow-hidden section-padding text-center">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(212 72% 38%), hsl(152 40% 40%))",
        }}
      />
      <div className="relative container-narrow">
        <Award className="mx-auto h-12 w-12 text-primary-foreground/40 mb-4" />
        <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
          Book Your Appointment Today
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80 md:text-lg">
          Take the first step towards a pain-free life. Our expert
          physiotherapists are ready to help you recover.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
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
            <a href="tel:+916033497168">
              <Phone className="mr-2 h-4 w-4" /> Call: +91 60334 97168
            </a>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;

import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.6!2d91.2735!3d23.8363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f41b0b0b0b0b%3A0x0!2sPhysio%20Plus!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
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
            Contact Us
          </h1>
          <p className="mt-3 text-primary-foreground/70 md:text-lg max-w-2xl mx-auto">
            Get in touch with Physio Plus Agartala. We're here to help you.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Info */}
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Get In Touch
              </h2>

              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    value:
                      "Dhaleswar Road No. 8/9, Near Swarup Marriage Hall, Agartala, West Tripura",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 60334 97168",
                    href: "tel:+916033497168",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "physioplusagartala@gmail.com",
                    href: "mailto:physioplusagartala@gmail.com",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 shadow-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-foreground">
                        {item.label}
                      </h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-primary font-medium hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-semibold text-foreground">
                      Working Hours
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Mon – Sat: 1:00 PM – 8:30 PM
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1" asChild>
                  <a href="tel:+916033497168">
                    <Phone className="mr-2 h-4 w-4" /> Call Us
                  </a>
                </Button>
                <Button variant="secondary" className="flex-1" asChild>
                  <a
                    href="https://wa.me/916033497168"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                  </a>
                </Button>
              </div>

              <div className="overflow-hidden rounded-xl border border-border shadow-sm">
                <iframe
                  title="Physio Plus Agartala Location"
                  src={MAPS_EMBED_URL}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <Button variant="outline" className="w-full" asChild>
                <a
                  href="https://maps.app.goo.gl/TV2mPx2dHPGshLdm6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 h-4 w-4" /> Get Directions on Google
                  Maps
                </a>
              </Button>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
              <h2 className="font-heading text-xl font-bold text-foreground mb-2">
                Send Us a Message
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                We'll get back to you within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="contact-name">Name</Label>
                  <Input
                    id="contact-name"
                    required
                    placeholder="Your name"
                    className="mt-1.5"
                    maxLength={100}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-phone">Phone</Label>
                  <Input
                    id="contact-phone"
                    required
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="mt-1.5"
                    maxLength={15}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    className="mt-1.5"
                    maxLength={255}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-msg">Message</Label>
                  <Textarea
                    id="contact-msg"
                    required
                    placeholder="How can we help you?"
                    className="mt-1.5"
                    rows={4}
                    maxLength={1000}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

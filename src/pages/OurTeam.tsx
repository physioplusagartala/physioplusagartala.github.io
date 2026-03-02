import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Award, GraduationCap, Briefcase } from "lucide-react";

/**
 * ============================================================
 * TEAM MEMBERS - EDIT THIS ARRAY TO ADD/REMOVE TEAM MEMBERS
 * ============================================================
 *
 * To ADD a new member:
 *   Copy one of the objects below and paste it at the end of the array.
 *   Fill in the details (name, credentials, role, experience, highlights).
 *
 * To REMOVE a member:
 *   Delete the entire { ... } block for that person (including the comma).
 *
 * To EDIT a member:
 *   Simply change the text values below.
 *
 * Example:
 *   {
 *     name: "Dr. New Member (PT)",
 *     credentials: "BPT, MPT (Ortho)",
 *     role: "Physiotherapist",
 *     experience: "3 Years of Experience",
 *     highlights: [
 *       "Specialization or past experience line 1",
 *       "Specialization or past experience line 2",
 *     ],
 *   },
 * ============================================================
 */
const teamMembers = [
  {
    name: "Dr. Birat Banik (PT)",
    credentials: "BPT (TU), MPT (Neuro)",
    role: "Senior Physiotherapist",
    experience: "6 Years of Experience",
    image: "/images/dr-birat-banik.png",
    highlights: [
      "Ex-Physiotherapist at Institute of Neurosciences Kolkata (INK)",
      "Specialist in Neurological Rehabilitation",
    ],
  },
  {
    name: "Dr. Parijat Saha (PT)",
    credentials: "BPT (TU), MPT (Ortho)",
    role: "Senior Physiotherapist",
    experience: "6 Years of Experience",
    image: "/images/dr-parijat-saha.png",
    highlights: ["Specialist in Orthopedic Physiotherapy"],
  },
  // ← ADD NEW TEAM MEMBERS HERE (copy the format above)
];

const OurTeam = () => {
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: teamMembers.map((member, index) => ({
      "@type": "Physician",
      position: index + 1,
      name: member.name,
      jobTitle: member.role,
      image: `https://physioplusagartala.com${member.image}`,
      url: "https://physioplusagartala.com/our-team",
      worksFor: {
        "@type": "Organization",
        name: "Physio Plus Agartala",
      },
      qualifications: member.credentials,
      description: member.highlights.join("; "),
    })),
  };

  return (
    <>
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
              Meet Our Experts
            </h1>
            <p className="mt-3 text-primary-foreground/70 md:text-lg max-w-2xl mx-auto">
              Our team of qualified physiotherapists brings years of clinical
              expertise to help you recover faster.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="section-padding">
          <div className="container-narrow">
            <SectionHeading
              title="Our Physiotherapists"
              subtitle="Experienced professionals dedicated to your recovery."
            />
            <div className="grid gap-8 md:grid-cols-2">
              {teamMembers.map((member) => (
                <Card
                  key={member.name}
                  className="border-border hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <CardContent className="p-0">
                    {/* Doctor Image */}
                    {member.image && (
                      <div className="w-full aspect-square overflow-hidden bg-gray-100">
                        <img
                          src={member.image}
                          alt={`${member.name}, ${member.role} at Physio Plus Agartala`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    {/* Colored header strip */}
                    <div className="bg-primary px-6 py-5">
                      <h2 className="font-heading text-xl font-bold text-primary-foreground">
                        {member.name}
                      </h2>
                      <p className="mt-1 text-sm font-medium text-primary-foreground/80">
                        {member.credentials}
                      </p>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                          <Award className="h-4.5 w-4.5 text-primary" />
                        </div>
                        <span className="font-heading text-sm font-semibold text-foreground">
                          {member.role}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                          <Briefcase className="h-4.5 w-4.5 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          {member.experience}
                        </span>
                      </div>
                      {member.highlights.length > 0 && (
                        <div className="space-y-2 pt-2 border-t border-border">
                          {member.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <GraduationCap className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {h}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
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
              Book a Consultation With Our Experts
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80 md:text-lg">
              Get personalized treatment from experienced physiotherapists.
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
            </div>
          </div>
        </section>
      </Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
    </>
  );
};

export default OurTeam;

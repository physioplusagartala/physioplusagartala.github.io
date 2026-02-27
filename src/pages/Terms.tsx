import Layout from "@/components/Layout";

const Terms = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-8">
          Terms & Conditions
        </h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-5 leading-relaxed">
          <p>Last updated: February 2026</p>
          <p>
            By using the Physio Plus Agartala website and services, you agree to
            the following terms and conditions.
          </p>

          <h2 className="font-heading text-lg font-semibold text-foreground mt-8">
            Services
          </h2>
          <p>
            Our website provides information about our physiotherapy services
            and allows you to request appointments. Appointment requests are
            subject to confirmation by our team.
          </p>

          <h2 className="font-heading text-lg font-semibold text-foreground mt-8">
            Appointment Policy
          </h2>
          <p>
            Appointments booked through our website are requests and will be
            confirmed via phone or WhatsApp. We reserve the right to reschedule
            based on availability. Please arrive 10 minutes before your
            scheduled time.
          </p>

          <h2 className="font-heading text-lg font-semibold text-foreground mt-8">
            Medical Disclaimer
          </h2>
          <p>
            The content on this website is for informational purposes only and
            does not substitute professional medical advice. Always consult a
            qualified healthcare provider for medical concerns.
          </p>

          <h2 className="font-heading text-lg font-semibold text-foreground mt-8">
            Limitation of Liability
          </h2>
          <p>
            Physio Plus Agartala shall not be liable for any indirect,
            incidental, or consequential damages arising from the use of our
            website or services.
          </p>

          <h2 className="font-heading text-lg font-semibold text-foreground mt-8">
            Contact
          </h2>
          <p>
            For questions about these terms, contact us at
            physioplusagartala@gmail.com.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Terms;

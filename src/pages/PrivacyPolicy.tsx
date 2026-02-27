import Layout from "@/components/Layout";

const PrivacyPolicy = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-5 leading-relaxed">
          <p>Last updated: February 2026</p>
          <p>
            Physio Plus Agartala ("we", "us", or "our") is committed to
            protecting your privacy. This Privacy Policy explains how we
            collect, use, and safeguard your information when you visit our
            website or use our services.
          </p>

          <h2 className="font-heading text-lg font-semibold text-foreground mt-8">
            Information We Collect
          </h2>
          <p>
            We may collect personal information you voluntarily provide,
            including your name, phone number, email address, and health-related
            information necessary for treatment.
          </p>

          <h2 className="font-heading text-lg font-semibold text-foreground mt-8">
            How We Use Your Information
          </h2>
          <p>
            We use your information to schedule appointments, provide
            physiotherapy services, communicate with you, and improve our
            services. We do not sell your personal information to third parties.
          </p>

          <h2 className="font-heading text-lg font-semibold text-foreground mt-8">
            Data Security
          </h2>
          <p>
            We implement appropriate security measures to protect your personal
            information. However, no method of transmission over the internet is
            100% secure.
          </p>

          <h2 className="font-heading text-lg font-semibold text-foreground mt-8">
            Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            at physioplusagartala@gmail.com.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;

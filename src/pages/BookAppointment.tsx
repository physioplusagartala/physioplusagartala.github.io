import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const serviceOptions = [
  "Back Pain Treatment",
  "Neck Pain Treatment",
  "Slip Disc Management",
  "Knee Pain Physiotherapy",
  "Frozen Shoulder Therapy",
  "Stroke Rehabilitation",
  "Sports Injury Rehab",
  "Arthritis Management",
  "Post Fracture Rehab",
  "Other",
];

const BookAppointment = () => {
  const [date, setDate] = useState<Date>();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  const { toast } = useToast();

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!date) {
      toast({
        title: "Please select a date",
      });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_clinic",
        "template_nly0wp9",
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email || "Not provided",
          service: formData.service,
          date: format(date, "PPP"),
        },
        "d_OZNJo9PlEtjOHOd",
      );

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-narrow max-w-lg text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent">
              <CheckCircle2 className="h-8 w-8 text-accent-foreground" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Appointment Request Sent!
            </h2>
            <p className="mt-3 text-muted-foreground">
              Thank you for choosing Physio Plus Agartala. We'll confirm your
              appointment via phone or WhatsApp within a few hours.
            </p>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow max-w-lg">
          <SectionHeading
            title="Book an Appointment"
            subtitle="Fill in the details below and we'll get back to you to confirm your visit."
          />

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                required
                placeholder="Your full name"
                className="mt-1.5"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                required
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="mt-1.5"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="email">Email (optional)</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="mt-1.5"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>

            <div>
              <Label>Service</Label>
              <Select
                onValueChange={(value) => handleChange("service", value)}
                required
              >
                <SelectTrigger className="mt-1.5">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Preferred Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "mt-1.5 w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < new Date()}
                    initialFocus
                    className="p-3"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={loading}
            >
              {loading ? "Sending..." : "Request Appointment"}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              We'll confirm your appointment via phone or WhatsApp within a few
              hours.
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default BookAppointment;

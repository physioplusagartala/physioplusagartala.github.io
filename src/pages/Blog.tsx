import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, BookOpen, TrendingUp, Pill, Dumbbell } from "lucide-react";

const posts = [
  {
    slug: "best-physiotherapy-clinic-agartala-back-pain",
    title: "Best Physiotherapy Clinic in Agartala for Back Pain",
    excerpt: "Discover why Physio Plus is the top choice for back pain treatment in Agartala. Learn about our evidence-based approach and proven results.",
    date: "Feb 20, 2026",
    readTime: "5 min read",
    icon: BookOpen,
    category: "Back Pain",
    categoryColor: "bg-primary/10 text-primary",
  },
  {
    slug: "exercises-relieve-knee-pain",
    title: "5 Exercises to Relieve Knee Pain at Home",
    excerpt: "Simple yet effective exercises you can do at home to manage and reduce knee pain. Recommended by our physiotherapists.",
    date: "Feb 15, 2026",
    readTime: "4 min read",
    icon: TrendingUp,
    category: "Exercises",
    categoryColor: "bg-secondary/10 text-secondary",
  },
  {
    slug: "physiotherapy-vs-painkillers",
    title: "Physiotherapy vs Painkillers – What's Better?",
    excerpt: "Understanding why physiotherapy offers long-term relief compared to painkillers, and when each approach is appropriate.",
    date: "Feb 10, 2026",
    readTime: "6 min read",
    icon: Pill,
    category: "Wellness",
    categoryColor: "bg-primary/10 text-primary",
  },
  {
    slug: "recover-from-sports-injuries-faster",
    title: "How to Recover from Sports Injuries Faster",
    excerpt: "Expert tips on accelerating your recovery from sports injuries. Learn the RICE method, when to seek help, and rehabilitation essentials.",
    date: "Feb 5, 2026",
    readTime: "5 min read",
    icon: Dumbbell,
    category: "Sports",
    categoryColor: "bg-secondary/10 text-secondary",
  },
];

const Blog = () => (
  <Layout>
    {/* Hero Banner */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(212 72% 38%), hsl(212 72% 28%))" }} />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24 text-center">
        <h1 className="font-heading text-3xl font-extrabold text-primary-foreground md:text-5xl">
          Health Blog
        </h1>
        <p className="mt-3 text-primary-foreground/70 md:text-lg max-w-2xl mx-auto">
          Expert insights on physiotherapy, pain management, and healthy living from our team in Agartala.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <Card key={p.slug} className="card-hover border-border group overflow-hidden">
              {/* Decorative top gradient bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-primary to-secondary" />
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${p.categoryColor}`}>
                    <p.icon className="h-3 w-3" />
                    {p.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{p.date}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" /> {p.readTime}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <Link
                  to={`/blog/${p.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Read Full Article <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Newsletter CTA */}
    <section className="section-padding section-alt">
      <div className="container-narrow text-center">
        <div className="mx-auto max-w-xl">
          <BookOpen className="mx-auto h-10 w-10 text-primary/40 mb-4" />
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Stay Informed About Your Health
          </h2>
          <p className="mt-3 text-muted-foreground">
            We regularly publish expert tips on physiotherapy, pain management, and healthy living. Check back often for new articles!
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;

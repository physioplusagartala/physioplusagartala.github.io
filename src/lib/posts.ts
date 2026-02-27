import { BookOpen, TrendingUp, Pill, Dumbbell } from "lucide-react";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  icon: React.ComponentType<any>;
  category: string;
  categoryColor: string;
}

export const posts: Post[] = [
  {
    slug: "best-physiotherapy-clinic-agartala-back-pain",
    title: "Best Physiotherapy Clinic in Agartala for Back Pain",
    excerpt:
      "Discover why Physio Plus is the top choice for back pain treatment in Agartala. Learn about our evidence-based approach and proven results.",
    content:
      "<p>Back pain can be debilitating, but with the right care and a structured physiotherapy program, you can regain mobility and live pain-free. At Physio Plus we focus on individualized treatment plans, hands-on techniques, and patient education to address the root causes of your discomfort.</p>\n<p>Our therapists combine manual therapy with therapeutic exercises and ergonomic advice. Whether you're suffering from chronic lower back pain, a recent injury, or postural strain, we tailor our approach to suit your needs.</p>",
    date: "Feb 20, 2026",
    readTime: "5 min read",
    icon: BookOpen,
    category: "Back Pain",
    categoryColor: "bg-primary/10 text-primary",
  },
  {
    slug: "exercises-relieve-knee-pain",
    title: "5 Exercises to Relieve Knee Pain at Home",
    excerpt:
      "Simple yet effective exercises you can do at home to manage and reduce knee pain. Recommended by our physiotherapists.",
    content:
      "<p>Knee pain is one of the most common complaints we see. A few targeted exercises performed consistently can help strengthen the muscles around the joint, improve stability, and decrease discomfort.</p>\n<ul>\n<li>Quad sets</li>\n<li>Hamstring curls</li>\n<li>Calf raises</li>\n<li>Short arc quads</li>\n<li>Wall sits</li>\n</ul>\n<p>Be sure to consult with a professional before starting a new exercise regimen.</p>",
    date: "Feb 15, 2026",
    readTime: "4 min read",
    icon: TrendingUp,
    category: "Exercises",
    categoryColor: "bg-secondary/10 text-secondary",
  },
  {
    slug: "physiotherapy-vs-painkillers",
    title: "Physiotherapy vs Painkillers – What's Better?",
    excerpt:
      "Understanding why physiotherapy offers long-term relief compared to painkillers, and when each approach is appropriate.",
    content:
      "<p>While painkillers can mask symptoms temporarily, they do not address the underlying cause of your pain. Physiotherapy, on the other hand, aims to correct movement patterns, strengthen weak areas, and promote healing.</p>\n<p>In many cases we recommend starting with conservative management and only using medication as needed. Long-term reliance on painkillers can lead to side effects and dependency.</p>",
    date: "Feb 10, 2026",
    readTime: "6 min read",
    icon: Pill,
    category: "Wellness",
    categoryColor: "bg-primary/10 text-primary",
  },
  {
    slug: "recover-from-sports-injuries-faster",
    title: "How to Recover from Sports Injuries Faster",
    excerpt:
      "Expert tips on accelerating your recovery from sports injuries. Learn the RICE method, when to seek help, and rehabilitation essentials.",
    content:
      "<p>Sports injuries are frustrating, but with the right post‑injury plan you can get back in the game sooner. Remember RICE (Rest, Ice, Compression, Elevation) during the acute phase, followed by gradual loading and strengthening.</p>\n<p>Working with a physiotherapist ensures your recovery exercises are safe and effective. We also monitor progress to prevent re‑injury.</p>",
    date: "Feb 5, 2026",
    readTime: "5 min read",
    icon: Dumbbell,
    category: "Sports",
    categoryColor: "bg-secondary/10 text-secondary",
  },
];

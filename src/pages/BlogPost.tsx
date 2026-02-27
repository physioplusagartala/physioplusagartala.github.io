import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { posts } from "@/lib/posts";
import { Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    // If slug is invalid, redirect back to blog list
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <article className="prose prose-lg mx-auto">
            <h1>{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> {post.readTime}
              </span>
            </div>
            {/* render content as HTML since we stored it that way */}
            <div
              className="mt-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
          <div className="mt-10 text-center">
            <Link
              to="/blog"
              className="text-sm font-semibold text-primary hover:underline"
            >
              ← Back to articles
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;

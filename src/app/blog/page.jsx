import Blogs from "@/sections/Blog/Blogs";

export const metadata = {
  title: "Blog | Mohamed Oulahguine • Frontend Developer",
  description:
    "here you can find my blog posts about frontend development, React, Next.js, and practical coding insights.",
  keywords: [
    "frontend development blog",
    "React blog",
    "Next.js blog",
    "web development blog",
    "portfolio blog",
    "ecommerce blog",
    "clinic management blog",
    "modern web design blog",
    "blog posts",
    "blog articles",
    "blog content",
    "blog writing",
    "blog ideas",
    "blog topics",
    "blog categories",
    "blog tags",
    "blog comments",
  ],
  openGraph: {
    title: "Blog | Mohamed Oulahguine • Frontend Developer",
    description:
      "here you can find my blog posts about frontend development, React, Next.js, and practical coding insights.",
    type: "website",
  },
};

export default function BlogsPage() {
  return (
    <main className="blogs-page">
      <Blogs mode="full" />
    </main>
  );
}

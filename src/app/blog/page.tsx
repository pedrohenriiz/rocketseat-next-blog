import BlogTemplate from '@/templates/blog';
import { allPosts } from 'contentlayer/generated';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Dicas e estratégias para impulsionar seu negócio',
  robots: 'index, follow',
  openGraph: {
    title: 'Blog',
    description: 'Dicas e estratégias para impulsionar seu negócio',
    url: 'https://rocketseat-next-blog-i3h1.vercel.app/og-image.png',
    siteName: 'Site.Set',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://rocketseat-next-blog-i3h1.vercel.app/og-image.png',
        width: 800,
        height: 600,
        alt: 'Blog',
      },
    ],
  },
};

export default function BlogList() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return <BlogTemplate posts={posts} />;
}

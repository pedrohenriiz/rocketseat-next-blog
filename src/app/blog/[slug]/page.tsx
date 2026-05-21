import PostDetail from '@/pages/blog-page/[slug]';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

interface PostDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost(props: PostDetailProps) {
  const { slug } = await props.params;

  const postFound = allPosts.find((post) => post.slug === slug);

  if (!postFound) {
    notFound();
  }

  return <PostDetail post={postFound} />;
}

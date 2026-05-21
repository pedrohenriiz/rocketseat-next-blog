import BlogTemplate from '@/templates/blog';
import { allPosts } from 'contentlayer/generated';

export default function BlogList() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return <BlogTemplate posts={posts} />;
}

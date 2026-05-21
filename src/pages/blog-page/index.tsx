import BlogTemplate from '@/templates/blog';
import { allPosts, Post } from 'contentlayer/generated';
import { GetStaticProps } from 'next';

export default function Blog({ posts }: { posts: Post[] }) {
  return <BlogTemplate posts={posts} />;
}

export const getStaticProps = (async () => {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return {
    props: {
      posts: posts,
    },
  };
}) satisfies GetStaticProps;

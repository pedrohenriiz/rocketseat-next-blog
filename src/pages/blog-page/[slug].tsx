import BlogPost from '@/templates/blog-post';
import { allPosts, Post } from 'contentlayer/generated';
import { GetStaticPaths, GetStaticProps } from 'next';

export default function PostDetail({ post }: { post: Post }) {
  return <BlogPost post={post} />;
}

export const getStaticPaths = (async () => {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const recentPosts = sortedPosts.slice(0, 5);

  const paths = recentPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { slug } = context.params as { slug: string };

  const postFound = allPosts.find((post) => post.slug === slug);

  if (!postFound) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: postFound,
    },
  };
}) satisfies GetStaticProps;

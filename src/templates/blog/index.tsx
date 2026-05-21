'use client';
import { Post } from 'contentlayer/generated';
import Header from './components/header';
import PostGrid from './components/post-grid';
import PostCard from './components/post-grid/post-card';
import { Inbox } from 'lucide-react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function BlogTemplate({ posts }: { posts: Post[] }) {
  const searchParams = useSearchParams();
  const query = searchParams?.get('q') ?? '';

  const filteredPosts = query
    ? posts.filter((post) =>
        post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
      )
    : posts;
  const hasPosts = filteredPosts.length > 0;

  return (
    <div className='flex flex-col py-24 grow h-full'>
      <Header />

      {hasPosts && (
        <PostGrid>
          {filteredPosts.map((post) => {
            return (
              <PostCard
                key={post._id}
                image={post.image}
                title={post.title}
                date={new Date(post.date).toLocaleDateString('pt-BR')}
                description={post.description}
                slug={post.slug}
                author={{
                  avatar: post.author.avatar,
                  name: post.author.name,
                }}
              />
            );
          })}
        </PostGrid>
      )}

      {!hasPosts && (
        <div className='container px-8'>
          <div className='flex flex-col items-center justify-center gap-8 border-dashed rounded-lg border-2 border-gray-300 p-8 md:p-12'>
            <Inbox className='size-12 text-cyan-100' />
            <p className='text-gray-100 text-center'>Nenhum post encontrado.</p>
          </div>
        </div>
      )}
    </div>
  );
}

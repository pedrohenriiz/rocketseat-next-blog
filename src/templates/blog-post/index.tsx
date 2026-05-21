import { Avatar } from '@/components/avatar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import MarkdownSection from '@/templates/blog/components/post-grid/markdown';
import { Post } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import PostShare from './components/post-share';

export default function BlogPost({ post }: { post: Post }) {
  const publishedDate = new Date(post?.date).toLocaleDateString('pt-BR');

  const postUrl = `https://site.set/blog/${post.slug}`;

  return (
    <main className='mt-6'>
      <div className='container space-y-12 px-4 md:px-8'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href='/blog' className='text-action-sm'>
                Blog
              </Link>
            </BreadcrumbItem>

            <BreadcrumbSeparator></BreadcrumbSeparator>

            <BreadcrumbItem>
              <span className='text-blue-200 text-action-sm'>
                {post?.title}
              </span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className='grid grid-cols-1 gap-6 lg:gap-12 lg:grid-cols-[1fr_300px]'>
          <article className='bg-gray-600 rounded-lg overflow-hidden border-gray-400 border'>
            <figure className='relative aspect-16/10 w-full overflow-hidden rounded-lg'>
              <Image
                src={post?.image ?? ''}
                alt={post?.title ?? ''}
                fill
                className='object-cover'
              />
            </figure>

            <header className='p-4 pb-0 mt-8 md:mt-12 md:p-6 lg:p-12 '>
              <h1 className='mb-8 text-balance text-heading-lg md:text-heading-xl'>
                {post?.title}
              </h1>

              <Avatar.Container>
                <Avatar.Image
                  src={post?.author.avatar}
                  alt={post?.author.name}
                  size='sm'
                />
                <Avatar.Content>
                  <Avatar.Title>{post?.author.name}</Avatar.Title>
                  <Avatar.Description>
                    Publicado em{' '}
                    <time dateTime={post?.date}>{publishedDate}</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className='prose prove-invert max-w-noe px-4 mt-12 md:px-6 lg:px-12'>
              <MarkdownSection content={post?.body?.raw} />
            </div>
          </article>

          <PostShare post={post} postUrl={postUrl} />
        </div>
      </div>
    </main>
  );
}

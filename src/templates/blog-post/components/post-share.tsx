'use client';
import { Button } from '@/components/ui/button';
import useShare from '@/hooks/use-share';
import { Post } from 'contentlayer/generated';

interface PostShareProps {
  postUrl: string;
  post: Post;
}

export default function PostShare({ postUrl, post }: PostShareProps) {
  const { shareButtons } = useShare({
    url: postUrl,
    title: post?.title,
    text: post?.description,
  });

  return (
    <aside className='space-y-6'>
      <div className='rounded-lg bg-gray-700'>
        <h2 className='mb-4 text-heading-xs text-gray-100'>Compartilhar</h2>

        <div className='space-y-3'>
          {shareButtons.map((provider) => {
            return (
              <Button
                key={provider.name}
                variant='outline'
                className='w-full justify-start gap-2'
                onClick={() => provider.action()}
              >
                {provider.name}
              </Button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

import { cn } from '@/lib/utils';
import Image, { ImageProps } from 'next/image';

type AvatarSize = 'xs' | 'sm';

interface AvatarImageProps extends Omit<ImageProps, 'height' | 'width'> {
  size?: AvatarSize;
}

const avatarSize = {
  xs: 'size-5',
  sm: 'size-9',
};

export default function AvatarImage({
  src,
  alt,
  size = 'xs',
  ...rest
}: AvatarImageProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-full border-blue-200 border',
        avatarSize[size],
      )}
    >
      <Image src={src} alt={alt} fill {...rest} />
    </div>
  );
}

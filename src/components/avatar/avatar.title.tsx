interface AvatarTitleProps {
  children: React.ReactNode;
}

export default function AvatarTitle({ children }: AvatarTitleProps) {
  return <strong className='text-body-sm text-gray-200'>{children}</strong>;
}

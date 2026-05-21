interface AvatarContentProps {
  children: React.ReactNode;
}

export default function AvatarContent({ children }: AvatarContentProps) {
  return <div className='flex flex-col'>{children}</div>;
}

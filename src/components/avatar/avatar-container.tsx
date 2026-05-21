interface AvatarContainerProps {
  children: React.ReactNode;
}

export default function AvatarContainer({ children }: AvatarContainerProps) {
  return <div className='flex items-center gap-3'>{children}</div>;
}

interface AvatarDescriptionProps {
  children: React.ReactNode;
}

export default function AvatarDescription({
  children,
}: AvatarDescriptionProps) {
  return <div className='text-gray-300 text-body-xs'>{children}</div>;
}

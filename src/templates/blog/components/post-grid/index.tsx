interface PostGridProps {
  children: React.ReactNode;
}

export default function PostGrid({ children }: PostGridProps) {
  return (
    <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {children}
    </div>
  );
}

import { cn } from '@/lib/utils';
import { CircleX, SearchIcon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';

export default function Search() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams?.get('q') ?? '';
  const hasQuery = !!searchParams?.has('q');

  const handleSearch = useCallback(
    (event: React.SyntheticEvent) => {
      event.preventDefault();
      if (query.trim()) {
        router.push(`/push?q=${encodeURIComponent(query.trim())}`);
      }
    },
    [query, router],
  );

  const resetSearch = () => {
    router.push(`/blog`, {
      scroll: false,
    });
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;

    if (newQuery) {
      router.push(`/blog?q=${encodeURIComponent(newQuery)}`, {
        scroll: false,
      });
    } else {
      resetSearch();
    }
  };

  useEffect(() => {
    if (hasQuery) {
      inputRef.current?.focus();
    }
  }, [hasQuery]);

  return (
    <form className='relative group w-full md:w-60' onSubmit={handleSearch}>
      <SearchIcon
        className={cn(
          'text-gray-300 absolute left-3 top-1/2 size-4 transition-colors duration-200 -translate-y-1/2 group-focus-within:text-blue-300',
          query && 'text-blue-300',
        )}
      />
      <input
        ref={inputRef}
        type='text'
        placeholder='Buscar'
        value={query}
        className='w-full h-10 bg-transparent border border-gray-400 pl-9 text-gray-100 rounded-md text-body-sm outline-none transition-all duration-200 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300 placeholder:text-gray-300 placeholder:text-body-sm md:w-60'
        onChange={handleQueryChange}
      />

      {query && (
        <CircleX
          className={cn(
            'text-gray-300 absolute size-4 top-1/2 -translate-y-1/2 right-3',
          )}
          onClick={resetSearch}
        />
      )}
    </form>
  );
}

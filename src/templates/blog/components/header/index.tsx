import Search from '@/components/search';

export default function Header() {
  return (
    <header>
      <div className='container flex flex-col gap-4 items-start justify-between md:flex-row md:gap-0 md:items-end'>
        <div className='flex flex-col gap-4'>
          <span className='text-body-tag text-cyan-100 uppercase w-fit rounded-md text-center py-2 px-4 bg-cyan-300'>
            Blog
          </span>

          <h1 className='text-balance text-start text-heading-lg max-w-2xl text-gray-100 md:text-heading-xl md:text-left'>
            Dicas e estratégias para impulsionar seu negócio
          </h1>
        </div>
        <Search />
      </div>
    </header>
  );
}

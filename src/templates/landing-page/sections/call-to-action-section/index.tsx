import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '../../../../components/ui/button';
import { ArrowRight, Store } from 'lucide-react';

export default function CallToActionSection() {
  return (
    <section className='relative py-24 bg-linear-to-b from-cyan-950/20 to-gray-700 '>
      <div className='absolute inset-0 bg-[url(/assets/background-footer.png)] bg-cover bg-center bg-no-repeat opacity-90' />

      <div className='p-4 bg-cyan-300 rounded-full w-fit absolute -translate-x-1/2 left-1/2  -top-6'>
        <Store className='text-cyan-100' />
      </div>

      <div className='relative container text-center'>
        <div className='flex flex-col items-center gap-6 text-center'>
          <h2 className='text-gray-100 text-heading-xl text-balance max-w-md'>
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>

          <Link
            href='/create-store'
            className={cn(
              buttonVariants({
                variant: 'cta',
                className: 'mt-4',
              }),
            )}
          >
            Criar loja grátis <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

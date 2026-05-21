import Link from 'next/link';
import { buttonVariants } from '../../../../components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function FeatureSection() {
  return (
    <section className='container bg-gray-700 grid gap-6 py-8 md:grid-cols-2 md:py-10'>
      <div className='flex flex-col gap-4 rounded-lg p-6 bg-gray-500 md:p-12'>
        <span className='text-body-tag uppercase text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm'>
          Simples
        </span>
        <h2 className='text-gray-100 text-heading-lg'>
          Crie um catálogo de produtos online em poucos minutos
        </h2>
      </div>

      <div className='flex flex-col gap-4 rounded-lg p-6 bg-gray-500 md:p-12'>
        <span className='text-body-tag uppercase text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm'>
          Prático
        </span>
        <h2 className='text-gray-100 text-heading-lg'>
          Venda para seu público através de uma plataforma única
        </h2>
      </div>

      <div className='col-span-full flex flex-col gap-2'>
        <div className='grid grid-cols-1 gap-12 rounded-lg bg-gray-500 p-6 md:p-12 md:gap-4 md:grid-cols-2'>
          <div className='flex flex-col gap-4'>
            <span className='text-body-tag uppercase text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm'>
              Personalizável
            </span>
            <h2 className='text-gray-100 text-heading-lg'>
              Tenha uma loja online personalizada com a cara da sua marca
            </h2>

            <Link
              href='/create-store'
              className={cn(
                buttonVariants({
                  variant: 'cta',
                  className:
                    'hidden rounded-full mt-4  md:mt-auto md:flex md:w-fit',
                }),
              )}
            >
              Criar loja grátis <ArrowRight />
            </Link>
          </div>

          <div className='flex flex-col items-center justify-center w-full'>
            <div className='w-full max-w-md overflow-hidden'>
              <Image
                width={440}
                height={330}
                src='/assets/image.svg'
                alt='Features'
                className='object-cover w-full'
              />
            </div>

            <Link
              href='/create-store'
              className={cn(
                buttonVariants({
                  variant: 'cta',
                  className:
                    'w-full gap-2 rounded-full mt-4 md:mt-auto md:hidden',
                }),
              )}
            >
              Criar loja grátis <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

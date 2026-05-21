import { ArrowRight, Clock, Store } from 'lucide-react';
import { Button } from '../../../../components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='container mt-16 relative flex items-center justify-center md:mt-0'>
      <div className='grid grid-cols-1 items-center lg:grid-cols-2 gap-8 min-h-80 md:h-144'>
        <div className='flex flex-col items-center justify-center gap-4 lg:items-start'>
          <h1 className='text-gray-100 text-heading-hg text-center lg:text-start'>
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className='flex flex-col items-center justify-center gap-4 lg:items-start'>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <Clock className='text-cyan-100 size-4' />
                <span className='text-gray-200'>
                  Crie o seu site em menos de 5 minutos
                </span>
              </div>

              <div className='flex items-center gap-2'>
                <Store className='text-cyan-100 size-4' />
                <span className='text-gray-200'>
                  Acompanhe e otimize seu negócio online
                </span>
              </div>
            </div>
          </div>

          <div className='text-white flex flex-col gap-4 mt-5 items-center md:items-start'>
            <Button className='rounded-full w-full'>
              Criar loja grátis <ArrowRight />
            </Button>

            <span className='text-gray-300 text-body-xs'>
              Não precisa de cartão de crédito
            </span>
          </div>
        </div>

        <div className='relative h-80 hidden order-first items-center justify-center md:h-full md:order-last lg:flex'>
          <Image
            src='/assets/background-hero.png'
            alt='Ilustração com ícones de store, tags e sacola'
            className='h-full w-auto object-cover'
            fill
          />
        </div>
      </div>
    </section>
  );
}

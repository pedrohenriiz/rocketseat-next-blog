import Image from 'next/image';

const customerStories = [
  {
    content:
      'Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.',
    author: {
      name: 'Annette Bones',
      role: 'CEO na Anne Corp',
      avatar: '/assets/avatar-1.png',
    },
  },
  {
    content:
      'Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!',
    author: {
      name: 'Jacob Jones',
      role: 'CEO na JJ Org',
      avatar: '/assets/avatar-2.png',
    },
  },
];

export default function CustomerStoreSection() {
  return (
    <section className='container mt-0 mb-30 lg:mt-10'>
      <div className='flex flex-col items-center gap-12'>
        <h2 className='text-gray-100 text-heading-xl text-center'>
          Quem utiliza, aprova!
        </h2>

        <div className='grid gap-8 md:grid-cols-2'>
          {customerStories.map((customerStory) => {
            return (
              <div
                className='flex flex-col justify-between gap-6 rounded-lg bg-gray-500 p-6 md:p-10 lg:max-w-117.75'
                key={customerStory.author.name}
              >
                <p className='text-left text-body-md italic text-gray-200'>
                  {customerStory.content}
                </p>

                <div className='flex items-center gap-3'>
                  <div className='relative size-10 overflow-hidden rounded-full'>
                    <Image
                      src={customerStory.author.avatar}
                      alt={customerStory.author.name}
                      width={50}
                      height={50}
                    />
                  </div>

                  <div className='flex flex-col'>
                    <strong className='text-gray-200 text-body-sm'>
                      {customerStory.author.name}
                    </strong>
                    <span className='text-gray-300 text-body-xs'>
                      {customerStory.author.role}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

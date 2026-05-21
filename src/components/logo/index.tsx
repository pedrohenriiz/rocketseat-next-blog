import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href='/' title='Página inicial'>
      <Image
        src='/assets/Brand-Logo.svg'
        width={116}
        height={32}
        alt='Logo site'
      />
    </Link>
  );
}

'use client';
import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

interface ActiveLinkProp extends LinkProps {
  children: React.ReactNode;
}

export default function ActiveLink({
  href,
  children,
  ...rest
}: ActiveLinkProp) {
  const linkPath = (typeof href === 'string' ? href : href.pathname) ?? '';
  const pathname = usePathname();
  const isHomePage =
    pathname === linkPath || pathname?.startsWith(`${linkPath}/`);

  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        'text-action-sm transition-colors hover:text-blue-200',
        isHomePage ? 'text-blue-200' : 'text-gray-100',
      )}
    >
      {children}
    </Link>
  );
}

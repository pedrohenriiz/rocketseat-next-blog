import CallToActionSection from '@/templates/landing-page/sections/call-to-action-section';
import Footer from './footer';
import Header from './header';
import { Inter } from 'next/font/google';

interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${inter.className} relative flex min-h-screen flex-col dark`}
    >
      <Header />

      <main className='flex-1 flex flex-col mt-10'>{children}</main>

      <CallToActionSection />
      <Footer />
    </div>
  );
}

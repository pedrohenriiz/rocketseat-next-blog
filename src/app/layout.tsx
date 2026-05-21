import Layout from '@/components/layout/layout';
import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site.Set',
  description: 'Venda seus produtos como afiliado em um único lugar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Prosep Services Ltd.',
  description:
    'Prosep Services Ltd supplies world-class equipment and systems for industrial safety, mineral exploration, and scientific research across Ghana and West Africa.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

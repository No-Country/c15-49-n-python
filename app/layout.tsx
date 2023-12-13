import './globals.css';
import { Inter } from 'next/font/google';

import Header from './components/header';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Arreglos Ya',
  description: 'Arreglos Ya - Web App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

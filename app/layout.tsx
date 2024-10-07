import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ConditionalHeader from '@/components/layouts/conditinal-header';

const pretendard = localFont({
  src: [
    {
      path: '../public/fonts/Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: '../public/fonts/Pretendard-Medium.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/Pretendard-SemiBold.woff2',
      weight: '600',
    },
    {
      path: '../public/fonts/Pretendard-Bold.woff2',
      weight: '700',
    },
    {
      path: '../public/fonts/Pretendard-ExtraBold.woff2',
      weight: '800',
    },
  ],
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Dream AI Studio',
  description: 'Dream AI Studio는 아이들에게 책을 선물합니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body>
        <ConditionalHeader />
        {children}
      </body>
    </html>
  );
}

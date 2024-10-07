'use client';

import { usePathname } from 'next/navigation';
import Header from './header';

const ConditionalHeader = () => {
  const pathname = usePathname();
  const isAuthRoute = pathname.startsWith('/auth');

  return !isAuthRoute ? <Header /> : null;
};

export default ConditionalHeader;

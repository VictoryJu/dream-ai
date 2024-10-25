'use client';
import { usePathname } from 'next/navigation';
import Header from './header';

const ConditionalHeader = () => {
  const pathname = usePathname();

  const shouldDisplayHeader = !pathname.includes('/auth');

  return shouldDisplayHeader ? <Header /> : null;
};

export default ConditionalHeader;

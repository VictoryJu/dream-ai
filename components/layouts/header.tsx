'use client';

import { useAuthStore } from '@/lib/stores/auth-store';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
  const { globalTel, setGlobalTel } = useAuthStore((state) => state);
  const router = useRouter();

  const handleLogout = () => {
    setGlobalTel('');
    router.push('/auth/login');
  };
  return (
    <nav className="flex justify-between items-center bg-white w-full max-w-desktop tablet:max-w-tablet mx-auto h-[120px] tablet:px-tablet gap-6 tablet:gap-3">
      <Link className="relative flex-1 h-[48px] max-w-[312px] tablet:max-w-[200px]" href="/">
        <Image
          className="cursor-pointer"
          src="/images/main/header-dream-ai-studio-logo.png"
          alt="header-main-logo"
          fill
          sizes="(max-width: 1000px) 100vw, 33vw"
          style={{ objectFit: 'contain' }}
          priority
        />
      </Link>
      <ul className="flex flex-1 gap-10 tablet:gap-5 text-[22px] tablet:text-lg font-semibold justify-center">
        <li>프로그램</li>
        <li>수강생 작품</li>
        <li>스토리</li>
        <li>자주 묻는 질문</li>
      </ul>
      <div className="flex items-center gap-7">
        <Link
          href="/"
          className="w-32 h-[60px] tablet:h-[50px] text-center content-center rounded-[8px] text-white text-[22px] tablet:text-lg font-bold bg-purple-main hover:bg-purple-main/90"
        >
          나의 학급
        </Link>
        <span
          onClick={handleLogout}
          className="cursor-pointer w-32 h-[60px] tablet:h-[50px] py-[16px] tablet:py-[12px] px-[24px] tablet:px-[16px] rounded-[8px] text-purple-main text-[22px] tablet:text-lg font-bold hover:underline"
        >
          로그아웃
        </span>
      </div>
    </nav>
  );
};

export default Header;

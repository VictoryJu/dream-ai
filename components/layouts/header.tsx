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
    <nav className="flex justify-between items-center bg-white w-full h-[120px] px-[220px] lg:px-[110px]">
      <Link className="relative w-[312px] h-[48px]" href="/">
        <Image
          className="cursor-pointer"
          src="/images/main/header-dream-ai-studio-logo.png"
          alt="header-main-logo"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'contain' }}
          priority
        />
      </Link>
      <ul className="flex gap-[45px] text-[22px] font-semibold">
        <li>프로그램</li>
        <li>수강생 작품</li>
        <li>스토리</li>
        <li>자주 묻는 질문</li>
      </ul>
      <div className="flex items-center gap-[30px]">
        <Link
          href="/"
          className="w-32 h-[60px] text-center content-center rounded-[8px] text-white text-[22px] font-bold bg-purple-main hover:bg-purple-main/90"
        >
          나의 학급
        </Link>
        <span
          onClick={handleLogout}
          className="cursor-pointer w-32 h-[60px] py-[16px] px-[24px] rounded-[8px] text-purple-main text-[22px] font-bold hover:underline"
        >
          로그아웃
        </span>
      </div>
    </nav>
  );
};

export default Header;

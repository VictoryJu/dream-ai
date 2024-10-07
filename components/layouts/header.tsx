'use client';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-white w-full h-[120px] px-[220px]">
      <Link href="/">
        <Image
          className="cursor-pointer"
          src="/images/main/header-dream-ai-studio-logo.png"
          alt="header-main-logo"
          width={312}
          height={48}
        />
      </Link>
      <ul className="flex gap-[45px] text-[22px] font-semibold">
        <li>프로그램</li>
        <li>수강생 작품</li>
        <li>스토리</li>
        <li>자주 묻는 질문</li>
      </ul>
      <div className="flex items-center gap-[30px]">
        <Button variant="default" className="w-32 h-[60px] rounded-[8px] text-white text-[22px] font-bold">
          나의 학급
        </Button>
        <Button
          variant="link"
          className="w-32 h-[60px] py-[16px] px-[24px] rounded-[8px] text-purple-main text-[22px] font-bold"
        >
          로그아웃
        </Button>
      </div>
    </nav>
  );
};

export default Header;

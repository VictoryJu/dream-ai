import Image from 'next/image';
import Link from 'next/link';
import HeaderLogout from './header-logout';

const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-white w-full max-w-desktop tablet:max-w-tablet mx-auto h-[120px] gap-6 tablet:gap-3">
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
        <HeaderLogout />
      </div>
    </nav>
  );
};

export default Header;

'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const BookDescription = () => {
  return (
    <div className="flex flex-col animate-fadeIn">
      <div className="text-desktopTitle tablet:text-tabletTitle font-bold text-black-title mb-[15px]">
        잘하고 있어요!
      </div>
      <div className="text-black-description mb-[50px] text-desktopDescription tablet:text-tabletDescription font-semibold break-keep">
        <div>그림책 만들기를 눌러서 시로 배우게 만들어보세요.</div>
        <div>스토리, 캐릭터, 일러스트를 조화롭게 구성할 수 있어요.</div>
      </div>
      <Button
        asChild
        variant="default"
        className="w-[290px] h-[100px] rounded-[15px] text-white text-[28px] tablet:text-[20px] tablet:w-[200px] tablet:h-[80px] font-bold"
      >
        <Link href="/book/chat">그림책 만들기</Link>
      </Button>
    </div>
  );
};

export default BookDescription;

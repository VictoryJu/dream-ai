'use client';
import { Button } from '@/components/ui/button';

const BookDescription = () => {
  return (
    <div className="flex flex-col animate-fadeIn">
      <div className="text-[50px] font-bold text-black-title mb-[15px]">잘하고 있어요!</div>
      <div className="text-black-description mb-[50px] text-[26px] font-semibold">
        <div>그림책 만들기를 눌러서 시로 배우게 만들어보세요.</div>
        <div>스토리, 캐릭터, 일러스트를 조화롭게 구성할 수 있어요.</div>
      </div>
      <Button variant="default" className="w-[290px] h-[100px] rounded-[15px] text-white text-[28px] font-bold">
        그림책 만들기
      </Button>
    </div>
  );
};

export default BookDescription;

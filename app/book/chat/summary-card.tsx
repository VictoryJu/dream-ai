import { Button } from '@/components/ui/button';
import React from 'react';
import SummaryDialog from './summary-dialog';

const SummaryCard = () => {
  return (
    <div className="py-[30px] flex justify-center flex-col items-center gap-[20px] bg-gradient-to-r from-[rgba(175,213,255,0.3)] to-[rgba(209,210,255,0.3)] rounded-[15px]">
      <div className=" text-black-description text-[22px] leading-[33px] font-bold text-center">
        <div>동화책 만들 준비가 끝났어요!</div>
        <div>지금까지의 대화 내용을 요약해볼까요?</div>
      </div>
      <SummaryDialog>
        <Button className="h-[60px] py-[16px] px-[24px] text-[22px] leading-[23px] font-bold">
          <div>아이콘</div>
          요약하기
        </Button>
      </SummaryDialog>
    </div>
  );
};

export default SummaryCard;

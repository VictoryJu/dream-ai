import React from 'react';
import PageFlip from './page-flip';
import FinalDialog from './final-dialog';
import { Button } from '@/components/ui/button';
import FinalDialogContainer from './final-dialog-container';
import ArrowTailLeftPurple from '@/components/ui/icons/arrow-tail-left-purple';

const FinalPreview = () => {
  return (
    <div>
      <PageFlip />
      <div className="flex justify-center items-center gap-[20px]">
        <Button variant="purpleOutline" className="flex items-center gap-[10px] text-[22px] font-bold h-[60px] group">
          <ArrowTailLeftPurple
            direction="left"
            className="stroke-purple-main fill-purple-main group-hover:stroke-white group-hover:fill-white transition-colors duration-300"
          />
          내용 수정
        </Button>
        <FinalDialog
          title={
            <>
              <div>더 많은 동화책을 만들고 싶다면,</div>
              <div className="text-purple-main">개인회원으로 전환하세요!</div>
            </>
          }
          cancelText="나중에"
          actionText="개인회원 전환"
        >
          <Button variant="purpleOutline" className="text-[22px] font-bold h-[60px]">
            내가 만든 책 목록
          </Button>
        </FinalDialog>
        <FinalDialogContainer>
          <Button variant="purpleOutline" className="flex items-center gap-[10px] text-[22px] font-bold h-[60px] group">
            최종 제출
            <ArrowTailLeftPurple
              direction="right"
              className="stroke-purple-main fill-purple-main group-hover:stroke-white group-hover:fill-white transition-colors duration-300"
            />
          </Button>
        </FinalDialogContainer>
      </div>
    </div>
  );
};

export default FinalPreview;

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import FinalDialog from './final-dialog';

interface FinalDialogProps {
  children: React.ReactNode;
}

const FinalDialogContainer = ({ children }: FinalDialogProps) => {
  const [isSecondDialogOpen, setIsSecondDialogOpen] = useState(false);

  return (
    <>
      <FinalDialog
        title={
          <span>
            지금 제출하면 <span className="text-red-warning">수정이 불가</span>해요!
          </span>
        }
        description="인쇄되기 전, 마지막으로 확인해주세요."
        cancelText="내용 수정하기"
        actionText="최종 제출하기"
        onAction={() => setIsSecondDialogOpen(true)}
      >
        {children}
      </FinalDialog>

      <AlertDialog open={isSecondDialogOpen} onOpenChange={setIsSecondDialogOpen}>
        <AlertDialogContent className="w-[850px] py-[50px] px-[60px]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-[40px] text-black-description">
              <span className=" text-purple-main">제출이 완료</span>되었어요!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-[26px] font-semibold text-black-description">
              내가 만든 목록에서 나의 동화책들을 확인할 수 있어요.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex justify-center gap-[28px] w-full mt-[50px]">
            <AlertDialogCancel asChild>
              <Button className="flex-1 h-[100px] text-[28px] font-bold rounded-[15px] border-[2px] border-purple-main bg-transparent text-purple-main hover:bg-purple-main hover:text-white">
                홈으로
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button className="flex-1 h-[100px] text-[28px] font-bold rounded-[15px] border-[2px] border-purple-main bg-transparent text-purple-main hover:bg-purple-main hover:text-white">
                내가 만든 책 목록
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default FinalDialogContainer;

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

interface SummaryDialogProps {
  children?: React.ReactNode;
}

const SummaryDialog = ({ children }: SummaryDialogProps) => {
  return (
    <AlertDialog key="summary-dialog">
      <AlertDialogTrigger asChild={!!children}>{children}</AlertDialogTrigger>
      <AlertDialogContent className="w-[1050px] py-[50px] px-[60px]">
        <AlertDialogHeader className="mb-[50px]">
          <AlertDialogTitle className="text-center text-[40px] text-black-description">
            지금까지의 이야기를 요약했어요!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-[26px] font-semibold text-black-description">
            아래 내용으로 그림책을 만들고 싶다면, 계속 진행하기 버튼을 클릭해주세요.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="bg-purple-200 rounded-[30px] py-[30px] px-[35px] text-[24px] text-center">요약내용</div>
        <AlertDialogFooter className="flex justify-center gap-[28px] w-full mt-[50px]">
          <Button variant="purpleOutline" className="flex-1 h-[100px] text-[28px] font-bold rounded-[15px]">
            처음부터 다시하기
          </Button>
          <Button variant="purpleOutline" className="flex-1 h-[100px] text-[28px] font-bold rounded-[15px]">
            내용 추가하기
          </Button>
          <Button asChild variant="purpleOutline" className="flex-1 h-[100px] text-[28px] font-bold rounded-[15px]">
            <Link href="/book/preview">계속 진행하기</Link>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SummaryDialog;

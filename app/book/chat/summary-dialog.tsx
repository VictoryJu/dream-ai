import { useUpdateSummaryPage } from '@/app/services/queries/story';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/lib/stores/auth-store';
import { useRouter } from 'next/navigation';
import React from 'react';
import Markdown from 'react-markdown';
import BookLoading from '../loading';

interface SummaryDialogProps {
  children?: React.ReactNode;
  callback: () => void;
  description: string;
}

const SummaryDialog = ({ children, callback, description }: SummaryDialogProps) => {
  const storyId = useAuthStore((state) => state.storyId);
  const { mutateAsync: updateSummaryPage, isPending } = useUpdateSummaryPage(storyId.toString());

  const router = useRouter();
  const handleUpdateSummaryPage = async () => {
    await updateSummaryPage();
    router.push(`/book/preview/${storyId}`);
  };

  return isPending ? (
    <BookLoading className="fixed top-[120px] left-0 z-[100]" />
  ) : (
    <AlertDialog>
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
        <div className="bg-purple-200 rounded-[30px] py-[30px] px-[35px] text-[24px] text-center break-keep">
          <Markdown>{description.replace(/\\n/g, '\n')}</Markdown>
        </div>
        <AlertDialogFooter className="flex justify-center gap-[28px] w-full mt-[50px]">
          <AlertDialogCancel asChild>
            <Button
              onClick={callback}
              className="flex-1 h-[100px] text-[28px] font-bold rounded-[15px] border-[2px] border-purple-main bg-transparent text-purple-main hover:bg-purple-main hover:text-white"
            >
              처음부터 다시하기
            </Button>
          </AlertDialogCancel>
          <AlertDialogCancel asChild>
            <Button className="flex-1 h-[100px] text-[28px] font-bold rounded-[15px] border-[2px] border-purple-main bg-transparent text-purple-main hover:bg-purple-main hover:text-white">
              내용 추가하기
            </Button>
          </AlertDialogCancel>
          <Button
            onClick={handleUpdateSummaryPage}
            variant="purpleOutline"
            className="flex-1 h-[100px] text-[28px] font-bold rounded-[15px]"
          >
            계속 진행하기
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SummaryDialog;

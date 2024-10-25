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
import React from 'react';

interface FinalDialogProps {
  children: React.ReactNode;
  title: string | React.ReactNode;
  description?: string;
  cancelText: string;
  actionText: string;
  onAction?: () => void;
}

const FinalDialog = ({ children, title, description, cancelText, actionText, onAction }: FinalDialogProps) => {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild={!!children}>{children}</AlertDialogTrigger>
        <AlertDialogContent className="w-[850px] py-[50px] px-[60px]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-[40px] text-black-description">{title}</AlertDialogTitle>
            <AlertDialogDescription className="text-center text-[26px] font-semibold text-black-description">
              {description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex justify-center gap-[28px] w-full mt-[50px]">
            <AlertDialogCancel asChild>
              <Button className="flex-1 h-[100px] text-[28px] font-bold rounded-[15px] border-[2px] border-purple-main bg-transparent text-purple-main hover:bg-purple-main hover:text-white">
                {cancelText}
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button
                className="flex-1 h-[100px] text-[28px] font-bold rounded-[15px] border-[2px] border-purple-main bg-transparent text-purple-main hover:bg-purple-main hover:text-white"
                onClick={onAction}
              >
                {actionText}
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default FinalDialog;

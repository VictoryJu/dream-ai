import { cn } from '@/lib/utils';
import Image from 'next/image';

interface BookLoadingProps {
  className?: string;
}

const BookLoading = ({ className }: BookLoadingProps) => {
  return (
    <div className={cn('w-full h-calcScreen bg-purple-300 flex justify-center items-center', className)}>
      <div className="flex flex-col items-center">
        <Image src="/images/book/book-spinner.gif" alt="book-loading" width={222} height={222} />
        <div className="mt-[50px] text-center  text-black-description ">
          <div className="text-[40px] font-bold tracking-[-2%]">방금 만든 이야기로 동화책을 만들고 있어요!</div>
          <div className="text-[26px] font-semibold tracking-[-2%]">화면을 끄지 말고 기다려주세요.</div>
        </div>
      </div>
    </div>
  );
};

export default BookLoading;

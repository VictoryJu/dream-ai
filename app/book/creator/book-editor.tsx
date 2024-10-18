import { Button } from '@/components/ui/button';
import Divider from '@/components/ui/custom/divider';

const BookEditor = () => {
  return (
    <>
      <div className="flex">
        <Button className="ml-auto bg-gray-100 text-gray-300 text-{22}">최종 제출</Button>
      </div>
      <div className="flex mt-[18px]">
        <div className="rounded-lg bg-white shadow-[0px 0.4px 8px 0px_rgba(0, 0, 0, 0.05)] w-[100%]">
          ㅇㅇㅇ
        </div>
        <Divider direction="vertical" />
        <div className="rounded-lg bg-white shadow-[0px 0.4px 8px 0px_rgba(0, 0, 0, 0.05)] w-[100%]">
          ffff
        </div>
      </div>
    </>
  );
};

export default BookEditor;

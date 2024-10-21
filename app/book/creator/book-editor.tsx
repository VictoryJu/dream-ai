import { Button } from '@/components/ui/button';
import EditorIndex from './editor-index';

const BookEditor = () => {
  return (
    <>
      <div className="flex">
        <Button className="ml-auto bg-gray-100 text-gray-300 text-{22}">최종 제출</Button>
      </div>
      <div className="flex mt-[18px]">
        {/* 조건부 랜더링으로 해당 props로 selectedIndex를 통해서
          First,Page,Last를 보여준다.
          ex: index === 1 && First , index === 2 && Page , index === 2 && Last
        */}
        {/* <EditorIndex.First /> */}
        <EditorIndex.Last />

        
      </div>
    </>
  );
};

export default BookEditor;

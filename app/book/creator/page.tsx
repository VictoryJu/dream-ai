'use client';
import { useState, useCallback, useMemo } from 'react';
import BookEditor from './book-editor';
import PageNavigator from './page-navigator';
import FinalPreview from './(final)/final-preview';

const Page = () => {
  // 선택된 책의 인덱스를 관리하는 상태
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleSelect = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const selectedBook = useMemo(() => {
    return selectedIndex;
  }, [selectedIndex]);

  return (
    <div className="flex h-screen gap-[82px]">
      <div className="flex-3 bg-purple-200">
        {/* PageNavigator에 selectedIndex와 handleSelect 전달 */}
        <PageNavigator selectedIndex={selectedBook} onSelect={handleSelect} />
      </div>
      <div className="flex-7 bg-purple-300 w-[100%] pt-[52px] pb-[130px] pr-[81px]">
        {/* 선택된 인덱스를 BookEditor로 전달 */}
        <BookEditor />
        <FinalPreview />
      </div>
    </div>
  );
};

export default Page;

'use client';
import { Book } from '@/app/services/apis/types/story';
import { useStoryPreview } from '@/app/services/queries/story';
import { useState } from 'react';
import BookEditor from './(editor)/book-editor';
import PageNavigator from './(editor)/page-navigator';

interface BookCreatorProps {
  storyId: string;
}

const BookCreator = ({ storyId }: BookCreatorProps) => {
  // 선택된 책의 인덱스를 관리하는 상태
  const { data: storyPreview } = useStoryPreview(storyId);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedStory, setSelectedStory] = useState<Book>(storyPreview[0]);
  console.log(storyPreview);

  const handleStorySelect = (index: number) => {
    setSelectedIndex(index);
    setSelectedStory(storyPreview[index]);
  };

  const [step, setStep] = useState<'editor' | 'final'>('editor');
  return (
    <div className="flex h-screen gap-[82px]">
      <div className="flex-3 bg-purple-200">
        {/* PageNavigator에 selectedIndex와 handleSelect 전달 */}
        <PageNavigator books={storyPreview} selectedIndex={selectedIndex} onSelect={handleStorySelect} />
      </div>
      <div className="flex-7 bg-purple-300 w-[100%] pt-[52px] pb-[130px] pr-[81px]">
        {/* 선택된 인덱스를 BookEditor로 전달 */}
        <BookEditor story={selectedStory} bookLength={storyPreview.length} />
      </div>
    </div>
  );
};

export default BookCreator;

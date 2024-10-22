'use client';

import { useStoryPreview } from '@/app/services/queries/story';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import BookCard from './book-card';

interface BookPreviewProps {
  storyId: string;
}

const BookPreview = ({ storyId }: BookPreviewProps) => {
  const { data: books } = useStoryPreview(storyId);
  console.log(books);

  const bookLength = books?.length ?? 0;

  const getBadgeText = (idx: number) => {
    switch (idx) {
      case 0:
        return '앞표지';
      case bookLength - 1:
        return '뒷표지';
      default:
        return `Page${idx}`;
    }
  };

  return (
    <>
      <div className="flex flex-col gap-[30px]">
        {books.map((book, idx) => {
          const { sceneTitle, sceneSummary, imageUrl, pageId } = book;
          return (
            <div className="flex items-center gap-[20px] relative " key={pageId}>
              <Badge className="w-[120px] flex justify-center items-center h-[50px] rounded-[10px] text-[22px] font-bold">
                {getBadgeText(idx)}
              </Badge>
              <BookCard className="animate-fadeIn">
                <BookCard.Image imageUrl={imageUrl ?? '/images/main/book/book1.webp'} width={386} height={386} />
                <BookCard.Content>
                  <BookCard.Title title={sceneTitle} />
                  <BookCard.Description description={sceneSummary} />
                </BookCard.Content>
              </BookCard>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end gap-[28px] mt-[30px]">
        <Button
          className="h-[100px] w-[290px] rounded-[15px] tablet:w-[200px] tablet:h-[80px] tablet:text-[20px] text-[28px] font-bold"
          variant="purpleOutline"
        >
          Flow 재생성하기
        </Button>
        <Button
          asChild
          className="h-[100px] w-[290px] rounded-[15px] tablet:w-[200px] tablet:h-[80px] tablet:text-[20px] text-[28px] font-bold"
          variant="purpleOutline"
        >
          <Link href="/book/creator">동화책 만들러가기</Link>
        </Button>
      </div>
    </>
  );
};

export default BookPreview;

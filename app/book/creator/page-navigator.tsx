import { Badge } from '@/components/ui/badge';
import BookCard from '../preview/book-card';
import { cn } from '@/lib/utils';

type PageNavigatorProps = {
  selectedIndex: number;
  onSelect: (index: number) => void;
};

const PageNavigator = ({ selectedIndex, onSelect }: PageNavigatorProps) => {
  /**
   * status: 'ING','COMPLETE', 'SAVE' , 'NONE'
   * 추후에 서버를 통해 받는다
   */
  const mockBook = [
    {
      title: 'Book Title',
      description:
        '대니얼은 자신의 고향 마을에서 친구들과 작별 인사를 나눕니다. “여러분, 나 마왕을 무찌르러 간다니까!" 친구들이 응원하며 미소짓고, 대니얼은 새로운 모험에 대한 기대감으로 가득 차 있습니다.대니얼은 자신의 고향 마을에서 친구들과 작별 인사를 나눕니다. “여러분, 나 마왕을 무찌르러 간다니까!" 친구들이 응원하며 미소짓고, 대니얼은 새로운 모험에 대한 기대감으로 가득 차 있습니다.',
      imageUrl: '/images/main/book/book1.webp',
      status: 'ING',
    },
    {
      title: 'Book Title',
      description: 'Book Description',
      imageUrl: '/images/main/book/book1.webp',
      status: 'COMPLETE',
    },
    {
      title: 'Book Title',
      description: 'Book Description',
      imageUrl: '/images/main/book/book1.webp',
      status: 'SAVE',
    },
    {
      title: 'Book Title',
      description: 'Book Description',
      imageUrl: '/images/main/book/book1.webp',
      status: 'NONE',
    },
    {
      title: 'Book Title',
      description: 'Book Description',
      imageUrl: '/images/main/book/book1.webp',
      status: 'COMPLETE',
    },
    {
      title: 'Book Title',
      description: 'Book Description',
      imageUrl: '/images/main/book/book1.webp',
      status: 'COMPLETE',
    },
  ];

  return (
    <div className="py-6 bg-purple-200 h-calcScreen overflow-y-auto w-[464px]">
      <div className="flex flex-col gap-5 px-7">
        {mockBook.map((book, idx) => {
          const { title, description, imageUrl, status } = book;
          const isActive = idx === selectedIndex;
          // 마지막 인덱스를 계산해 내부에서 조건 처리
          const indexText = idx === 0 ? '앞표지' : idx === mockBook.length - 1 ? '뒷표지' : `Page ${idx}`;
          const statusText =
            status === 'ING' ? '작성중' : status === 'COMPLETE' ? '저장 완료' : status === 'SAVE' ? '임시저장' : '';
          // 조건부 스타일링
          const statusClass = cn({
            'text-red-warning': status === 'ING',
            'text-orange-main': status === 'SAVE',
          });

          return (
            <BookCard
              key={`${title}-${idx}`}
              className={cn(
                'relative p-3 cursor-pointer rounded-sm transition-colors duration-300 border-[2px]', // transition-colors로 border-color에만 애니메이션 적용
                { 'border-purple-main': isActive, 'border-white': !isActive }, // 선택 여부에 따라 border 색상 변경
              )}
              onClick={() => onSelect(idx)}
            >
              <Badge className="absolute top-3 right-3 text-sm font-bold">{indexText}</Badge>
              {/* {statusText && (
                <Badge className={cn('absolute bottom-3 right-3 text-sm font-bold', statusClass)}>{statusText}</Badge>
              )} */}
              <div className={cn('absolute bottom-3 right-3 text-sm font-bold text-purple-main', statusClass)}>{statusText}</div>

              <BookCard.Image imageUrl={imageUrl} width={157} height={157} showOverlayText={true} />
              <BookCard.Content>
                <BookCard.Title title={title} className="text-[12px]" />
                <BookCard.Description description={description} className="text-[9px]" />
              </BookCard.Content>
            </BookCard>
          );
        })}
      </div>
    </div>
  );
};

export default PageNavigator;

import { Book } from '@/app/services/apis/types/story';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import BookCard from '../../../preview/[storyId]/book-card';

type PageNavigatorProps = {
  books: Book[];
  selectedIndex: number;
  onSelect: (index: number) => void;
};

const PageNavigator = ({ books, selectedIndex, onSelect }: PageNavigatorProps) => {
  const getIndexText = (idx: number) => {
    switch (idx) {
      case 0:
        return '앞표지';
      case books.length:
        return '뒷표지';
      default:
        return `Page ${idx}`;
    }
  };
  const getStatusText = (status: Book['status']) => {
    switch (status) {
      case 'ING':
        return '작성중';
      case 'COMPLETE':
        return '저장 완료';
      case 'SAVE':
        return '임시저장';
    }
  };
  return (
    <div className="py-6 bg-purple-200 h-calcScreen overflow-y-auto w-[464px]">
      <div className="flex flex-col gap-5 px-7">
        {books.map((book, idx) => {
          const { sceneTitle, sceneSummary, image_url, status, pageNum } = book;
          const pageIndex = pageNum - 1;
          const isActive = pageIndex === selectedIndex;
          const indexText = getIndexText(pageIndex);
          const statusText = getStatusText(status);
          // 조건부 스타일링
          const statusClass = cn({
            'text-red-warning': status === 'ING',
            'text-orange-main': status === 'SAVE',
          });

          return (
            <BookCard
              key={`${sceneTitle}-${idx}`}
              className={cn(
                'relative p-3 cursor-pointer rounded-sm transition-colors duration-300 border-[2px]', // transition-colors로 border-color에만 애니메이션 적용
                { 'border-purple-main': isActive, 'border-white': !isActive }, // 선택 여부에 따라 border 색상 변경
              )}
              onClick={() => onSelect(pageIndex)}
            >
              <Badge className="absolute top-3 right-3 text-sm font-bold">{indexText}</Badge>
              <div className={cn('absolute bottom-3 right-3 text-sm font-bold text-purple-main', statusClass)}>
                {statusText}
              </div>

              <BookCard.Image imageUrl={image_url} width={157} height={157} showOverlayText={true} />
              <BookCard.Content>
                <BookCard.Title title={sceneTitle} className="text-[12px]" />
                <BookCard.Description description={sceneSummary} className="text-[9px]" />
              </BookCard.Content>
            </BookCard>
          );
        })}
      </div>
    </div>
  );
};

export default PageNavigator;

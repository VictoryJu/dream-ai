import { Badge } from '@/components/ui/badge';
import BookCard from '../preview/book-card';

const PageNavigator = () => {
  const mockBook = [
    {
      title: 'Book Title',
      description: 'Book Description',
      imageUrl: '/images/main/book/book1.webp',
    },
    {
      title: 'Book Title',
      description: 'Book Description',
      imageUrl: '/images/main/book/book1.webp',
    },
    {
      title: 'Book Title',
      description: 'Book Description',
      imageUrl: '/images/main/book/book1.webp',
    },
    {
      title: 'Book Title',
      description: 'Book Description',
      imageUrl: '/images/main/book/book1.webp',
    },
    {
      title: 'Book Title',
      description: 'Book Description',
      imageUrl: '/images/main/book/book1.webp',
    },
    {
      title: 'Book Title',
      description: 'Book Description',
      imageUrl: '/images/main/book/book1.webp',
    },
  ];
  return (
    <div className="py-6 bg-purple-200 h-calcScreen overflow-y-auto w-[464px]">
      <div className="flex flex-col gap-5 px-7">
        {mockBook.map((book, idx) => {
          const { title, description, imageUrl } = book;
          return (
            <BookCard key={`${title}-${idx}`} className="relative p-3 cursor-pointer rounded-sm">
              <Badge className="absolute top-3 right-3 text-sm font-bold">Page 1</Badge>
              <div className="absolute bottom-3 right-3 text-sm font-bold text-red-warning">작성중</div>
              <BookCard.Image imageUrl={imageUrl} width={157} height={157} />
              <BookCard.Content>
                <BookCard.Title title={title} />
                <BookCard.Description description={description} />
              </BookCard.Content>
            </BookCard>
          );
        })}
      </div>
    </div>
  );
};

export default PageNavigator;

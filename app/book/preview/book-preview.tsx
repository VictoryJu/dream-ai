import React from 'react';
import BookCard from './book-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const BookPreview = () => {
  const mockBook = [
    {
      title: 'The Great Gatsby',
      description: 'A classic American novel',
      imageUrl: '/images/main/book/book1.webp',
    },
    {
      title: 'The Great Gatsby',
      description: 'A classic American novel',
      imageUrl: '/images/main/book/book1.webp',
    },
    {
      title: 'The Great Gatsby',
      description: 'A classic American novel',
      imageUrl: '/images/main/book/book1.webp',
    },
  ];

  return (
    <div>
      <div className="flex flex-col gap-[30px]">
        {mockBook.map((book, idx) => {
          const { title, description, imageUrl } = book;
          return (
            <div className="flex items-center gap-[20px] relative " key={title}>
              <Badge className=" rounded-[10px]  py-[13.5px] px-[36px]  text-[22px] font-bold  absolute top-1/2 -translate-y-1/2 -left-[150px]">
                {idx === 0 ? '앞표지' : `Page${idx}`}
              </Badge>
              <BookCard title={title} description={description} imageUrl={imageUrl} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end gap-[28px] mt-[30px]">
        <Button className="h-[100px] w-[290px] rounded-[15px] text-[28px] font-bold" variant="purpleOutline">
          Flow 재생성하기
        </Button>
        <Button className="h-[100px] w-[290px] rounded-[15px] text-[28px] font-bold" variant="purpleOutline">
          동화책 만들러가기
        </Button>
      </div>
    </div>
  );
};

export default BookPreview;

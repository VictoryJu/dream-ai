import { Suspense } from 'react';
import BookDescription from './book-description';
import dynamic from 'next/dynamic';

const BookCarousel = dynamic(() => import('./book-carousel'), {
  ssr: false,
});

const Book = () => {
  return (
    <section className="px-[220px] lg:px-[110px] flex justify-between items-center w-full h-[960px] bg-gradient-to-r from-purple-background via-purple-via to-purple-background ">
      <BookDescription />
      <Suspense fallback={null}>
        <BookCarousel />
      </Suspense>
    </section>
  );
};

export default Book;

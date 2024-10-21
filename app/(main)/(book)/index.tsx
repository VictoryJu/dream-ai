import { Suspense } from 'react';
import BookDescription from './book-description';
import dynamic from 'next/dynamic';

const BookCarousel = dynamic(() => import('./book-carousel'), {
  ssr: false,
});

const Book = () => {
  return (
    <section className=" py-[110px]  bg-gradient-to-r from-purple-background via-purple-via to-purple-background ">
      <div className="max-w-desktop tablet:max-w-tablet min-h-[620px] tablet:min-h-[400px] mx-auto  flex justify-between items-center tablet:gap-5 tablet:px-tablet ">
        <BookDescription />
        <Suspense fallback={null}>
          <BookCarousel />
        </Suspense>
      </div>
    </section>
  );
};

export default Book;

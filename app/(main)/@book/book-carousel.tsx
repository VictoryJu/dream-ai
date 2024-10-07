'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ArrowIcon from '../../../components/ui/icons/arrow-icon';

const BookCarousel = () => {
  const books = [
    { title: '책 제목 1', imageUrl: '/images/main/book/book1.webp' },
    { title: '책 제목 2', imageUrl: '/images/main/book/book2.webp' },
    { title: '책 제목 3', imageUrl: '/images/main/book/book1.webp' },
    { title: '책 제목 4', imageUrl: '/images/main/book/book2.webp' },
    { title: '책 제목 5', imageUrl: '/images/main/book/book1.webp' },
  ];
  const bookLength = books.length;
  return (
    <div className="relative w-[775px] h-[600px] animate-fadeIn">
      <Swiper
        initialSlide={bookLength / 2}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 190,
          depth: 350,
          modifier: 1,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="w-full h-full"
      >
        {books.map((book, index) => (
          <SwiperSlide
            className="rounded-lg  bg-cover bg-center bg-no-repeat relative w-full h-full "
            key={book.title}
            style={{
              backgroundImage: `url(${book.imageUrl}) `,
            }}
          >
            <div className="absolute top-0 left-3 swiper-divider w-[13px] h-full" />
            <div className="text-center p-[25px]">
              <div className="text-white text-3xl font-bold mb-[10px]">{book.title}</div>
              <div className="text-white text-[15px] font-medium">글 그림 김범준</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="cursor-pointer swiper-button-next-custom absolute -right-[100px] top-1/2 transform -translate-y-1/2">
        <ArrowIcon width={11} height={18} direction="left" />
      </div>
      <div className="cursor-pointer swiper-button-prev-custom absolute -left-[100px] top-1/2 transform -translate-y-1/2">
        <ArrowIcon width={11} height={18} direction="right" />
      </div>
      <div className="swiper-pagination ">
        {Array.from({ length: bookLength }).map((_, index) => (
          <div className="swiper-pagination-bullet" key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default BookCarousel;

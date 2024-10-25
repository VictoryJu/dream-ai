import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';

const FinalPageCarousel: React.FC = () => {
  return (
    <Carousel className="w-[1200px] mt-[52px] drop-shadow-lg">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className=" w-[1200px] h-[733px] bg-white  flex rounded-[10px]">
              <div className="flex-1 relative flex justify-center items-center">
                <Image
                  src="/images/main/book/book1.webp"
                  alt="page"
                  width={450}
                  height={450}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="w-[1px] h-full bg-gray-border" />
              <div className="flex-1 flex justify-center items-center">
                <div className="text-[20px] font-medium max-w-[550px] break-keep">
                  대니얼은 자신의 고향 마을에서 친구들과 작별 인사를 나눕니다. “여러분, 나 마왕을 무찌르러 간다니까!”
                  친구들이 응원하며 미소짓고, 대니얼은 새로운 모험에 대한 기대감으로 가득 차 있습니다.
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default FinalPageCarousel;

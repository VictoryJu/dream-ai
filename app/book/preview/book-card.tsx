import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, {ReactNode } from 'react';

interface BookCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const BookCard = ({ children, className, onClick }: BookCardProps) => {
  return (
    <div
      className={cn(
        'w-full p-[30px] bg-white rounded-xl flex items-center gap-8 shadow-[0px_1px_20px_0px_#0000000D]',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

interface BookCardTitleProps {
  title: string;
  className?: string;
}

const Title = ({ title, className }: BookCardTitleProps) => {
  return <h1 className={cn('text-[30px] text-black-description font-bold mb-[20px]', className)}>{title}</h1>;
};

interface BookCardDescriptionProps {
  description: string;
  className?: string;
}

const Description = ({ description, className }: BookCardDescriptionProps) => {
  return (
    <p
      className={cn(
        'text-[22px] text-black-description font-semibold',
        'line-clamp-5', // 최대 5줄로 제한
        'overflow-hidden', // 넘치는 내용 숨김
        'display-webkit-box', // 웹킷 기반 브라우저에서 다중 줄 지원
        'webkit-box-orient-vertical', // 수직 박스 정렬
        className,
      )}
      style={{
        display: '-webkit-box',
        WebkitLineClamp: 5,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis', // 말줄임표 적용
      }}
    >
      {description}
    </p>
  );
};


interface BookCardContentProps {
  children: ReactNode;
  className?: string;
}

const Content = ({ children, className }: BookCardContentProps) => {
  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
};

interface BookCardImageProps {
  imageUrl: string;
  width: number;
  height: number;
  className?: string;
  showOverlayText?: boolean;
}

const BookImage = ({ imageUrl, width, height, className, showOverlayText }: BookCardImageProps) => {
  const ImageStyle = {
    width,
    height,
    minWidth: '157px', // 최소 width 설정
    minHeight: '157px', // 최소 height 설정
  };
  return (
    <div className={cn('relative w-full h-full', className)} style={ImageStyle}>
      <Image src={imageUrl} alt="책 이미지" fill className="object-cover rounded-[4px] min-[157px]" />
      {showOverlayText && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md text-white text-xs py-1 px-4 w-full text-center"
          style={{
            background: 'rgba(0, 0, 0, 0.40)',
            width: 'max-content'
          }}
        >
          아직 작성중이에요!
        </div>
      )}
    </div>
  );
};

BookCard.Title = Title;
BookCard.Description = Description;
BookCard.Content = Content;
BookCard.Image = BookImage;

export default BookCard;

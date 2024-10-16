import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { ReactNode } from 'react';

interface BookCardProps {
  children: ReactNode;
  className?: string;
}

const BookCard = ({ children, className }: BookCardProps) => {
  return (
    <div
      className={cn(
        'w-full p-[30px] bg-white rounded-xl flex items-center gap-8 shadow-[0px_1px_20px_0px_#0000000D]',
        className,
      )}
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
  return <p className={cn('text-[22px] text-black-description font-semibold', className)}>{description}</p>;
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
}

const BookImage = ({ imageUrl, width, height, className }: BookCardImageProps) => {
  const ImageStyle = {
    width,
    height,
  };
  return (
    <div className={cn('relative w-full h-full', className)} style={ImageStyle}>
      <Image src={imageUrl} alt="책 이미지" fill className="object-cover rounded-[4px]" />
    </div>
  );
};

BookCard.Title = Title;
BookCard.Description = Description;
BookCard.Content = Content;
BookCard.Image = BookImage;

export default BookCard;

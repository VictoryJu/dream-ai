import Image from 'next/image';
import React from 'react';

interface Book {
  title: string;
  description: string;
  imageUrl: string;
}

const BookCard = ({ title, description, imageUrl }: Book) => {
  return (
    <div className="w-full p-[30px] rounded-[10px] flex items-center gap-[32px] shadow-[0px_1px_20px_0px_#0000000D]">
      <div className="relative w-[386px] h-[386px]">
        <Image src={imageUrl} alt={title} fill className="object-cover rounded-[4px]" />
      </div>
      <div>
        <h1 className="text-[30px] text-black-description font-bold mb-[20px]">{title}</h1>
        <p className="text-[22px] text-black-description font-semibold">{description}</p>
      </div>
    </div>
  );
};

export default BookCard;

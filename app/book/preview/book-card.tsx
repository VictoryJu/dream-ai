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

interface SmallBook extends Book{
  showTextOverlay?: boolean; 
}
export const Small = ({ title, description, imageUrl,showTextOverlay }: SmallBook) => {
  return (
    <div className="w-full p-[12px] rounded-[10px] flex items-center gap-[13px] shadow-[0px 0.4px 8px 0px_rgba(0, 0, 0, 0.05)]">
      <div className="relative w-[156px] h-[156px]">
        <Image src={imageUrl} alt={title} fill className="object-cover rounded-[4px]" />
        {showTextOverlay && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-[18px] py-[4px] bg-black-40">
            아직 작성중이에요!
          </div>
        )}
      </div>
      <div>
        <h1 className="text-[12px] text-black-description font-bold mb-[20px]">{title}</h1>
        <p className="text-[9px] text-black-description font-semibold">{description}</p>
      </div>
    </div>
  );
};

export default BookCard;

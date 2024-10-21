import Image from 'next/image';
import React from 'react';

interface DocumentCardProps {
  index: number;
  description: string | React.ReactNode;
  imageUrl: string;
}

const DocumentCard = ({ index, description, imageUrl }: DocumentCardProps) => {
  return (
    <div className="cursor-pointer relative flex-1 rounded-[20px] h-[420px] tablet:h-[350px] px-[34px] tablet:px-[20px] bg-purple-200 hover:bg-purple-main flex flex-col items-center justify-center gap-[49px] group">
      <div className="absolute -top-[6%] left-[34px] font-bold text-[150px] tablet:text-[100px] text-[#E7E9FE]  group-hover:text-[#9394F8]">
        {index}
      </div>
      <div className="relative h-[120px] w-[120px] tablet:h-[90px] tablet:w-[90px]">
        <Image src={imageUrl} alt="document-image" fill style={{ objectFit: 'contain' }} sizes="100vw" />
      </div>
      <div className="text-desktopDescription tablet:text-tabletDescription text-center font-bold text-purple-main group-hover:text-white break-keep">
        {description}
      </div>
    </div>
  );
};

export default DocumentCard;

import Image from 'next/image';
import React from 'react';

interface DocumentCardProps {
  index: number;
  description: string | React.ReactNode;
  imageUrl: string;
}

const DocumentCard = ({ index, description, imageUrl }: DocumentCardProps) => {
  return (
    <div className="cursor-pointer relative flex-1 rounded-[20px] h-[420px] px-[34px] bg-purple-200 hover:bg-purple-main  flex flex-col items-center justify-center gap-[49px] group ">
      <div className="absolute -top-[6%] left-[34px] font-bold text-[150px] text-[#E7E9FE] group-hover:text-[#9394F8]">
        {index}
      </div>
      <Image src={imageUrl} alt="document-image" width={140} height={90} />
      <div className="text-[34px] text-center font-bold text-purple-main group-hover:text-white ">{description}</div>
    </div>
  );
};

export default DocumentCard;

import Image from 'next/image';

interface OtherBookCardProps {
  imageUrl: string;
  title: string;
  author: string;
}
const OtherBookCard = ({ imageUrl, title, author }: OtherBookCardProps) => {
  return (
    <div className="bg-white rounded-[25px] p-4 animate-scaleUp cursor-pointer">
      <div className="w-full pb-[128.47%] rounded-[15px] overflow-hidden relative">
        <Image
          className="rounded-[15px] hover:scale-[1.1] transition-transform duration-300"
          src={imageUrl}
          alt="book-thumbnail"
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col items-center mt-[25px]">
        <div className="text-[25px] font-bold text-gray-black">{title}</div>
        <div className="text-[20px] text-gray-500 mt-[10px]">글 그림 {author}</div>
      </div>
    </div>
  );
};

export default OtherBookCard;

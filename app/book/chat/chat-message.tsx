import Image from 'next/image';

interface ChatMessageProps {
  message: string;
  isSender: boolean;
}

const ChatMessage = ({ message, isSender }: ChatMessageProps) => {
  return (
    <div
      className={`w-fit  flex items-center gap-[19px] rounded-[15px] p-[10px] ${
        isSender ? 'bg-purple-200' : 'bg-white self-end'
      }`}
    >
      {isSender && (
        <div className="w-[71px] h-[71px] rounded-[10px] bg-gradient-to-tl from-[#A7A3FF] to-[#AFD5FF] flex-shrink-0">
          <Image src="/images/avatar/ai-avatar.png" alt="sender" width={67.5} height={67.5} />
        </div>
      )}
      <div
        className={`${isSender ? '' : 'py-[20px] px-[40px] text-right'} w-full text-[22px] font-semibold text-black-description break-words `}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;

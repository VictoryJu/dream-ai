import Image from 'next/image';

interface ChatMessageProps {
  message: string;
  isSender: boolean;
}

const ChatMessage = ({ message, isSender }: ChatMessageProps) => {
  return (
    <div
      className={`w-fit min-w-[300px] max-w-[640px] flex items-center gap-[19px] rounded-[15px] p-[10px] ${
        isSender ? 'bg-purple-200' : 'bg-white self-end'
      }`}
    >
      {isSender && (
        <div className="w-[71px] h-[71px] rounded-[10px] bg-gradient-to-tl from-[#A7A3FF] to-[#AFD5FF] flex-shrink-0">
          <Image src="/images/book/chat/sender.svg" alt="sender" width={71} height={71} />
        </div>
      )}
      <div
        className={`${isSender ? '' : 'py-[20px] px-[40px] text-right'} w-full max-w-[450px] text-[22px] font-semibold text-black-description break-words `}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;

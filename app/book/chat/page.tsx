'use client';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';
import ChatMessage from './chat-message';
import SummaryCard from './summary-card';
import useSocket from '@/lib/hooks/useSocket';
import ArrowTailIcon from '@/components/ui/icons/arrow-tail-icon';
import storyApi from '@/app/services/apis/story';
import { useAuthStore } from '@/lib/stores/auth-store';
import { shiftEnter } from '@/lib/utils/keyboard';
import { useDebounce } from '@/lib/hooks/useDebounce';
import { useResetStory } from '@/app/services/queries/story';

const Chat = () => {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { sendMessage, messages, isPending, resetMessages } = useSocket();
  const { globalStoryId } = useAuthStore((state) => state);
  const { mutate: resetStory } = useResetStory();

  const debouncedSendMessage = useDebounce((message: string) => {
    if (message.trim()) {
      sendMessage(message.trim());
      setText('');
    }
  }, 100);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      const lineHeight = 29; // leading-[29px]와 일치
      const maxHeight = lineHeight * 2; // 최대 2줄
      textareaRef.current.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [text]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    debouncedSendMessage(text);
  };

  const handleResetMessages = async () => {
    resetMessages();
    resetStory(globalStoryId);
  };

  const handleShiftEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    shiftEnter(e, handleSubmit);
  };

  const isEnd = messages.some((message) => message.isEnd);

  return (
    <div className={`pb-[50px] min-h-[calc(100dvh-120px)] flex flex-col justify-end`}>
      <div className="flex flex-col gap-[20px] py-[30px]">
        {messages.map((messageInfo, idx) => (
          <ChatMessage
            key={`${messageInfo.message}-idx`}
            message={messageInfo.message}
            isSender={messageInfo.author === 'ai'}
          />
        ))}
        {isPending && <div className="w-full text-xl">AI가 메시지를 입력중입니다...</div>}
        {isEnd && <SummaryCard callback={handleResetMessages} />}
      </div>
      <div className=" relative border py-[30px] border-gray-border rounded-[10px]">
        <Textarea
          ref={textareaRef}
          className="w-full px-[25px] pr-[75px] resize-none text-[22px] overflow-y-hidden leading-[29px] border-none outline-none"
          placeholder="메시지를 입력하세요"
          rows={1}
          value={text}
          onChange={handleChange}
          onKeyDown={handleShiftEnter}
        />
        <Button
          onClick={handleSubmit}
          className="absolute right-[25px] top-1/2 w-[50px] h-[50px] -translate-y-1/2 px-4"
        >
          <ArrowTailIcon width={18} height={18} />
        </Button>
      </div>
    </div>
  );
};

export default Chat;

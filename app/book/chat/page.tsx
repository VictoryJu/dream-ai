'use client';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import React, { useEffect, useRef, useState } from 'react';
import ChatMessage from './chat-message';
import SummaryCard from './summary-card';

const Chat = () => {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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

  return (
    <div className={`pb-[50px] min-h-[calc(100dvh-120px)] flex flex-col justify-end`}>
      <div className="flex flex-col gap-[20px] py-[30px]">
        <ChatMessage message="안녕하세요dasdddddddddddddddddddddddddddddddddddddddd" isSender />
        <ChatMessage message="안녕하세요ddsd" isSender={false} />
        <SummaryCard />
      </div>
      <div className=" relative border py-[30px] border-gray-border rounded-[10px]">
        <Textarea
          ref={textareaRef}
          className="w-full px-[25px] pr-[75px] resize-none text-[22px] overflow-y-hidden leading-[29px] border-none outline-none"
          placeholder="메시지를 입력하세요"
          rows={1}
          value={text}
          onChange={handleChange}
        />
        <Button className="absolute right-[25px] top-1/2 w-[50px] h-[50px] -translate-y-1/2 px-4">전송</Button>
      </div>
    </div>
  );
};

export default Chat;

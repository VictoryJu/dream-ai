'use client';
import { useResetStory } from '@/app/services/queries/story';
import { Button } from '@/components/ui/button';
import ArrowTailIcon from '@/components/ui/icons/arrow-tail-icon';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useDebounce } from '@/hooks/useDebounce';
import useSocket from '@/hooks/useSocket';
import { getAuthState } from '@/lib/stores/auth-store';
import { shiftEnter } from '@/lib/utils/keyboard';
import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';
import ChatMessage from './chat-message';
import LoadingMessage from './loading-message';
import SummaryCard from './summary-card';

const Chat = () => {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { sendMessage, messages, isPending, resetMessages } = useSocket();
  const { storyId: globalStoryId } = getAuthState();

  const { mutate: resetStory } = useResetStory();
  const { toast } = useToast();

  const debouncedSendMessage = useDebounce((message: string) => {
    if (message.trim()) {
      sendMessage(message);
      setText('');
    }
  }, 100);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const adjustHeight = () => {
    if (textareaRef.current) {
      const scrollHeight = textareaRef.current.scrollHeight;
      const lineHeight = 29; // leading-[29px]와 일치
      const maxHeight = lineHeight * 2; // 최대 2줄
      textareaRef.current.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (isPending) {
      toast({
        description: 'AI가 아직 메시지를 입력중입니다.',
      });
      return;
    }
    debouncedSendMessage(text);
  };

  const handleResetMessages = async () => {
    resetMessages();
    resetStory(globalStoryId);
  };

  const handleShiftEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    shiftEnter(e, handleSubmit);
  };

  const summaryDescription = messages.find((message) => message.isEnd)?.message;
  const shouldShowSummaryCard = !!summaryDescription;

  useEffect(() => {
    adjustHeight();
  }, [text]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={`pb-[50px] min-h-[calc(100dvh-120px)] flex flex-col justify-end`}>
      <div className="flex overflow-auto [&::-webkit-scrollbar]:hidden flex-col gap-[20px] py-[30px] max-h-[690px]">
        {messages.map(
          (messageInfo, idx) =>
            !messageInfo.isEnd && (
              <ChatMessage
                key={`${messageInfo.message}-${idx}`}
                message={messageInfo.message}
                isSender={messageInfo.author === 'ai'}
              />
            ),
        )}
        {isPending && <LoadingMessage />}
        {shouldShowSummaryCard && <SummaryCard description={summaryDescription} callback={handleResetMessages} />}
        <div ref={messagesEndRef} />
      </div>
      <div className=" relative border py-[30px] border-gray-border rounded-[10px]">
        <Textarea
          ref={textareaRef}
          className="w-full px-[25px] pr-[75px] resize-none text-[22px] overflow-y-hidden leading-[29px] border-none outline-none"
          placeholder="메시지를 입력하세요"
          rows={1}
          value={text}
          autoFocus
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

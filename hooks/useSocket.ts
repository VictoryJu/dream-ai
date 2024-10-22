import { useAuthStore } from '@/lib/stores/auth-store';
import { useEffect, useRef, useState } from 'react';

type messageType = {
  author: 'ai' | 'user';
  message: string;
  isEnd: boolean;
};

const initialMessage: messageType = { author: 'ai', message: '무슨 내용의 책을 작성하고 싶나요?', isEnd: false };

const useSocket = () => {
  const socket = useRef<WebSocket | null>(null);
  const [messages, setMessages] = useState<messageType[]>([initialMessage]);
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(true);
  const accessToken = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    if (!socket.current) {
      socket.current = new WebSocket(process.env.NEXT_PUBLIC_WS_URL as string);
      const ws = socket.current;

      ws.onopen = () => {
        console.log('connected');
        receiveMessage();
      };

      ws.onclose = () => {
        console.log('disconnected');
      };

      ws.onerror = (error) => {
        console.log('error', error);
        setIsError(true);
      };
    }
    return () => {
      if (socket.current?.readyState === WebSocket.OPEN) {
        disconnectSocket();
      }
    };
  }, []);

  const sendMessage = (message: string) => {
    if (socket.current?.readyState === WebSocket.OPEN && message) {
      socket.current.send(JSON.stringify({ message, token: accessToken }));
      setMessages((prevMessages) => [...prevMessages, { author: 'user', message, isEnd: false }]);
      setIsPending(true);
    }
  };

  const disconnectSocket = () => {
    if (socket.current) {
      socket.current.close();
    }
  };

  const receiveMessage = () => {
    if (socket.current?.readyState === WebSocket.OPEN) {
      socket.current.onmessage = (event) => {
        const parseMessage = JSON.parse(event.data);
        setMessages((prevMessages) => [
          ...prevMessages,
          { author: 'ai', message: parseMessage.message, isEnd: parseMessage?.isEnd },
        ]);
        setIsPending(false);
      };
    }
  };

  const resetMessages = () => {
    setMessages([initialMessage]);
  };

  return { sendMessage, receiveMessage, messages, resetMessages, isPending, isError };
};

export default useSocket;

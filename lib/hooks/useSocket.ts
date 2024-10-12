import { useEffect, useRef } from 'react';

const useSocket = () => {
  const socket = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!socket.current) {
      socket.current = new WebSocket('ws://cndowy24.cafe24.com/chat');
      const ws = socket.current;

      ws.onopen = () => {
        console.log('connected');
      };

      ws.onclose = () => {
        console.log('disconnected');
      };

      ws.onerror = (error) => {
        console.log('error', error);
      };
    }
    return () => {
      if (socket.current?.readyState === WebSocket.OPEN) {
        disconnectSocket();
      }
    };
  }, []);

  const sendMessage = (message: string) => {
    if (socket.current?.readyState === WebSocket.OPEN) {
      socket.current.send(message);
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
        console.log(event.data);
      };
    }
  };

  return { sendMessage, receiveMessage };
};

export default useSocket;

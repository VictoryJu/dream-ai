import { useEffect, useState } from 'react';

const LoadingMessage = () => {
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length >= 3) return '.';
        return prevDots + '.';
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);
  return <div className="w-full text-xl">AI가 메시지를 입력중입니다{dots}</div>;
};

export default LoadingMessage;

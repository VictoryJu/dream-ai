import { useState, useEffect, useCallback } from 'react';

interface UseTimerProps {
  initialTime: number;
  interval?: number;
}

interface UseTimerReturn {
  time: number;
  isRunning: boolean;
  isFinished: boolean;
  start: () => void;
  stop: () => void;
  reset: () => void;
  formatTime: () => string;
}

export const useTimer = ({ initialTime, interval = 1000 }: UseTimerProps): UseTimerReturn => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, interval);
    } else if (time === 0) {
      setIsRunning(false);
      setIsFinished(true);
    }
    return () => clearInterval(timer);
  }, [isRunning, time, interval]);

  const start = useCallback(() => {
    setIsRunning(true);
    setIsFinished(false);
  }, []);

  const stop = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    setTime(initialTime);
    setIsRunning(false);
    setIsFinished(false);
  }, [initialTime]);

  const formatTime = useCallback(() => {
    if (isFinished) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, [time, isFinished]);

  return { time, isRunning, isFinished, start, stop, reset, formatTime };
};

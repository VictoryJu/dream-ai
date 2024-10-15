import { KeyboardEvent } from 'react';

export const shiftEnter = (e: KeyboardEvent<HTMLTextAreaElement>, callback: () => void) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    e.stopPropagation();
    callback();
  }
};

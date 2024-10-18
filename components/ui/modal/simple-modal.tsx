import { useOutsideClick } from '@/hooks/useOutsideclick';
import React, { useRef } from 'react';

interface SimpleModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  overlay?: boolean;
  className?: string;
}
const SimpleModal = ({ children, open, onClose, overlay = true, className }: SimpleModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClick(modalRef, onClose);

  if (!open) return null;

  return (
    <>
      {overlay && <Overlay />}
      <div
        ref={modalRef}
        className={`absolute w-[390px] bg-white rounded-[10px] py-[30px] px-[40px] left-[50%] top-[50%] z-50 grid max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] ${className}`}
      >
        {children}
      </div>
    </>
  );
};

const Overlay = () => {
  return <div className="absolute w-full h-full inset-0 bg-black-main/40 z-10"></div>;
};

interface ContentProps {
  children: React.ReactNode;
}
const Content = ({ children }: ContentProps) => {
  return <div className="min-h-[100px]">{children}</div>;
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-2xl font-bold">{children}</div>;
};

const Description = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-base text-gray-400 mt-4">{children}</div>;
};

const Footer = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">{children}</div>;
};

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-full h-[52px] text-base font-bold text-white bg-purple-main rounded-[5px]">{children}</button>
  );
};

SimpleModal.Overlay = Overlay;
SimpleModal.Content = Content;
SimpleModal.Title = Title;
SimpleModal.Description = Description;
SimpleModal.Footer = Footer;
SimpleModal.Button = Button;

export default SimpleModal;

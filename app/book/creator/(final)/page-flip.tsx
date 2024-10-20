import React, { useState, useRef } from 'react';

interface PageData {
  frontContent: string;
  backContent: string;
}

const PageFlip: React.FC = () => {
  const [, forceUpdate] = useState({});
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [pages] = useState<PageData[]>([
    { frontContent: 'Welcome to this Page', backContent: 'This is Page 2' },
    { frontContent: 'Page 3', backContent: 'Page 4' },
    { frontContent: 'Welcome to this Page 5', backContent: 'This is Page 6' },
    { frontContent: 'Welcome to this Page 7', backContent: 'This is Page 8' },
  ]);

  const togglePageFlip = (el: HTMLDivElement) => {
    setAllPagesBack();
    setClickedPageForward(el);
    el.classList.toggle('turn');
    forceUpdate({});
  };

  const setAllPagesBack = () => {
    pageRefs.current.forEach((page) => {
      if (page) page.classList.remove('z-50');
    });
  };

  const setClickedPageForward = (el: HTMLDivElement) => {
    el.classList.add('z-50');
  };

  return (
    <div className="perspective text-white bg-black w-screen h-screen flex justify-end">
      {pages.map((page, index) => (
        <div
          key={page.frontContent}
          ref={(el: HTMLDivElement | null) => {
            if (el) pageRefs.current[pages.length - index - 1] = el;
          }}
          className="page absolute duration-1000 flex items-end origin-left w-1/2 transition h-screen transform"
          data-page={pages.length - index}
          onClick={(e) => togglePageFlip(e.currentTarget)}
        >
          <div className="front text-xl sm:text-3xl md:text-5xl flex items-center justify-start px-2 sm:px-5 md:px-20 font-bold bg-gray-900 h-screen absolute right-0 w-full h-full">
            {page.frontContent}
          </div>
          <div className="back text-xl sm:text-3xl md:text-5xl font-bold flex items-center justify-start px-2 sm:px-5 md:px-20 bg-gray-800 h-screen absolute w-full h-full">
            {page.backContent}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PageFlip;

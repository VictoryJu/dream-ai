import React from 'react';

const BookLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[940px] mx-auto pt-[56px] pb-[50px]">{children}</div>;
};

export default BookLayout;

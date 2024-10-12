import React from 'react';

const BookLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[1000px] mx-auto">{children}</div>;
};

export default BookLayout;

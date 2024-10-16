import React from 'react';
import BookList from './book-list';

const BookCreatePage = () => {
  return (
    <div className="flex h-screen gap-[82px]">
      <div className="flex-3 bg-purple-200">
        <BookList />
      </div>
      <div className="flex-7 bg-white w-[100%]">
        {/* 여기서 flex:7 부분입니다 */}
        flex:7
      </div>
    </div>
  );
};

export default BookCreatePage;

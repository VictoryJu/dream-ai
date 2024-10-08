import OtherBookCard from './other-book-card';

const OtherBook = () => {
  const OtherBookData = [
    {
      imageUrl: '/images/main/other/other-book1.png',
      title: '책 제목 들어가는곳',
      author: '김작가',
    },
    {
      imageUrl: '/images/main/book/book1.webp',
      title: '책 제목 들어가는곳2',
      author: '이작가',
    },
    {
      imageUrl: '/images/main/book/book3.webp',
      title: '책 제목 들어가는곳3',
      author: '박작가',
    },
  ];
  return (
    <section className="px-[220px] py-[200px] bg-black-background">
      <div className="text-[50px] font-bold text-center tracking-[2px] text-white">다른 친구들이 만든 그림책</div>
      <div className="grid grid-cols-3 gap-x-[51px] gap-y-[58px] px-[60px] py-[20px] mt-[50px]">
        {OtherBookData.map((book) => (
          <OtherBookCard key={book.imageUrl} imageUrl={book.imageUrl} title={book.title} author={book.author} />
        ))}
      </div>
    </section>
  );
};

export default OtherBook;

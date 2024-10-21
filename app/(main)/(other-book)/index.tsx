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
      imageUrl: '/images/main/book/book1.webp',
      title: '책 제목 들어가는곳3',
      author: '박작가',
    },
  ];
  return (
    <section className=" bg-black-background py-[200px] tablet:py-[110px]">
      <div className="max-w-desktop tablet:max-w-tablet mx-auto tablet:px-tablet ">
        <div className="text-desktopTitle tablet:text-tabletTitle font-bold text-center tracking-[2px] text-white">
          다른 친구들이 만든 그림책
        </div>
        <div className="grid grid-cols-3 gap-x-[51px] gap-y-[58px] tablet:gap-x-[30px] tablet:gap-y-[30px]  mt-[50px]">
          {OtherBookData.map((book) => (
            <OtherBookCard key={book.imageUrl} imageUrl={book.imageUrl} title={book.title} author={book.author} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherBook;

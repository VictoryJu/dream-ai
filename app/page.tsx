import Book from './(main)/@book/book';
import Document from './(main)/@document/document';
import OtherBook from './(main)/@other-book/other-book';

const Home = () => {
  return (
    <main>
      <Book />
      <Document />
      <OtherBook />
    </main>
  );
};

export default Home;

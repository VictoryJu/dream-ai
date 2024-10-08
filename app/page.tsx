import Book from './(main)/@book/page';
import Document from './(main)/@document/page';
import OtherBook from './(main)/@other-book/page';

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

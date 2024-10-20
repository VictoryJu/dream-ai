import Book from './(main)/(book)';
import Document from './(main)/(document)';
import OtherBook from './(main)/(other-book)';

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

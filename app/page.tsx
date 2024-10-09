import Book from '@/components/main/book';
import Document from '@/components/main/document';
import OtherBook from '@/components/main/other-book';

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

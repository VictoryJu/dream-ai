interface BookLayoutProps {
  children: React.ReactNode;
}

const BookLayout = ({ children }: BookLayoutProps) => {
  return <div className="bg-purple-300 min-h-screen">{children}</div>;
};

export default BookLayout;

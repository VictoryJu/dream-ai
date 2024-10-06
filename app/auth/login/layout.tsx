interface LoginLayoutProps {
  children: React.ReactNode;
}

const LoginLayout = ({ children }: LoginLayoutProps) => {
  return <div className="flex h-full justify-center items-center relative">{children}</div>;
};

export default LoginLayout;

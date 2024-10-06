import React from 'react';
import { SignupBaseModal } from './(modal)/signup-base-modal';

interface SignupLayoutProps {
  children: React.ReactNode;
}

const SignupLayout = ({ children }: SignupLayoutProps) => {
  return (
    <div className="flex h-full justify-center items-center relative">
      {children}
      <SignupBaseModal />
    </div>
  );
};

export default SignupLayout;

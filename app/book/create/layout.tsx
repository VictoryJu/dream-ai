import React from 'react';

const CreateLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-[100vw] mx-auto pt-[56px] pb-[50px]">{children}</div>;
};

export default CreateLayout;

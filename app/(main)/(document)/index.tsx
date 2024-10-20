import React from 'react';
import DocumentCard from './document-card';

const Document = () => {
  const documentData = [
    {
      id: 1,
      description: (
        <div>
          <div>챗봇을 통해</div>
          <div>나만의 스토리를 완성하세요!</div>
        </div>
      ),
      imageUrl: '/images/main/document/sns.png',
    },
    {
      id: 2,
      description: (
        <div>
          <div>나만의 글솜씨와 AI를 활용해</div>
          <div>글을 작성해주세요!</div>
        </div>
      ),
      imageUrl: '/images/main/document/student-card.png',
    },
    {
      id: 3,
      description: (
        <div>
          <div>어울리는 이미지를 생성해서 </div>
          <div>동화책을 완성하세요!</div>
        </div>
      ),
      imageUrl: '/images/main/document/book.png',
    },
  ];
  return (
    <section className="min-h-[1040px] tablet:min-h-[800px] flex flex-col justify-center items-center">
      <div className="w-full max-w-desktop tablet:max-w-tablet mx-auto px-desktop px-tablet">
        <div className="text-desktopTitle tablet:text-tabletTitle font-bold text-center text-black-description ">
          동화책 만드는 방법
        </div>
        <div className="w-full flex gap-[42px] tablet:gap-[20px] mt-[60px]">
          {documentData.map((data) => (
            <DocumentCard key={data.imageUrl} {...data} index={data.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Document;

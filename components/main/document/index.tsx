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
    <section className="flex flex-col w-full h-[1040px] px-[220px] justify-center items-center gap-[60px]">
      <div className="text-[50px] font-bold text-center text-black-description ">동화책 만드는 방법</div>
      <div className="w-full flex  gap-[42px]">
        {documentData.map((data) => (
          <DocumentCard key={data.imageUrl} {...data} index={data.id} />
        ))}
      </div>
    </section>
  );
};

export default Document;

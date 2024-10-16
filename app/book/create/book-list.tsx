import { Small } from '../preview/book-card';

const BookList = () => {
  return (
    <div className="max-h-screen overflow-y-auto p-4">
      <div className="space-y-4">
        {/* 아이템 1 */}
        <Small
          title="대니얼의 출발"
          description='대니얼은 자신의 고향 마을에서 친구들과 작별 인사를 나눕니다. “여러분, 나 마왕을 무찌르러 간다니까!" 친구들이 응원하며 미소짓고, 대니얼은 새로운 모험에 대한 기대감으로 가득 차 있습니다.'
          imageUrl="/images/main/book/book1.webp"
        />
        {/* 다른 아이템들 추가 */}
      </div>
    </div>
  );
}

export default BookList;
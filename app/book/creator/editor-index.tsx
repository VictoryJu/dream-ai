import Divider from '@/components/ui/custom/divider';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';

const EditorIndex = () => {
  return (
    <div className="rounded-lg bg-white shadow-[0px 0.4px 8px 0px_rgba(0, 0, 0, 0.05)] w-[100%] p-[63px]">
      <div className=" text-black-description text-[22px] leading-[33px] font-bold">제목</div>
      <Input className="mt-[20px]" />
      <Input className="mt-[15px]" placeholder="제목을 입력해주세요." />
      <div className=" text-black-description text-[22px] leading-[33px] font-bold mt-[25px]">작가명</div>
      <Input className="mt-[20px]" />
      <div className=" text-black-description text-[22px] leading-[33px] font-bold mt-[25px]">이미지</div>
      <div className="relative w-full max-w-xl">
        <Textarea
          placeholder="이미지 생성 프롬프트를 입력해주세요."
          className="w-full mt-[20px] p-4 pr-16 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
        />
        {/* 버튼 컨테이너 */}
        <div className="absolute right-2 top-2 flex flex-col space-y-2">
          {/* 이미지 업로드 버튼 */}
          <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4-4m0 0l-4 4m4-4v12"
              />
            </svg>
          </button>
          {/* 화살표 제출 버튼 */}
          <button className="flex items-center justify-center w-10 h-10 bg-purple-500 rounded-lg shadow-md hover:bg-purple-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

const First = () => {
  return (
    <>
      <div className="rounded-lg bg-white shadow-[0px 0.4px 8px 0px_rgba(0, 0, 0, 0.05)] w-[100%] aspect-square py-[120px] px-[91px] flex-1">
        <div className="relative w-full h-full">
          {/* object-fit으로 반응형 이미지 */}
          <Image
            src="/images/main/book/book1.webp"
            alt="image"
            layout="fill"
            objectFit="cover"
            className="rounded-[1px]"
          />
        </div>
      </div>
      <Divider direction="vertical" />
      <div className="rounded-lg bg-white shadow-[0px 0.4px 8px 0px_rgba(0, 0, 0, 0.05)] w-[100%] p-[63px] flex-1">
        <div className=" text-black-description text-[22px] leading-[33px] font-bold">제목</div>
        <Input className="mt-[20px]" />
        <Input className="mt-[15px]" placeholder="제목을 입력해주세요." />
        <div className=" text-black-description text-[22px] leading-[33px] font-bold mt-[25px]">작가명</div>
        <Input className="mt-[20px]" />
        <div className=" text-black-description text-[22px] leading-[33px] font-bold mt-[25px]">이미지</div>
        <div className="relative w-full max-w-xl">
          <Textarea
            placeholder="이미지 생성 프롬프트를 입력해주세요."
            className="w-full mt-[20px] p-4 pr-16 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          />
          {/* 버튼 컨테이너 */}
          <div className="absolute right-2 top-2 flex flex-col space-y-2">
            {/* 이미지 업로드 버튼 */}
            <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4-4m0 0l-4 4m4-4v12"
                />
              </svg>
            </button>
            {/* 화살표 제출 버튼 */}
            <button className="flex items-center justify-center w-10 h-10 bg-purple-500 rounded-lg shadow-md hover:bg-purple-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const Paging = () => {
  return (
    <>
      <div className="rounded-lg bg-white shadow-[0px 0.4px 8px 0px_rgba(0, 0, 0, 0.05)] w-[100%] aspect-square py-[51px] px-[61px] flex-1">
        <div className="relative w-full h-full">
          {/* object-fit으로 반응형 이미지 */}
          <Image
            src="/images/main/book/book1.webp"
            alt="image"
            layout="fill"
            objectFit="cover"
            className="rounded-[1px]"
          />
        </div>
        <div className=" text-black-description text-[22px] leading-[33px] font-bold mt-[25px]">이미지</div>
        <div className="relative w-full max-w-xl">
          <Textarea
            placeholder="이미지 생성 프롬프트를 입력해주세요."
            className="w-full mt-[20px] p-4 pr-16 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          />
          {/* 버튼 컨테이너 */}
          <div className="absolute right-2 top-2 flex flex-col space-y-2">
            {/* 이미지 업로드 버튼 */}
            <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4-4m0 0l-4 4m4-4v12"
                />
              </svg>
            </button>
            {/* 화살표 제출 버튼 */}
            <button className="flex items-center justify-center w-10 h-10 bg-purple-500 rounded-lg shadow-md hover:bg-purple-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Divider direction="vertical" />
      <div className="rounded-lg bg-white shadow-[0px 0.4px 8px 0px_rgba(0, 0, 0, 0.05)] w-[100%] py-[78px] px-[61px] flex-1">
        <div className=" text-black-description text-[22px] leading-[33px] font-bold">제목</div>
        <Input className="mt-[20px]" />
        <Input className="mt-[15px]" placeholder="제목을 입력해주세요." />
      </div>
    </>
  );
};

const Last = () => {
  return (
    <>
      <div className="rounded-lg bg-white shadow-[0px 0.4px 8px 0px_rgba(0, 0, 0, 0.05)] w-[100%] aspect-square py-[120px] px-[91px] flex-1">
        <div className="relative w-full h-full max-w-[463px] max-h-[459px]">
          {/* object-fit으로 반응형 이미지 */}
          <Image
            src="/images/main/book/book1.webp"
            alt="image"
            layout="fill"
            objectFit="cover"
            className="rounded-[1px]"
          />
        </div>
      </div>
      <Divider direction="vertical" />
      <div className="rounded-lg bg-white shadow-[0px 0.4px 8px 0px_rgba(0, 0, 0, 0.05)] py-[120px] px-[91px] flex-1">
        <div className=" text-black-description text-[22px] leading-[33px] font-bold">마지막 한마디</div>
        <Input className="mt-[20px]" />
        <Input className="mt-[15px]" placeholder="제목을 입력해주세요." />
        <div className=" text-black-description text-[22px] leading-[33px] font-bold mt-[25px]">이미지</div>
        <div className="relative w-full max-w-xl">
          <Textarea
            placeholder="이미지 생성 프롬프트를 입력해주세요."
            className="w-full mt-[20px] p-4 pr-16 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          />
          {/* 버튼 컨테이너 */}
          <div className="absolute right-2 top-2 flex flex-col space-y-2">
            {/* 이미지 업로드 버튼 */}
            <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4-4m0 0l-4 4m4-4v12"
                />
              </svg>
            </button>
            {/* 화살표 제출 버튼 */}
            <button className="flex items-center justify-center w-10 h-10 bg-purple-500 rounded-lg shadow-md hover:bg-purple-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

EditorIndex.First = First;
EditorIndex.Paging = Paging;
EditorIndex.Last = Last;

export default EditorIndex;
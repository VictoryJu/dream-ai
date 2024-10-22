import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <section className="flex justify-between bg-purple-300 h-[100dvh]">
      <div className="w-[55%] relative flex justify-center items-center" role="img" aria-label="auth-logo">
        <Image
          src="/images/auth/auth-main-image.webp"
          alt="auth-main-image"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute top-[15%] left-[10%]">
          <div className="flex items-center gap-[10px] w-full">
            <div className="relative  min-w-[500px] tablet:min-w-[350px] tablet:max-w-[400px] h-[46px] tablet:h-[36px]">
              <Image src="/images/auth/dream-ai-studio-logo.png" alt="dream-ai-studio-logo" fill priority />
            </div>
            <span className="text-white text-[48px] font-bold tablet:text-[38px]">는</span>
          </div>
          <div className="text-white text-[48px] font-bold tablet:text-[38px]">아이들에게 책을 선물합니다.</div>
          <div className="mt-[25px] text-white text-[24px] tablet:text-[18px]">
            <div>그림책 만들기를 눌러서 AI로 빠르게 만들어보세요.</div>
            <div>스토리,캐릭터, 일러스트를 잘 조화롭게 구성할 수 있어요.</div>
          </div>
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </section>
  );
};

export default AuthLayout;

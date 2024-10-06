import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <section className="flex justify-between bg-purple-300 h-full">
      <div
        className="w-[55%] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: 'url("/auth-main-image.webp")' }}
        role="img"
        aria-label="auth-logo"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent">
          <div className="absolute top-[152px] left-[132px]">
            <div className="flex items-center gap-[10px]">
              <Image
                src="/images/auth/dream-ai-studio-logo.png"
                alt="dream-ai-studio-logo"
                width={506}
                height={46}
                style={{ width: '506px', height: '46px' }}
              />
              <span className="text-white text-[48px] font-bold">는</span>
            </div>
            <div className="text-white text-[48px] font-bold">아이들에게 책을 선물합니다.</div>
            <div className="mt-[25px] text-white text-[24px]">
              <div>그림책 만들기를 눌러서 AI로 빠르게 만들어보세요.</div>
              <div>스토리,캐릭터, 일러스트를 잘 조화롭게 구성할 수 있어요.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </section>
  );
};

export default AuthLayout;

'use client';
import { logout } from '@/app/auth/login/actions';
import { resetAuthStore } from '@/lib/stores/auth-store';
import { useRouter } from 'next/navigation';

const HeaderLogout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    resetAuthStore();
    router.push('/auth/login');
  };
  return (
    <span
      onClick={handleLogout}
      className="cursor-pointer w-32 h-[60px] tablet:h-[50px] py-[16px] tablet:py-[12px] px-[24px] tablet:px-[16px] rounded-[8px] text-purple-main text-[22px] tablet:text-lg font-bold hover:underline"
    >
      로그아웃
    </span>
  );
};

export default HeaderLogout;

import { useCallback } from 'react';
import { useModalStore } from '@/lib/stores/modal-store';
import { SignupTextModal } from './signup-modal';
import { useRouter } from 'next/navigation';

export const useSignupModals = () => {
  const { open } = useModalStore((state) => state);
  const router = useRouter();

  const openSignupDescriptionModal = useCallback(() => {
    open(
      <SignupTextModal
        title={
          <div className="flex gap-1">
            <span>회원가입</span>
            <span className="text-purple-main">요청완료</span>
          </div>
        }
        description={
          <div>
            <div>선생님의 승인을 기다려주세요!</div>
            <div>승인시, 알림문자나 카톡을 드리겠습니다.</div>
          </div>
        }
        closeCallback={() => {
          router.push('/auth/login');
        }}
      />,
    );
  }, [open, router]);

  const openSignupFailModal = useCallback(() => {
    open(
      <SignupTextModal
        title="회원가입 실패"
        description={
          <div>
            <div>회원가입이 실패하였습니다.</div>
            <div>다시 시도해주세요.</div>
          </div>
        }
      />,
    );
  }, [open]);

  return { openSignupDescriptionModal, openSignupFailModal };
};

import React from 'react';

import { Button } from '@/components/ui/button';
import { useModalStore } from '@/lib/stores/modal-store';
import SimpleModal from '@/components/ui/modal/simple-modal';

interface SignupTextModalProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  overlay?: boolean;
  closeCallback?: () => void;
}

export const SignupTextModal = ({ title, description, overlay = true, closeCallback }: SignupTextModalProps) => {
  const { isOpen, onClose } = useModalStore();

  const handleClose = () => {
    onClose();
    closeCallback?.();
  };

  return (
    <>
      <SimpleModal open={isOpen} onClose={handleClose} overlay={overlay}>
        <SimpleModal.Content>
          {title && <SimpleModal.Title>{title}</SimpleModal.Title>}
          {description && <SimpleModal.Description>{description}</SimpleModal.Description>}
        </SimpleModal.Content>
        <SimpleModal.Footer>
          <Button onClick={handleClose} className="w-full">
            확인
          </Button>
        </SimpleModal.Footer>
      </SimpleModal>
    </>
  );
};

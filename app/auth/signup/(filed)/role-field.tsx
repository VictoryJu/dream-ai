import { Button } from '@/components/ui/button';
import { AuthFormLabel } from '@/components/ui/custom/auth-form-label';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { SignupForm } from '../validator';
import { UseFormReturn } from 'react-hook-form';
import { SignupTextModal } from '../(modal)/signup-modal';
import { useModalStore } from '@/lib/stores/modal-store';
import { useEffect } from 'react';

interface RoleFieldProps {
  form: UseFormReturn<SignupForm>;
}

const RoleField = ({ form }: RoleFieldProps) => {
  const { open } = useModalStore((state) => state);
  const userRole = form.getValues('userRole');

  const openSignupWarningModal = () => {
    open(<SignupTextModal title="선택 불가" description="개인 회원은 아직 준비중입니다." />);
  };

  useEffect(() => {
    form.setValue('userRole', 'TEACHER');
  }, [form]);

  return (
    <FormField
      control={form.control}
      name="userRole"
      render={({ field }) => (
        <FormItem>
          <AuthFormLabel required>구분</AuthFormLabel>
          <FormControl>
            <div className="flex space-x-2">
              <Button
                className="flex-1 h-[52px] text-[16px] font-bold"
                type="button"
                variant={userRole === 'PERSONAL' ? 'default' : 'border'}
                onClick={openSignupWarningModal}
              >
                개인
              </Button>
              <Button
                className="flex-1 h-[52px] text-[16px] font-bold"
                type="button"
                variant={userRole === 'TEACHER' ? 'default' : 'border'}
                onClick={() => {
                  field.onChange('TEACHER');
                }}
              >
                단체
              </Button>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RoleField;

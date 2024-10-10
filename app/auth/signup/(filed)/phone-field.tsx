import { Button } from '@/components/ui/button';
import { AuthFormLabel } from '@/components/ui/custom/auth-form-label';
import { FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React, { useCallback, useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { SignupForm } from '../validator';
import { useTimer } from '@/lib/hooks/useTimer';
import { usePhoneVerification } from '@/app/services/queries/auth';

interface VerifyFieldProps {
  form: UseFormReturn<SignupForm>;
}

const PhoneField = ({ form }: VerifyFieldProps) => {
  const codeSuccess = form.getValues('codeSuccess');
  const clearCodeValue = () => {
    form.setValue('code', '');
  };
  const clearCodeError = () => {
    form.clearErrors('code');
  };

  const { isFinished, start, reset, formatTime } = useTimer({ initialTime: 300 });

  const {
    mutateAsync: getPhoneVerification,
    isPending: isGetPhoneVerificationPending,
    isSuccess: isGetPhoneVerificationSuccess,
  } = usePhoneVerification('get');
  const { mutateAsync: postPhoneVerification, isPending: isPostPhoneVerificationPending } =
    usePhoneVerification('post');

  const handleGetPhoneVerification = async (tel: string) => {
    try {
      await getPhoneVerification(tel);
      clearCodeValue();
      clearCodeError();
      start();
    } catch (e) {
      form.setError('tel', { message: '전화번호를 확인해주세요.' });
    }
  };

  const handlePostPhoneVerification = useCallback(
    async (code: string) => {
      try {
        await postPhoneVerification(code);
        form.setValue('codeSuccess', true);
        clearCodeError();
      } catch (e) {
        form.setError('code', { message: '인증번호가 일치하지 않습니다.' });
      } finally {
        reset();
      }
    },
    [form, reset],
  );

  useEffect(() => {
    if (isFinished) {
      form.setError('code', {
        type: 'timeout',
        message: '인증 시간이 만료되었습니다. 인증번호를 다시 받아주세요.',
      });
      form.setValue('codeSuccess', false);
      clearCodeValue();
    }
  }, [isFinished, form]);

  useEffect(() => {
    const code = form.getValues('code');
    if (code.length === 6) {
      handlePostPhoneVerification(code);
    }
  }, [form, handlePostPhoneVerification]);

  return (
    <div className="space-y-3">
      <FormField
        control={form.control}
        name="tel"
        render={({ field, fieldState }) => (
          <FormItem>
            <AuthFormLabel required>전화번호</AuthFormLabel>
            <FormControl>
              <div className="flex gap-2 items-center">
                <Input type="tel" className="flex-1" placeholder="(-) 제외하고 입력해주세요" {...field} />
                <Button
                  className="h-[52px] p-[14px] w-[100px] text-[16px] font-medium rounded-[5px]"
                  type="button"
                  disabled={!fieldState.isDirty || fieldState.invalid}
                  onClick={() => {
                    handleGetPhoneVerification(field.value);
                  }}
                  isLoading={isGetPhoneVerificationPending}
                >
                  {isGetPhoneVerificationSuccess ? '재발송' : '인증번호'}
                </Button>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {isGetPhoneVerificationSuccess && (
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex gap-2 items-center">
                  <Input
                    type="tel"
                    inputMode="numeric"
                    className="flex-1"
                    autoComplete="one-time-code"
                    maxLength={6}
                    disabled={isFinished}
                    placeholder="인증번호를 입력해주세요"
                    {...field}
                  />
                  <Button
                    className="h-[52px] p-[14px] w-[100px] text-[16px] font-medium rounded-[5px]"
                    type="button"
                    disabled={form.getValues('code').length !== 6}
                    isLoading={isPostPhoneVerificationPending}
                    onClick={() => {
                      handlePostPhoneVerification(field.value);
                    }}
                  >
                    확인
                  </Button>
                </div>
              </FormControl>
              {!form.formState.errors.code && !isFinished && (
                <FormDescription>
                  <span
                    className={`flex gap-2 items-center text-[14px] font-medium ${
                      codeSuccess ? 'text-green-success' : 'text-purple-main'
                    }`}
                  >
                    {codeSuccess ? '인증이 완료되었습니다' : `인증번호를 입력해주세요 ${formatTime()}`}
                  </span>
                </FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </div>
  );
};

export default PhoneField;

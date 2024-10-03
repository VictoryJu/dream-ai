'use client';

import { Button } from '@/components/ui/button';
import { AuthFormLabel } from '@/components/ui/custom/auth-form-label';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { SignupForm, signupFormSchema } from './validator';

const SignupForm = () => {
  const form = useForm<SignupForm>({
    resolver: zodResolver(signupFormSchema),
    mode: 'onChange',
    defaultValues: {
      username: '',
      tel: '',
      password: '',
      confirmPassword: '',
      email: '',
    },
  });

  const onSubmit = (values: SignupForm) => {
    console.log(values);
  };

  const handleSendVerification = async () => {
    const telValidation = await form.trigger('tel');
    if (telValidation) {
      const tel = form.getValues('tel');
      console.log('인증번호 발송:', tel);
    }
  };

  const telField = form.getFieldState('tel');
  const submitButtonDisabled = form.formState.isSubmitting || !form.formState.isValid;
  const isTelValid = telField.isDirty && !telField.invalid;

  return (
    <div className="min-w-[350px]">
      <div className="text-[40px] text-gray-400 font-bold mb-8">회원가입</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <AuthFormLabel required>이름</AuthFormLabel>
                <FormControl>
                  <Input placeholder="이름을 입력해주세요" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tel"
            render={({ field }) => (
              <FormItem>
                <AuthFormLabel required>전화번호</AuthFormLabel>
                <FormControl>
                  <div className="flex gap-2 items-center">
                    <Input type="tel" className="w-auto" placeholder="(-) 제외하고 입력해주세요" {...field} />
                    <Button
                      className="h-[52px] p-[14px] w-[100px] text-[16px] font-medium rounded-[5px]"
                      type="button"
                      onClick={handleSendVerification}
                      disabled={!isTelValid}
                    >
                      인증번호
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-3">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <AuthFormLabel required>비밀번호</AuthFormLabel>
                  <FormControl>
                    <Input type="password" placeholder="비밀번호를 입력해주세요" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="비밀번호를 한번 더 입력해주세요" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <AuthFormLabel>이메일</AuthFormLabel>
                <FormControl>
                  <Input type="email" placeholder="이메일을 입력해주세요" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={submitButtonDisabled} className="w-full h-[52px] rounded-[10px] text-lg" type="submit">
            회원가입
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;

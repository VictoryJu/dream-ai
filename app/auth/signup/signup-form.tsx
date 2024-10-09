'use client';

import { Button } from '@/components/ui/button';
import { AuthFormLabel } from '@/components/ui/custom/auth-form-label';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { SignupForm } from './validator';
import { signupFormSchema } from './validator';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import { signupAction } from './actions';
import PhoneField from './(filed)/phone-field';
import RoleField from './(filed)/role-field';
import { useEffect } from 'react';
import { useSignupModals } from './(modal)/useSignupModal';

export const initialState: { message: string; error: string } = { message: '', error: '' };

const SignupForm = () => {
  const [state, formAction] = useFormState(signupAction, initialState);
  const { openSignupDescriptionModal, openSignupFailModal } = useSignupModals();

  const form = useForm<SignupForm>({
    resolver: zodResolver(signupFormSchema),
    mode: 'onChange',
    defaultValues: {
      username: '',
      tel: '',
      password: '',
      confirmPassword: '',
      email: '',
      userRole: 'TEACHER',
      code: '',
      codeSuccess: false,
    },
  });

  const submitButtonDisabled = form.formState.isSubmitting || !form.formState.isValid;

  const handleSubmit = (data: SignupForm) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value.toString());
      }
    });
    formAction(formData);
  };

  useEffect(() => {
    if (state.message === 'SUCCESS') {
      openSignupDescriptionModal();
    }
    if (state.error) {
      openSignupFailModal();
    }
  }, [state]);

  return (
    <div className="min-w-[350px]">
      <div className="text-[40px] text-gray-400 font-bold mb-8">회원가입</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <RoleField form={form} />
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
          <PhoneField form={form} />
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
          <div className="flex gap-3">
            <Link className="w-1/2" href="/auth/login">
              <Button variant="outline" className="w-full h-[52px] rounded-[10px] text-lg">
                취소
              </Button>
            </Link>
            <Button disabled={submitButtonDisabled} className="w-1/2 h-[52px] rounded-[10px] text-lg" type="submit">
              회원가입
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;

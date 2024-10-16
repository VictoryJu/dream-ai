'use client';
import { Button } from '@/components/ui/button';
import { AuthFormLabel } from '@/components/ui/custom/auth-form-label';

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { loginFormSchema } from './validator';
import type { LoginForm } from './validator';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';
import { loginAction } from './actions';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuthStore } from '@/lib/stores/auth-store';
import { IUser } from '@/app/services/apis/types/auth';
import { useLogin } from '@/app/services/queries/auth';

export const initialState: { message: string; error: string; data: IUser | null } = {
  message: '',
  error: '',
  data: {
    userName: '',
    storyId: 0,
  },
};

const LoginForm = () => {
  // const { mutate: login, isSuccess: isLoginSuccess, isError: isLoginError } = useLogin();

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
    mode: 'onChange',
    defaultValues: {
      tel: '',
      password: '',
    },
  });

  const submitButtonDisabled = form.formState.isSubmitting || !form.formState.isValid;
  const [state, formAction] = useFormState(loginAction, initialState);
  const router = useRouter();
  const { setGlobalTel, setGlobalStoryId } = useAuthStore((state) => state);

  useEffect(() => {
    if (state.message === 'SUCCESS') {
      if (keepLogin) {
        setGlobalTel(form.getValues('tel'));
      }
      setGlobalTel('');
      setGlobalStoryId(state.data?.storyId || 0);
      router.push('/');
    } else if (state.error) {
      form.setError('tel', { message: '가입된 전화번호인지 확인해주세요' });
      form.setError('password', { message: '전화번호 또는 비밀번호가 일치하지 않습니다' });
    }
  }, [state, router, form]);

  // useEffect(() => {
  //   if (isLoginSuccess) {
  //     if (keepLogin) {
  //       setGlobalTel(form.getValues('tel'));
  //     }
  //     setGlobalTel('');
  //     setGlobalStoryId(state.data?.storyId || 0);
  //     router.push('/');
  //   } else if (isLoginError) {
  //     form.setError('tel', { message: '가입된 전화번호인지 확인해주세요' });
  //     form.setError('password', { message: '전화번호 또는 비밀번호가 일치하지 않습니다' });
  //   }
  // }, [isLoginSuccess, isLoginError, form]);

  const [keepLogin, setKeepLogin] = useState(false);

  // const handleSubmit = (data: LoginForm) => {
  //   login(data);
  // };

  return (
    <div className="min-w-[350px]">
      <div className="text-[40px] text-gray-400 font-bold mb-8">로그인</div>
      <Form {...form}>
        <form action={formAction} className="space-y-8">
          <FormField
            control={form.control}
            name="tel"
            render={({ field }) => (
              <FormItem>
                <AuthFormLabel>전화번호</AuthFormLabel>
                <FormControl>
                  <Input inputMode="tel" type="tel" placeholder="(-) 제외하고 입력해주세요" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <AuthFormLabel>비밀번호</AuthFormLabel>
                  <FormControl>
                    <Input type="password" placeholder="비밀번호를 입력해주세요" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-2 mt-2">
              <Checkbox checked={keepLogin} />
              <div
                onClick={() => setKeepLogin(!keepLogin)}
                className="text-gray-400 text-[16px] font-medium cursor-pointer"
              >
                로그인 유지
              </div>
            </div>
          </div>
          <Button disabled={submitButtonDisabled} className="w-full h-[52px] rounded-[10px] text-lg" type="submit">
            로그인
          </Button>
        </form>
      </Form>
      <div className="text-center mt-7">
        <Link href="/auth/signup" className="cursor-pointer text-purple-main text-[16px] font-medium hover:underline ">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;

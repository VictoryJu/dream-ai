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

export const initialState: { message: string; error: string } = { message: '', error: '' };

const LoginForm = () => {
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

  useEffect(() => {
    if (state.message === '로그인 성공') {
      router.push('/main');
    } else if (state.error?.length > 0) {
      form.setError('tel', { message: '전화번호 형식이 올바르지 않습니다' });
      form.setError('password', { message: '전화번호 또는 비밀번호가 일치하지 않습니다' });
    }
  }, [state, router, form]);

  const [keepLogin, setKeepLogin] = useState(false);

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
        <Link href="/auth/signup" className="cursor-pointer text-purple-main text-[16px] font-medium ">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;

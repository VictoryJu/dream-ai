'use client';
import { Button } from '@/components/ui/button';
import { AuthFormLabel } from '@/components/ui/custom/auth-form-label';

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { loginFormSchema } from './validator';
import { LoginForm } from './validator';
import { useEffect } from 'react';
import { useRef } from 'react';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';

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

  const onSubmit = (values: LoginForm) => {
    console.log(values);
  };

  const telInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      telInputRef.current?.focus();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-w-[350px]">
      <div className="text-[40px] text-gray-400 font-bold mb-8">로그인</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="tel"
            render={({ field }) => (
              <FormItem>
                <AuthFormLabel>전화번호</AuthFormLabel>
                <FormControl>
                  <Input type="tel" placeholder="(-) 제외하고 입력해주세요" {...field} />
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
                    <Input placeholder="비밀번호를 입력해주세요" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-2 mt-2">
              <Checkbox />
              <div className="text-gray-400 text-[16px] font-medium">로그인 유지</div>
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

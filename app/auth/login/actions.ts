'use server';

import { cookies } from 'next/headers';
import { initialState } from './login-form';
import { loginFormSchema } from './validator';

const KEEP_LOGIN_EXPIRATION_TIME = 365 * 24 * 60 * 60; // 1년
const DEFAULT_EXPIRATION_TIME = 60 * 60 * 24; // 1일

export const loginAction = async (prevState: typeof initialState, formData: FormData): Promise<typeof initialState> => {
  const validatedFields = loginFormSchema.safeParse({
    tel: formData.get('tel'),
    password: formData.get('password'),
    keepLogin: formData.get('keepLogin') === 'true',
  });

  if (!validatedFields.success) {
    throw { error: validatedFields.error.flatten().fieldErrors };
  }

  const { tel, password, keepLogin } = validatedFields.data;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ userName: tel, password }),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!res.ok) {
      return { error: '전화번호 또는 비밀번호가 일치하지 않습니다.', message: '', data: null };
    }

    const { data } = await res.json();

    const accessToken = res.headers.get('authorization') || '';
    const refreshToken = res.headers.get('refreshtoken') || '';

    const expirationTime = keepLogin ? KEEP_LOGIN_EXPIRATION_TIME : DEFAULT_EXPIRATION_TIME;

    cookies().set('accessToken', accessToken, { maxAge: expirationTime, httpOnly: true });
    cookies().set('refreshToken', refreshToken, { maxAge: expirationTime, httpOnly: true });

    console.log(cookies().getAll());

    return { message: 'SUCCESS', error: '', data: { ...data, accessToken } };
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return { error: error.message, message: '', data: null };
    }
    return { error: '알 수 없는 오류가 발생했습니다.', message: '', data: null };
  }
};

export async function logout() {
  cookies().delete('accessToken');
  cookies().delete('refreshToken');
}

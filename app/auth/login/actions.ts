'use server';

import { initialState } from './loginForm';
import { loginFormSchema } from './validator';

export const loginAction = async (prevState: typeof initialState, formData: FormData): Promise<typeof initialState> => {
  const validatedFields = loginFormSchema.safeParse({ tel: formData.get('tel'), password: formData.get('password') });

  if (!validatedFields.success) {
    throw { error: validatedFields.error.flatten().fieldErrors };
  }

  const { tel, password } = validatedFields.data;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ tel, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      return { error: '전화번호 또는 비밀번호가 일치하지 않습니다.', message: '' };
    }

    const data = await res.json();

    return { message: data.message, error: '' };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message, message: '' };
    }
    return { error: '알 수 없는 오류가 발생했습니다.', message: '' };
  }
};

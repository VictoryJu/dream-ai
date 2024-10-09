'use server';

import { initialState } from './signup-form';
import { signupFormSchema } from './validator';

export const signupAction = async (
  prevState: typeof initialState,
  formData: FormData,
): Promise<typeof initialState> => {
  const validatedFields = signupFormSchema.safeParse({
    username: formData.get('username'),
    tel: formData.get('tel'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
    email: formData.get('email'),
    userRole: formData.get('userRole') || 'TEACHER',
    code: formData.get('code'),
    codeSuccess: formData.get('codeSuccess') === 'true',
  });

  if (!validatedFields.success) {
    throw { error: validatedFields.error.flatten().fieldErrors };
  }

  const { username, tel, password, email, userRole } = validatedFields.data;
  console.log(validatedFields.data);

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
      method: 'POST',
      body: JSON.stringify({ username: tel, password, email, userRole, realName: username }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(await res.json());

    if (!res.ok) {
      return { message: '', error: '회원가입이 실패하였습니다.' };
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

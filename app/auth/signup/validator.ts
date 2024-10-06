import { z } from 'zod';

export const signupFormSchema = z
  .object({
    type: z.enum(['group', 'individual']),
    username: z.string().min(2, {
      message: '이름은 2글자 이상 입력해주세요.',
    }),
    tel: z
      .string()
      .regex(/^010\d{8}$/, '올바른 휴대폰 번호 형식이 아닙니다.')
      .length(11, '휴대폰 번호는 11자리여야 합니다.')
      .transform((val) => val.replace(/-/g, '')),
    password: z.string().min(8, {
      message: '비밀번호는 최소 8자 이상이어야 합니다.',
    }),
    confirmPassword: z.string(),
    email: z.string().email('올바른 이메일 형식이 아닙니다.').optional().or(z.literal('')),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

export type SignupForm = z.infer<typeof signupFormSchema>;

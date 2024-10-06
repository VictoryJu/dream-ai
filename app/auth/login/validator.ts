import { z } from 'zod';

export const loginFormSchema = z.object({
  tel: z
    .string({ invalid_type_error: '올바른 휴대폰 번호 형식이 아닙니다.' })
    .regex(/^010\d{8}$/, '올바른 휴대폰 번호 형식이 아닙니다.')
    .length(11, '휴대폰 번호는 11자리여야 합니다.')
    .transform((val) => val.replace(/-/g, '')),
  password: z.string({ invalid_type_error: '올바른 비밀번호 형식이 아닙니다.' }),
});

export type LoginForm = z.infer<typeof loginFormSchema>;

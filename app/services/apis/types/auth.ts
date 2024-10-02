import { ApiResponse } from './instance';

export interface ILoginRequest {
  password: string;
  tel: string;
}

export interface ISignupRequest {
  userId: number;
  userName: string;
  password: string;
  realName: string;
  tel: string;
  userRole: 'STUDENT' | 'TEACHER';
  storyId: number;
}

export interface IUser {
  userId: number;
  userName: string;
  realName: string;
  tel: string;
  userRole: 'STUDENT' | 'TEACHER';
  storyId: number;
}

export type LoginResponseType = ApiResponse<IUser>;

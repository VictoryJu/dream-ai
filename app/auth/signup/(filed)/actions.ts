'use server';

export const postAction = async (code: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/phone-verifications/verify`, {
      method: 'POST',
      body: JSON.stringify({ code }),
      headers: {
        'Content-Type': 'application/json',
        'Cookie': 'connect.sid=s%3A1234567890abcdef',
      },
      credentials: 'include',
    });

    console.log(response);

    if (response.status >= 400) {
      return { error: '올바르지 않은 인증 코드 입니다.', message: '' };
    }

    return { message: 'SUCCESS', error: '' };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return { error: error.message, message: '' };
    }
    return { error: '알 수 없는 오류가 발생했습니다.', message: '' };
  }
};

export const getAction = async (tel: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/phone-verifications`, {
      method: 'POST',
      body: JSON.stringify({ userName: tel }),
      headers: {
        'Content-Type': 'application/json',
        'Cookie': 'connect.sid=s%3A1234567890abcdef',
      },
      credentials: 'include',
    });

    console.log(response);

    if (response.status >= 400) {
      return { error: '올바르지 않은 전화번호 입니다.', message: '' };
    }

    return { message: 'SUCCESS', error: '' };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return { error: error.message, message: '' };
    }
    return { error: '알 수 없는 오류가 발생했습니다.', message: '' };
  }
};

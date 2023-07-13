import { comparePassword } from '../../utils';
import { verifyLoginUser } from '../services';
import type { ILoginData, ILoginResponse } from '../types';

export const loginUser = async (credentials: ILoginData): Promise<ILoginResponse> => {
  try {
    const { email, password } = credentials;

    const res = await verifyLoginUser(email);

    if (res == null) return { loginSuccess: false, userId: '' };

    // passwords are equals
    const passwordsAreEquals = await comparePassword(password ?? '', res.PasswordHash);
    if (!passwordsAreEquals) return { loginSuccess: false, userId: '' };

    return { loginSuccess: true, userId: res.Id };
  } catch (error) {
    console.error(error);
    return { loginSuccess: false, userId: '' };
  }
};

import { comparePassword } from '../../utils';
import { verifyLoginUser } from '../services';
import type { ILoginData, ILoginResponse } from '../types';

export const loginUser = async (credentials: ILoginData): Promise<ILoginResponse> => {
  try {
    const { email, password } = credentials;

    const res = await verifyLoginUser(email);

    if (res == null) return badLoginUserResponse();

    // passwords are equals
    const passwordsAreEquals = await comparePassword(password ?? '', res.PasswordHash);
    if (!passwordsAreEquals) return badLoginUserResponse();

    return {
      loginSuccess: true,
      userData: { userId: res.Id, fullName: `${res.FirstName} ${res.LastName}`, town: res.DocumentType ?? '' },
    };
  } catch (error) {
    console.error(error);
    return badLoginUserResponse();
  }
};

const badLoginUserResponse = (): ILoginResponse => ({
  loginSuccess: false,
  userData: { fullName: '', town: '', userId: '' },
});

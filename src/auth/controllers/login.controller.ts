import { prisma } from '../../prisma';
import { comparePassword } from '../../utils';
import type { ILoginData, ILoginResponse, LoginCredentials } from '../types';

export const loginUser = async (credentials: ILoginData): Promise<ILoginResponse> => {
  try {
    const { email, password } = credentials;

    const res: LoginCredentials | null = await prisma.users.findFirstOrThrow({
      where: {
        Email: email,
      },
      select: {
        Id: true,
        Email: true,
        PasswordHash: true,
      },
    });

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

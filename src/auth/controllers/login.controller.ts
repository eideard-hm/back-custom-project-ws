import { prisma } from '../../prisma';
import { comparePassword } from '../../utils';
import type { ILoginData, LoginCredentials } from '../types';

export const loginUser = async (credentials: ILoginData): Promise<boolean> => {
  try {
    const { email, password } = credentials;

    const res: LoginCredentials | null = await prisma.users.findFirstOrThrow({
      where: {
        Email: email,
      },
      select: {
        Email: true,
        PasswordHash: true,
      },
    });

    if (res == null) return false;

    // passwords are equals
    const passwordsAreEquals = await comparePassword(password ?? '', res.PasswordHash);
    if (!passwordsAreEquals) return false;

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

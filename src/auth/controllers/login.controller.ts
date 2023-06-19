import { prisma } from '../../prisma';
import { comparePassword } from '../../utils';
import type { ILoginData } from '../types';

export const loginUser = async (credentials: ILoginData): Promise<boolean> => {
  try {
    const { email, password } = credentials;
    console.log({ email, password });

    const res: ILoginData | null = await prisma.user.findFirstOrThrow({
      where: {
        email,
      },
      select: {
        email: true,
        password: true,
      },
    });

    console.log({ res, password });

    if (res == null) return false;

    // passwords are equals
    const passwordsAreEquals = await comparePassword(password ?? '', res.password);
    console.log({ passwordsAreEquals });
    if (!passwordsAreEquals) return false;

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

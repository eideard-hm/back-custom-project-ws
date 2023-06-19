import { prisma } from '../../prisma';
import { ILoginData } from '../types';

export const loginUser = async (credentials: ILoginData): Promise<boolean> => {
  try {
    const { email, password } = credentials;

    const res = await prisma.user.findFirstOrThrow({
      where: {
        email,
      },
    });

    return res != null;
  } catch (error) {
    console.error(error);
    return false;
  }
};

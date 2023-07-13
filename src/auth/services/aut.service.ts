import { prisma } from '../../prisma';
import type { LoginCredentials } from '../types';

export const verifyLoginUser = async (email: string): Promise<LoginCredentials | null> => {
  return await prisma.users.findFirstOrThrow({
    where: {
      Email: email,
    },
    select: {
      Id: true,
      Email: true,
      PasswordHash: true,
    },
  });
};

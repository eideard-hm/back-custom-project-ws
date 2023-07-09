import { prisma } from '../../prisma';
import { encryptPassword } from '../../utils';
import type { UserCreateInput } from '../types';

const hashPassword = async (users: UserCreateInput[]): Promise<UserCreateInput[]> => {
  return await Promise.all(users.map(async (user) => ({ ...user, PasswordHash: await encryptPassword(user.PasswordHash) })));
};

export const createUser = async (user: UserCreateInput[]): Promise<number> => {
  try {
    const usersToSave = await hashPassword(user);
    const { count } = await prisma.users.createMany({
      data: usersToSave,
      skipDuplicates: true,
    });
    return count;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

export const getAllUsers = async (): Promise<UserCreateInput[]> => {
  try {
    return await prisma.users.findMany();
  } catch (error) {
    console.error(error);
    return [];
  }
};

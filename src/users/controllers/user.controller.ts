import { prisma } from '../../prisma';
import { encryptPassword } from '../../utils';
import type { UserCreateInput } from '../types';

const hashPassword = async (users: UserCreateInput[]): Promise<UserCreateInput[]> => {
  return await Promise.all(users.map(async (user) => ({ ...user, password: await encryptPassword(user.password) })));
};

export const createUser = async (user: UserCreateInput[]): Promise<number> => {
  try {
    const usersToSave = await hashPassword(user);
    const { count } = await prisma.user.createMany({
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
    return await prisma.user.findMany();
  } catch (error) {
    console.error(error);
    return [];
  }
};

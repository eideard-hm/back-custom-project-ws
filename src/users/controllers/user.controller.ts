import { prisma } from '../../prisma';
import { encryptPasswordSync, serializedBigint } from '../../utils';
import type { UserCreateInput } from '../types';

const hashPassword = (users: UserCreateInput[]): UserCreateInput[] =>
  users.map((user) => ({ ...user, PasswordHash: encryptPasswordSync(user.PasswordHash) }));

export const createUser = async (user: UserCreateInput[]): Promise<number> => {
  try {
    const usersToSave = hashPassword(user);
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
    const users = await prisma.users.findMany();
    return serializedBigint(users);
  } catch (error) {
    console.error(error);
    return [];
  }
};

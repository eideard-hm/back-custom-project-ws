import { prisma } from '../../prisma';
import type { User } from '../types';

export const createUser = async (user: User): Promise<User> => {
  const newUser = await prisma.user.create({
    data: user,
  });
  return newUser;
};

import { prisma } from '../../prisma';
import type { User } from '../types';

export const createUser = async (user: User): Promise<User> => {
  try {
    const newUser = await prisma.user.create({
      data: user,
    });
    return newUser;
  } catch (error) {
    console.error(error);
    return user;
  }
};

export const getAllUsers = async (): Promise<User[]> => {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    console.error(error);
    return [];
  }
};

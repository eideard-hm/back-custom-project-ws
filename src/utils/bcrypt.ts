import { compare, genSaltSync, hashSync } from 'bcryptjs';

export const encryptPasswordSync = (password: string) => {
  const salt = genSaltSync(10);
  return hashSync(password, salt);
};

export const comparePassword = async (password: string, hash: string) => await compare(password, hash);

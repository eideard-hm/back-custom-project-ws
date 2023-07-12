import { Prisma } from '@prisma/client';

export interface ILoginData {
  email: string;
  password: string;
}

export type LoginCredentials = Pick<
  Prisma.UsersUncheckedCreateWithoutShipmentOrdersInput,
  'Email' | 'PasswordHash' | 'Id'
>;

export interface ILoginResponse {
  loginSuccess: boolean;
  userId: string;
}

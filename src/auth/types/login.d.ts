import { Prisma } from '@prisma/client';

export interface ILoginData {
  email: string;
  password: string;
}

type LoginCredentials = Pick<Prisma.UsersUncheckedCreateWithoutShipmentOrdersInput, 'Email' | 'PasswordHash'>

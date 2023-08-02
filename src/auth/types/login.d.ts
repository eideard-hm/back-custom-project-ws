import { Prisma } from '@prisma/client';

export interface ILoginData {
  email: string;
  password: string;
}

export type LoginCredentials = Pick<
  Prisma.UsersUncheckedCreateWithoutShipmentOrdersInput,
  'Email' | 'PasswordHash' | 'Id' | 'FirstName' | 'LastName' | 'DocumentType'
>;

export interface ILoginResponse {
  loginSuccess: boolean;
  userData: IUserDataLogin;
}

export interface IUserDataLogin {
  userId: number;
  fullName: string;
  town: string;
}

import { Prisma } from '@prisma/client';

export type SendCreateInput = Prisma.SendCreateInput;

export interface IInfoSendMessage {
  userId: number;
  messagesSent: number;
}

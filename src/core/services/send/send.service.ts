import { prisma } from '../../../prisma';
import type { SendCreateInput } from '../../types';

export const saveWhenSendAsync = async (data: SendCreateInput) => {
  return await prisma.send.create({
    data,
    select: {
      Id: true,
    },
  });
};

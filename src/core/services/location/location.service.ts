import { prisma } from '../../../prisma';
import type { IService } from '../../types';

export const retrieveLocationsService = async (userId: number, serviceCode: string): Promise<IService[]> => {
  return await prisma.services.findMany({
    where: {
      UserId: userId,
      Type: serviceCode
    },
    select: {
      Id: true,
      Type: true,
      TitleNameServices: true,
    },
    distinct: ['TitleNameServices']
  });
};

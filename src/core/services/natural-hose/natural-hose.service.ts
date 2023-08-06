import { prisma } from '../../../prisma';

export const retrieveNaturalHoseService = async (serviceId: number) => {
  return await prisma.naturalHose.findMany({
    where: {
      ServicesId: serviceId,
    },
    select: {
      Id: true,
      TitleNaturalHose: true,
    },
  });
};

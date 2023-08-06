import { prisma } from '../../../prisma';

export const retrieveSexService = async () => {
  return await prisma.sex.findMany({
    select: {
      Id: true,
      TitleNaturalHose: true,
    },
  });
};

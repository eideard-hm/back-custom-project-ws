import { prisma } from '../../prisma';
import type { ShipmentOrdersCreateInput, ShipmentOrdersCreateResponse } from '../types';

export const createShipmentOrdersAsync = async (
  input: ShipmentOrdersCreateInput,
): Promise<ShipmentOrdersCreateResponse> => {
  const response = await prisma.shipmentOrders.create({
    data: input,
    select: {
      Id: true,
    },
  });

  return { Id: Number(response.Id) };
};

export const retrieveAllShipmentOrdersAsync = async (userId: number) => {
  return await prisma.shipmentOrders.findMany({
    where: {
      ModifyUserId: userId,
    },
    select: {
      FirstName: true,
      LastName: true,
      Email: true,
      Phone: true,
      BirthDate: true,
      DocumentType: true,
      Need: true,
      Sex: {
        select: {
          Id: true,
          TitleNaturalHose: true,
        },
      },
      Services: {
        select: {
          Id: true,
          TitleNameServices: true,
          NaturalHose: {
            select: {
              Id: true,
              TitleNaturalHose: true,
            },
          },
        },
      },
    },
  });
};

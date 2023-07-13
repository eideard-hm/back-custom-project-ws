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

export const retrieveAllShipmentOrdersAsync = async(userId: string) => {
  return await prisma.shipmentOrders.findMany({
    where: {
      ModifyUserId: userId
    },
    select: {
      Id: false,
      BirthDate: true,
      DocumentType: true,
      Email: true,
      FirstName: true,
      FromCityCode: true,
      LastName: true,
      Need: true,
      Phone: true,
      SexId: true,
      Sidewalk: true,
      Ubication: true
    }
  })
}

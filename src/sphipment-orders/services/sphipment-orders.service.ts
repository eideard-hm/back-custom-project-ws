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

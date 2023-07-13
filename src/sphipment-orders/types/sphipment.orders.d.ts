import { Prisma } from '@prisma/client';

export type ShipmentOrdersCreateInput = Prisma.ShipmentOrdersUncheckedCreateInput;

export type ShipmentOrdersCreateResponse = Prisma.Prisma__ShipmentOrdersClient<{
  Id: number;
}>;

export type ShipmentOrders = Prisma.ShipmentOrders;

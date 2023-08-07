import { Prisma } from '@prisma/client';

import type { INaturalHoseByService, ISex } from '../../core/types';

export type ShipmentOrdersCreateInput = Prisma.ShipmentOrdersUncheckedCreateInput;

export type ShipmentOrdersCreateResponse = Prisma.Prisma__ShipmentOrdersClient<{
  Id: number;
}>;

export interface ShipmentOrdersResponse {
  FirstName: string;
  LastName: string;
  Email: string | null;
  Phone: string | null;
  BirthDate: Date | null;
  DocumentType: string | null;
  NaturalHose: INaturalHoseByService | null;
  NaturalHose_ShipmentOrders_EconomicActivityToNaturalHose: INaturalHoseByService | null;
  Services_ShipmentOrders_ServiceActivityIdToServices: Services | null;
  Sex: ISex;
  Services: Services;
}

export interface Services {
  Id: bigint;
  TitleNameServices: string;
}

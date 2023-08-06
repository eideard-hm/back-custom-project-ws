import { Prisma } from '@prisma/client';

import type { INaturalHoseByService } from '../../core/types';

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
  Need: string | null;
  Sex: Sex;
  Services: Services;
}

export interface Services {
  Id: bigint;
  TitleNameServices: string;
  NaturalHose: INaturalHoseByService[];
}

export interface Sex {
  TitleNaturalHose: string;
}
import { Prisma } from '@prisma/client';

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
  TitleNameServices: string;
  NaturalHose: unknown[];
}

export interface Sex {
  TitleNaturalHose: string;
}

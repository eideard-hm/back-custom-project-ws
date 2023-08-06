export interface IService {
  Id: bigint;
  Type: string | null;
  TitleNameServices: string;
}

export interface IShipmentServices {
  TitleNameServices: string;
  NaturalHose: string[];
}

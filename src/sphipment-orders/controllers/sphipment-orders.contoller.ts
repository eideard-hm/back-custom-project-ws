import { serializedBigint } from '../../utils';
import {
  createMultiplesShipmentOrdersAsync,
  createShipmentOrdersAsync,
  retrieveAllShipmentOrdersAsync,
} from '../services';
import type { ShipmentOrdersCreateInput, ShipmentOrdersCreateResponse, ShipmentOrdersResponse } from '../types';

export const createShipmentOrders = async (input: ShipmentOrdersCreateInput): Promise<ShipmentOrdersCreateResponse> => {
  try {
    if (!input) return { Id: 0 };

    input.BirthDate = input.BirthDate ? new Date(input.BirthDate ?? '').toISOString() : null;
    return await createShipmentOrdersAsync(input);
  } catch (error) {
    console.error(error);
    return { Id: 0 };
  }
};

export const createMultiplesShipmentOrders = async (
  input: ShipmentOrdersCreateInput[],
): Promise<ShipmentOrdersCreateResponse> => {
  try {
    if (input.length === 0) return { Id: 0 };

    input = input.map((i) => ({
      ...i,
      BirthDate: i.BirthDate ? new Date(i.BirthDate ?? '').toISOString() : null,
    }));
    return await createMultiplesShipmentOrdersAsync(input);
  } catch (error) {
    console.error(error);
    return { Id: 0 };
  }
};

export const getAllShipmentOrdersAsync = async (userId: number): Promise<ShipmentOrdersResponse[]> => {
  try {
    if (!userId) return [];

    const response = await retrieveAllShipmentOrdersAsync(userId);
    const shipments: ShipmentOrdersResponse[] = response.map((s) => ({
      ...s,
      FullName: `${s.FirstName} ${s.LastName}`,
    }));
    return serializedBigint(shipments);
  } catch (error) {
    console.error(error);
    return [];
  }
};

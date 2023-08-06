import { serializedBigint } from '../../utils';
import { createShipmentOrdersAsync, retrieveAllShipmentOrdersAsync } from '../services';
import type { ShipmentOrders, ShipmentOrdersCreateInput, ShipmentOrdersCreateResponse } from '../types';

export const createShipmentOrders = async (input: ShipmentOrdersCreateInput): Promise<ShipmentOrdersCreateResponse> => {
  try {
    if (!input) return { Id: 0 };

    input.BirthDate = new Date(input.BirthDate ?? '').toISOString();
    return await createShipmentOrdersAsync(input);
  } catch (error) {
    console.error(error);
    return { Id: 0 };
  }
};

export const getAllShipmentOrdersAsync = async (userId: number): Promise<ShipmentOrders[]> => {
  try {
    if (!userId) return [];

    const response = await retrieveAllShipmentOrdersAsync(userId);
    return serializedBigint(response);
  } catch (error) {
    console.error(error);
    return [];
  }
};

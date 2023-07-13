import { createShipmentOrdersAsync } from '../services';
import type { ShipmentOrdersCreateInput, ShipmentOrdersCreateResponse } from '../types';

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

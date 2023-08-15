import { type Request, type Response } from 'express';
import { serializedBigint } from '../../../utils';
import { saveWhenSendAsync } from '../../services';
import type { IInfoSendMessage, SendCreateInput } from '../../types';

export const saveHistoricalSent = async (req: Request, res: Response) => {
  try {
    const { userId, messagesSent } = req.body as IInfoSendMessage;
    const data: SendCreateInput = {
      UserId: userId,
      CountMesage: messagesSent,
      DateSend: new Date(),
    };
    const messageSentId = await saveWhenSendAsync(data);

    res.send(serializedBigint(messageSentId));
  } catch (error) {
    console.error(error);
    res.send(0);
  }
};

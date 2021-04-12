import Twilio = require('twilio');
import Consola from 'consola';

const accountID: string = process.env.TWILIO_ACCOUNT_ID;
const authToken: string = process.env.TWILIO_AUTH_TOKEN;

const client = Twilio(accountID, authToken);
const { success, error } = Consola;

interface ISendSMS {
  body: string;
  from: string;
  to: string;
}

export const sendSMS = async ({ body, from, to }: ISendSMS) => {
  try {
    await client.messages.create({ body, from, to });
    success('SMS enviado com sucesso.');
  } catch (err) {
    return error(err.message);
  }
}
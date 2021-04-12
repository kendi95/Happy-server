import { sendSMS } from "../utils/sendSMS";

interface IsendSMSJobs {
  code: string;
  to: string;
}

export default {
  key: 'sendSMS',
  handle: async ({ code, to }: IsendSMSJobs) => {
    await sendSMS({
      body: `Seu código é: ${code}`,
      from: '+16788091993',
      to: `+55${to}`
    });
  }
}
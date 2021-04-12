import { sendMail } from "../utils/sendMail";

interface ISendMailJobs {
  email: string;
  token: string;
}

export default {
  key: 'SendMail',
  handle: async ({ email, token }: ISendMailJobs) => {
    await sendMail({
      to: [email],
      subject: 'Recuperação de senha',
      message: `<p>Seu token é: ${token}</p>`
    });
  }
}
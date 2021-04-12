import { getTransporter } from '../config/nodemailer';
import Consola from 'consola';

const { success, error } = Consola;

interface ISendMail {
  to: string[];
  message: string;
  subject: string;
}

export const sendMail = async ({ to, message, subject }: ISendMail) => {
  try {
    await getTransporter().sendMail({ to, subject, html: message });
    success('Email enviado com sucesso.');
    return;
  } catch (err) {
    return error(err.message);
  }
}
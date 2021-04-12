import nodemailer, { Transporter } from 'nodemailer';

let transporter: Transporter = null;

export const getTransporter = () => {
  if (process.env.NODE_ENV === 'development') {
    if (!transporter) {
      transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "338759f8692cef",
          pass: "56641439ec67d8"
        }
      });
    }
    return transporter;
  }

  if (process.env.NODE_ENV === 'straight') {
    if (!transporter) {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        host: "smtp.gmail.com",
        port: 2525,
        auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD
        }
      });
    }
    return transporter;
  }

  if (process.env.NODE_ENV === 'prod') {
    if (!transporter) {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        host: "smtp.gmail.com",
        port: 2525,
        auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD
        }
      });
    }
    return transporter;
  }

}
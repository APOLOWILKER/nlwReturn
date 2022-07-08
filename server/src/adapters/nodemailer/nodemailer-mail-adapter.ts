import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail.adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7ed070d746ce6b",
    pass: "00774a3706140e"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
    from: 'Apolo Wilker <alow@feedget.com>',
    to: 'batata <sr_batata@gmail.com>',
    subject,
    html: body,
  });
  };
}
import nodemailer from "nodemailer";

require("dotenv/config");

class GenerateTransporterService {

    async execute() {
        //Setar as configurações SMTP do seu servidor de email
        const transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            }
        });
    
        return transporter;
    }
}

export { GenerateTransporterService }
import { GenerateTransporterService } from "./generateTransporterService";

require("dotenv/config");

interface IMailRequest {
    from?: string;
    to: string;
    replyTo: string;
    subject: string;
    text: string;
}

class SendMailService {

    async execute({ from = process.env.APPLICATION_MAIL, to, replyTo, subject, text } : IMailRequest) {

        const transporterGenerator = new GenerateTransporterService();
        const transporter = await transporterGenerator.execute();
    
        try{
            const info = await transporter.sendMail({
                from: process.env.APPLICATION_MAIL,
                to,
                replyTo,
                subject,
                text
            });

            return info;
            
        } catch(err) {
            console.log(err);
        }
    }
}

export { SendMailService }
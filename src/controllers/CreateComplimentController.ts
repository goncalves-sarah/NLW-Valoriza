import { Request, Response} from 'express';
import { Tag } from '../entities/Tag';
import { User } from '../entities/User';
import { CreateComplimentService } from '../services/CreateComplimentService';
import { FindTagService } from '../services/FindTagService';
import { FindUserService } from '../services/FindUserService';
import { SendMailService } from '../services/SendMailService';

class CreateComplimentController{
    async handle(req: Request, res: Response) {
        const { tag_id, user_receiver, message } = req.body;
        const { user_id } = req;
        
        const createComplimentService = new CreateComplimentService();
        const sendMailService = new SendMailService();
        const findUserService = new FindUserService();
        const findTagService = new FindTagService();
        
        const compliment = await createComplimentService.execute({
            tag_id, 
            user_sender: user_id, 
            user_receiver, 
            message
        });
        
        const userReceiver  = await findUserService.execute(user_receiver) as User;
        const userSender = await findUserService.execute(user_id) as User;
        const tag = await findTagService.execute(tag_id) as Tag;

        const emailMessage = (`Olá ${userReceiver.name.split(" ")[0]}!\n\nVocê recebeu um compliment! ${userSender.name} te mandou um compliment de ${tag.name}${compliment.message ? ` e uma mensagem:\n\n${compliment.message}` : '!'}`) 
        
        if(userReceiver && userSender){
            const info = await sendMailService.execute({
                to: userReceiver.email,
                replyTo: userSender.email, 
                subject: `Você recebeu um compliment de ${userSender.name}`,
                text: emailMessage
            });
        }

        return res.json(compliment);
    }
}

export { CreateComplimentController }

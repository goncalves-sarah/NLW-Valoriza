import { Request, Response} from 'express';
import { FindUserService } from '../services/FindUserService';

class FindUserController{

    async handle(req: Request, res: Response) {

        const { user_id } = req.params;

        const findUserService = new FindUserService();

        try{
            const user = await findUserService.execute(user_id);
            return res.json(user);
        } catch(err){
            return [];
        }

    }
}

export { FindUserController }
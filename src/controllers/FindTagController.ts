import { Request, Response} from 'express';
import { FindTagService } from '../services/FindTagService';

class FindTagController{

    async handle(req: Request, res: Response) {

        const { tag_id } = req.params;

        const findTagService = new FindTagService();

        try{
            const tag = await findTagService.execute(tag_id);
            return res.json(tag);
        } catch(err){
            return [];
        }

    }
}

export { FindTagController }
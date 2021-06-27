import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm"
import { TagsRepository } from "../repositories/TagsRepository"

class FindTagService {

    async execute( tag_id : string) {

        const tagsRepository = getCustomRepository(TagsRepository);

        const tag = await tagsRepository.findOne(tag_id);

        //classToPlain é usado para criar novos objetos se baseando nos antigos, mas com os novos atribs do class-transformer inseridos dentro da entity
        return classToPlain(tag); 
    }
       
}

export { FindTagService }
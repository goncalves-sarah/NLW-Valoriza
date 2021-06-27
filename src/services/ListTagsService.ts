import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm"
import { TagsRepository } from "../repositories/TagsRepository"

class ListTagsService {

    async execute() {

        const tagsRepository = getCustomRepository(TagsRepository);

        const tags = await tagsRepository.find();

        //classToPlain é usado para criar novos objetos se baseando nos antigos, mas com os novos atribs do class-transformer inseridos dentro da entity
        return classToPlain(tags); 
    }
       
}

export { ListTagsService }
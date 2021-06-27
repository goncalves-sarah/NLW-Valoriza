import { getCustomRepository } from "typeorm";
import { Errors } from "../errors";
import { TagsRepository } from "../repositories/TagsRepository"

class CreateTagService {

    async execute(name: string) {
        const tagsRepository = getCustomRepository(TagsRepository);

        if(!name){
            throw new Errors(400,"Incorrect name!");
        }

        const tagAlreadyExists = await tagsRepository.findOne({
            name
        });

        if(tagAlreadyExists) {
            throw new Errors(400,"Tag already exists!");
        }

        const tag = tagsRepository.create({
            name
        });

        await tagsRepository.save(tag);

        return tag;
    }
}

export { CreateTagService }
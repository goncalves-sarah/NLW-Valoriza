import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository"

class FindUserService {

    async execute( user_id : string) {

        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findOne(user_id);

        return classToPlain(user);
    }
}

export { FindUserService }
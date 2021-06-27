import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"

class ListUsersService {

    async execute() {

        const usersRepository = getCustomRepository(UsersRepository);

        const users = await usersRepository.find();

        //classToPlain é usado para criar novos objetos se baseando nos antigos, mas com os novos atribs do class-transformer inseridos dentro da entity
        return classToPlain(users); 
    }
       
}

export { ListUsersService }
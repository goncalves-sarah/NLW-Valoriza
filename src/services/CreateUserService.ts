import { getCustomRepository } from "typeorm";
import { Errors } from "../errors";
import { UsersRepository } from "../repositories/UsersRepository"
import { hash } from 'bcryptjs';

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {

    async execute({name, email, admin = false, password } : IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepository);

        if(!email) {
            throw new Errors(400,"Email incorrect!");
        }

        const  userAlreadyExists = await usersRepository.findOne({
            email
        });

        if(userAlreadyExists){
            throw new Errors(400,"User already exists!");
        }
        
        //Criptografa a senha, primeiro param é a senha, segundo é o salt
        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash
        });

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService }
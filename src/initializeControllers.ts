import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUsersController } from './controllers/ListUsersController';
import { FindUserController } from './controllers/FindUserController';
import { FindTagController } from './controllers/FindTagController';

class initializeControllers {

    createUserController() {
       return new CreateUserController();
    }

    createTagController() {
        return new CreateTagController();
    }

    authenticateUserController() {
        return new AuthenticateUserController();
    }

    createComplimentController(){
        return new CreateComplimentController();
    } 

    listUserSendComplimentsController() {
        return new ListUserSendComplimentsController();
    }

    listUserReceiveComplimentsController() {
        return new ListUserReceiveComplimentsController();
    }

    listTagsController() {
        return new ListTagsController();
    }

    listUsersController() {
        return new ListUsersController();
    }

    findUserController() {
        return new FindUserController();
    }

    findTagController() {
        return new FindTagController();
    }
}

export { initializeControllers }
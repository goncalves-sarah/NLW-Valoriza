import { Router } from 'express';
import { initializeControllers } from './initializeControllers';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router();

const {
    createUserController,
    createTagController,
    authenticateUserController,
    createComplimentController,
    listUserSendComplimentsController,
    listUserReceiveComplimentsController,
    listTagsController, 
    listUsersController,
    findUserController,
    findTagController
} = new initializeControllers();

router.post("/users", createUserController().handle);
router.post("/tags", ensureAuthenticated ,ensureAdmin ,createTagController().handle); // Inserindo a middleware ali, ele só executa o .handle se for admin
router.post("/login", authenticateUserController().handle);
router.post("/compliments", ensureAuthenticated ,createComplimentController().handle);

router.get("/users/compliments/sent", ensureAuthenticated, listUserSendComplimentsController().handle);
router.get("/users/compliments/received", ensureAuthenticated, listUserReceiveComplimentsController().handle);
router.get("/tags/:tag_id", ensureAuthenticated, findTagController().handle);
router.get("/tags", ensureAuthenticated, listTagsController().handle);
router.get("/users/:user_id", ensureAuthenticated, findUserController().handle);
router.get("/users", ensureAuthenticated, listUsersController().handle);

export { router };
import express, { Express } from 'express';
import { deleteUser, createUser, createUserPage, getHomePage, viewUserPage } from 'controllers/user.controller';

const router = express.Router();

const webRouter = (app: Express) => {
    router.get('/', getHomePage);

    router.get('/create-user', createUserPage);

    router.post('/create-user', createUser);

    router.post('/delete-user/:id', deleteUser);

    router.get('/view-user/:id', viewUserPage);

    app.use('/', router);
}

export default webRouter;
import express, { Express } from 'express';
import { deleteUser, createUser, createUserPage, getHomePage, viewUserPage, updateUser } from 'controllers/user.controller';
import { dashboardPage } from 'controllers/admin/dashboard.controller';

const router = express.Router();

const webRouter = (app: Express) => {
    router.get('/', getHomePage);

    router.get('/create-user', createUserPage);

    router.post('/create-user', createUser);

    router.post('/delete-user/:id', deleteUser);

    router.get('/view-user/:id', viewUserPage);

    router.post('/update-user', updateUser);

    //admin router
    router.get('/admin', dashboardPage);

    app.use('/', router);
}

export default webRouter;
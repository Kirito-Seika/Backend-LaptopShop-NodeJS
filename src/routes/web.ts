import express, { Express } from 'express';
import { deleteUser, createUser, createUserPage, getHomePage, viewUserPage, updateUser } from 'controllers/user.controller';
import { adminUserPage, adminProductPage, adminOrderPage, dashboardPage, adminCreateUserPage } from 'controllers/admin/admin.controller';

const router = express.Router();

const webRouter = (app: Express) => {
    router.get('/', getHomePage);

    router.post('/create-user', createUser);

    router.post('/delete-user/:id', deleteUser);

    router.get('/view-user/:id', viewUserPage);

    router.post('/update-user', updateUser);

    //admin router
    router.get('/admin', dashboardPage);

    //admin user
    router.get('/admin/user', adminUserPage);
    router.get('/admin/create-user', adminCreateUserPage);

    router.get('/admin/product', adminProductPage);

    router.get('/admin/order', adminOrderPage);

    app.use('/', router);
}

export default webRouter;
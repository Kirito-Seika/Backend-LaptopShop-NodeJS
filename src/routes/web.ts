import express, { Express } from 'express';
import {
    adminUserPage, adminProductPage, adminOrderPage, dashboardPage,
    adminCreateUserPage, adminCreateUser,
    adminDeleteUser,
    adminDetailUserPage,
    adminUpdateUser
} from 'controllers/admin/admin.controller';
import fileUploadMiddleware from 'src/middleware/upload.multer';

const router = express.Router();

const webRouter = (app: Express) => {
    //admin router
    router.get('/admin', dashboardPage);

    //admin user
    router.get('/admin/user', adminUserPage);
    router.get('/admin/create-user', adminCreateUserPage);
    router.post('/admin/create-user', fileUploadMiddleware('avatar'), adminCreateUser);
    router.post('/admin/delete-user/:id', adminDeleteUser);
    router.get('/admin/detail-user/:id', adminDetailUserPage);
    router.post('/admin/update-user', fileUploadMiddleware('avatar'), adminUpdateUser);

    router.get('/admin/product', adminProductPage);

    router.get('/admin/order', adminOrderPage);

    app.use('/', router);
}

export default webRouter;
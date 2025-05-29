import express, { Express } from 'express';
import {
    adminUserPage, adminProductPage, adminOrderPage, dashboardPage, adminCreateUserPage, adminCreateUser, adminDeleteUser, adminDetailUserPage, adminUpdateUser,
    adminCreateProductPage, adminCreateProduct
} from 'controllers/admin/admin.controller';
import {
    homePage,
    productPage
} from 'controllers/client/client.controller';
import fileUploadMiddleware from 'src/middleware/upload.multer';

const router = express.Router();

const webRouter = (app: Express) => {
    //home router
    router.get('/', homePage);
    router.get('/product/:id', productPage);

    //admin router
    router.get('/admin', dashboardPage);

    //admin user
    router.get('/admin/user', adminUserPage);
    router.get('/admin/create-user', adminCreateUserPage);
    router.post('/admin/create-user', fileUploadMiddleware('avatar'), adminCreateUser);
    router.post('/admin/delete-user/:id', adminDeleteUser);
    router.get('/admin/detail-user/:id', adminDetailUserPage);
    router.post('/admin/update-user', fileUploadMiddleware('avatar'), adminUpdateUser);

    //admin product
    router.get('/admin/product', adminProductPage);
    router.get('/admin/create-product', adminCreateProductPage);
    router.post('/admin/create-product', fileUploadMiddleware('image', 'client/img/product'), adminCreateProduct);

    router.get('/admin/order', adminOrderPage);

    app.use('/', router);
}

export default webRouter;
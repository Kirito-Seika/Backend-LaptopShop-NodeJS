import express, { Express } from 'express';
import {
    adminUserPage, adminProductPage, adminOrderPage, dashboardPage, adminCreateUserPage, adminCreateUser, adminDeleteUser, adminDetailUserPage, adminUpdateUser,
    adminCreateProductPage, adminCreateProduct,
    adminDetailProductPage,
    adminDeleteProduct,
    adminUpdateProduct
} from 'controllers/admin/admin.controller';
import {
    homePage,
    productPage
} from 'controllers/client/client.controller';
import fileUploadMiddleware from 'src/middleware/upload.multer';
import { loginPage, registerPage, registerUser } from 'controllers/auth/auth.controller';
import passport from 'passport';
import { loginValidator } from 'src/validation/login.validator';

const router = express.Router();

const webRouter = (app: Express) => {
    //home router
    router.get('/', homePage);
    router.get('/product/:id', productPage);

    //login routerrouter
    router.get('/login', loginPage);
    router.post('/login', loginValidator, passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureMessage: true
    }));
    router.get('/register', registerPage);
    router.post('/register', fileUploadMiddleware('avatar'), registerUser);

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
    router.get('/admin/detail-product/:id', adminDetailProductPage);
    router.post('/admin/update-product', fileUploadMiddleware('image', 'client/img/product'), adminUpdateProduct);
    router.post('/admin/delete-product/:id', adminDeleteProduct);

    router.get('/admin/order', adminOrderPage);

    app.use('/', router);
}

export default webRouter;
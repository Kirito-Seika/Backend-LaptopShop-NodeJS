import express, { Express } from 'express';
import { deleteUser, getHomePage, viewUserPage, updateUser } from 'controllers/user.controller';
import {
    adminUserPage, adminProductPage, adminOrderPage, dashboardPage,
    adminCreateUserPage, adminCreateUser
} from 'controllers/admin/admin.controller';

const router = express.Router();

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const webRouter = (app: Express) => {
    router.get('/', getHomePage);



    router.post('/delete-user/:id', deleteUser);

    router.get('/view-user/:id', viewUserPage);

    router.post('/update-user', updateUser);

    //admin router
    router.get('/admin', dashboardPage);

    //admin user
    router.get('/admin/user', adminUserPage);
    router.get('/admin/create-user', adminCreateUserPage);
    // router.post('/admin/create-user', adminCreateUser);
    router.post('/admin/create-user', upload.single('avatar'), (req, res) => {
        res.send('ok');
    });

    router.get('/admin/product', adminProductPage);

    router.get('/admin/order', adminOrderPage);

    app.use('/', router);
}

export default webRouter;
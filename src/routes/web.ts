import express, { Express } from 'express';
import { createUser, getHomePage } from '../controllers/user.controller';

const router = express.Router();

const webRouter = (app: Express) => {
    router.get('/', getHomePage)

    router.get('/create-user', createUser)

    app.use('/', router)
}

export default webRouter;
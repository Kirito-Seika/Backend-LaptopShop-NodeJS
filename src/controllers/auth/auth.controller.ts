import { Request, Response } from 'express';

const loginPage = async (req: Request, res: Response) => {
    return res.render('client/auth/login');
}

const registerPage = async (req: Request, res: Response) => {
    return res.render('client/auth/register');
}

export {
    loginPage, registerPage
}
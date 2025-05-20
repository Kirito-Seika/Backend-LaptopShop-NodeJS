import { Request, Response } from "express";

const getHomePage = (req: Request, res: Response) => {
    return res.render('home');
}

const createUserPage = (req: Request, res: Response) => {
    return res.render('create');
}

const createUser = (req: Request, res: Response) => {
    console.log('Check data: ', req.body);
    return res.redirect('/');
}

export { getHomePage, createUserPage, createUser };
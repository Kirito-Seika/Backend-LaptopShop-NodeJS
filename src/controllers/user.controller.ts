import { Request, Response } from "express";

const getHomePage = (req: Request, res: Response) => {
    return res.render('home');
}

const createUser = (req: Request, res: Response) => {
    return res.render('create');
}

export { getHomePage, createUser };
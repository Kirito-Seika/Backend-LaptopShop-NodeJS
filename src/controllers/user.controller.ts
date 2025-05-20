import { Request, Response } from "express";
import { handleCreateUser } from "../services/user.service";

const getHomePage = (req: Request, res: Response) => {
    return res.render('home');
}

const createUserPage = (req: Request, res: Response) => {
    return res.render('create');
}

const createUser = (req: Request, res: Response) => {
    const { name, email, address } = req.body;
    handleCreateUser(name, email, address);
    return res.redirect('/');
}

export { getHomePage, createUserPage, createUser };
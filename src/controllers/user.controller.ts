import { Request, Response } from "express";
import { fetchAllUser, handleCreateUser } from "../services/user.service";

const getHomePage = async (req: Request, res: Response) => {
    const users = await fetchAllUser();
    return res.render('home', {
        users: users
    });
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
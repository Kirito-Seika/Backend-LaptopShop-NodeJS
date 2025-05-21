import { Request, Response } from "express";
import { fetchAllUser, handleCreateUser, handleDeleteUser } from "services/user.service";

const getHomePage = async (req: Request, res: Response) => {
    const users = await fetchAllUser();
    return res.render('home', {
        users: users
    });
}

const createUserPage = (req: Request, res: Response) => {
    return res.render('create');
}

const createUser = async (req: Request, res: Response) => {
    const { name, email, address } = req.body;
    await handleCreateUser(name, email, address);
    return res.redirect('/');
}

const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await handleDeleteUser(id);
    return res.redirect('/');
}

export { getHomePage, createUserPage, createUser, deleteUser };
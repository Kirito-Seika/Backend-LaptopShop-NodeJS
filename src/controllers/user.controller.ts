import { Request, Response } from "express";
import { fetchAllUser, handleCreateUser, handleDeleteUser, handleUpdateUser, handleViewUser } from "services/user.service";

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

const viewUserPage = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await handleViewUser(id);
    return res.render('view', { id: id, user: user });
}

const updateUser = async (req: Request, res: Response) => {
    const { id, name, email, address } = req.body;
    await handleUpdateUser(id, name, email, address)
    return res.redirect('/');
}

export { getHomePage, createUserPage, createUser, deleteUser, viewUserPage, updateUser };
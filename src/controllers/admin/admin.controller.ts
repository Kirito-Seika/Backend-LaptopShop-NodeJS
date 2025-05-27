import { Request, Response } from "express";
import { fetchAllRoles, fetchAllUsers, handleCreateUser } from "services/admin/admin.service";

const dashboardPage = async (req: Request, res: Response) => {
    return res.render('admin/dashboard/layout');
}

//CRUD User
const adminUserPage = async (req: Request, res: Response) => {
    const users = await fetchAllUsers();
    return res.render('admin/user/layout', {
        users: users
    });
}

const adminCreateUserPage = async (req: Request, res: Response) => {
    const roles = await fetchAllRoles()
    return res.render('admin/user/create', {
        roles: roles
    });
}

const adminCreateUser = async (req: Request, res: Response) => {
    const { username, email, password, phone, address, role } = req.body;
    const file = req.file;
    const avatar = file?.filename ?? "";
    await handleCreateUser(username, email, password, phone, address, avatar, role);
    return res.redirect('/admin/user');
}

//CRUD Product
const adminProductPage = async (req: Request, res: Response) => {
    return res.render('admin/product/layout');
}

const adminOrderPage = async (req: Request, res: Response) => {
    return res.render('admin/order/layout');
}

export {
    dashboardPage, adminUserPage, adminProductPage, adminOrderPage,
    adminCreateUserPage, adminCreateUser,
}
import { Request, Response } from "express";
import { fetchAllRoles, fetchAllUsers, handleCreateUser } from "services/admin/admin.service";

const dashboardPage = async (req: Request, res: Response) => {
    return res.render('admin/dashboard/layout');
}

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
    const { username, email, password, phone, address, avatar } = req.body;
    // await handleCreateUser(username, email, password, phone, address, avatar);
    return res.redirect('/admin/user');
}

const adminProductPage = async (req: Request, res: Response) => {
    return res.render('admin/product/layout');
}

const adminOrderPage = async (req: Request, res: Response) => {
    return res.render('admin/order/layout');
}

export {
    dashboardPage, adminUserPage, adminProductPage, adminOrderPage,
    adminCreateUserPage, adminCreateUser
}
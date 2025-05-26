import { Request, Response } from "express";
import { fetchAllUser } from "services/user.service";

const dashboardPage = async (req: Request, res: Response) => {
    return res.render('admin/dashboard/layout');
}

const adminUserPage = async (req: Request, res: Response) => {
    const users = await fetchAllUser();
    return res.render('admin/user/layout', {
        users: users
    });
}

const adminCreateUserPage = (req: Request, res: Response) => {
    return res.render('admin/user/create');
}

const adminProductPage = async (req: Request, res: Response) => {
    return res.render('admin/product/layout');
}

const adminOrderPage = async (req: Request, res: Response) => {
    return res.render('admin/order/layout');
}

export {
    dashboardPage, adminUserPage, adminProductPage, adminOrderPage,
    adminCreateUserPage
}
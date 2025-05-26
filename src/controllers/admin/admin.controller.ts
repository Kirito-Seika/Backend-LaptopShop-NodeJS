import { Request, Response } from "express";

const dashboardPage = async (req: Request, res: Response) => {
    return res.render('admin/dashboard/layout');
}

const adminUserPage = async (req: Request, res: Response) => {
    return res.render('admin/user/layout');
}

export { dashboardPage, adminUserPage }
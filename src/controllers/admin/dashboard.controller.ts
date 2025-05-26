import { Request, Response } from "express";

const dashboardPage = async (req: Request, res: Response) => {
    return res.render('admin/dashboard');
}

export { dashboardPage }
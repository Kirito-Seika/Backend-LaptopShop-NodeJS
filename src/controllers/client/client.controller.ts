import { Request, Response } from "express";

const homePage = async (req: Request, res: Response) => {
    return res.render('client/home/layout');
}

const productPage = async (req: Request, res: Response) => {
    return res.render('client/product/layout');
}

export { homePage, productPage }
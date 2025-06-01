import { Request, Response } from "express";
import { fetchProducts } from "services/client/home.service";

const homePage = async (req: Request, res: Response) => {
    const products = await fetchProducts();
    return res.render('client/home/layout', { products });
}

const productPage = async (req: Request, res: Response) => {
    return res.render('client/product/layout');
}

export { homePage, productPage }
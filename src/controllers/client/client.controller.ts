import { Request, Response } from "express";
import { fetchAllCategories } from "services/admin/admin.service";
import { fetchProductById, fetchProducts, fetchRandomProducts } from "services/client/home.service";

const homePage = async (req: Request, res: Response) => {
    const products = await fetchProducts();
    return res.render('client/home/layout', { products });
}

const productPage = async (req: Request, res: Response) => {
    const { id } = req.params;
    const products = await fetchRandomProducts(+id);
    const detailProduct = await fetchProductById(+id);
    const categories = await fetchAllCategories();
    return res.render('client/product/layout', { products, detailProduct, categories });
}

export { homePage, productPage }
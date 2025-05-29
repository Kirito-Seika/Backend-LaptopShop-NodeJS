import { Request, Response } from "express";
import {
    fetchAllCategories,
    fetchAllFactories,
    fetchAllProducts,
    fetchAllRoles, fetchAllUsers, fetchDetailUser,
    handleCreateProduct,
    handleCreateUser, handleDeleteUser,
    handleUpdateUser
} from "services/admin/admin.service";
import { ProductValidator, TProductSchema } from "src/validation/product.validator";

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
    const roles = await fetchAllRoles();
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

const adminDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await handleDeleteUser(id);
    return res.redirect('/admin/user');
}

const adminDetailUserPage = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await fetchDetailUser(id);
    const roles = await fetchAllRoles()
    return res.render('admin/user/detail', { id: id, user: user, roles: roles });
}

const adminUpdateUser = async (req: Request, res: Response) => {
    const { id, username, phone, address, role } = req.body;
    const file = req.file;
    const avatar = file?.filename ?? undefined;
    await handleUpdateUser(id, username, phone, address, avatar, role);
    return res.redirect('/admin/user');
}

//CRUD Product
const adminProductPage = async (req: Request, res: Response) => {
    const products = await fetchAllProducts();
    return res.render('admin/product/layout', {
        products: products
    });
}

const adminCreateProductPage = async (req: Request, res: Response) => {
    const factories = await fetchAllFactories();
    const categories = await fetchAllCategories();
    const errors = [];
    const dataProduct = {
        name: '',
        price: '',
        quantity: '',
        description: '',
        target: '',
        factoryID: '',
        categoryID: '',
    }
    return res.render('admin/product/create', {
        factories, categories, errors, dataProduct
    });
}

const adminCreateProduct = async (req: Request, res: Response) => {
    const { name, price, quantity, description, target, factory, category } = req.body;
    const factories = await fetchAllFactories();
    const categories = await fetchAllCategories();
    const validate = ProductValidator.safeParse(req.body);
    if (validate.error) {
        const err = validate.error.issues;
        const errors = err?.map(item => `${item.message} (${item.path[0]})`);
        const dataProduct = {
            name, price, quantity, description, target, factoryID: factory, categoryID: category
        }
        return res.render('admin/product/create', {
            factories,
            categories,
            errors,
            dataProduct
        });
    }
    const image = req?.file?.filename ?? "";
    await handleCreateProduct(name, +price, +quantity, description, target, factory, category, image);
    return res.redirect('/admin/product');
}

//CRUD Order
const adminOrderPage = async (req: Request, res: Response) => {
    return res.render('admin/order/layout');
}

export {
    dashboardPage, adminUserPage, adminCreateUserPage, adminCreateUser, adminDeleteUser, adminDetailUserPage, adminUpdateUser,
    adminProductPage, adminCreateProductPage, adminCreateProduct,
    adminOrderPage,
}
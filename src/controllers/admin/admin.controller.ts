import { Request, Response } from "express";
import {
    fetchAllCategories,
    fetchAllFactories,
    fetchAllProducts,
    fetchAllRoles, fetchAllUsers, fetchDetailProduct, fetchDetailUser,
    handleCreateProduct,
    handleCreateUser, handleDeleteProduct, handleDeleteUser,
    handleUpdateProduct,
    handleUpdateUser
} from "services/admin/admin.service";
import { ProductValidator, TProductSchema } from "src/validation/product.validator";
import { userDetailValidator, userValidator } from "src/validation/user.validator";

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
    const errors = [];
    const dataUser = {
        username: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        roleID: ''
    }
    return res.render('admin/user/create', {
        roles, errors, dataUser
    });
}

const adminCreateUser = async (req: Request, res: Response) => {
    const { username, email, password, phone, address, role } = req.body;
    const roles = await fetchAllRoles();
    const validate = await userValidator.safeParseAsync(req.body);
    if (!validate.success) {
        const fieldErrors: Record<string, string> = {};
        for (const issue of validate.error.issues) {
            const field = issue.path[0] as string;
            fieldErrors[field] = issue.message;
        }
        const dataUser = {
            username, email, password, phone, address, roleID: role
        }
        return res.render('admin/user/create', {
            roles,
            fieldErrors,
            dataUser
        });
    }
    const avatar = req?.file?.filename ?? "";
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
    const dataUser = await fetchDetailUser(id);
    const roles = await fetchAllRoles();
    const errors = [];
    return res.render('admin/user/detail', { roles, errors, dataUser });
}

const adminUpdateUser = async (req: Request, res: Response) => {
    const { id, username, email, phone, address, role, oldImage } = req.body;
    const roles = await fetchAllRoles();
    const avatar = req?.file?.filename ?? req.body.oldImage;
    const validate = userDetailValidator.safeParse(req.body);
    if (!validate.success) {
        const fieldErrors: Record<string, string> = {};
        for (const issue of validate.error.issues) {
            const field = issue.path[0] as string;
            fieldErrors[field] = issue.message;
        }
        const dataUser = {
            id, username, email, phone, address, roleID: role, avatar
        }
        return res.render('admin/user/detail', {
            roles,
            fieldErrors,
            dataUser
        });
    }
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
        weight: '',
        material: '',
        dimension: '',
        country: '',
        factoryID: '',
        categoryID: '',
    }
    return res.render('admin/product/create', {
        factories, categories, errors, dataProduct
    });
}

const adminCreateProduct = async (req: Request, res: Response) => {
    const {
        name, price, quantity, description, target, weight,
        material, dimension, country, factory, category
    } = req.body;
    const factories = await fetchAllFactories();
    const categories = await fetchAllCategories();
    const validate = ProductValidator.safeParse(req.body);
    if (!validate.success) {
        const fieldErrors: Record<string, string> = {};
        for (const issue of validate.error.issues) {
            const field = issue.path[0] as string;
            fieldErrors[field] = issue.message;
        }
        const dataProduct = {
            name, price, quantity, description, target, weight,
            material, dimension, country, factoryID: factory, categoryID: category
        }
        return res.render('admin/product/create', {
            factories,
            categories,
            fieldErrors,
            dataProduct
        });
    }
    const image = req?.file?.filename ?? "";
    await handleCreateProduct(
        name, +price, +quantity, description, target, +weight,
        material, dimension, country, factory, category, image
    );
    return res.redirect('/admin/product');
}

const adminDetailProductPage = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await fetchDetailProduct(id);
    const factories = await fetchAllFactories();
    const categories = await fetchAllCategories();
    const errors = [];
    return res.render('admin/product/detail', { factories, categories, errors, product });
}

const adminUpdateProduct = async (req: Request, res: Response) => {
    const {
        id, name, price, quantity, description, target, weight,
        material, dimension, country, factory, category, oldImage
    } = req.body;
    const factories = await fetchAllFactories();
    const categories = await fetchAllCategories();
    const validate = ProductValidator.safeParse(req.body);
    const image = req?.file?.filename ?? req.body.oldImage;
    if (!validate.success) {
        const fieldErrors: Record<string, string> = {};
        for (const issue of validate.error.issues) {
            const field = issue.path[0] as string;
            fieldErrors[field] = issue.message;
        }
        const product = {
            id, name, price, quantity, description, target, weight,
            material, dimension, country, factoryID: factory, categoryID: category, image
        }
        return res.render('admin/product/detail', {
            factories,
            categories,
            fieldErrors,
            product
        });
    }
    await handleUpdateProduct(
        id, name, +price, +quantity, description, target, +weight,
        material, dimension, country, factory, category, image
    );
    return res.redirect('/admin/product');
}

const adminDeleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    await handleDeleteProduct(id);
    return res.redirect('/admin/product');
}

//CRUD Order
const adminOrderPage = async (req: Request, res: Response) => {
    return res.render('admin/order/layout');
}

export {
    dashboardPage, adminUserPage, adminCreateUserPage, adminCreateUser, adminDeleteUser, adminDetailUserPage, adminUpdateUser,
    adminProductPage, adminCreateProductPage, adminCreateProduct, adminDetailProductPage, adminDeleteProduct, adminUpdateProduct,
    adminOrderPage,
}
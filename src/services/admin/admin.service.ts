import { prisma } from "config/client";
import { ACCOUNT_TYPE } from "config/constant";
import bcrypt from "bcrypt";

const saltRounds = 10;

const hashPassword = async (plainText: string) => {
    return await bcrypt.hash(plainText, saltRounds)
}

const fetchAllUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
}

const fetchAllRoles = async () => {
    const roles = await prisma.role.findMany();
    return roles;
}

const fetchAllProducts = async () => {
    const products = await prisma.product.findMany();
    return products;
}

const fetchAllFactories = async () => {
    const factories = await prisma.factory.findMany();
    return factories;
}

const fetchAllCategories = async () => {
    const categories = await prisma.category.findMany();
    return categories;
}

//CRUD User
const handleCreateUser = async (
    username: string, email: string, password: string,
    phone: string, address: string, avatar: string, role: string
) => {
    const defaultPassword = await hashPassword(password);
    const createUser = await prisma.user.create({
        data: {
            username: username,
            email: email,
            password: defaultPassword,
            phone: phone,
            address: address,
            avatar: avatar,
            accountType: ACCOUNT_TYPE.SYSTEM,
            roleID: +role
        }
    })
    return createUser;
}

const handleDeleteUser = async (id: string) => {
    const deleteUser = await prisma.user.delete({
        where: {
            id: +id
        },
    })
    return deleteUser;
}

const fetchDetailUser = async (id: string) => {
    const viewUser = await prisma.user.findUnique({
        where: {
            id: +id
        },
    })
    return viewUser;
}

const handleUpdateUser = async (
    id: string, username: string, phone: string,
    address: string, avatar: string, role: string
) => {
    const updateUser = await prisma.user.update({
        where: {
            id: +id,
        },
        data: {
            username: username,
            phone: phone,
            address: address,
            ...(avatar !== undefined && { avatar: avatar }),
            roleID: +role
        },
    })
    return updateUser;
}

//CRUD Product
const handleCreateProduct = async (
    name: string, price: number, quantity: number,
    description: string, target: string, factory: string, category: string, imageUpload: string
) => {
    const createProduct = await prisma.product.create({
        data: {
            name: name,
            price: price,
            quantity: quantity,
            description: description,
            target: target,
            factoryID: +factory,
            categoryID: +category,
            ...(imageUpload && { image: imageUpload })
        }
    })
    return createProduct;
}

export {
    hashPassword, fetchAllUsers, fetchAllRoles, handleCreateUser, handleDeleteUser, fetchDetailUser, handleUpdateUser,
    fetchAllProducts, fetchAllFactories, fetchAllCategories, handleCreateProduct
}
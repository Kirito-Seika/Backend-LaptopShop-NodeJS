import { prisma } from "config/client";
import Connection from "config/database";

const fetchAllUser = async () => {
    const users = await prisma.user.findMany();
    return users;
}

const handleCreateUser = async (name: string, email: string, address: string) => {
    const createUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            address: address
        }
    })
    return createUser;
}

const handleViewUser = async (id: string) => {
    const viewUser = await prisma.user.findUnique({
        where: {
            id: +id
        },
    })
    return viewUser;
}

const handleUpdateUser = async (id: string, name: string, email: string, address: string) => {
    const updateUser = await prisma.user.update({
        where: {
            id: +id,
        },
        data: {
            name: name,
            email: email,
            address: address
        },
    })
    return updateUser;
}

const handleDeleteUser = async (id: string) => {
    const deleteUser = await prisma.user.delete({
        where: {
            id: +id
        },
    })
    return deleteUser;
}

export { fetchAllUser, handleCreateUser, handleDeleteUser, handleViewUser, handleUpdateUser }
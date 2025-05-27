import { prisma } from "config/client";

const fetchAllUser = async () => {
    const users = await prisma.user.findMany();
    return users;
}



const handleViewUser = async (id: string) => {
    const viewUser = await prisma.user.findUnique({
        where: {
            id: +id
        },
    })
    return viewUser;
}

const handleUpdateUser = async (id: string, username: string, email: string, address: string) => {
    const updateUser = await prisma.user.update({
        where: {
            id: +id,
        },
        data: {
            username: username,
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

export { fetchAllUser, handleDeleteUser, handleViewUser, handleUpdateUser }
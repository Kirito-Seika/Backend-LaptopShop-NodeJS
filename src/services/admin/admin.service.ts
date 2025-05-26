import { prisma } from "config/client";

const fetchAllUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
}

const fetchAllRoles = async () => {
    const roles = await prisma.role.findMany();
    return roles;
}

const handleCreateUser = async (
    username: string, email: string, password: string,
    phone: string, address: string, avatar: string
) => {
    const createUser = await prisma.user.create({
        data: {
            username: username,
            email: email,
            password: password,
            phone: phone,
            address: address,
            avatar: avatar
        }
    })
    return createUser;
}

export { fetchAllUsers, fetchAllRoles, handleCreateUser }
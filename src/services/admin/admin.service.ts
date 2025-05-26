import { prisma } from "config/client";

const fetchAllUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
}

const fetchAllRoles = async () => {
    const roles = await prisma.role.findMany();
    return roles;
}

export { fetchAllUsers, fetchAllRoles }
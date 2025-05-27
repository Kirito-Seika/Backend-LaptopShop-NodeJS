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



export { hashPassword, fetchAllUsers, fetchAllRoles, handleCreateUser }
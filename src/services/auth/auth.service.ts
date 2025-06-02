import { prisma } from "config/client"
import { ACCOUNT_TYPE } from "config/constant";
import { hashPassword } from "services/admin/admin.service";

const checkEmailExist = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    if (user) {
        return true;
    } else {
        return false;
    }
}

const handleRegister = async (
    username: string, email: string, password: string, phone: string,
    address: string, avatar: string
) => {
    const newPassword = await hashPassword(password);
    const userRole = await prisma.role.findUnique({
        where: {
            name: 'USER'
        }
    })
    if (userRole) {
        await prisma.user.create({
            data: {
                username,
                email,
                password: newPassword,
                phone,
                address,
                avatar,
                accountType: ACCOUNT_TYPE.SYSTEM,
                roleID: userRole.id
            }
        })
    } else {
        throw new Error("User role không tồn tại")
    }
}

export { checkEmailExist, handleRegister }
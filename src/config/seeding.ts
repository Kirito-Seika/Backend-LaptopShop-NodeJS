import { prisma } from "config/client";
import { hashPassword } from "services/admin/admin.service";
import { ACCOUNT_TYPE } from "./constant";

const createDatabase = async () => {
    const countUser = await prisma.user.count();
    const countRole = await prisma.role.count();
    const defaultPassword = await hashPassword('123456');
    if (countUser === 0) {
        await prisma.user.createMany({
            data: [
                {
                    username: 'Admin',
                    email: 'admin@gmail.com',
                    password: defaultPassword,
                    address: 'Hà Nội',
                    phone: '0156241416',
                    accountType: ACCOUNT_TYPE.SYSTEM,
                    avatar: ''
                },
                {
                    username: 'User',
                    email: 'user@gmail.com',
                    password: defaultPassword,
                    address: 'Hà Nội',
                    phone: '0156241416',
                    accountType: ACCOUNT_TYPE.SYSTEM,
                    avatar: ''
                },
                {
                    username: 'Nguyễn Minh Đức',
                    email: 'minhducnguyen.dev@gmail.com',
                    password: defaultPassword,
                    address: 'Hà Nội',
                    phone: '0156241416',
                    accountType: ACCOUNT_TYPE.SYSTEM,
                    avatar: ''
                }
            ]
        });
    } else if (countRole === 0) {
        await prisma.role.createMany({
            data: [
                {
                    name: 'ADMIN',
                    description: 'Admin có tất cả quyền hạn'
                },
                {
                    name: 'USER',
                    description: 'User chỉ có quyền hạn thông thường'
                },
            ]
        });
    } else {
        console.log('Already Create Data...');
    }

}

export default createDatabase;
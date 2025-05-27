import { prisma } from "config/client";
import { hashPassword } from "services/admin/admin.service";
import { ACCOUNT_TYPE } from "./constant";

const createDatabase = async () => {
    const countUser = await prisma.user.count();
    const countRole = await prisma.role.count();
    const defaultPassword = await hashPassword('123456');
    if (countRole === 0) {
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
    }
    if (countUser === 0) {
        const adminRole = await prisma.role.findFirst({
            where: {
                name: 'ADMIN'
            }
        })
        const userRole = await prisma.role.findFirst({
            where: {
                name: 'USER'
            }
        })
        if (adminRole && userRole) {
            await prisma.user.createMany({
                data: [
                    {
                        username: 'Admin',
                        email: 'admin@gmail.com',
                        password: defaultPassword,
                        address: 'Hà Nội',
                        phone: '0156241416',
                        accountType: ACCOUNT_TYPE.SYSTEM,
                        avatar: '',
                        roleID: adminRole.id
                    },
                    {
                        username: 'User',
                        email: 'user@gmail.com',
                        password: defaultPassword,
                        address: 'Hà Nội',
                        phone: '0156241416',
                        accountType: ACCOUNT_TYPE.SYSTEM,
                        avatar: '',
                        roleID: userRole.id
                    },
                    {
                        username: 'Hoàng Linh Nhi',
                        email: 'nekkochan2k@gmail.com',
                        password: defaultPassword,
                        address: 'Hà Nội',
                        phone: '0156241416',
                        accountType: ACCOUNT_TYPE.SYSTEM,
                        avatar: '',
                        roleID: adminRole.id
                    }
                ]
            });
        }
    }
    if (countRole !== 0 && countUser !== 0) {
        console.log('Already Create Data...');
    }

}

export default createDatabase;
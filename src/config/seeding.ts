import { prisma } from "config/client";

const createDatabase = async () => {
    const countUser = await prisma.user.count();
    if (countUser === 0) {
        await prisma.user.createMany({
            data: [
                {
                    username: 'Kirito Nguyen',
                    email: 'admin@gmail.com',
                    password: '123456',
                    address: 'Ha Noi',
                    phone: '0156241416',
                    accountType: 'SYSTEM',
                    avatar: ''
                },
                {
                    username: 'Duc Nguyen',
                    email: 'kiritonguyen@gmail.com',
                    password: '123456',
                    address: 'Ha Noi',
                    phone: '0156241416',
                    accountType: 'SYSTEM',
                    avatar: ''
                },
                {
                    username: 'Minh Duc Nguyen',
                    email: 'minhducnguyen.dev@gmail.com',
                    password: '123456',
                    address: 'Ha Noi',
                    phone: '0156241416',
                    accountType: 'SYSTEM',
                    avatar: ''
                }
            ]
        });
    } else {
        console.log('Already Create Data...');
    }

}

export default createDatabase;
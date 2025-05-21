import { prisma } from "config/client";
import Connection from "config/database";

const fetchAllUser = async () => {
    const users = await prisma.user.findMany();
    return users;
}

const handleCreateUser = async (name: string, email: string, address: string) => {
    const user = await prisma.user.create({
        data: {
            name: name,
            email: email,
            address: address
        }
    })
    return user;
}

const handleDeleteUser = async (id: string) => {
    const connection = await Connection();
    try {
        const sql = 'DELETE FROM `user` WHERE `id` = ? LIMIT 1';
        const values = [id];

        const [results, fields] = await connection.execute(sql, values);

        return results;
    } catch (err) {
        console.log(err);
        return [];
    }
}

const handleViewUser = async (id: string) => {
    const connection = await Connection();
    try {
        const sql = 'SELECT * FROM `user` WHERE `id` = ?';
        const values = [id];

        const [results, fields] = await connection.execute(sql, values);

        return results[0];
    } catch (err) {
        console.log(err);
        return [];
    }
}

const handleUpdateUser = async (id: string, name: string, email: string, address: string) => {
    const connection = await Connection();
    try {
        const sql = 'UPDATE `user` SET `name` = ?, `email` = ?, `address` = ?  WHERE `id` = ?';
        const values = [name, email, address, id];

        const [results, fields] = await connection.execute(sql, values);

        return results[0];
    } catch (err) {
        console.log(err);
    }
}

export { fetchAllUser, handleCreateUser, handleDeleteUser, handleViewUser, handleUpdateUser }
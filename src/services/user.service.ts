import Connection from "config/database";

const fetchAllUser = async () => {
    const connection = await Connection();
    try {
        const [results, fields] = await connection.query(
            'SELECT * FROM `users`'
        );
        return results;
    } catch (err) {
        console.log(err);
        return [];
    }
}

const handleCreateUser = async (name: string, email: string, address: string) => {
    //insert into database
    const connection = await Connection();
    try {
        const sql = 'INSERT INTO `users`(`name`, `email`, `address`) VALUES (?, ?, ?)';
        const values = [name, email, address];

        const [results, fields] = await connection.execute(sql, values);
        return results;
    } catch (err) {
        console.log(err);
        return [];
    }
}

const handleDeleteUser = async (id: string) => {
    //insert into database
    const connection = await Connection();
    try {
        const sql = 'DELETE FROM `users` WHERE `id` = ? LIMIT 1';
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
        const sql = 'SELECT * FROM `users` WHERE `id` = ?';
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
        const sql = 'UPDATE `users` SET `name` = ?, `email` = ?, `address` = ?  WHERE `id` = ?';
        const values = [name, email, address, id];

        const [results, fields] = await connection.execute(sql, values);

        return results[0];
    } catch (err) {
        console.log(err);
    }
}

export { fetchAllUser, handleCreateUser, handleDeleteUser, handleViewUser, handleUpdateUser }
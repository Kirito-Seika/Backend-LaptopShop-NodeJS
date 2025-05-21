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

    //return result
    console.log("Check name: ", name);
    console.log("Check email: ", email);
    console.log("Check address: ", address);
}

export { fetchAllUser, handleCreateUser }
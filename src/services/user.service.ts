import Connection from "../config/database";

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

const handleCreateUser = (name: string, email: string, address: string) => {
    //insert into database

    //return result
    console.log("Check name: ", name);
    console.log("Check email: ", email);
    console.log("Check address: ", address);
}

export { fetchAllUser, handleCreateUser }
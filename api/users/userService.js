//import the pool
const pool = require("../../config/database");

module.exports = {
    //method create to recieve data from the controller
    create: (data, callBack) => {
        //query to insert data into the database
        pool.query(
            `insert into registration(firstName, lastName, gender, email, password, number)
                values(?,?,?,?,?,?)`,
                [
                    data.firstName,
                    data.lastName,
                    data.gender,
                    data.email,
                    data.password,
                    data.number
                ],
                //return the result if success otherwise return the error
                (error, results, fields) => {
                    if(error) {
                        return callBack(error)
                    }
                    return callBack(null, results)
                }
        );
    }
}


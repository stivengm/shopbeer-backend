import { getConnection } from '../database/connection.js';


export const getProducts = async (req, res) => {

    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM Product');

    console.log(result);


    res.json({
        code: 'F100',
        message: 'Se encontraron los productos',
        data: result.recordset

    })
}
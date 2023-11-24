import sql from 'mssql';

const dbSettings = {
    user: 'connectionback',
    password: 'Superankes15!',
    server: 'localhost',
    port: 1433,
    database: 'ShopBeer',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.log(error);
    }
}
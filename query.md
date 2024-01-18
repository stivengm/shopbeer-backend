

---------------------------------------------------------------------------------------

    ************ CREACIÓN DE TABLA NOTIFICACIONES ************  


    const result = await pool.query(`
        CREATE TABLE Notifications(
            id SERIAL PRIMARY KEY,
            name VARCHAR(50),
            description VARCHAR(50),
            isActive INT NOT NULL
        )
    `);

    res.json(result.rows[0]);


---------------------------------------------------------------------------------------

    ************ CREACIÓN DE TABLA Conjunto ************  

    const result = await pool.query(`
        CREATE TABLE ResidentialLocation(
            id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            description VARCHAR(150),
            isAvailable INT NOT NULL
        )
    `);

    res.json(result.rows[0]);
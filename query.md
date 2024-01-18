

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

    ************ CREACIÓN DE TABLA CONJUNTO RESIDENCIAL ************  

    const result = await pool.query(`
        CREATE TABLE ResidentialLocation(
            id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            description VARCHAR(150),
            isAvailable INT NOT NULL
        )
    `);

    res.json(result.rows[0]);


---------------------------------------------------------------------------------------

    ************ CREACIÓN DE TABLA USUARIOS ************  

    const result = await pool.query(`
        CREATE TABLE Users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(50),
            email VARCHAR(50),
            password VARCHAR(50),
            phoneNumber VARCHAR(15),
            isActive INT NOT NULL,
            isAdmin INT NOT NULL,
            idResidentialLocation INT NOT NULL,
            CONSTRAINT fk_ResidentialLocation FOREIGN KEY (idResidentialLocation) REFERENCES ResidentialLocation (id)
        )
    `);

    res.json(result.rows[0]);


---------------------------------------------------------------------------------------

    ************ CREACIÓN DE TABLA CATEGORÍA ************  

    const result = await pool.query(`
        CREATE TABLE Category(
            id SERIAL PRIMARY KEY,
            name VARCHAR(50),
            isAvailable INT
        )
    `);
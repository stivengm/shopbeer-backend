

---------------------------------------------------------------------------------------

    ************ CREACIÓN DE TABLA NOTIFICACIONES ************  


    const resultTableNotifications = await pool.query(`
        CREATE TABLE Notifications(
            id SERIAL PRIMARY KEY,
            name VARCHAR(50),
            description VARCHAR(50),
            isActive INT NOT NULL
        )
    `);

    res.json(resultTableNotifications.rows[0]);


---------------------------------------------------------------------------------------
import { Connection } from "tedious";

const config = {
    server: 'localhost\SQLEXPRESS',
    authentication: {
        type: 'default',
        options: {
            userName: 'Pruebas',
            password: 'Pruebas123456789'
        }
    }
}

const Connection = new Connection(config);

Connection.connect();
# Información
Proyecto desarrollado en NodeJS con Express.

## Creación del proyecto

```sh
npm init -y //Éste comando será para crear un archivo `package.json`.
npm i express //Éste comando será para instalar express en el proyecto.
npm i express //Éste comando será para instalar express en el proyecto.
```

## Ejecución del proyecto

La forma más común para ejecutar el proyecto es ejecutar el comando `node index.js`, pero con esto tendría que bajar el servidor y volver a subirlo con el mismo comando. Para evitar esto se puede instalar el paquete `nodemon` y con esto se ejecutará con `npm run dev` configurándolo desde los scripts en el `package.json`.


## Códigos de respuesta - SERVICIOS

Los códigos de respuesta están diseñados para saber si la transacción fue realizada, si la creación o actualización fue satisfactoria o errónea.


### Consultas

    F100 --> La consulta ha sido satisfactoria.
    F200 --> Ha ocurrido un error en la consulta.


### Creación

    TRX001 --> Se ha creado satisfactoriamente el recurso.
    TRX002 --> Ha ocurrido un error en la creación.


### Actualizaciones.


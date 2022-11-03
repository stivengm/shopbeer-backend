# Información
Proyecto desarrollado en NodeJS con Express.

## Creación del proyecto

```sh
npm init -y //Éste comando será para crear un archivo `package.json`.
npm i express //Éste comando será para instalar express en el proyecto.
```

## Ejecución del proyecto

La forma más común para ejecutar el proyecto es ejecutar el comando `node index.js`, pero con esto tendría que bajar el servidor y volver a subirlo con el mismo comando. Para evitar esto se puede instalar el paquete `nodemon` y con esto se ejecutará con `npm run dev` configurándolo desde los scripts en el `package.json`.
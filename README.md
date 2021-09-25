# Coderhouse Ecommerce
## Desarrollado por: Federico González
## Sobre el proyecto:
Ecommerce desarrollado en React como parte del proyecto final del curso de CoderHouse. A los fines de la persistencia de los datos se implementó Firestore. 

La navegación incluye: 
+ Pantalla principal con todos los productos.
+ Pantalla de categorías.
+ Pantalla de producto con detalle.
+ Pantalla de carrito.

El usuario puede agregar un producto al carrito tanto desde la pantalla de producto.

La cantidad máxima de cada producto que el usuario puede agragar al carrito depende del stock disponible del mismo.

El usuario puede enviar un pedido ingresando sus datos desde la pantalla de carrito. Luego se actualizará automáticamente el stock de los productos comprados.

La barra de navegación muestra la cantidad de items que el usuario ha agregado al carrito.

![Demostración](https://nazgul.com.ar/images/demo.gif)

#### Instrucciones de instalación

```
	npm install
	npm start
	// Abrir el navegodor y dirigirse a: https://localhost:3000
```

#### Configurar entorno

2. Editar el archivo __.env__ en la carpeta raíz del proyecto y cargar las siguientes propiedades de Firebase en de caso de querer usar credenciales propias:

> REACT_APP_APIKEY=
> REACT_APP_AUTHDOMAIN=
> REACT_APP_PREYECTID=
> REACT_APP_STORAGEBUCKET=
> REACT_APP_MESSAGINGSENDERID=
> REACT_APP_APPID=

#### Documentación de React
[Documentación de React](https://reactjs.org/)

#### Otros recuros
[Axios](https://www.npmjs.com/package/axios)
[Node-Sass](https://www.npmjs.com/package/node-sass)

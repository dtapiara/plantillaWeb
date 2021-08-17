# Página web

El desarrollo conlleva una página estática con el objetivo de subirla a Github.

### Configuración

En `src/static` se encuentra un archivo `CONSTTemplate.js` que contiene todo el material escrito de la página y su formato, para modificar el texto que aparece en el inicio, se debe crear una copia con el nombre `CONST.js` y colocar el texto que quieren que aparezca.

### Imagenes

Las imagenes deben ir en la carpeta `public` y se llamados en el archivo anteriormente mencionado.

### Build

Para que el proyecto pueda ser subido a la plataforma, primero hay que aplicar un build, para esto, se debe ejecutar

```bash
npm run build
```
para realizar la construcción de la página. Como resultado se obtendrá una carpeta `build` que debe ser subida al repositorio para tener su página.

### Trabajo
Realizado en [React](https://es.reactjs.org/) junto a [ANTDesign](https://ant.design/)
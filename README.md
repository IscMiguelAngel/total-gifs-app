# Total Gifs App

Este proyecto es una aplicación web desarrollada con React JS y Vite JS (como entorno de desarrollo), que permite realizar búsquedas de GIFs utilizando la API de [Giphy](https://giphy.com/). Fue creado como parte de un curso de React JS en Udemy dictado por [Fernando Herrera](https://github.com/Klerith).

# VISTA PREVIA
**Link de la vista previa:** [Total Gifs App](https://totalgifsapp.netlify.app/)

## Características Originales del Proyecto

- **Búsquedas con FETCH:** La aplicación realiza peticiones FETCH a la API de Giphy cuando el usuario realiza una búsqueda.
- **Visualización en Cuadrícula:** Los GIFs obtenidos de la API se muestran en una cuadrícula.
- **Múltiples Búsquedas:** Originalmente, los resultados de nuevas búsquedas se agregaban encima de los resultados anteriores.
- **Sin Responsividad:** La aplicación no contaba con diseño responsivo y los GIFs no mantenían un tamaño fijo, lo que afectaba la experiencia de usuario.

## Modificaciones Realizadas

- **Sustitución de Resultados:** Al realizar una nueva búsqueda, los resultados anteriores se sustituyen por los nuevos.
- **Diseño Responsivo:** La cuadrícula ahora cuenta con un diseño limpio y es completamente responsiva. Los GIFs mantienen un tamaño fijo dependiendo del tamaño de la pantalla y de la cuadrícula.
- **Funciones Adicionales:**
  - **Visualización en Pantalla Grande:** Al hacer clic en un GIF, este se muestra en un modal en pantalla completa. En el modal se encuentran opciones para cerrar la ventana y descargar el GIF.
  - **Descarga de GIF:** Se agregó un botón en el modal para descargar el GIF seleccionado.

## Tecnologías Utilizadas

- React JS
- Fetch API
- CSS para el diseño responsivo
- [Giphy API](https://developers.giphy.com/)

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/total-gifs-app.git
2. Navega al directorio del proyecto:
    cd total-gifs-app
3. Instala las dependencias:
    npm install
4. Ejecuta la aplicación:
    npm run dev
5. Abre tu navegador y ve a http://localhost:5173 para ver la aplicación en funcionamiento

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (git checkout -b feature/nueva-funcion).
3. Realiza los cambios necesarios y haz un commit (git commit -m 'Agregar nueva función').
4. Haz push a la rama (git push origin feature/nueva-funcion).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la MIT License.

Este archivo refleja que estás utilizando Vite como tu herramienta de desarrollo.
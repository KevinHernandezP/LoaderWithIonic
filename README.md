![enter image description here](https://pixelpro.es/pagamastarde/wp-content/uploads/2021/07/ionicangular.png)



1. Título del Proyecto:
Nombre del Proyecto:  Loader Component con Ionic y Angular

2. Descripción del Proyecto:
Este proyecto consiste en un componente loader reutilizable desarrollado con Ionic y Angular. El loader muestra una secuencia de imágenes con textos, que se actualizan a intervalos configurables. Puede ser utilizado en diferentes componentes de la aplicación y se gestiona a través de un servicio para controlar su estado.

3. Tecnologías Usadas:

    Ionic: 8.3.2,
   
    Angular,
   
    TypeScript,
   
    HTML/CSS
4. Componentes Principales

a. Loader Component:

    Descripción: Componente que muestra un loader con imágenes y texto.
    Inputs:
        images: Arreglo de objetos con src y text.
        interval: Tiempo en milisegundos entre cambios de imagen.
    Métodos:
        startLoader(): Inicia la secuencia de imágenes.

b. Profile Component:

    Descripción: Página que permite navegar de vuelta a la página de inicio.
    Métodos:
        goHome(): Detiene el loader y navega a /home.

c. Home Component:

    Descripción: Página de inicio donde se puede mostrar el loader.
    Métodos:
        toggleLoader(): Alterna la visibilidad del loader.

5. Servicios

LoaderService:

    Descripción: Servicio para manejar el estado del loader.
    Métodos:
        show(): Muestra el loader.
        hide(): Oculta el loader.
    Observable: loading$: Observable que emite el estado del loader.

6. Uso del Loader en Otros Componentes:

Instrucciones sobre cómo agregar el loader a otros componentes:

    Inyectar el LoaderService.
    Suscribirse al observable loading$.
    Utilizar el loader en el HTML.

7. Instrucciones de Instalación

Guía sobre cómo instalar y ejecutar el proyecto:

    Clona el repositorio.
    Navega a la carpeta del proyecto.
    Ejecuta `npm install` para instalar las dependencias.
    Ejecuta ionic serve para iniciar la aplicación.

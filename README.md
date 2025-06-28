<p align="center"><img src="https://robohash.org/random-robots.webp" width="200" alt="Next Movies Logo"></p>

<p align="center">
<a href="https://github.com/Manuelentrena/random-robots/actions"><img src="https://github.com/Manuelentrena/random-robots/actions/workflows/deploy.yml/badge.svg" alt="Build Status"></a>
<a href="https://app.codecov.io/gh/Manuelentrena/random-robots"><img src="https://img.shields.io/codecov/c/github/Manuelentrena/random-robots" alt="Test Coverage"></a>
</p>

# Random Robots

## Descripción

Esta aplicación permite a los usuarios buscar robots aletorios a través de una interfaz intuitiva y visualizar los resultados, además de obtener detalles de cada robot. Se ha usado arquitectura hexagonal, testing avanzado con msw para los test de integración, y el framework CSS de NES para darle un toque retro al proyecto. Además hemos simulado la entrega a produccion con github actions y la creación de su imagen para producción.

<p align="center"><img src="https://imagedelivery.net/vkH-_KAmKeWBBVeCxTyWtQ/d31321d8-7231-4693-8488-e9d7a7c5be00/public" width="800" alt="Next Movies Mobile"></p>

## Funcionalidades

- **Búsqueda**: Un campo de entrada siempre visible para buscar robots por nombre.
- **Mostrar Resultados**: Los resultados de la búsqueda se presentan en una lista que incluye el avatar e información de contacto.
- **Detalle de Robot**: Al hacer click en el robot, se redirige a una página con más información detallada.
- **Mapa**: Dentro de la página de detalle puedes encontrar un mapa interactivo para ver de donde es el robot.
- **Reset del Formulario**: Puedes reiniciar el listado de robots.
- **Scroll Infinito**: Tiene un scroll infinito de los robots.
- **Estilo Personalizado**: Diseño estético basado en la consola NES.
- **Tipado con TypeScript**: Todas las estructuras de datos están tipadas para garantizar un desarrollo más seguro y eficiente.

## Tecnologías Utilizadas

- **React 19**
- **Context**
- **randomuser.me API**
- **robohash.org API**
- **TypeScript**
- **Fetch API**

## Comandos

A continuación, se describen los comandos disponibles para gestionar el proyecto:

**`dev`**  
Inicia el servidor de desarrollo con Vite. Permite hot module replacement (HMR) para ver los cambios en tiempo real.

```bash
npm run dev
```

**`build`**  
Compila la aplicación para producción usando Vite. Genera los archivos optimizados en la carpeta `dist`.

```bash
npm run build
```

**`preview`**  
Sirve localmente la build de producción generada en `dist` para verificarla antes de desplegar.

```bash
npm run preview
```

**`format`**  
Formatea automáticamente todo el código del proyecto usando Prettier.

```bash
npm run format
```

**`lint`**  
Analiza el código con ESLint para encontrar y reportar problemas en archivos `.ts` y `.tsx`.

```bash
npm run lint
```

**`test`**  
Ejecuta todos los tests definidos en el proyecto usando Jest.

```bash
npm run test
```

**`test:watch`**  
Inicia Jest en modo watch, reejecutando los tests al detectar cambios en el código.

```bash
npm run test:watch
```

**`test:coverage`**  
Ejecuta los tests y genera un reporte de cobertura de código usando Jest.

```bash
npm run test:coverage
```

## Docker en produccion

Tienes en el ropo la imagen de docker en produccion generada. Puedes descargartelo de:

```bash
docker pull ghcr.io/manuelentrena/random-robots:v1.0.2
```

Una vez descargada puedes levantar la imagen con el siguiente comando:

```bash
docker run ghcr.io/manuelentrena/random-robots:v1.0.2
```

## Test Coverage

Visita los test en la página:

```bash
  https://app.codecov.io/gh/Manuelentrena/random-robots
```

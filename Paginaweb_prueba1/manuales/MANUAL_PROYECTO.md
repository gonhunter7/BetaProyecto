# Manual completo del proyecto "paginawebgrup6"

## Índice
1. Introducción
2. Conceptos básicos
3. Tecnologías y frameworks usados
4. Estructura del proyecto y explicación de carpetas/archivos
5. Explicación línea por línea de cada archivo
6. Instalación y ejecución paso a paso
7. Personalización y ejemplos
8. Buenas prácticas
9. Glosario
10. Preguntas frecuentes (FAQ)
11. Errores comunes y soluciones
12. Recursos recomendados
13. Diagramas y visualizaciones

---

# 1. Introducción

Este manual está diseñado para que cualquier persona, incluso sin experiencia previa en programación, pueda entender cómo funciona el proyecto "paginawebgrup6". Aquí aprenderás desde los conceptos más básicos hasta el detalle de cada archivo, línea de código, tecnología y herramienta utilizada.

El objetivo es que puedas modificar, ampliar y crear tus propios proyectos web con confianza, entendiendo el porqué de cada decisión y cada línea de código.

# 2. Conceptos básicos

## ¿Qué es programar?
Programar es dar instrucciones a una computadora para que realice tareas específicas. Estas instrucciones se escriben en un lenguaje que la máquina puede entender, llamado lenguaje de programación.

## ¿Qué es un archivo y una carpeta?
- **Archivo:** Es un documento digital que contiene información (texto, código, imágenes, etc.).
- **Carpeta:** Es un contenedor donde puedes guardar archivos y otras carpetas para mantener todo organizado.

## ¿Qué es una extensión de archivo?
La extensión es lo que va después del punto en el nombre del archivo (por ejemplo, `.js`, `.astro`, `.json`). Indica el tipo de archivo y cómo debe ser interpretado.

## ¿Qué es un script?
Un script es un archivo de texto que contiene instrucciones para ser ejecutadas por un programa (por ejemplo, Node.js o el navegador web).

## ¿Qué es un módulo?
Un módulo es un archivo o conjunto de archivos que exportan funciones, variables o clases para ser usados en otros archivos, ayudando a organizar el código.

## ¿Qué es una librería?
Una librería es un conjunto de código ya escrito por otras personas que puedes usar para no tener que reinventar la rueda. Por ejemplo, TailwindCSS es una librería de estilos.

## ¿Qué es un framework?
Un framework es una estructura de trabajo que te da una base y reglas para desarrollar aplicaciones de manera más rápida y ordenada. Astro es un framework para crear páginas web.

## ¿Qué es el frontend y el backend?
- **Frontend:** Es la parte de la web que ve y usa el usuario (la interfaz, los botones, los menús, etc.).
- **Backend:** Es la parte que funciona "detrás de escena", procesando datos, guardando información, etc. En este proyecto, solo usamos frontend de ejemplo.

---

# 3. Tecnologías y frameworks usados

En este proyecto se utilizan varias tecnologías y herramientas modernas para crear una página web. Aquí te explico cada una desde cero:

## ¿Qué es Node.js?
Node.js es un programa que te permite ejecutar código JavaScript fuera del navegador, es decir, en tu propia computadora. Es necesario para instalar y ejecutar herramientas modernas de desarrollo web.

- **¿Por qué se usa aquí?**
  - Permite instalar y ejecutar Astro, TailwindCSS y otras herramientas.
  - Permite correr comandos en la terminal como `npm install` o `npm run dev`.

## ¿Qué es npm?
NPM significa "Node Package Manager". Es el sistema que se usa para instalar librerías y herramientas en proyectos de Node.js. Cuando escribes `npm install`, estás usando npm para descargar e instalar dependencias.

## ¿Qué es Astro?
Astro es un framework para crear páginas web modernas. Permite escribir componentes y páginas de forma modular, y genera sitios rápidos y optimizados.

- **¿Por qué se usa aquí?**
  - Permite separar el código en componentes y páginas.
  - Hace que el sitio sea fácil de mantener y escalar.

## ¿Qué es TailwindCSS?
TailwindCSS es una librería de estilos (CSS) que te permite diseñar páginas web usando clases predefinidas. En vez de escribir CSS tradicional, usas clases como `bg-blue-700` o `text-center` directamente en el HTML o componentes.

- **¿Por qué se usa aquí?**
  - Hace que el diseño sea rápido y consistente.
  - Permite personalizar fácilmente los estilos.

## ¿Qué es TypeScript?
TypeScript es un lenguaje de programación basado en JavaScript, pero con "tipos". Los tipos ayudan a evitar errores y hacen que el código sea más fácil de entender y mantener.

- **¿Por qué se usa aquí?**
  - Ayuda a detectar errores antes de ejecutar el código.
  - Hace que el código sea más robusto y fácil de leer.

## ¿Qué es Vite?
Vite es una herramienta que ayuda a desarrollar páginas web de forma rápida. Sirve para "levantar" un servidor de desarrollo y compilar el código para producción.

- **¿Por qué se usa aquí?**
  - Hace que el desarrollo sea más rápido y eficiente.
  - Permite ver los cambios en tiempo real mientras editas el código.

## ¿Qué es PostgreSQL?
PostgreSQL es un sistema de base de datos. Aunque en este proyecto no se usa realmente (solo está como ejemplo), normalmente sirve para guardar información de usuarios, productos, etc.

## ¿Qué es un archivo de configuración?
Un archivo de configuración es un archivo especial donde se indican opciones y reglas para que una herramienta funcione correctamente. Ejemplos: `package.json`, `tailwind.config.js`, `astro.config.mjs`.

---

# 4. Estructura del proyecto y explicación de carpetas/archivos

A continuación se explica para qué sirve cada carpeta y archivo de tu proyecto. Si algún concepto es nuevo, lo explico en el momento.

## Vista general de la estructura

```
paginawebgrup6/
├── .github/
│   └── copilot-instructions.md
├── .vscode/
│   └── tasks.json
├── node_modules/ (carpeta generada automáticamente)
├── public/
│   └── vite.svg
├── src/
│   ├── backend/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── counter.ts
│   ├── main.ts
│   ├── style.css
│   ├── typescript.svg
│   └── vite-env.d.ts
├── astro.config.mjs
├── MANUAL_PROYECTO.md
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

## Explicación de cada carpeta y archivo

### .github/
- **copilot-instructions.md:** Archivo de instrucciones personalizadas para GitHub Copilot. No afecta el funcionamiento de la web, pero ayuda a la IA a generar código más relevante para tu proyecto.

### .vscode/
- **tasks.json:** Archivo de configuración para Visual Studio Code. Permite definir tareas automáticas, como ejecutar el servidor de desarrollo.

### node_modules/
- **(Carpeta generada automáticamente por npm):** Aquí se guardan todas las librerías y dependencias que instala el proyecto. No debes modificar nada aquí manualmente.

### public/
- **vite.svg:** Imagen de ejemplo. La carpeta `public` es para archivos estáticos (imágenes, fuentes, etc.) que se pueden usar en la web.

### src/
- **backend/:** Carpeta reservada para código de backend (no se usa en este ejemplo, pero es buena práctica tenerla si en el futuro agregas lógica de servidor).
- **components/:** Aquí van los componentes reutilizables de la interfaz, como la barra de navegación (`Navbar.astro`) o el pie de página (`Footer.astro`).
- **layouts/:** Plantillas base para las páginas. Por ejemplo, `BaseLayout.astro` define la estructura general (navbar, footer, etc.).
- **pages/:** Cada archivo `.astro` aquí es una página de tu sitio (por ejemplo, `index.astro`, `contacto.astro`, etc.).
- **styles/:** Archivos de estilos personalizados, como `main.css` para TailwindCSS.
- **utils/:** Utilidades y funciones auxiliares. Por ejemplo, integraciones personalizadas.
- **counter.ts, main.ts, style.css, typescript.svg, vite-env.d.ts:** Archivos de ejemplo o soporte generados por plantillas. Puedes eliminarlos si no los usas.

### astro.config.mjs
Archivo de configuración principal de Astro. Aquí se indican integraciones como TailwindCSS.

### MANUAL_PROYECTO.md
Este manual que estás leyendo.

### package.json
Archivo clave que define el proyecto, sus dependencias y scripts. Se explica en detalle más adelante.

### postcss.config.js
Archivo de configuración para PostCSS, que es una herramienta que ayuda a procesar los estilos CSS.

### tailwind.config.js
Archivo de configuración de TailwindCSS. Aquí puedes personalizar los estilos y clases disponibles.

### README.md
Archivo de documentación breve sobre el proyecto.

---

# 5. Explicación línea por línea de cada archivo

A continuación se explica cada archivo y cada línea de código, incluso los detalles más pequeños, para que puedas entender absolutamente todo lo que ves en el proyecto.

---

## package.json

Este archivo es el corazón de cualquier proyecto Node.js. Define el nombre del proyecto, las dependencias (librerías que usa), los scripts (comandos útiles) y otras configuraciones.

```json
{
  "name": "paginawebgrup6", // Nombre del proyecto
  "private": true, // Indica que este proyecto no se publicará en el registro público de npm
  "version": "0.0.0", // Versión del proyecto (puedes cambiarla si haces una nueva versión)
  "type": "module", // Indica que se usa el sistema de módulos ES (import/export)
  "scripts": {
    "dev": "astro dev", // Comando para iniciar el servidor de desarrollo
    "build": "astro build", // Comando para compilar el proyecto para producción
    "preview": "astro preview" // Comando para previsualizar el sitio ya compilado
  },
  "devDependencies": {
    "typescript": "~5.8.3", // TypeScript solo para desarrollo
    "vite": "^7.0.0" // Vite solo para desarrollo
  },
  "dependencies": {
    "@astrojs/db": "^0.15.0", // Integración de base de datos para Astro (no se usa en este ejemplo)
    "@astrojs/tailwind": "^6.0.2", // Integración oficial de TailwindCSS para Astro
    "@tailwindcss/postcss": "^4.1.11", // Plugin de Tailwind para PostCSS
    "astro": "^5.10.1", // Framework principal del proyecto
    "autoprefixer": "^10.4.21", // Herramienta que agrega prefijos CSS automáticamente
    "postcss": "^8.5.6", // Herramienta para procesar CSS
    "tailwindcss": "^3.4.17" // Librería de estilos principal
  }
}
```

- Cada línea que empieza con `//` es un comentario y solo sirve para explicar, no está en el archivo real.
- Las dependencias bajo `devDependencies` solo se usan durante el desarrollo, no en producción.
- Los scripts permiten ejecutar comandos útiles con `npm run <nombre>`.

---

## astro.config.mjs

Este archivo configura Astro y sus integraciones.

```js
import { defineConfig } from 'astro/config'; // Importa la función para definir la configuración
import tailwind from '@astrojs/tailwind'; // Importa la integración de TailwindCSS

export default defineConfig({
  integrations: [tailwind()], // Activa TailwindCSS en el proyecto
});
```

- `import` sirve para traer funciones o librerías de otros archivos o paquetes.
- `defineConfig` es una función que ayuda a que la configuración sea más clara y con autocompletado.
- `integrations` es una lista de herramientas extra que quieres usar con Astro.

---

## postcss.config.js

Este archivo le dice a PostCSS (el procesador de CSS) qué plugins usar.

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {}, // Usa el plugin de Tailwind para PostCSS
    autoprefixer: {}, // Usa autoprefixer para compatibilidad de CSS
  },
};
```

- `export default` es la forma moderna de exportar configuraciones en JavaScript.
- Cada plugin puede tener opciones (aquí están vacías `{}` porque usamos la configuración por defecto).

---

## tailwind.config.js

Este archivo personaliza cómo funciona TailwindCSS en tu proyecto.

```js
module.exports = {
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx}', // Indica dónde buscar clases de Tailwind
  ],
  theme: {
    extend: {}, // Aquí puedes extender el tema con colores, fuentes, etc.
  },
  plugins: [], // Aquí puedes agregar plugins extra si los necesitas
};
```

- `module.exports` es la forma clásica de exportar configuraciones en Node.js.
- `content` le dice a Tailwind en qué archivos buscar clases para generar el CSS.
- `theme` y `plugins` permiten personalizar y extender Tailwind.

---

## src/pages/index.astro

Este archivo define la página principal (inicio) de tu sitio web. Usa la sintaxis de Astro, que mezcla JavaScript/TypeScript y HTML.

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro'; // Importa el layout base para usar la estructura general (navbar, footer, etc.)
const title = 'Olimpiadas de Matemática'; // Define el título de la página
---

<BaseLayout title={title}> // Usa el layout base y le pasa el título como propiedad
  <section class="container mx-auto py-8"> // Sección principal centrada y con padding
    <h1 class="text-4xl font-bold mb-4 text-center">Olimpiadas de Matemática</h1> // Título grande y centrado
    <p class="text-lg text-center mb-8">Bienvenido a la página de ejemplo para las Olimpiadas de Matemática. Aquí encontrarás información relevante, inscripciones y recursos.</p> // Descripción
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> // Grid de dos columnas en pantallas grandes
      <article class="bg-white rounded-lg shadow p-6"> // Tarjeta informativa
        <h2 class="text-2xl font-semibold mb-2">¿Qué son las Olimpiadas?</h2>
        <p>Las Olimpiadas de Matemática son una competencia académica dirigida a estudiantes con interés en las matemáticas, promoviendo el pensamiento lógico y la resolución de problemas.</p>
      </article>
      <article class="bg-white rounded-lg shadow p-6"> // Otra tarjeta
        <h2 class="text-2xl font-semibold mb-2">Inscripción</h2>
        <p>Para participar, completa el formulario de inscripción disponible en la sección correspondiente. ¡No pierdas la oportunidad de demostrar tu talento!</p>
      </article>
    </div>
  </section>
</BaseLayout>
```

- Todo lo que está entre `---` es el "frontmatter" de Astro, donde puedes importar componentes y definir variables.
- `<BaseLayout ...>` envuelve el contenido para aplicar la estructura general del sitio.
- Las clases como `container`, `mx-auto`, `py-8`, etc., son de TailwindCSS y definen el diseño visual.
- Cada `<article>` es una tarjeta informativa.

---

## src/layouts/BaseLayout.astro

Este archivo define la estructura base de todas las páginas que lo usan. Incluye la barra de navegación y el pie de página.

```astro
---
import Navbar from '../components/Navbar.astro'; // Importa el componente de navegación
import Footer from '../components/Footer.astro'; // Importa el pie de página
---
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{Astro.props.title || 'Olimpiadas de Matemática'}</title> // Usa el título pasado como propiedad
    <link rel="stylesheet" href="/src/styles/main.css"> // Importa los estilos principales
  </head>
  <body class="bg-gray-100 min-h-screen flex flex-col min-h-screen"> // Fondo gris claro y diseño de columna
    <Navbar /> // Barra de navegación superior
    <main class="flex-1">
      <slot /> // Aquí se inserta el contenido de cada página
    </main>
    <Footer /> // Pie de página
  </body>
</html>
```

- `<Navbar />` y `<Footer />` son componentes reutilizables.
- `<slot />` es donde se inserta el contenido de la página que usa este layout.
- Las clases de TailwindCSS definen el diseño visual.

---

## src/components/Navbar.astro

Este archivo define la barra de navegación superior de tu sitio web.

```astro
---
---
<nav class="bg-blue-700 text-white py-4"> // Barra azul con texto blanco y padding vertical
  <div class="container mx-auto flex justify-between items-center"> // Contenedor centrado, flexbox para separar logo y menú
    <a href="/" class="font-bold text-xl">Olimpiadas</a> // Logo o nombre del sitio, enlace a la página principal
    <ul class="flex gap-6"> // Lista de enlaces, horizontal y con espacio entre ellos
      <li><a href="/" class="hover:underline">Inicio</a></li>
      <li><a href="/inscripcion" class="hover:underline">Inscripción</a></li>
      <li><a href="/recursos" class="hover:underline">Recursos</a></li>
      <li><a href="/contacto" class="hover:underline">Contacto</a></li>
    </ul>
  </div>
</nav>
```

- `<nav>` define la barra de navegación.
- `<a href="/">` es un enlace que lleva a la página principal.
- `<ul>` es una lista de enlaces a las diferentes secciones del sitio.
- Las clases de TailwindCSS (`bg-blue-700`, `flex`, `gap-6`, etc.) definen el diseño visual.

---

## src/components/Footer.astro

Este archivo define el pie de página de tu sitio web.

```astro
---
---
<footer class="bg-gray-800 text-white py-4 mt-8"> // Fondo gris oscuro, texto blanco, padding y margen superior
  <div class="container mx-auto text-center"> // Contenedor centrado y texto centrado
    <p>&copy; {new Date().getFullYear()} Olimpiadas de Matemática. Todos los derechos reservados.</p> // Año actual y mensaje de derechos
  </div>
</footer>
```

- `<footer>` define el pie de página.
- `{new Date().getFullYear()}` muestra el año actual automáticamente.
- Las clases de TailwindCSS definen el diseño visual.

---

## src/styles/main.css

Este archivo importa las utilidades y estilos base de TailwindCSS.

```css
/* TailwindCSS base styles */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- `@tailwind base;` importa los estilos base (reset de CSS y tipografías).
- `@tailwind components;` importa componentes predefinidos de Tailwind.
- `@tailwind utilities;` importa utilidades de Tailwind (márgenes, colores, etc.).

---

## src/pages/inscripcion.astro

Este archivo define la página de inscripción para el evento.

```astro
---
layout: ../layouts/BaseLayout.astro // Usa el layout base
title: Inscripción // Título de la página
---

<section class="container mx-auto py-8"> // Sección principal centrada
  <h1 class="text-3xl font-bold mb-4 text-center">Formulario de Inscripción</h1> // Título
  <form class="max-w-lg mx-auto bg-white rounded-lg shadow p-6 flex flex-col gap-4"> // Formulario con estilos
    <label class="block">
      <span class="text-gray-700">Nombre completo</span>
      <input type="text" name="nombre" class="mt-1 block w-full border rounded p-2" required />
    </label>
    <label class="block">
      <span class="text-gray-700">Correo electrónico</span>
      <input type="email" name="email" class="mt-1 block w-full border rounded p-2" required />
    </label>
    <label class="block">
      <span class="text-gray-700">Escuela</span>
      <input type="text" name="escuela" class="mt-1 block w-full border rounded p-2" required />
    </label>
    <button type="submit" class="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800">Enviar inscripción</button>
  </form>
</section>
```

- `<form>` contiene campos para nombre, correo y escuela.
- Cada `<label>` agrupa un campo y su descripción.
- El botón envía el formulario (en este ejemplo, no hace nada real).
- Las clases de TailwindCSS definen el diseño visual.

---

## src/pages/recursos.astro

Esta página muestra recursos útiles para los participantes.

```astro
---
layout: ../layouts/BaseLayout.astro
title: Recursos
---

<section class="container mx-auto py-8">
  <h1 class="text-3xl font-bold mb-4 text-center">Recursos para Participantes</h1>
  <ul class="max-w-2xl mx-auto bg-white rounded-lg shadow p-6 list-disc list-inside">
    <li><a href="#" class="text-blue-700 hover:underline">Guía de preparación</a></li>
    <li><a href="#" class="text-blue-700 hover:underline">Ejercicios de años anteriores</a></li>
    <li><a href="#" class="text-blue-700 hover:underline">Reglamento de la competencia</a></li>
    <li><a href="#" class="text-blue-700 hover:underline">Preguntas frecuentes</a></li>
  </ul>
</section>
```

- `<ul>` es una lista de recursos, cada uno con un enlace.
- Las clases de TailwindCSS definen el diseño visual.

---

## src/pages/contacto.astro

Esta página contiene un formulario de contacto.

```astro
---
layout: ../layouts/BaseLayout.astro
title: Contacto
---

<section class="container mx-auto py-8">
  <h1 class="text-3xl font-bold mb-4 text-center">Contacto</h1>
  <form class="max-w-lg mx-auto bg-white rounded-lg shadow p-6 flex flex-col gap-4">
    <label class="block">
      <span class="text-gray-700">Nombre</span>
      <input type="text" name="nombre" class="mt-1 block w-full border rounded p-2" required />
    </label>
    <label class="block">
      <span class="text-gray-700">Correo electrónico</span>
      <input type="email" name="email" class="mt-1 block w-full border rounded p-2" required />
    </label>
    <label class="block">
      <span class="text-gray-700">Mensaje</span>
      <textarea name="mensaje" class="mt-1 block w-full border rounded p-2" rows="4" required></textarea>
    </label>
    <button type="submit" class="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800">Enviar</button>
  </form>
</section>
```

- `<form>` contiene campos para nombre, correo y mensaje.
- El botón envía el formulario (en este ejemplo, no hace nada real).
- Las clases de TailwindCSS definen el diseño visual.

---

## src/pages/paquetes.astro

Esta página muestra un buscador de paquetes de viaje con filtros y resultados.

```astro
---
layout: ../layouts/BaseLayout.astro
title: Buscar Paquetes de Viaje
---

<section class="container mx-auto py-8">
  <h1 class="text-3xl font-bold mb-6 text-center">Buscar Paquetes de Viaje</h1>
  <div class="flex flex-col md:flex-row gap-8">
    <!-- Filtros laterales -->
    <aside class="md:w-1/4 bg-white rounded-lg shadow p-6">
      <h2 class="text-xl font-semibold mb-4">Filtrar por</h2>
      <form class="flex flex-col gap-4">
        <div>
          <label class="block font-medium mb-1">Destino</label>
          <input type="text" placeholder="Ej: Cancún" class="w-full border rounded p-2" />
        </div>
        <div>
          <label class="block font-medium mb-1">Precio máximo</label>
          <input type="number" placeholder="$" class="w-full border rounded p-2" />
        </div>
        <div>
          <label class="block font-medium mb-1">Duración (días)</label>
          <input type="number" placeholder="Ej: 7" class="w-full border rounded p-2" />
        </div>
        <div>
          <label class="block font-medium mb-1">Tipo de paquete</label>
          <select class="w-full border rounded p-2">
            <option>Todos</option>
            <option>Familiar</option>
            <option>Pareja</option>
            <option>Aventura</option>
            <option>Lujo</option>
          </select>
        </div>
        <button type="submit" class="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800">Aplicar filtros</button>
      </form>
    </aside>
    <!-- Resultados de paquetes -->
    <section class="flex-1">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Ejemplo de paquete -->
        <article class="bg-white rounded-lg shadow p-4 flex flex-col">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Playa Cancún" class="rounded mb-3 h-40 object-cover" />
          <h3 class="text-lg font-semibold mb-1">Paquete Cancún 7 días</h3>
          <p class="text-gray-600 mb-2">Incluye vuelo, hotel y tours. Ideal para familias.</p>
          <span class="font-bold text-blue-700 mb-2">$1,200 USD</span>
          <button class="mt-auto bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700">Ver detalles</button>
        </article>
        <!-- Más paquetes aquí... -->
      </div>
    </section>
  </div>
</section>
```

- `<aside>` contiene los filtros de búsqueda (destino, precio, duración, tipo).
- `<section class="flex-1">` muestra los resultados de paquetes en tarjetas.
- Las clases de TailwindCSS definen el diseño visual.

---

## Archivos utilitarios y secundarios

A continuación se explican los archivos utilitarios y de ejemplo que puedes encontrar en la carpeta `src/`.

---

### src/utils/tailwind-integration.ts

Este archivo es un ejemplo de integración personalizada para TailwindCSS en Astro. No es obligatorio, pero muestra cómo podrías crear integraciones propias.

```typescript
import type { AstroIntegration } from 'astro'; // Importa el tipo de integración de Astro

export default function tailwindIntegration(): AstroIntegration { // Exporta una función que retorna una integración
  return {
    name: 'tailwindcss', // Nombre de la integración
    hooks: {
      'astro:config:setup': ({ injectScript }) => { // Hook que se ejecuta al configurar Astro
        injectScript('page-ssr', `import '../styles/main.css';`); // Inyecta el CSS principal en el SSR
      },
    },
  };
}
```

- `AstroIntegration` es un tipo que define cómo debe ser una integración para Astro.
- El hook `astro:config:setup` permite modificar la configuración de Astro al inicio.
- `injectScript` agrega el CSS de Tailwind a todas las páginas renderizadas.

---

### src/counter.ts

Archivo de ejemplo generado por plantillas de Vite. Muestra cómo crear una función para manejar un contador en el DOM.

```typescript
export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
```

- `setupCounter` recibe un botón y le agrega funcionalidad de contador.
- Al hacer clic, incrementa el número mostrado.
- Es solo un ejemplo de manipulación del DOM con TypeScript.

---

### src/main.ts

Otro archivo de ejemplo generado por Vite. Muestra cómo montar contenido dinámico en el DOM y usar el contador anterior.

```typescript
import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
```

- Importa estilos y recursos SVG.
- Inserta HTML dinámicamente en el elemento con id `app`.
- Usa la función `setupCounter` para el botón contador.
- Es solo un ejemplo, no es necesario para el funcionamiento de Astro.

---

### src/vite-env.d.ts

Archivo de declaración de tipos para Vite y TypeScript.

```typescript
/// <reference types="vite/client" />
```

- Permite que TypeScript entienda los tipos especiales que Vite agrega al proyecto.
- No necesitas modificarlo.

---

# 6. Instalación y ejecución paso a paso

A continuación se explica cómo instalar y ejecutar el proyecto desde cero, incluso si nunca has usado Node.js o Astro antes.

## Requisitos previos
- Tener instalado **Node.js** (recomendado versión 18 o superior).
- Tener acceso a una terminal (puede ser PowerShell en Windows).

## Pasos para instalar y ejecutar

1. **Descarga o clona el proyecto**
   - Si tienes el archivo comprimido, descomprímelo en la carpeta que prefieras.
   - Si usas Git, puedes clonar el repositorio:
     ```powershell
     git clone <URL-del-repositorio>
     cd Paginaweb_prueba1
     ```

2. **Instala las dependencias**
   - Abre una terminal en la carpeta del proyecto y ejecuta:
     ```powershell
     npm install
     ```
   - Esto descargará todas las librerías necesarias.

3. **Inicia el servidor de desarrollo**
   - En la misma terminal, ejecuta:
     ```powershell
     npm run dev
     ```
   - Se abrirá la web en tu navegador (normalmente en http://localhost:4321 o http://localhost:5173).

4. **Navega y prueba la web**
   - Usa el menú superior para ir a las distintas secciones.
   - Puedes modificar archivos y ver los cambios en tiempo real.

## Notas
- No necesitas configurar una base de datos ni backend para ver la web.
- Si tienes errores, revisa la sección de errores comunes más adelante.

---

# 7. Personalización y ejemplos

Puedes adaptar el sitio a tus necesidades fácilmente. Aquí algunos ejemplos:

## Cambiar el contenido de una página
- Edita los archivos en `src/pages/` (por ejemplo, `index.astro` para la portada).
- Cambia textos, títulos, imágenes, etc.

## Agregar o modificar componentes
- Los componentes reutilizables están en `src/components/`.
- Puedes crear un nuevo archivo `.astro` y luego importarlo en tus páginas o layouts.

## Cambiar estilos
- Edita `src/styles/main.css` para agregar estilos personalizados.
- Usa clases de TailwindCSS directamente en los elementos HTML.

## Ejemplo: agregar una nueva página
1. Crea un archivo, por ejemplo `src/pages/nueva.astro`.
2. Agrega el siguiente contenido:
   ```astro
   ---
   layout: ../layouts/BaseLayout.astro
   title: Nueva Página
   ---
   <section class="container mx-auto py-8">
     <h1 class="text-3xl font-bold mb-4 text-center">Nueva Página</h1>
     <p>¡Esta es una página nueva!</p>
   </section>
   ```
3. Accede a `/nueva` en el navegador.

---

# 8. Buenas prácticas

- Mantén el código modular: separa componentes, layouts y utilidades.
- Usa nombres descriptivos para archivos y variables.
- Documenta el código y los cambios importantes.
- No dejes código sin usar o comentado innecesariamente.
- Haz pruebas después de cada cambio.
- Usa control de versiones (Git) si es posible.

---

# 9. Glosario

- **Astro:** Framework para crear páginas web modernas y rápidas.
- **TailwindCSS:** Librería de utilidades CSS para estilos rápidos y consistentes.
- **TypeScript:** Lenguaje basado en JavaScript con tipado estático.
- **Componente:** Bloque reutilizable de interfaz (por ejemplo, Navbar).
- **Layout:** Plantilla base que estructura las páginas.
- **Dependencia:** Librería externa que usa tu proyecto.
- **Script:** Comando definido en `package.json` para tareas automáticas.
- **Terminal:** Programa para escribir comandos en texto.
- **npm:** Gestor de paquetes de Node.js.
- **SSR:** Server Side Rendering (renderizado en el servidor).

---

# 10. Preguntas frecuentes (FAQ)

**¿Necesito saber programar para modificar el sitio?**
- No, puedes cambiar textos e imágenes fácilmente. Para cambios más avanzados, ayuda tener nociones básicas de HTML y CSS.

**¿Puedo agregar más páginas?**
- Sí, solo crea un nuevo archivo `.astro` en `src/pages/`.

**¿Cómo cambio los colores o el diseño?**
- Edita las clases de TailwindCSS en los archivos `.astro` o personaliza el archivo `tailwind.config.js`.

**¿Por qué no veo mis cambios?**
- Asegúrate de guardar los archivos y que el servidor de desarrollo esté corriendo.

**¿Puedo usar este proyecto en producción?**
- Sí, pero revisa la documentación de Astro para compilar y desplegar correctamente.

---

# 11. Errores comunes y soluciones

- **Error: "command not found: npm"**
  - Solución: Instala Node.js desde https://nodejs.org/

- **Error: "Cannot find module ..." o problemas al instalar**
  - Solución: Ejecuta `npm install` nuevamente.

- **La web no carga o sale en blanco**
  - Solución: Revisa la terminal por mensajes de error y asegúrate de que no haya errores de sintaxis en los archivos editados.

- **Cambios no se ven reflejados**
  - Solución: Guarda los archivos y recarga la página. Si el problema persiste, reinicia el servidor (`Ctrl+C` y luego `npm run dev`).

---

# 12. Recursos recomendados

- [Documentación oficial de Astro](https://docs.astro.build/es/)
- [Documentación de TailwindCSS](https://tailwindcss.com/docs/installation)
- [Guía de TypeScript](https://www.typescriptlang.org/docs/)
- [Guía de Vite](https://vitejs.dev/guide/)
- [MDN Web Docs (HTML, CSS, JS)](https://developer.mozilla.org/es/)
- [Playground de TailwindCSS](https://play.tailwindcss.com/)

---

# 13. Diagramas y visualizaciones

## Estructura de carpetas del proyecto

```text
paginawebgrup6/
├── .github/
├── .vscode/
├── node_modules/
├── public/
├── src/
│   ├── backend/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── counter.ts
│   ├── main.ts
│   ├── style.css
│   ├── typescript.svg
│   └── vite-env.d.ts
├── astro.config.mjs
├── MANUAL_PROYECTO.md
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

## Flujo de navegación del sitio

- Inicio → Inscripción → Recursos → Contacto → Paquetes de Viaje
- Menú superior siempre visible para navegar entre secciones

## Relación entre archivos principales

- `index.astro`, `inscripcion.astro`, etc. → usan `BaseLayout.astro`
- `BaseLayout.astro` → importa `Navbar.astro` y `Footer.astro`
- Todos los estilos → `main.css` (importado en el layout)

---

# Cierre y agradecimientos

¡Gracias por usar este manual! Si tienes dudas, consulta las secciones anteriores o los recursos recomendados. Recuerda que puedes experimentar y aprender modificando el código.

---

*Manual generado y documentado para el proyecto de ejemplo de Olimpiadas de Matemática (Astro + TailwindCSS + TypeScript).*

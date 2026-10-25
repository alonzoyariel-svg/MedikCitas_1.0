# MediKCitas

Aplicación web de demostración para la gestión de citas médicas. El proyecto presenta una interfaz de administración adaptable con secciones para citas, pacientes, médicos y reportes.

> Proyecto académico de portafolio. Esta versión es una interfaz frontend; no incluye un servidor ni una base de datos.

## Funcionalidades de la interfaz

- Navegación entre inicio de sesión, citas, pacientes, médicos y reportes.
- Diseño de panel administrativo con menú lateral y adaptación para pantallas pequeñas.
- Formularios, notificaciones y vistas organizadas por módulo.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Tailwind CSS mediante CDN
- Phosphor Icons mediante CDN

## Ejecutar localmente

1. Clona el repositorio.
2. Abre `index.html` en un navegador moderno.
3. Mantén conexión a internet para cargar Tailwind CSS, la fuente Inter y los iconos desde sus CDN.

No se requiere un proceso de compilación para esta versión.

## Estructura

```text
.
├── index.html
├── CSS/
│   ├── forms.css
│   ├── reportes.css
│   ├── responsive.css
│   ├── sidebar.css
│   └── styles.css
└── JS/
    ├── app.js
    ├── citas.js
    ├── login.js
    ├── medicos.js
    ├── navigation.js
    ├── pacientes.js
    ├── reportes.js
    ├── sidebar.js
    └── toast.js
```

## Estado y próximos pasos

La interfaz sirve como prototipo visual y punto de partida. Para convertirla en una aplicación lista para uso real, faltan una API, persistencia de datos, autenticación segura y validación del lado del servidor.

Antes de publicar el sitio, hay que alinear las mayúsculas de las carpetas `CSS/` y `JS/` con las rutas enlazadas desde `index.html`; algunos servidores distinguen entre mayúsculas y minúsculas.

## Autoría

Desarrollado por **Alonzo Yariel** como proyecto universitario.

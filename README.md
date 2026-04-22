# ChefPad - Nexus
Proyecto final de la materia **Diseño y Programación Web**. Universidad CENFOTEC, Curso Lectivo C1-2026.

## Integrantes (Equipo Nexus)
Desarrollado por la empresa **Nexus**, enfocada en soluciones tecnológicas innovadoras y de alta calidad:

- **Thais Hernández Quesada:** Desarrolladora Frontend Principal y Diseño UX/UI.
- **Sebastián Salas Hernández:** Desarrollador Web Principal y Análisis de Requerimientos.
- **María Jesús Rodríguez Molina:** Desarrolladora Frontend, Tester de Software y Documentación.

---

## Descripción del Proyecto

**ChefPad** es una plataforma digital colaborativa diseñada para la gestión, descubrimiento y planificación de recetas culinarias. El sistema permite optimizar el presupuesto del usuario, reducir el desperdicio de alimentos y fomentar la creatividad en la cocina conectando a chefs expertos con usuarios regulares.

El sistema permite:
- Buscar recetas según ingredientes disponibles.
- Planificar comidas según presupuesto y preferencias.
- Crear versiones personalizadas de recetas.
- Publicar y gestionar recetas como Chef.
- Validar recetas enviadas por la comunidad.
- Participar en eventos y retos culinarios.

La plataforma facilita:
- Búsqueda de recetas por ingredientes disponibles y presupuesto.
- Planificación de comidas según preferencias dietéticas.
- Personalización de recetas existentes mediante versiones derivadas.
- Gestión profesional de contenido por parte de expertos culinarios.

ChefPad conecta chefs expertos y usuarios regulares en un entorno colaborativo enfocado en optimización de presupuesto, reducción de desperdicio y descubrimiento culinario.

---

## Alcance
ChefPad es una plataforma web colaborativa orientada a la gestión y descubrimiento de recetas culinarias. El sistema contempla dos tipos de usuarios: Chef o experto culinario y Usuario regular.
El proyecto incluye funcionalidades como búsqueda avanzada por ingredientes, creación y edición de recetas, generación de versiones derivadas, validación de recetas de la comunidad y planificación semanal de comidas con cálculo de presupuesto con el fin de crear una plataforma completa.

El proyecto contempla dos tipos de usuarios:

### Usuario Regular
- Búsqueda avanzada por ingredientes.
- Filtros por presupuesto, dificultad y tiempo.
- Guardar recetas favoritas.
- Crear versiones derivadas.
- Calificar y comentar recetas.

### Chef / Experto
- Crear y editar recetas.
- Gestión de ingredientes con costos.
- Publicar y guardar borradores.
- Validar recetas de usuarios avanzados.
- Visualizar métricas de desempeño.

---

## Funcionalidades Implementadas

El proyecto actual abarca la maquetación funcional y la estructura de navegación de los siguientes módulos:

1. **Buscador Inteligente de Recetas (`panelbusquedausuario.html`):** Permite filtrar por ingredientes, presupuesto, dificultad y tiempo.
2. **Vista Detallada de Receta (`recetaVista.html`):** Incluye información nutricional, reseñas y pasos de preparación.
3. **Editor de Versión Personalizada (`recetaPersonalizada.html`):** Herramienta para que el usuario regular cree sus propias versiones modificando ingredientes y pasos.
4. **Panel de Gestión del Chef (`panelgestionchef.html`):** Dashboard con métricas de desempeño, seguidores e interacciones.
5. **Creación de Recetas Profesional (`crear-receta.html`):** Formulario detallado para cargar ingredientes con costos y pasos con multimedia.
6. **Sistema de Validación de Comunidad (`validar-receta.html`):** Interfaz para que el Chef revise y apruebe recetas subidas por usuarios avanzados.
7. **Landing Page Responsive (`landing.html`):** Página principal adaptable a dispositivos móviles con secciones de "Nosotros" y "Galería".

---

## Estructura de Archivos

```text
/
├── README.md           # Documentación general del proyecto
├── css/                # Hojas de estilo (Diseño visual y responsive)
├── docs/               # Documentación con el diseño de alta fidelidad realizado en Figma
├── img/                # Imágenes del sitio web
├── js/                 # Lógica de navegación y scripts de componentes
│   ├── edicionReceta.js  # Acciones de la edición de la receta
│   ├── landing.js        # Acciones realizadas en el landing
│   ├── login.js          # Acciones realizadas en el login
│   └── signup.js         # Acciones realizadas en el registro
├── src/                # Código HTML de las diversas pantallas
├── Tipografía/         # Tipografía del sitio web
└── ...
```
---
## Estructura de Navegación

El menú superior es el eje central de la plataforma y es accesible desde cualquiera de las páginas del sitio. Sus componentes principales son:

- **Inicio / Logotipo:** Ambos elementos redirigen al contenido principal del Landing Page.
- **Recetas:** Vincula directamente al archivo `panelbusquedausuario.html`, que es el centro de búsqueda y filtrado de contenido culinario.
- **Blog:** Actualmente funciona como un marcador de posición (*placeholder*), ya que no se ha definido contenido específico para esta sección en la etapa actual.
- **Galería:** Dirige al usuario a la sección inferior del landing donde se despliega un catálogo visual de imágenes de recetas.
- **Icono de Usuario:** En esta versión, funciona como el acceso directo al login simulado.

---

## 2. Flujo de Descubrimiento de Recetas

Desde la sección de búsqueda, la navegación se vuelve contextual para facilitar la interacción del usuario regular:

- **Buscador Inteligente:** Permite encontrar recetas según ingredientes, dificultad y presupuesto.
- **Acceso a Detalle:** Al seleccionar el botón **"Ver Receta"** en el panel de búsqueda, el sistema navega hacia `recetaVista.html`, donde se muestra la información nutricional y los pasos detallados.
- **Personalización:** Mediante el botón **"Crear Versión"**, el usuario es llevado a `recetaPersonalizada.html` para modificar ingredientes o pasos de una receta existente.

---

## 3. Navegación Exclusiva del Chef

El panel de gestión del experto culinario centraliza herramientas que no son visibles para el usuario común en la navegación principal.

Desde el archivo `panelgestionchef.html`, el experto puede acceder a:

- **Creación de Contenido:** El botón **"Crear Nueva Receta"** abre un formulario detallado para cargar costos, multimedia y etiquetas.
- **Validación:** El botón **"Validar Recetas"** redirige a `validar-receta.html`, donde el chef supervisa las contribuciones de la comunidad.

---

## 4. Navegación Secundaria y Footer

El pie de página refuerza la estructura jerárquica y ofrece accesos adicionales para mejorar la usabilidad:

- **Sección "Nosotros":** Disponible exclusivamente a través de los enlaces del footer, permitiendo conocer la misión de la plataforma sin saturar el menú principal.
- **Redundancia de Accesos:** El footer replica los enlaces de Inicio, Recetas y Galería para facilitar la navegación una vez que el usuario ha llegado al final del scroll en el landing.
- **Botón "Explorar":** Ubicado de forma prominente en el banner principal del 

---
## Cómo ejecutar / abrir el proyecto

### 1. Clonar el repositorio desde GitHub
```bash
git clone https://github.com/Maria05py/ProyectoFinal_DYPW.git
```

### 2. Ingresar a la carpeta del proyecto
```bash
cd ProyectoFinal_DYPW
```

### 3. Abrir el proyecto
Abrir el archivo `index.html` en el navegador, o abrir la carpeta en **Visual Studio Code** y usar **Live Server**.

---

##  Archivos JavaScript

### `edicionReceta.js`
- Permite crear nuevos pasos dinámicamente en una receta
- Genera elementos HTML con contenido predeterminado
- Permite eliminar pasos con doble clic
- Renumera automáticamente los pasos después de eliminar uno
- Maneja eventos de interacción con botones

### `landing.js`
- Aplica efectos visuales a elementos de galería (hover)
- Agrega y elimina clases CSS dinámicamente
- Valida correos electrónicos usando expresiones regulares
- Muestra mensajes de error o éxito al usuario

###  `login.js`
- Valida campos de usuario y contraseña
- Evita envío del formulario si hay campos vacíos
- Verifica credenciales predefinidas
- Muestra alertas de acceso correcto o error
- Redirige al usuario al panel de gestión si el login es exitoso

###  `signup.js`
- Valida múltiples campos del formulario (usuario, nombre, contraseña, correo, teléfono)
- Usa expresiones regulares para validar formato de datos
- Verifica coincidencia de contraseñas
- Muestra retroalimentación visual (correcto/incorrecto)
- Controla el envío del formulario según validaciones
- Muestra mensajes de éxito o error

---

##  Eventos utilizados

| Evento | Uso |
|---|---|
| `click` | Interacción con botones |
| `dblclick` | Eliminar pasos en recetas |
| `submit` | Controlar envío de formularios |
| `blur` | Validación al salir de un campo |
| `keyup` | Validación en tiempo real |
| `mouseenter` | Activar efectos visuales |
| `mouseleave` | Quitar efectos visuales |

## Estrategia de ramas y commits

Se recomienda:

- main: versión estable
- develop: integración de cambios


Commits descriptivos:
- feat: diseño buscador avanzado
- feat: wireframe creación receta
- docs: actualización README

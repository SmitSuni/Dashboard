# 🚀 Dashboard Personal - Smit Alexander Suni Morales

Dashboard personal profesional con diseño dark mode, animaciones 3D y diseño responsive.

## 🌐 Enlace del Dashboard

**URL:** [https://SmitSuni.github.io/dashboard/](https://SmitSuni.github.io/dashboard/)

## 📋 Descripción

Este dashboard muestra mi información profesional, proyectos, habilidades técnicas y formas de contacto. Desarrollado con HTML5, CSS3 y JavaScript vanilla para máxima performance.

## ✨ Características

- **Dark Mode Profesional**: Diseño oscuro con acentos azul y verde
- **Animación 3D**: Puente colgante animado con CSS 3D transforms
- **Diseño Responsive**: Se adapta perfectamente a móviles, tablets y desktop
- **Animaciones Sutiles**: Efectos de hover, fade-in y parallax
- **100% Nativo**: Sin frameworks pesados, solo HTML/CSS/JS
- **SEO Optimizado**: Meta tags y Open Graph configurados
- **Performance**: Carga ultra-rápida

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**:
  - CSS Grid & Flexbox
  - CSS Variables
  - 3D Transforms
  - Keyframe Animations
  - Media Queries
- **JavaScript**:
  - Vanilla JS (sin frameworks)
  - Intersection Observer API
  - Event Listeners
  - DOM Manipulation
- **Font Awesome 6.4.0**: Iconos vectoriales

## 📁 Estructura del Proyecto

```
dashboard/
│
├── index.html          # Página principal
├── styles.css          # Estilos y animaciones
├── script.js           # Interactividad
└── README.md          # Este archivo
```

## 🚀 Cómo Subir a GitHub Pages

### Opción 1: Usando Git desde la Terminal (Recomendado)

1. **Abre la terminal en la carpeta del dashboard**
   ```bash
   cd C:\Users\smit alexander\.local\bin\dashboard
   ```

2. **Inicializa Git (si no está inicializado)**
   ```bash
   git init
   ```

3. **Agrega todos los archivos**
   ```bash
   git add .
   ```

4. **Crea el primer commit**
   ```bash
   git commit -m "Initial commit: Dashboard personal completo"
   ```

5. **Conecta con tu repositorio de GitHub**
   ```bash
   git remote add origin https://github.com/SmitSuni/dashboard.git
   ```

6. **Sube los archivos**
   ```bash
   git branch -M main
   git push -u origin main
   ```

### Opción 2: Usando GitHub Desktop

1. Abre GitHub Desktop
2. Ve a **File > Add Local Repository**
3. Selecciona la carpeta `dashboard`
4. Haz commit de los cambios
5. Haz push a GitHub

### Opción 3: Subir Manualmente desde GitHub.com

1. Ve a [https://github.com/SmitSuni/dashboard](https://github.com/SmitSuni/dashboard)
2. Click en **Add file > Upload files**
3. Arrastra los archivos: `index.html`, `styles.css`, `script.js`
4. Escribe un mensaje de commit
5. Click en **Commit changes**

## ⚙️ Configurar GitHub Pages

1. Ve a tu repositorio: `https://github.com/SmitSuni/dashboard`
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click en **Save**
6. ¡Espera 1-2 minutos y tu sitio estará en línea!

Tu dashboard estará disponible en: **https://SmitSuni.github.io/dashboard/**

## 🎨 Personalización

### Cambiar Colores

Edita las variables CSS en `styles.css`:

```css
:root {
    --accent-blue: #00d4ff;    /* Color azul */
    --accent-green: #00ff88;   /* Color verde */
    --bg-primary: #0a0e14;     /* Fondo principal */
}
```

### Agregar Proyectos

En `index.html`, busca la sección `<!-- Projects Section -->` y agrega:

```html
<article class="project-card card">
    <div class="project-icon">
        <i class="fas fa-tu-icono"></i>
    </div>
    <h3 class="project-title">Nombre del Proyecto</h3>
    <p class="project-description">Descripción...</p>
    <div class="project-tech">
        <span class="tech-tag">Python</span>
    </div>
</article>
```

### Agregar Habilidades

En la sección `<!-- Skills Section -->`:

```html
<div class="skill-tag" data-skill="nueva-skill">
    <i class="fab fa-icono"></i>
    <span>Nueva Skill</span>
</div>
```

## 🎯 Easter Egg

¡Hay un easter egg escondido! Haz click 5 veces en la foto de perfil para descubrirlo. 🎉

## 📱 Responsive

El dashboard se adapta a:
- 📱 Móviles (< 768px)
- 📱 Tablets (768px - 1024px)
- 💻 Desktop (> 1024px)

## 🔧 Mantenimiento

### Actualizar el Dashboard

1. Edita los archivos localmente
2. Sube los cambios:
   ```bash
   git add .
   git commit -m "Descripción de los cambios"
   git push
   ```

### Ver el Dashboard Localmente

1. Abre `index.html` en tu navegador
2. O usa Live Server en VS Code

## 📞 Contacto

- **GitHub**: [SmitSuni](https://github.com/SmitSuni)
- **LinkedIn**: [Smit Alexander Suni Morales](https://www.linkedin.com/in/smit-alexander-suni-morales-222736364/)

## 📄 Licencia

© 2025 Smit Alexander Suni Morales. Todos los derechos reservados.

---

**"Para ganar hay que tener corazón"** 💙

# 🤝 Guía de Contribución (CONTRIBUTING)

¡Gracias por ayudar a que toda la clase apruebe! Para evitar que la web se rompa el día antes de un examen y mantener los apuntes bien estructurados, seguimos estas reglas de organización.

---

## 🚀 Paso a Paso para Colaborar

Si es la primera vez que colaboras en el repositorio, sigue este flujo básico:

1. **Clonar el proyecto e instalar dependencias:**

   ```bash
   git clone https://github.com/Diogo-Santoro/dam-helper.git
   cd dam-helper
   npm install
   ```

2. **Crear una rama nueva desde `main`:**

   ```bash
   git checkout main
   git pull origin main
   git checkout -b apuntes/prog-poo
   ```

3. **Ver la web en local mientras escribes:**

   ```bash
   npm run dev
   ```

4. **Hacer commit con el formato estándar:**

   ```bash
   git add .
   git commit -m "docs: anadir resumen tema 1 de programacion"
   ```

   _(Husky formateará automáticamente tus archivos y comprobará que el mensaje sea correcto)._

5. **Subir tu rama y abrir un Pull Request en GitHub:**
   ```bash
   git push -u origin apuntes/prog-poo
   ```
   Entra en GitHub y haz clic en **"Compare & pull request"**.

---

## 🌿 1. Reglas de Ramas (Branches)

La rama `main` está **protegida**. Nadie puede hacer `push` directamente a `main`. Todo cambio debe hacerse en una rama secundaria y enviarse mediante un **Pull Request (PR)**.

Usa el siguiente formato para nombrar tu rama según lo que vayas a subir:

- **`apuntes/sigla-tema`**: Para añadir nuevos resúmenes o temas.
  - _Ejemplo:_ `apuntes/prog-poo` o `apuntes/bd-sql`
- **`test/sigla-tema`**: Para añadir cuestionarios, flashcards o simuladores de examen.
  - _Ejemplo:_ `test/si-redes` o `test/bd-normalizacion`
- **`fix/descripcion-corta`**: Para corregir erratas o código que no compila en apuntes existentes.
  - _Ejemplo:_ `fix/errata-sql-joins`
- **`feat/mejora-web`**: Para mejoras visuales o técnicas en la web.
- **`docs/descripcion`**: Para actualizar guías de estudio o documentación general.

---

## 📝 2. Cómo estructurar tus archivos

1. **Nombres de archivos:** Usa siempre minúsculas, sin tildes ni espacios (usa guiones medios `-`).
   - ✅ `tema-1-arquitectura.md`
   - ❌ `Tema 1 Arquitectura y Configuración.md`
2. **Imágenes y capturas:** Si subes esquemas o capturas de pantalla, guárdalas en la carpeta `assets/` dentro del módulo correspondiente.
3. **Formato Markdown:** Usa bloques de código con el lenguaje especificado (ej. `java ... ` o `sql ... `). Prettier se encargará del espaciado.

---

## 🧱 3. Arquitectura de Componentes Web (Atomic Design)

Si colaboras desarrollando la interfaz visual o funcionalidades interactivas (tests, tarjetas, chuletas interactivas), seguimos el patrón **Atomic Design** en `src/components/`:

- **`atoms/` (Átomos):** Bloques básicos indivisibles de la interfaz. No dependen de otros componentes.
  - _Ejemplos:_ `Button`, `Badge`, `Input`, `Typography`.
- **`molecules/` (Moléculas):** Combinación de varios átomos para cumplir un propósito específico.
  - _Ejemplos:_ `ModuleCard` (Badge + Título + Botón), `SearchBar` (Input + Botón), `Flashcard`.
- **`organisms/` (Organismos):** Secciones complejas de la pantalla formadas por moléculas y átomos.
  - _Ejemplos:_ `Navbar`, `ModuleGrid`, `QuizWidget`, `Sidebar`.
- **`templates/` (Plantillas):** Estructura y maquetación de una página sin datos específicos.
  - _Ejemplos:_ `MainLayout` (Navbar + Contenedor + Footer), `NoteLayout`.
- **`pages/` (Páginas):** Vistas completas donde se inyectan los datos reales a la plantilla.
  - _Ejemplos:_ `Home`, `NoteView`, `QuizView`.

> 💡 **Alias de importación:** Puedes importar cualquier archivo desde la raíz de `src` usando `@/` (por ejemplo: `import { Button } from '@/components/atoms';`).

---

## 🛠️ 4. Calidad de Código y Commits

Este proyecto cuenta con herramientas automáticas para asegurar el formato y la calidad del código:

- **Husky & lint-staged:** Al hacer `git commit`, se analizan y formatean automáticamente los archivos modificados.
- **Conventional Commits:** Los mensajes de commit deben seguir el estándar:
  - `feat: añadir resumen del tema 2 de Programación`
  - `fix: corregir errata en consulta SQL de BD`
  - `docs: actualizar guía de contribución`
  - `chore: actualizar dependencias`
- **Comandos disponibles:**
  - `npm run dev`: Inicia el servidor de desarrollo local.
  - `npm run lint`: Revisa errores con ESLint.
  - `npm run format`: Da formato automático a todo el código y markdown con Prettier.
  - `npm run typecheck`: Comprueba tipos en TypeScript.
  - `npm run build`: Verifica que la aplicación compila sin errores.

---

## ⚖️ 5. Normas de Contenido y Convivencia

1. **Respeto y colaboración:** Todas las aportaciones son bienvenidas, ya sea un tema completo o corregir una errata de una línea.
2. **Material original y apuntes propios:** Resume y explica con tus propias palabras o con código de ejemplo trabajado en clase.
3. **No compartir material restringido:** No publiques preguntas de exámenes en curso ni material confidencial prohibido explícitamente por el centro o el profesorado.

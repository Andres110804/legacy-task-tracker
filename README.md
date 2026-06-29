# Legacy Task Tracker

Proyecto heredado para practicar debugging profesional, lectura de código, detección de bugs y configuración de herramientas de calidad.

## Descripción

Legacy Task Tracker es una mini aplicación web de gestión de tareas construida con HTML, CSS y JavaScript vanilla sobre Vite.

La aplicación permite agregar tareas, ver una lista, marcar tareas como completadas, eliminarlas, filtrar por estado y consultar contadores básicos. El código representa una base heredada con comportamientos incompletos, inconsistencias y problemas de calidad que deben ser investigados por el estudiante.

## Objetivo

Encontrar, documentar y corregir bugs usando:

- Chrome DevTools
- Breakpoints
- Watch expressions
- Console
- Lectura de código
- Git
- ESLint
- Prettier

## Requisitos

- Node.js 18 o superior
- npm
- Git
- Google Chrome o Chromium

## Instalación

```bash
npm install
```

## Ejecutar proyecto

```bash
npm run dev
```

Después abre la URL que muestra Vite en la terminal, normalmente:

```bash
http://localhost:5173
```

## Scripts disponibles

```bash
npm run dev
npm run build
npm run preview
```

Este proyecto todavía no incluye ESLint ni Prettier. Esa configuración forma parte del reto.

## Bug Bash

Tu objetivo es encontrar mínimo 10 bugs en la aplicación.

La dinámica recomendada:

1. Corre el proyecto localmente.
2. Usa la aplicación como usuario final.
3. Abre Chrome DevTools.
4. Reproduce comportamientos inesperados.
5. Usa breakpoints, watch expressions y console para investigar.
6. Documenta cada bug antes de corregirlo.
7. Corrige un bug a la vez.
8. Crea commits pequeños con mensajes claros.

No se trata de reescribir la aplicación completa. El reto consiste en entender una base heredada, aislar causas y mejorar el código de manera incremental.

## Formato de reporte de bugs

Por cada bug encontrado, documenta:

```md
Bug:
Archivo:
Causa:
Cómo lo encontré:
Solución:
Evidencia:
```

Ejemplo de evidencia válida:

- Captura de DevTools
- Descripción de los pasos para reproducir
- Breakpoint usado
- Watch expression usada
- Mensaje de consola
- Commit donde se corrigió

## Sistema de XP

| Actividad | XP |
| --- | ---: |
| Encontrar 10 bugs | 100 XP |
| Documentar los bugs | 50 XP |
| Corregir warnings básicos | 50 XP |
| Agregar ESLint | 50 XP |
| Agregar Prettier | 50 XP |
| Agregar reglas personalizadas | 50 XP |
| Agregar pre-commit hook simple | 50 XP |
| README actualizado | 50 XP |

XP máximo: 450 XP.

## Reglas del reto

- No reescribas toda la app desde cero.
- Corrige bug por bug.
- Usa commits pequeños.
- Cada commit debe explicar qué corregiste.
- Primero entiende el error, después modifica código.
- No uses solo `console.log`; usa DevTools.
- No agregues librerías de UI.
- No elimines funcionalidad para ocultar un problema.
- Mantén JavaScript vanilla.
- Agrega ESLint y Prettier solo cuando llegues a la etapa de calidad.

## Entregables

- Proyecto funcionando.
- Mínimo 10 bugs corregidos.
- README actualizado.
- ESLint configurado.
- Prettier configurado.
- Scripts agregados en `package.json`:
  - `npm run lint`
  - `npm run lint:fix`
  - `npm run format`
  - `npm run format:check`
- Evidencia de uso de DevTools.
- Commits claros.

## Scripts de calidad

Esta sección debe completarse después de configurar ESLint y Prettier.

Ejemplo esperado:

```bash
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

Cuando agregues las herramientas de calidad, actualiza esta sección con:

- Dependencias instaladas.
- Archivos de configuración creados.
- Reglas importantes.
- Comandos disponibles.
- Decisiones tomadas durante la configuración.

## Preparar para GitHub

Este proyecto queda listo para iniciar un repositorio y subirlo a GitHub:

```bash
git init
git add .
git commit -m "initial legacy task tracker"
git branch -M main
git remote add origin URL_DEL_REPO
git push -u origin main
```

## Notas para estudiantes

La aplicación está pensada para fallar en diferentes niveles: interacción, estado, renderizado, validación, DOM y calidad de código. Investiga cada síntoma con calma, confirma la causa y evita hacer cambios grandes sin evidencia.

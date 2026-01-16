# 📔 Bitácora de Ingeniería y Plan Maestro - NoeterixSoft

> **Estado del Proyecto:** En Desarrollo Activo (Fase Alpha)
> **Última Actualización:** 26 de Mayo de 2026
> **Responsable:** Ing. Bernardo Gómez

---

## 📅 Registro de Cambios y Análisis (Log)

### [2026-05-26] - Pivote Arquitectónico: De Landing Page a SaaS Dinámico

**Situación Detectada:**
El proyecto inicial presentaba una interfaz estática ("hardcoded") que funcionaba más como un folleto de servicios de TI que como una herramienta operativa. Las tarjetas de métricas (Procesos, Red, Dispositivos) eran fijas, lo que generaba una disonancia cognitiva con la promesa de valor de "Automatización y Robótica".

**Análisis de Ingeniería:**
*   **Problema:** Falta de separación entre la Capa de Presentación (HTML) y la Lógica de Negocio.
*   **Riesgo:** Imposibilidad de escalar a múltiples verticales (Logística vs. Industria) sin duplicar código.
*   **Solución:** Implementación de una arquitectura **Data-Driven UI**.

**Acciones Realizadas:**
1.  **Backend (API):** Se refactorizó `/api/dashboard/summary` para aceptar un parámetro `?sector=...`. Ahora el servidor decide qué componentes renderizar (GPS, Contadores, Alertas).
2.  **Frontend (SPA):** Se implementó un enrutador básico en el cliente para alternar entre vistas (Dashboard vs. Marketplace) sin recargar la página.
3.  **Visualización:** Se añadió lógica de estados críticos (CSS Animations) para alertas visuales en tiempo real.

**Resultado:**
La plataforma ahora es agnóstica al sector. Puede monitorear camiones o robots usando el mismo código base, definido únicamente por el contexto del usuario.

---

## 🗺️ Plan Maestro (Roadmap)

### Fase 1: Cimientos y Prototipado (✅ Completado)
- [x] Estructura de servidor Express.js.
- [x] Diseño UI "Glassmorphism" con CSS nativo.
- [x] Integración básica de API simulada (Mock Data).
- [x] Terminal de IA (Frontend).

### Fase 2: Lógica de Negocio y Dinamismo (🔄 En Progreso)
- [x] Navegación SPA (Single Page Application) manual.
- [x] Renderizado dinámico de tarjetas basado en JSON.
- [ ] Integración real con OpenAI (API Key pendiente).
- [ ] Persistencia de datos (Base de Datos MongoDB/PostgreSQL).

### Fase 3: Profesionalización y Despliegue (📅 Pendiente)
- [ ] Autenticación de usuarios (JWT).
- [ ] Integración de mapas reales (Leaflet/Google Maps) para el módulo de Logística.
- [ ] Despliegue en nube (AWS/Vercel/Render).
- [ ] Tests unitarios para la API.

---

## ⚠️ Notas Técnicas para Desarrolladores

*   **Estructura de Archivos:**
    *   La lógica del cliente DEBE residir en `public/js/main.js`.
    *   No editar `public/index.html` para cambiar textos de tarjetas; hacerlo en el Backend (`src/index.js`).
*   **Estilos:**
    *   Se utiliza CSS puro con variables CSS (`var(--neon-cyan)`) para facilitar el mantenimiento del tema oscuro.

---

*Fin del reporte de sesión.*
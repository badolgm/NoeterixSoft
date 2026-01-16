# 🌐 NoeterixSoft Ecosystem

!Status
!Tech
!License

> **Plataforma SaaS de Ingeniería, Automatización y Telemática.**
> Un centro de comando unificado que adapta su interfaz dinámicamente según el sector industrial del cliente (Logística, Manufactura o IT).

---

## 📑 Índice Interactivo

1.  Arquitectura y Funcionalidad
2.  Módulos del Sistema
3.  Instalación y Despliegue
4.  Estructura del Proyecto

---

## 🧠 Arquitectura y Funcionalidad

NoeterixSoft utiliza un enfoque de **Data-Driven UI**. El frontend es "agnóstico" y no contiene datos fijos. Es el Backend quien dicta qué componentes renderizar basándose en el contexto del negocio.

### Características Clave:
*   **Contexto Dinámico:** Cambio en tiempo real entre vistas de Logística (GPS), Industria (Sensores) e IT (Servidores).
*   **Alertas Visuales:** Sistema de detección de estados críticos (`state: 'critical'`) que activa animaciones de alerta en la UI.
*   **SPA (Single Page Application):** Navegación fluida entre el Dashboard y el Marketplace sin recargas.
*   **IA Terminal:** Interfaz de línea de comandos simulada para interacción con el núcleo del sistema.

---

## 🛠 Módulos del Sistema

| Módulo | Descripción | Métricas Clave |
| :--- | :--- | :--- |
| **Infraestructura IT** | Monitoreo de servidores y redes. | CPU Load, Latencia, Nodos Activos. |
| **Logística & GPS** | Gestión de flotas y activos móviles. | Ubicación, Combustible, Temp. Carga. |
| **Planta Industrial** | Control de líneas de producción. | Unidades/Hora, Temp. Hornos, Estado Máquina. |
| **Marketplace** | Adquisición de hardware especializado. | Catálogo de PLCs, Robots y Sensores. |

---

## 🚀 Instalación y Ejecución Local

Para configurar y ejecutar el proyecto en tu entorno local, sigue estos pasos:

### 1. Prerrequisitos
*   Node.js (v14 o superior)
*   Git

### 2. Instalación

```bash
# Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd NoeterixSoft

# Instalar dependencias
npm install
```

### 3. Configuración
Crea un archivo `.env` en la raíz:
```env
PORT=3000
NODE_ENV=Development
```

### 4. Ejecución
```bash
npm start
```
Accede a **`http://localhost:3000`**.

---

## 📂 Estructura del Proyecto

```text
NoeterixSoft/
├── public/             # Archivos estáticos (Frontend)
│   ├── css/            # Estilos (Glassmorphism)
│   ├── js/             # Lógica del Cliente (SPA, Fetch)
│   └── index.html      # Punto de entrada
├── src/                # Lógica del Servidor (Backend)
│   └── index.js        # API y Rutas Express
├── Ayudas/             # Documentación y Bitácora
└── package.json        # Dependencias
```

---

© 2026 **NoeterixSoft** - *Ingeniería de Software & Automatización*.
<br>Desarrollado por **Bernardo Gómez**.

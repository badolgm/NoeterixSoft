#!/bin/bash

echo "🚀 Iniciando la construcción de NoeterixSoft..."

# 1. Crear estructura de carpetas para Ingeniería, Software y Hardware
mkdir -p src/{components,styles,pages,hooks,context,api}
mkdir -p src/modules/{automation,robotics,telematics,marketplace,software-dev}
mkdir -p public/assets/{logos,videos,docs}

# 2. Crear archivos base de configuración
touch .env
touch .gitignore

# 3. Crear el archivo de estilos globales con variables Neón
cat <<EOF > src/styles/global.css
:root {
  --neon-cyan: #00f2ff;
  --neon-purple: #7000ff;
  --bg-dark: #050505;
  --glass: rgba(255, 255, 255, 0.05);
}
body { background-color: var(--bg-dark); color: white; font-family: 'Inter', sans-serif; }
EOF

# 4. Actualizar el README.md con la visión de NoeterixSoft
cat <<EOF > README.md
# 🌐 NoeterixSoft - Engineering & Software Ecosystem

**NoeterixSoft** es una plataforma de alta ingeniería dedicada al desarrollo de software, automatización industrial, robótica y servicios telemáticos avanzados.

## 🛠 Líneas de Negocio
- **Software & AI**: Desarrollos a medida, automatización y algoritmos de IA.
- **Industrial Automation**: Robótica, drones (riego, vigilancia) y control de procesos.
- **Telemática & Hardware**: Redes, servidores, CCTV y mantenimiento especializado.
- **Marketplace**: Base de datos de componentes electrónicos y repuestos.

## 🚀 Instalación
1. Ejecutar \`npm install\` (una vez configurado el package.json).
2. Definir variables en \`.env\`.

---
© 2026 NoeterixSoft - Innovación Tecnológica.
EOF

echo "✅ Estructura completada en /d/NoeterixSoft"
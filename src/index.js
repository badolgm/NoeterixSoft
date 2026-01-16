// src/index.js
// Núcleo del servidor NoeterixSoft
require('dotenv').config();
const express = require('express');
const cors = require('cors'); // VITAL: Seguridad para APIs
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// --- 1. Middlewares (Capas de Seguridad y Procesamiento) ---
app.use(cors()); // Permite peticiones cruzadas (necesario para conectar con React/Apps externas)
app.use(express.json()); // Permite leer JSON en el body de las peticiones

// --- 2. Servir Frontend (Archivos Estáticos) ---
// Apunta a la carpeta '../public'
app.use(express.static(path.join(__dirname, '../public')));

// --- 3. Rutas de la API (Backend Logic) ---

// Health Check (Estado del sistema)
app.get('/api/status', (req, res) => {
    res.json({
        empresa: "NoeterixSoft",
        especialidad: "Ingeniería, Software & Robótica",
        status: "Online",
        timestamp: new Date().toISOString(),
        mensaje: "Bienvenido al núcleo de automatización de Bernardo Gómez"
    });
});

// Endpoint para datos del Dashboard (MOCK DATA)
app.get('/api/dashboard/summary', (req, res) => {
    const sector = req.query.sector || 'general'; // Detectar el sector solicitado
    let metrics = [];

    // Lógica de Negocio por Sector (Simulación de Base de Datos)
    if (sector === 'logistica') {
        // CASO 1: Flota de Vehículos (GPS, Combustible)
        metrics = [
            { type: 'gps', label: "🚛 Camión T-800", value: "En Ruta", desc: "Lat: 4.6097 | Lon: -74.0817" },
            { type: 'level', label: "⛽ Combustible", value: "76%", desc: "Autonomía: 450km" },
            { type: 'status', label: "❄️ Carga Fría", value: "-18°C", desc: "Temperatura Óptima" }
        ];
    } else if (sector === 'industrial') {
        // CASO 2: Fábrica de Botellas (Contadores, Eficiencia)
        metrics = [
            { type: 'counter', label: "🍾 Producción/Hora", value: "1,250", desc: "Botellas (Meta: 1200)", state: 'ok' },
            { type: 'level', label: "🔥 Temp. Horno", value: "850°C", desc: "Estable (Max: 900°C)", state: 'ok' },
            { type: 'status', label: "⚙️ Cinta #4", value: "MANTENIMIENTO", desc: "Parada Programada", state: 'critical' }
        ];
    } else {
        // CASO DEFAULT: Infraestructura IT
        metrics = [
            { type: 'status', label: "🤖 Nodos Robóticos", value: "4/6", desc: "Unidades Operativas" },
            { type: 'level', label: "📡 Telemetría IoT", value: Math.floor(Math.random() * (45 - 12) + 12) + "ms", desc: "Latencia Global" },
            { type: 'level', label: "🧠 Carga del Núcleo", value: Math.floor(Math.random() * (80 - 20) + 20) + "%", desc: "Uso de CPU Cluster" }
        ];
    }

    res.json({
        sector: sector,
        metrics: metrics,
        lastUpdate: new Date().toISOString()
    });
});


// Endpoint IA (Placeholder profesional)
app.post('/api/ia-asistente', (req, res) => {
    console.log(`[IA Request] Datos recibidos:`, req.body);
    res.json({ 
        success: true,
        mensaje: "IA de NoeterixSoft procesando requerimiento..." 
    });
});

// --- 4. Fallback (Manejo de rutas no encontradas) ---
// En Express 5, usamos una RegEx /(.*)/ en lugar de '*'
app.get(/(.*)/, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// --- 5. Inicialización ---
app.listen(PORT, () => {
    console.log(`\n==================================================`);
    console.log(`🚀 NoeterixSoft Ecosystem activo en puerto ${PORT}`);
    console.log(`📡 URL Local: http://localhost:${PORT}`);
    console.log(`🛠  Entorno:  ${process.env.NODE_ENV || 'Development'}`);
    console.log(`==================================================\n`);
});
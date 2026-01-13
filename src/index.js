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
const express = require('express');
const app = express();

const PORT = 3000;

// Read from environment variables, fallback to generic defaults if missing
const CLASSROOM_NAME = process.env.CLASSROOM_NAME || "Unknown Classroom";
const LATITUDE = parseFloat(process.env.LATITUDE) || 0.0;
const LONGITUDE = parseFloat(process.env.LONGITUDE) || 0.0;

app.get('/location', (req, res) => {
    res.json({
        classroom: CLASSROOM_NAME,
        latitude: LATITUDE,
        longitude: LONGITUDE
    });
});

// Health check endpoint for Kubernetes
app.get('/health', (req, res) => {
    res.status(200).send("OK");
});

app.listen(PORT, () => {
    console.log(`GPS Microservice running on port ${PORT}`);
});

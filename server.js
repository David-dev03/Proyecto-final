/**
 * @file server.js
 * @description Express server for the "Guardián de Racha" project. 
 * Handles motivation requests by interacting with the Google Generative AI (Gemini).
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenAI } = require('@google/genai');

const app = express();
app.use(cors());
app.use(express.json());

/**
 * @constant {GoogleGenAI} ai
 * @description Google Generative AI client initialized with the API key from environment variables.
 */
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * @route POST /api/motivate
 * @description Generates a motivational message using Gemini AI based on user data.
 * @param {Object} req.body - The request body.
 * @param {number} req.body.racha_actual - Current number of consecutive days.
 * @param {string} req.body.estado_animo_usuario - Current mood of the user.
 * @param {string} req.body.momento_del_dia - Current time of day (e.g., "Mañana", "Tarde").
 * @returns {Object} 200 - JSON object containing the motivational message.
 * @returns {Object} 500 - JSON object with an error message.
 * @example
 * // Request body:
 * { "racha_actual": 5, "estado_animo_usuario": "Destruido", "momento_del_dia": "Noche" }
 * // Response:
 * { "message": "¡NO SEAS COBARDE! LLEVAS 5 DÍAS. ¿VAS A TIRARLO TODO POR ESTAR CANSADO?" }
 */
app.post('/api/motivate', async (req, res) => {
  try {
    const { racha_actual, estado_animo_usuario, momento_del_dia } = req.body;
    
    const prompt = `Eres un "Guardián de Racha" de gimnasio altamente persuasivo y directo. Tu objetivo es evitar que el usuario rompa su cadena.
El usuario lleva una racha de ${racha_actual} días seguidos yendo al gimnasio.
Su estado de ánimo actual es: "${estado_animo_usuario}".
El momento del día es: "${momento_del_dia}".
Genera un mensaje corto, brutalmente honesto pero motivador, que le obligue moralmente a ir al gimnasio y no perder su racha. 
No seas un robot, sé como un sargento de hierro o un amigo duro pero que se preocupa. Máximo 4 frases.`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
    });

    res.json({ message: response.text });
  } catch (error) {
    console.error("Error al llamar a Gemini:", error);
    res.status(500).json({ message: "La IA se quedó sin aliento. Pero tú no. ¡Ve al gimnasio!" });
  }
});

/**
 * @constant {number} PORT
 * @description Server port, defaults to 3000.
 */
const PORT = process.env.PORT || 3000;

/**
 * Starts the Express server.
 */
app.listen(PORT, () => console.log(`Guardián de Racha escuchando en el puerto ${PORT}`));

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenAI } = require('@google/genai');

const app = express();
app.use(cors());
app.use(express.json());

// Inicializar cliente de Gemini con la API Key del entorno
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Guardián de Racha escuchando en el puerto ${PORT}`));

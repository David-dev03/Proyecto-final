# Que hace
Una web app de una sola página que actúa como un "Guardián de Racha", usando IA para generarte un mensaje altamente persuasivo y personalizado en tu "hora crítica" (ej. al salir de trabajar) basado en cuántos días seguidos llevas yendo al gimnasio, para evitar que rompas la cadena.

# Que NO hace
No guarda rutinas de ejercicios, no cuenta calorías, no tiene sistema de login complejo (usa localStorage del navegador para un solo usuario), y NO utiliza frameworks de frontend (nada de React, Angular o Vue, solo HTML, CSS y JS puro).

# Criterios de aceptacion

Stack estricto: La interfaz debe estar contenida en 1 solo archivo HTML (con su CSS y Vanilla JS). Sin procesos de build complicados (Vite/Webpack).

Mecánica de Racha: Debe existir un botón gigante de "¡Fui al gym hoy!" que incremente un contador de racha guardado en el localStorage. Si pasan más de 36 horas sin pulsar el botón, la racha vuelve a 0.

Seguridad de API: La llamada a la API de IA (ej. OpenAI, Gemini, Claude) se hace a través de un pequeño backend o Serverless Function (ej. Node.js/Express muy simple o un Worker de Cloudflare), asegurando que la API Key NO esté en el JS del frontend.

Intervención de IA: Al cargar la página (o al pulsar un botón de "Motívame"), el frontend envía al backend la racha actual. La IA devuelve un mensaje que se pinta en pantalla.

Entregable: Todo el código debe estar subido a un repositorio público en GitHub.

# Ejemplo input / output

Input (Contexto enviado a la IA): { "racha_actual": 4, "estado_animo_usuario": "cansado", "momento_del_dia": "18:00 - Salida del trabajo" }

Output (Respuesta generada por la IA mostrada en la UI): "Llevas 4 días seguidos sudando la gota gorda. Sé que son las 18:00 y tu cerebro te suplica que vayas al sofá, pero tu racha de 4 días te ruega que no la asesines hoy. El sofá seguirá ahí luego. Ponte las zapatillas, solo te pido 40 minutos de tu día."

💡 Consejos extra para tu "AI Whisperer" (El que va a promptear):
Dile a tu compañero que cuando le pase este SPEC a la IA generadora de código, le añada estas instrucciones para asegurar que clava los límites técnicos:

"Genera un index.html completo": Que incluya el CSS en la etiqueta <style> y la lógica en <script> para cumplir lo de "1 sola página HTML".

"Genera el código de un backend mínimo en Node.js (server.js)": Necesitamos este archivo separado de unas 20 líneas usando express y cors simplemente para recibir la petición del frontend, inyectar la API KEY de forma segura (usando process.env.API_KEY), llamar a la IA y devolver el texto al HTML.

"Haz que el diseño sea brutalista o minimalista": Como no hay frameworks, que la IA le ponga un CSS moderno usando Flexbox/Grid, tipografías grandes (un número gigante para la racha) y colores de alto contraste para que luzca profesional y no parezca un proyecto de los años 90.

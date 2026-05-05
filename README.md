# 🛡️ Guardián de Racha - Elite

![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white) ![Gemini AI](https://img.shields.io/badge/Gemini_AI-2.5_Flash-4285F4?logo=google&logoColor=white)

**Guardián de Racha** es una aplicación web (SPA) diseñada con una **estética neo-brutalista** para gamificar la disciplina deportiva. Utiliza IA generativa para actuar como un entrenador implacable, evitando que rompas tu racha de entrenamientos mediante mensajes motivacionales crudos y directos.

---

## 🚀 Quick Start (Menos de 1 minuto)

### 1. Clonar e Instalar
```bash
git clone https://github.com/David-dev03/Proyecto-final.git
cd Proyecto-final
npm install
```

### 2. Configuración Segura
El proxy backend se asegura de que la clave de la IA no se exponga en el frontend. Crea un archivo `.env` en la raíz:
```env
API_KEY=tu_clave_de_gemini_aqui
PORT=3000
```

### 3. Ejecutar
```bash
node server.js
```
> 🌐 **Listo:** Abre el archivo `index.html` en tu navegador para interactuar con la aplicación.

---

## ✨ Características y Limitaciones Conocidas

- **🔥 Tracking de Racha**: Registro automático de días consecutivos almacenado directamente en el `localStorage` del navegador.
- **🧠 IA Motivacional**: Google Gemini analiza tu excusa escrita y genera una respuesta personalizada para empujarte al gimnasio.
- **⚡ Modo Offline**: Si el servidor de Node.js se cae o no tienes internet, la app entra en un modo de simulación offline con frases predefinidas.
- **⚠️ Límites de Almacenamiento**: Al depender exclusivamente de `localStorage`, si borras los datos de navegación o cambias de dispositivo, tu racha se perderá.

---

## 🏗️ Arquitectura y Stack

- **Frontend**: Vanilla HTML/CSS/JS (Diseño neo-brutalista, animaciones, LocalStorage).
- **Backend**: Node.js + Express (Servidor proxy para la API).
- **IA**: `@google/genai` (Modelo: `gemini-2.5-flash`).

```text
📁 Proyecto-final
├── index.html       # UI y lógica de cliente
├── server.js        # Backend proxy de IA
├── package.json     # Dependencias
└── .env.example     # Plantilla de variables de entorno
```

---

## 📖 Documentación Extendida

Para detalles técnicos sobre los endpoints y la integración con el backend, consulta la **[Guía de la API (API.md)](./API.md)**.

---

## 🤝 Contribución

1. Haz un Fork del repositorio.
2. Crea tu rama feature: `git checkout -b feature/AmazingFeature`
3. Haz commit de tus cambios.
4. Sube la rama y abre un Pull Request.

> *"El dolor es temporal. La racha es eterna."*

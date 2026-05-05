# Guía de la API - Guardián de Racha

Esta guía detalla los puntos de entrada disponibles en el servidor de Guardián de Racha para su integración con el frontend u otros servicios.

## Configuración Base
- **URL Base**: `http://localhost:3000`
- **Formato de datos**: `JSON`

---

## Endpoints

### 1. Obtener Motivación
Genera un mensaje de motivación personalizado utilizando el modelo Gemini 2.5 Flash de Google.

*   **Ruta**: `/api/motivate`
*   **Método**: `POST`
*   **Encabezados**:
    *   `Content-Type: application/json`

#### Cuerpo de la Petición (Request Body)
| Campo | Tipo | Descripción | Ejemplo |
| :--- | :--- | :--- | :--- |
| `racha_actual` | `number` | Número de días consecutivos que el usuario lleva entrenando. | `7` |
| `estado_animo_usuario` | `string` | Estado emocional declarado por el usuario. | `"Con excusas"` |
| `momento_del_dia` | `string` | Categoría horaria del momento actual. | `"Mañana"` |

**Ejemplo de JSON:**
```json
{
  "racha_actual": 3,
  "estado_animo_usuario": "Sin tiempo",
  "momento_del_dia": "Noche/Salida trabajo"
}
```

#### Respuestas (Responses)

##### Exitosa: 200 OK
Retorna un mensaje motivador en formato texto.
```json
{
  "message": "EL TIEMPO SE CREA, NO SE ENCUENTRA. LLEVAS 3 DÍAS CONSTRUYENDO UN HÁBITO, ¿VAS A SER EL QUE SE RINDE POR UNA HORA DE SUEÑO?"
}
```

##### Error: 500 Internal Server Error
Ocurre cuando hay un fallo en la conexión con Google GenAI o falta la configuración de la `API_KEY`.
```json
{
  "message": "La IA se quedó sin aliento. Pero tú no. ¡Ve al gimnasio!"
}
```

---

## Pruebas con cURL
Puedes probar el endpoint rápidamente con el siguiente comando:
```bash
curl -X POST http://localhost:3000/api/motivate \
     -H "Content-Type: application/json" \
     -d '{"racha_actual": 10, "estado_animo_usuario": "Invencible", "momento_del_dia": "Mañana"}'
```

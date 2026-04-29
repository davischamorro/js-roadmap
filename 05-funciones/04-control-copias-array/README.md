 * 🔴 Reto: Control de Copias en Arrays
 * 
 * 📌 Descripción
 * Desarrollar una aplicación en JavaScript que permita trabajar con arrays,
 * identificando la diferencia entre copiar por referencia y copiar correctamente un array.
 * 
 * El objetivo es evitar errores comunes al manipular datos y entender cómo funcionan
 * las referencias en memoria.
 * 
 * 🎯 Objetivo
 * Dado un array de números ingresados por el usuario, el sistema debe:
 * - Crear una copia del array original
 * - Modificar la copia
 * - Mostrar ambos arrays para evidenciar si están vinculados o no
 * 
 * ⚙️ Requisitos
 * - Permitir al usuario ingresar 5 números
 * - Al completar los 5 números:
 *   - Crear una copia del array
 *   - Modificar la copia (por ejemplo: agregar un número nuevo)
 *   - Mostrar:
 *       - El array original
 *       - El array modificado
 * 
 * ⚠️ Reglas
 * ❌ No usar métodos avanzados (map, filter, reduce)
 * ❌ No modificar directamente el array original
 * ❌ No usar librerías externas
 * ✅ Usar funciones
 * ✅ Usar return correctamente
 * ✅ Separar lógica de interfaz
 * 
 * 🧠 Parte importante del reto
 * - Debes hacer el ejercicio en dos versiones:
 * 
 *   1. Copia por referencia (incorrecta)
 *   2. Copia real usando spread operator (correcta)
 * 
 * 💡 Ejemplo esperado
 * 
 * Caso 1 (referencia):
 * original: [1, 2, 3]
 * copia:    [1, 2, 3, 99]
 * 👉 ambos cambian
 * 
 * Caso 2 (copia real):
 * original: [1, 2, 3]
 * copia:    [1, 2, 3, 99]
 * 👉 el original NO cambia
 * 
 * 🚀 Bonus (Opcional)
 * - Mostrar un mensaje indicando si ambos arrays están vinculados o no

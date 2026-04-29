 * 🟡 Reto: Filtrar y Analizar Números
 * 
 * 📌 Descripción
 * Desarrollar una aplicación en JavaScript que permita ingresar una serie de números y
 * realizar un análisis basado en el promedio, filtrando aquellos valores que cumplan una condición específica.
 * 
 * El objetivo es reforzar el uso de funciones, la transformación de datos y la separación de responsabilidades.
 * 
 * 🎯 Objetivo
 * Dado un conjunto de 8 números ingresados por el usuario, el sistema debe:
 * - Calcular el promedio
 * - Crear un nuevo array con los números mayores al promedio
 * - Mostrar los resultados en pantalla
 * 
 * ⚙️ Requisitos
 * - Permitir al usuario ingresar exactamente 8 números
 * - Al completar los 8 números:
 *   - Deshabilitar el ingreso
 *   - Calcular el promedio
 *   - Generar un nuevo array con los números mayores al promedio
 *   - Mostrar:
 *       - El array original
 *       - El promedio
 *       - El nuevo array filtrado
 * 
 * - Si no existen números mayores al promedio:
 *   - Mostrar un mensaje indicando que no hay resultados
 * 
 * ⚠️ Reglas
 * ❌ No usar métodos avanzados (filter, map, reduce, sort)
 * ❌ No mezclar lógica con manipulación del DOM dentro de las funciones
 * ❌ No repetir lógica innecesaria
 * ✅ Usar for para recorrer el array
 * ✅ Usar funciones separadas
 * ✅ Usar return correctamente
 * ✅ Las funciones deben recibir el array como parámetro
 * 
 * 🧠 Pistas
 * - Primero debes calcular el promedio
 * - Luego recorrer el array y comparar cada número con el promedio
 * - Necesitarás un nuevo array para almacenar los resultados
 * 
 * 💡 Ejemplo
 * Entrada: [2, 4, 6, 8]
 * Promedio: 5
 * Resultado: [6, 8]
 * 
 * 🚀 Bonus (Opcional)
 * - Contar cuántos números son mayores al promedio
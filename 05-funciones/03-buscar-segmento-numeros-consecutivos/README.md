 * 🔴 Reto: Buscar Segmento de Números Consecutivos
 * 
 * 📌 Descripción
 * Desarrollar una aplicación en JavaScript que permita ingresar una serie de números y
 * analizar si dentro del array existe al menos un segmento de números consecutivos ascendentes.
 * 
 * El objetivo es reforzar el uso de funciones, recorridos, comparación entre posiciones
 * contiguas del array y separación de responsabilidades.
 * 
 * 🎯 Objetivo
 * Dado un conjunto de 8 números ingresados por el usuario, el sistema debe:
 * - Detectar si existen números consecutivos ascendentes
 * - Construir un nuevo array con el segmento consecutivo más largo encontrado
 * - Mostrar los resultados en pantalla
 * 
 * ⚙️ Requisitos
 * - Permitir al usuario ingresar exactamente 8 números
 * - Al completar los 8 números:
 *   - Deshabilitar el ingreso
 *   - Analizar el array
 *   - Encontrar el segmento consecutivo ascendente más largo
 *   - Mostrar:
 *       - El array original
 *       - El segmento consecutivo más largo
 *       - La cantidad de elementos de ese segmento
 * 
 * - Si no existe ningún segmento consecutivo ascendente:
 *   - Mostrar un mensaje indicando que no se encontraron resultados
 * 
 * ⚠️ Reglas
 * ❌ No usar métodos avanzados (filter, map, reduce, sort, includes, indexOf)
 * ❌ No mezclar lógica con manipulación del DOM dentro de las funciones
 * ❌ No repetir lógica innecesaria
 * ✅ Usar for para recorrer el array
 * ✅ Usar funciones separadas
 * ✅ Usar return correctamente
 * ✅ Las funciones deben recibir el array como parámetro
 * 
 * 🧠 Aclaración importante
 * Un segmento consecutivo ascendente significa que el siguiente número
 * es exactamente 1 unidad mayor que el anterior.
 * 
 * Ejemplo:
 * [3, 4, 5] ✅ válido
 * [7, 8] ✅ válido
 * [2, 4, 5] ❌ no completo
 * [9, 10, 12] ❌ no completo
 * 
 * 💡 Ejemplo 1
 * Entrada: [5, 6, 7, 2, 3, 9, 10, 11]
 * Resultado esperado:
 * - Segmento más largo: [5, 6, 7]
 * - Cantidad: 3
 * 
 * 💡 Ejemplo 2
 * Entrada: [4, 9, 15, 20, 30, 50, 70, 90]
 * Resultado esperado:
 * - No se encontraron segmentos consecutivos ascendentes
 * 
 * 🚀 Bonus (Opcional)
 * - Si hay dos segmentos con la misma longitud, mostrar el primero que apareció
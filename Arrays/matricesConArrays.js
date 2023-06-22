/*
Recibimos una matriz de cadenas de texto. Tenemos que localizar la posición de la palabra "JavaScript" en la matriz y devolver su posición como un array de dos elementos: el índice de la fila y el índice de la columna.

```js
const matrix = [
	['HTML', 'CSS', 'JavaScript'],
	['Java', 'C++', 'Python'],
	['Ruby', 'Go', 'Swift']
]

const position = findJavaScript(matrix)
console.log(position) // -> [0, 2]
```

Si no encuentra la palabra debe devolver [-1, -1]. Usa el siguiente código como punto de partida:
*/

function findJavaScript(matrix) {
	// tu código aquí
	let row = -1
	let col = -1
	for (let i = 0; i < matrix.length; i++) { // filas
		for (let j = 0; j < matrix[0].length; j++) { // columnas
			if (matrix[i][j] === 'JavaScript') {
				row = i
				col = j
			}
		}
	}
	return [row, col]
}

findJavaScript([['HTML', 'CSS', 'JavaScript'], ['Java', 'C++', 'Python'], ['Ruby', 'Go', 'Swift']])
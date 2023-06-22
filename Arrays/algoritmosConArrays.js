/*
En una biblioteca queremos saber qué libro es el que menos páginas tiene y el que más páginas. Por suerte, no hay dos libros con el mismo número de páginas.


Necesitamos que la función reciba un array de números, sin ordenar, y que devuelva un array de dos posiciones con el índice del libro con menos páginas y el índice del libro con más páginas.
*/

function minAndMaxWord(words) {
	// tu código aquí
	let min = words[0]
	let max = words[0]
	for (let word of words) {
		min > word ? min = word : min
		max < word ? max = word : max
	}
	return [words.indexOf(min), words.indexOf(max)]
}

minAndMaxWord([2, 1, 3, 4, 5, 6, 7, 8, 9])
/*
Recibes dos parámetros: una lista de palabras words y una palabra word. Primero, busca el índice de la palabra en la lista. Después, usa ese índice (que será un número) y devuelve todas las palabras de words que sean más largas (length) que el número del índice.
Ten en cuenta que la palabra word siempre existirá en el array, por lo que no es necesario comprobar si existe o no.
*/

function buscaPalabras(words, word) {
	// tu código aquí
	return words.filter(w => w.length > words.indexOf(word))
}

buscaPalabras(['hola', 'adiós', 'casa', 'coche', 'perro', 'gato'], 'coche')
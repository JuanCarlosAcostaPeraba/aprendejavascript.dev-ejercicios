/*
Crear una función que reciba un array de palabras y devuelva true si todas las palabras terminan con la letra "a" y false si al menos una palabra no termina con la letra "a".


Usa el método endsWith() de string para resolverlo.
*/

function acabanEnA(words) {
	// tu código aquí
	const regex = /.*a$/
	return words.every(word => regex.test(word))
}

acabanEnA(['casa', 'asa', 'taza'])
acabanEnA(['casa', 'asa', 'taza', 'coche'])
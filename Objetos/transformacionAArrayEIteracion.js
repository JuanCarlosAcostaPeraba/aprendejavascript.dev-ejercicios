/*
Tienes una función que recibe un objeto como parámetro. La función debe retornar un array con el nombre de las propiedades que su tipo sea boolean.

Por ejemplo, para el objeto { a: true, b: 42, c: false } la función debe retornar ['a', 'c'] ya que son las dos propiedades que tienen valores booleanos.
*/

function getKeysOfBooleanValues(obj) {
	// tu código aquí
	const result = []
	const objEntries = Object.entries(obj)
	objEntries.forEach(e => {
		if (typeof (e[1]) === 'boolean') result.push(e[0])
	})
	return result
}

getKeysOfBooleanValues({ a: true, b: 42, c: false }) // ['a', 'c']
/*
Recibes una lista de números. Debes ordenar los números de menor a mayor según su valor absoluto. Eso quiere decir que los números negativos pierden el signo y se ordenan como si fueran positivos.


Por ejemplo, si recibes [5, -10, -2, -25, -7] deberías devolver [-2, 5, -7, -10, -25].


Puedes usar el método Math.abs(num) para obtener el valor absoluto de un número.
*/

function sortAbsoluteNumbers(numbers) {
	// tu código aquí
	return numbers.sort((a, b) => Math.abs(a) - Math.abs(b))
}

sortAbsoluteNumbers([5, -10, -2, -25, -7])
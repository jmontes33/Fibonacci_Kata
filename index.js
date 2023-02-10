var fib = function(n) {
    const sol = [0, 1]; // Declaración del array que contendrá la secuencia fibonacci.

    for (let i = 2; i<= n; i++) { // Declaración de un For, el cual está iniciado en 2 para así poder acceder a la tercera posición en el array. 
        sol[i] = sol[i -1] + sol[i - 2]; // Introducción del número fibonacci en la secuencia.
    }

    return sol[n] // Retorno del número fibonacci que le hemos pedido.
    
};
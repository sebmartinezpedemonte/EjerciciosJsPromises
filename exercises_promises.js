/*
Ejercicio 1: Crear una llamada asincronica simulando
una espera
*/

function repararAuto1(tiempo){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Auto reparado en ${tiempo} dias.`);
        }, tiempo * 1000);
    });
}

const tiempoAuto = 2;

repararAuto(tiempoAuto)
.then((resultadoAuto) => {
    console.log(resultadoAuto);
})
.catch((error) => {
    console.error("Algo salio mal", error);
});


/*Ejemplo:
function esperar(tiempo) {
return new Promise((resolve) => {
setTimeout(() => {
resolve(`Esperado ${tiempo} ms`);
}, tiempo);
});
}
esperar(2000)
.then((resultado) => {
console.log(resultado);
})
.catch((error) => {
console.error('Error:', error);
});
*/
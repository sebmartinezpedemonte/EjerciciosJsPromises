/*
Ejercicio 2: Modificar el ejercicio 1 con async / await
*/

async function repararAuto(tiempo){
    const resultado = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Auto reparado en ${tiempo} dias.`);
        }, tiempo * 1000)
    });
    console.log(resultado);
}

repararAuto(2);

//Ejemplo
async function esperar(tiempo) {
    const resultado = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Esperado ${tiempo} ms`);
        }, tiempo);
    });

    console.log(resultado);
}

esperar(2000);

/*
function repararAuto(tiempo){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Auto reparado en ${tiempo} dias.`);
        }, tiempo * 1000);
    });
}

const tiempoAuto = 2;

async function repararAutos() {
    try {
        const auto = await repararAuto(tiempoAuto);
        console.log("El auto esta listo.");
        console.log(auto);
    }catch (error){
        console.error("Algo salio mal:", error);
    }
}

repararAutos();
*/


